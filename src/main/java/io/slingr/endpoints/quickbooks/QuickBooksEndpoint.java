package io.slingr.endpoints.quickbooks;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
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
    private static final String INVALID_TOKEN_ERROR = "Bearer realm=\"Intuit\", error=\"invalid_token\"";
    private static final String QUICKBOOKS_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";
    private static final String INTUIT_SIGNATURE = "Intuit-Signature";
    private static final String ALGORITHM = "HmacSHA256";

    private static final long TOKEN_REFRESH_POLLING_TIME = TimeUnit.MINUTES.toMillis(50);

    @EndpointDataStore(name = TokenManager.DATA_STORE)
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

    @ApplicationLogger
    private AppLogs appLogger;

    private ScheduledExecutorService cleanerExecutor;

    private TokenManager tokenManager;

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

        this.tokenManager = new TokenManager(httpService(), tokensDataStore, clientId, clientSecret, accessToken, refreshToken, verifierToken);
        httpService().setAllowExternalUrl(true);

        Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(tokenManager::refreshQuickBooksToken, TOKEN_REFRESH_POLLING_TIME, TOKEN_REFRESH_POLLING_TIME, TimeUnit.MILLISECONDS);
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        if (request.getMethod().equals(RestMethod.POST) && request.getBody() != null) {
            // verifying signature
            String signature = request.getHeader(INTUIT_SIGNATURE);
            if (StringUtils.isBlank(signature)) {
                // try to get signature using lower case as sometimes it seems to come like this
                signature = request.getHeader(INTUIT_SIGNATURE.toLowerCase());
            }
            if (verifyWebHooksSignature(signature, request.getRawBody())) {
                // send the webhook event
                final Json json = HttpService.defaultWebhookConverter(request);
                events().send(HttpService.WEBHOOK_EVENT, json);
            } else {
                appLogger.warn("Webhook was not processed due to invalid signature: "+signature+". Body: "+request.getRawBody());
                return HttpService.defaultWebhookResponse("Invalid signature", 403);
            }
        }
        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            logger.info("Processing POST request...");
            Json response = defaultPostRequest(request);
            logger.info("POST request processed successfully.");
            return response;
        } catch (EndpointException restException) {
            logger.error("Error occurred while processing POST request: {}", restException.getMessage(), restException);
            if (checkInvalidTokenError(restException)) {
                tokenManager.refreshQuickBooksToken();
                logger.info("Retrying POST request after token refresh...");
                return defaultPostRequest(request);
            }
            // Rethrow the exception
            throw restException;
        }
    }

    public Json get(FunctionRequest request) {
        try {
            logger.info("Processing GET request...");
            Json response = defaultGetRequest(request);
            logger.info("GET request processed successfully.");
            return response;
        } catch (EndpointException restException) {
            logger.error("Error occurred while processing GET request: {}", restException.getMessage(), restException);
            if (checkInvalidTokenError(restException)) {
                tokenManager.refreshQuickBooksToken();
                logger.info("Retrying GET request after token refresh...");
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