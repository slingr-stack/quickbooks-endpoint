package io.slingr.endpoints.quickbooks;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.ws.rs.core.Form;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * QuickBooks endpoint
 * <p/>
 * Created by oazcurra on 31/07/17.
 */
@SlingrEndpoint(name = "quickbooks", functionPrefix = "_")
public class QuickBooksEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(QuickBooksEndpoint.class);

    private static final String QUICKBOOKS_SANDBOX_URL = "https://sandbox-quickbooks.api.intuit.com/v3/company/%s/";
    private static final String QUICKBOOKS_PRODUCTION_URL = "https://quickbooks.api.intuit.com/v3/company/%s/";
    private static final String QUICKBOOKS_REFRESH_TOKEN_URL = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
    private static final String INVALID_TOKEN_ERROR = "Bearer realm=\"Intuit\", error=\"invalid_token\"";
    private static final String QUICKBOOKS_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";
    private static final String INTUIT_SIGNATURE = "intuit-signature";
    private static final String ALGORITHM = "HmacSHA256";
    private static final String TOKENS_DATASTORE = "tokens";
    private static final String TOKENS_DATASTORE_ID = "_id";
    private static final String TOKENS_DATASTORE_TIMESTAMP = "timestamp";
    private static final String TOKENS_DATASTORE_REFRESH_TOKEN = "refreshToken";
    private static final String TOKENS_DATASTORE_ACCESS_TOKEN = "accessToken";

    private static final long TOKEN_REFRESH_POLLING_TIME = TimeUnit.MINUTES.toMillis(50);

    @EndpointDataStore(name = TOKENS_DATASTORE)
    private DataStore tokensDataStore;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String companyId;

    @EndpointProperty
    private String quickBooksEnvironment;

    @EndpointProperty
    private String accessToken;

    @EndpointProperty
    private String refreshToken;

    @EndpointProperty
    private String verifierToken;

    private ScheduledExecutorService cleanerExecutor;

    @Override
    public String getApiUri() {
        switch (quickBooksEnvironment.toUpperCase()) {
            case "PRODUCTION":
                return String.format(QUICKBOOKS_PRODUCTION_URL, companyId.trim());
            case "SANDBOX":
            default:
                return String.format(QUICKBOOKS_SANDBOX_URL, companyId.trim());
        }
    }

    @Override
    public void endpointStarted() {
        Json lastToken = getLastToken();
        httpService().setupBearerAuthenticationHeader(lastToken.string(TOKENS_DATASTORE_ACCESS_TOKEN));
        httpService().setupDefaultHeader("Accept", "application/json");

        Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(this::refreshQuickBooksToken, TOKEN_REFRESH_POLLING_TIME, TOKEN_REFRESH_POLLING_TIME, TimeUnit.MILLISECONDS);
    }

    private Json getLastToken() {

        try {
            return tokensDataStore.findById("lastToken");
        } catch (Exception ex) {
            logger.info("Token was not found. Store from settings.");
            Json lastToken = Json.map();
            lastToken.set(TOKENS_DATASTORE_ID, "lastToken");
            lastToken.set(TOKENS_DATASTORE_TIMESTAMP, System.currentTimeMillis());
            lastToken.set(TOKENS_DATASTORE_REFRESH_TOKEN, refreshToken);
            lastToken.set(TOKENS_DATASTORE_ACCESS_TOKEN, accessToken);
            tokensDataStore.save(lastToken);
            logger.info("Using token from data store");
            return lastToken;
        }
    }

    private void refreshQuickBooksToken() {

        Json lastToken = getLastToken();
        String refreshTokenDs = lastToken.string(TOKENS_DATASTORE_REFRESH_TOKEN);

        Form formBody = new Form().param("grant_type", "refresh_token").param("refresh_token", refreshTokenDs);
        Json refreshTokenResponse = RestClient.builder(QUICKBOOKS_REFRESH_TOKEN_URL)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .header("Accept", "application/json")
                .basicAuthenticationHeader(clientId, clientSecret)
                .post(formBody);
        refreshToken = refreshTokenResponse.string("refresh_token");
        accessToken = refreshTokenResponse.string("access_token");
        lastToken.set(TOKENS_DATASTORE_REFRESH_TOKEN, refreshToken);
        lastToken.set(TOKENS_DATASTORE_ACCESS_TOKEN, accessToken);
        tokensDataStore.save(lastToken);
        endpointStarted();
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        if (request.getMethod().equals(RestMethod.POST) && request.getBody() instanceof String) {
            //verifying signature
            if (verifyWebHooksSignature(request.getHeader(INTUIT_SIGNATURE), request.getBody().toString())) {
                // send the webhook event
                final Json json = HttpService.defaultWebhookConverter(request);
                events().send(HttpService.WEBHOOK_EVENT, json);
            }
        }
        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                refreshQuickBooksToken();
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                refreshQuickBooksToken();
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;
            return restException.getAdditionalInfo() != null && restException.getAdditionalInfo().json("headers") != null &&
                    StringUtils.isNotBlank(restException.getAdditionalInfo().json("headers").string("WWW-Authenticate")) &&
                    restException.getAdditionalInfo().json("headers").string("WWW-Authenticate").equals(INVALID_TOKEN_ERROR);
        }
        return false;
    }

    @EndpointFunction(name = "_convertDateToTimestamp")
    public Json convertDateToTimestamp(Json params) throws IllegalArgumentException {
        if (params != null && params.size() > 0) {
            String dateStr = params.string("date");
            if (StringUtils.isEmpty(dateStr)) {
                throw new IllegalArgumentException("Parameter 'date' is required");
            }
            SimpleDateFormat sdf = new SimpleDateFormat(QUICKBOOKS_DATE_FORMAT);
            try {
                Json res = Json.map();
                Date d = sdf.parse(dateStr);
                return res.set("timestamp", d.getTime());
            } catch (ParseException e) {
                throw new IllegalArgumentException(String.format("Parameter '%s' can not be converted.", dateStr));
            }
        }
        return null;
    }

    @EndpointFunction(name = "_formatFromMillis")
    public Json formatFromMillis(Json params) {
        if (params != null && params.size() > 0) {
            long millis = params.longInteger("millis");
            SimpleDateFormat sdf = new SimpleDateFormat(QUICKBOOKS_DATE_FORMAT);
            Json res = Json.map();
            Date d = new Date(millis);
            return res.set("date", sdf.format(d));
        }
        return null;
    }

    private boolean verifyWebHooksSignature(String signature, String payload) {
        if (StringUtils.isBlank(verifierToken)) {
            return true;//we can't verify the signature since the verifier token is not configured
        }
        if (signature == null) {
            return false;
        }
        try {
            SecretKeySpec secretKey = new SecretKeySpec(verifierToken.getBytes("UTF-8"), ALGORITHM);
            Mac mac = Mac.getInstance(ALGORITHM);
            mac.init(secretKey);
            // TODO check if is possible to replace with Base64Utils.encode()
            String hash = Base64.getEncoder().encodeToString(mac.doFinal(payload.getBytes()));
            return hash.equals(signature);
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException | InvalidKeyException e) {
            return false;
        }
    }
}