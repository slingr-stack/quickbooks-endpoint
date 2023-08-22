---
title: QuickBooks endpoint
keywords: 
last_updated: May 10, 2023
tags: []
summary: "Detailed description of the API of the QuickBooks endpoint."
---

## Overview

The QuickBooks endpoint allows you to interact with the QuickBooks Account API.

Some futures are:

- Shortcuts for the REST API
- Helpers to convert date times

Apart from helpers you will see that in order to use the REST API of QuickBooks you will be making
regular HTTP request to the REST API. For example:

```js
var res = app.endpoints.quickbooks.get('/account/1');
```

In most cases the provided helpers and events are enough, but if you need to
use the QuickBooks REST API you should go to their documentation for [API explorer](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account).

## Configuration

To obtain the requested fields for configuration you need to log in to your intuit developer account and go to
 [Test connect to app (OAuth)](https://developer.intuit.com/v2/ui#/playground). On this page you need to:

 - Complete the form selecting the app you want to configure on the endpoint.

 - Once you select the app the Client ID and Client Secret fields are being populated. You can copy this values to the endpoint configuration.

 - Select the Scopes (Accounting is the only available for now).

 - Click on Get authorization code and authorize the app.

 - Then click on Get Tokens button.

 - Once you have the Tokens you can start making calls to the API. On this screen you need to access to the step 4 and copy
 the Access Token and the Refresh Token to the endpoint configuration. QuickBooks Online data services support 
 minor versions in order to provide a way for you to access incremental changes without breaking existing apps.

## Webhooks

 In order to use API Web-hooks you need to copy the generated `Webhook URL` to the QuickBooks webhooks app
 configuration. For now, the only supported events are the ones for Account.

 To verify Webhooks request to your endpoint you need to configure the `Webhooks Verifier Token` to make your endpoint
 more secure. This is recommended although is not required. You can find more information about [QuickBooks Webhooks here](https://developer.intuit.com/app/developer/qbo/docs/develop/webhooks)

# Javascript API

The Javascript API of the quickbooks endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET` requests to the [quickbooks API](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) like this:
```javascript
var response = app.endpoints.quickbooks.post('/deposit?operation=update', body)
var response = app.endpoints.quickbooks.post('/deposit?operation=update')
var response = app.endpoints.quickbooks.get('/customer/:entityId')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/account'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.account.post(body)
```
---
* API URL: '/account?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.account.post(body)
```
---
* API URL: '/attachable'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.post(body)
```
---
* API URL: '/attachable?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.attachable.post(body)
```
---
* API URL: '/attachable?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.attachable.post(body)
```
---
* API URL: '/batch'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.batch.post(body)
```
---
* API URL: '/bill'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.bill.post(body)
```
---
* API URL: '/bill?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.bill.post(body)
```
---
* API URL: '/bill?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.bill.post(body)
```
---
* API URL: '/billpayment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.post(body)
```
---
* API URL: '/billpayment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.billpayment.post(body)
```
---
* API URL: '/billpayment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.billpayment.post(body)
```
---
* API URL: '/class'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.class.post(body)
```
---
* API URL: '/class?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.class.post(body)
```
---
* API URL: '/creditmemo'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.post(body)
```
---
* API URL: '/creditmemo?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.creditmemo.post(body)
```
---
* API URL: '/creditmemo?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.creditmemo.post(body)
```
---
* API URL: '/customer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.customer.post(body)
```
---
* API URL: '/customer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.customer.post(body)
```
---
* API URL: '/department'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.department.post(body)
```
---
* API URL: '/department?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.department.post(body)
```
---
* API URL: '/deposit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.post(body)
```
---
* API URL: '/deposit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.deposit.post(body)
```
---
* API URL: '/deposit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.deposit.post(body)
```
---
* API URL: '/employee'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.employee.post(body)
```
---
* API URL: '/employee?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.employee.post(body)
```
---
* API URL: '/estimate'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.post(body)
```
---
* API URL: '/estimate?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.estimate.post(body)
```
---
* API URL: '/estimate?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.estimate.post(body)
```
---
* API URL: '/invoice'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.post(body)
```
---
* API URL: '/invoice?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.invoice.post(body)
```
---
* API URL: '/invoice?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.invoice.post(body)
```
---
* API URL: '/invoice/:entityId/send'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.send.post(entityId, body)
```
---
* API URL: '/item'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.item.post(body)
```
---
* API URL: '/item?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.item.post(body)
```
---
* API URL: '/journalentry'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.journalentry.post(body)
```
---
* API URL: '/journalentry?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.journalentry.post(body)
```
---
* API URL: '/payment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.post(body)
```
---
* API URL: '/payment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.payment.post(body)
```
---
* API URL: '/payment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.payment.post(body)
```
---
* API URL: '/paymentmethod'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.paymentmethod.post(body)
```
---
* API URL: '/paymentmethod?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.paymentmethod.post(body)
```
---
* API URL: '/preferences?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.preferences.post(body)
```
---
* API URL: '/purchase'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.post(body)
```
---
* API URL: '/purchase?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.purchase.post(body)
```
---
* API URL: '/purchase?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.purchase.post(body)
```
---
* API URL: '/purchaseorder'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.post(body)
```
---
* API URL: '/purchaseorder?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.purchaseorder.post(body)
```
---
* API URL: '/purchaseorder?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.purchaseorder.post(body)
```
---
* API URL: '/refundreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.post(body)
```
---
* API URL: '/refundreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.refundreceipt.post(body)
```
---
* API URL: '/refundreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.refundreceipt.post(body)
```
---
* API URL: '/salesreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.post(body)
```
---
* API URL: '/salesreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.salesreceipt.post(body)
```
---
* API URL: '/salesreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.salesreceipt.post(body)
```
---
* API URL: '/taxagency'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxagency.post(body)
```
---
* API URL: '/taxservice/taxcode'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxservice.taxcode.post(body)
```
---
* API URL: '/term'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.term.post(body)
```
---
* API URL: '/term?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.term.post(body)
```
---
* API URL: '/timeactivity'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.post(body)
```
---
* API URL: '/timeactivity?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.timeactivity.post(body)
```
---
* API URL: '/timeactivity?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.timeactivity.post(body)
```
---
* API URL: '/transfer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.post(body)
```
---
* API URL: '/transfer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.transfer.post(body)
```
---
* API URL: '/transfer?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.transfer.post(body)
```
---
* API URL: '/vendor'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendor.post(body)
```
---
* API URL: '/vendor?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.vendor.post(body)
```
---
* API URL: '/vendorcredit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.post(body)
```
---
* API URL: '/vendorcredit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.update.vendorcredit.post(body)
```
---
* API URL: '/vendorcredit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.del.vendorcredit.post(body)
```
---
* API URL: '/account/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.account.get(entityId)
```
---
* API URL: '/query?query=' + httpOptions.query.query + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.query.get()
```
---
* API URL: '/attachable/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.get(entityId)
```
---
* API URL: '/bill/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.bill.get(entityId)
```
---
* API URL: '/billpayment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.get(entityId)
```
---
* API URL: '/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.cdc.get()
```
---
* API URL: '/class/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.class.get(entityId)
```
---
* API URL: '/companyinfo/:companyId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.companyinfo.get(companyId)
```
---
* API URL: '/creditmemo/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.get(entityId)
```
---
* API URL: '/customer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.customer.get(entityId)
```
---
* API URL: '/department/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.department.get(entityId)
```
---
* API URL: '/deposit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.get(entityId)
```
---
* API URL: '/employee/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.employee.get(entityId)
```
---
* API URL: '/estimate/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.get(entityId)
```
---
* API URL: '/invoice/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.get(entityId)
```
---
* API URL: '/item/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.item.get(entityId)
```
---
* API URL: '/journalentry/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.journalentry.get(entityId)
```
---
* API URL: '/payment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.get(entityId)
```
---
* API URL: '/paymentmethod/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.paymentmethod.get(entityId)
```
---
* API URL: '/preferences'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.preferences.get()
```
---
* API URL: '/purchase/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.get(entityId)
```
---
* API URL: '/purchaseorder/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.get(entityId)
```
---
* API URL: '/refundreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.get(entityId)
```
---
* API URL: '/reports/:reportType'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.reports.get(reportType)
```
---
* API URL: '/salesreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.get(entityId)
```
---
* API URL: '/taxagency/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxagency.get(entityId)
```
---
* API URL: '/taxcode/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxcode.get(entityId)
```
---
* API URL: '/taxrate/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxrate.get(entityId)
```
---
* API URL: '/term/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.term.get(entityId)
```
---
* API URL: '/timeactivity/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.get(entityId)
```
---
* API URL: '/transfer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.get(entityId)
```
---
* API URL: '/vendor/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendor.get(entityId)
```
---
* API URL: '/vendorcredit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.get(entityId)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,GET</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/account<br>/account?operation=update<br>/attachable<br>/attachable?operation=update<br>/attachable?operation=delete<br>/batch<br>/bill<br>/bill?operation=update<br>/bill?operation=delete<br>/billpayment<br>/billpayment?operation=update<br>/billpayment?operation=delete<br>/class<br>/class?operation=update<br>/creditmemo<br>/creditmemo?operation=update<br>/creditmemo?operation=delete<br>/customer<br>/customer?operation=update<br>/department<br>/department?operation=update<br>/deposit<br>/deposit?operation=update<br>/deposit?operation=delete<br>/employee<br>/employee?operation=update<br>/estimate<br>/estimate?operation=update<br>/estimate?operation=delete<br>/invoice<br>/invoice?operation=update<br>/invoice?operation=delete<br>/invoice/{entityId}/send<br>/item<br>/item?operation=update<br>/journalentry<br>/journalentry?operation=delete<br>/payment<br>/payment?operation=update<br>/payment?operation=delete<br>/paymentmethod<br>/paymentmethod?operation=update<br>/preferences?operation=update<br>/purchase<br>/purchase?operation=update<br>/purchase?operation=delete<br>/purchaseorder<br>/purchaseorder?operation=update<br>/purchaseorder?operation=delete<br>/refundreceipt<br>/refundreceipt?operation=update<br>/refundreceipt?operation=delete<br>/salesreceipt<br>/salesreceipt?operation=update<br>/salesreceipt?operation=delete<br>/taxagency<br>/taxservice/taxcode<br>/term<br>/term?operation=update<br>/timeactivity<br>/timeactivity?operation=update<br>/timeactivity?operation=delete<br>/transfer<br>/transfer?operation=update<br>/transfer?operation=delete<br>/vendor<br>/vendor?operation=update<br>/vendorcredit<br>/vendorcredit?operation=update<br>/vendorcredit?operation=delete<br>/account/{entityId}<br>/query?query=' + httpOptions.query.query + '<br>/attachable/{entityId}<br>/bill/{entityId}<br>/billpayment/{entityId}<br>/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + '<br>/class/{entityId}<br>/companyinfo/{companyId}<br>/creditmemo/{entityId}<br>/customer/{entityId}<br>/department/{entityId}<br>/deposit/{entityId}<br>/employee/{entityId}<br>/estimate/{entityId}<br>/invoice/{entityId}<br>/item/{entityId}<br>/journalentry/{entityId}<br>/payment/{entityId}<br>/paymentmethod/{entityId}<br>/preferences<br>/purchase/{entityId}<br>/purchaseorder/{entityId}<br>/refundreceipt/{entityId}<br>/reports/{reportType}<br>/salesreceipt/{entityId}<br>/taxagency/{entityId}<br>/taxcode/{entityId}<br>/taxrate/{entityId}<br>/term/{entityId}<br>/timeactivity/{entityId}<br>/transfer/{entityId}<br>/vendor/{entityId}<br>/vendorcredit/{entityId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Create Account

This step allow you to create a new account in the system of quickbook accounting.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Name</td>
        <td>text</td>
        <td>yes</td>
        <td></td>
        <td> Allways </td>
        <td> Name for the account </td>
    </tr>
    <tr>
        <td>Account Type</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the Account Type required by Quickbook. <br>
            Possible values are: <br>
            <i><strong>Bank, Other Current Asset, Fixed Asset, Other Asset, Accounts Receivable</strong></i>
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>



### Create Costumer

This step allow you to create a new costumer in the system of quickbook accounting.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Display Name</td>
        <td>text</td>
        <td>yes</td>
        <td></td>
        <td> Always </td>
        <td> Name to display for the costumer </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>



### Get All Bills

This step allow you to obtain all the bills from the system of quickbook accounting.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
