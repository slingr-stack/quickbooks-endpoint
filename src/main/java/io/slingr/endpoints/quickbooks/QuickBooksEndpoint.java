package io.slingr.endpoints.quickbooks;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.datastores.DataStoreResponse;
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
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

/**
 * QuickBooks endpoint
 * <p/>
 * Created by oazcurra on 31/07/17.
 */
@SlingrEndpoint(name = "quickbooks", functionPrefix = "_")
public class QuickBooksEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(QuickBooksEndpoint.class);

    private static final String QUICKBOOKS_SANDBOX_URL = "https://sandbox-quickbooks.api.intuit.com/v3/company/%s";
    private static final String QUICKBOOKS_PRODUCTION_URL = "https://quickbooks.api.intuit.com/v3/company/%s";
    private static final String QUICKBOOKS_REFRESH_TOKEN_URL = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
    private static final String INTUIT_SIGNATURE = "Intuit-Signature";
    private static final String ALGORITHM = "HmacSHA256";
    private static final String LAST_TOKEN = "_LAST_TOKEN";
    private static final String ID = "_id";
    private static final String TIMESTAMP = "timestamp";
    private static final String REFRESH_TOKEN = "refreshToken";
    private static final String ACCESS_TOKEN = "accessToken";
    private static final String VERIFIER_TOKEN = "verifierToken";

    @EndpointDataStore
    private DataStore tokens;

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

    @Override
    public String getApiUri() {
        if (quickBooksEnvironment.equalsIgnoreCase("PRODUCTION")) {
            return String.format(QUICKBOOKS_PRODUCTION_URL, companyId.trim());
        }
        return String.format(QUICKBOOKS_SANDBOX_URL, companyId.trim());
    }

    @Override
    public void endpointStarted() {
        logger.info("Starting endpoint");
        Json filter = Json.map();
        filter.set(ACCESS_TOKEN, this.accessToken);
        filter.set(REFRESH_TOKEN, this.refreshToken);
        Json lastToken = this.getLastToken();
        DataStoreResponse dsResp = tokens.find(filter);
        if (dsResp != null && dsResp.getItems().size() == 0 || lastToken == null) {
            Json newToken = Json.map();
            newToken.set(ACCESS_TOKEN, this.accessToken);
            newToken.set(REFRESH_TOKEN, this.refreshToken);
            newToken.set(VERIFIER_TOKEN, verifierToken);
            newToken.set(TIMESTAMP, System.currentTimeMillis());
            newToken.set(ID, LAST_TOKEN);
            this.tokens.save(newToken);
        } else {
            this.accessToken = lastToken.string(ACCESS_TOKEN);
            this.refreshToken= lastToken.string(REFRESH_TOKEN);
            this.verifierToken = lastToken.string(VERIFIER_TOKEN);
        }
        httpService().setupBearerAuthenticationHeader(this.accessToken);
        httpService().setupDefaultHeader("Accept", "application/json");
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            try {
                this.refreshQuickBooksToken();
                return defaultGetRequest(request);
            } catch (EndpointException restException2) {
                throw restException;
            }
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            try {
                this.refreshQuickBooksToken();
                return defaultPostRequest(request);
            }
            catch (EndpointException restException2) {
                throw restException;
            }
        }
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        RestMethod method = request.getMethod();
        Object body = request.getBody();
        String rawBody = request.getRawBody();
        String signature = request.getHeader(INTUIT_SIGNATURE);
        if (method.equals(RestMethod.POST) && body != null) {
            if (StringUtils.isBlank(signature)) {
                signature = request.getHeader(INTUIT_SIGNATURE.toLowerCase());
            }
            if (verifyWebHooksSignature(signature, rawBody)) {
                final Json json = HttpService.defaultWebhookConverter(request);
                events().send(HttpService.WEBHOOK_EVENT, json);
            } else {
                appLogger.warn("Webhook was not processed due to invalid signature: "+signature+". Body: "+rawBody);
                return HttpService.defaultWebhookResponse("Invalid signature", 403);
            }
        }
        return HttpService.defaultWebhookResponse();
    }

    private boolean verifyWebHooksSignature(String signature, String payload) {
        if (StringUtils.isBlank(verifierToken)) {
            return true;
        }
        if (signature == null) {
            return false;
        }
        try {
            SecretKeySpec secretKey = new SecretKeySpec(verifierToken.getBytes(StandardCharsets.UTF_8), ALGORITHM);
            Mac mac = Mac.getInstance(ALGORITHM);
            mac.init(secretKey);
            String hash = Base64.getEncoder().encodeToString(mac.doFinal(payload.getBytes()));
            return hash.equals(signature);
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            return false;
        }
    }

    private Json getLastToken() {
        try {
            return this.tokens.findById(LAST_TOKEN);
        } catch (Exception ex) {
            return null;
        }
    }

    private void refreshQuickBooksToken() {
        Json refreshTokenResponse = RestClient.builder(QUICKBOOKS_REFRESH_TOKEN_URL)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .header("Accept", "application/json")
                .basicAuthenticationHeader(clientId, clientSecret)
                .post(new Form().param("grant_type", "refresh_token").param("refresh_token", refreshToken));
        accessToken = refreshTokenResponse.string("access_token");
        refreshToken = refreshTokenResponse.string("refresh_token");
        Json lastToken = this.getLastToken();
        if (lastToken != null) {
            lastToken
                    .set(ACCESS_TOKEN, accessToken)
                    .set(REFRESH_TOKEN, refreshToken)
                    .set(TIMESTAMP, System.currentTimeMillis());
        }
        this.tokens.save(lastToken);
        httpService().setupBearerAuthenticationHeader(this.accessToken);
        httpService().setupDefaultHeader("Accept", "application/json");
    }
}