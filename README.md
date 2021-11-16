---
title: QuickBooks endpoint
keywords: 
last_updated: August 09, 2017
tags: []
summary: "Detailed description of the API of the QuickBooks endpoint."
---

## Overview

The QuickBooks endpoint allows you to interact with the QuickBooks Account API.

Some of the futures are:

- Shortcuts for the REST API
- Helpers to convert date times

Apart from helpers you will see that in order to use the REST API of QuickBooks you will be making
regular HTTP request to the REST API. For example:

```js
var res = app.endpoints.quickbooks.get('account/1');
```

In most cases the provided helpers and events are enough, but if you need to
use the QuickBooks REST API you should go to their documentation for [API explorer](https://developer.intuit.com/v2/apiexplorer?apiname=V3QBO)
 and [accounting](https://developer.intuit.com/docs/api/accounting).

## Configuration

To obtain the requested fields for configuration you need to log in to your intuit developer account and go to
 [Test connect to app (OAuth)](https://developer.intuit.com/v2/ui#/playground). On this page you need to:

 - Complete the form selecting the app you want to configure on the endpoint.

 - Once you select the app the Client ID and Client Secret fields are being populated. You can copy this values to the endpoint configuration.

 - Select the Scopes (Accounting is the only available for now).

 - Click on Get authorization code and authorize the app.

 - Then click on Get Tokens button.

 - Once you have the Tokens you can start making calls to the API. On this screen you need to access to the step 4 and copy
 the Access Token, the Refresh Token and Minor Version to the endpoint configuration. QuickBooks Online data services support 
 minor versions in order to provide a way for you to access incremental changes without breaking existing apps.

## Webhooks

 In order to use API Web-hooks you need to copy the generated `Webhook URL` to the QuickBooks webhooks app
 configuration. For now, the only supported events are the ones for Account.

 To verify Webhooks request to your endpoint you need to configure the `Webhooks Verifier Token` to make your endpoint
 more secure. This is recommended although is not required. You can find more information about [QuickBooks Webhooks here](https://developer.intuit.com/docs/0100_quickbooks_online/0300_references/0000_programming_guide/0020_webhooks)

## Javascript API

The Javascript API provides direct access to the QuickBook Accounting API so you can make regular HTTP
request. 

Additionally the endpoint provides some helpers as well as some utilities to convert date times.

### HTTP requests

You can make `GET` and `POST` request to the
[QuickBooks Accounting API](https://developer.intuit.com/v2/apiexplorer?apiname=V3QBO) like this:

```js
var accountsCounter = app.endpoints.quickbooks.get("query?query=SELECT COUNT(*)FROM Account");//using a generic GET
var accountsCounter = app.endpoints.quickbooks.account.query("SELECT COUNT(*)FROM Account");//using the shortcut helper
```

In addition to the API helpers you can query the API using a generic query function that is provided by
the endpoint:

```js
var accountsCounter = app.endpoints.quickbooks.query("SELECT COUNT(*)FROM Account");//using the endpoint shortcut helper
```


Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts Helpers

Instead of having to use the generic HTTP methods, you can use the methods in the endpoint API following [QuickBooks API conventions](https://developer.intuit.com/v2/apiexplorer?apiname=V3QBO)
 like this:


- **QuickBooks > Account > Create** became `app.endpoints.quickbooks.account.create(newAccount)`
- **QuickBooks > Attachable > Read** became `app.endpoints.quickbooks.attachable.read('1')`

## Date Helpers

QuickBooks date use following format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`

- **endpoint.dates.toMillis** given string with format return timestamp. `app.endpoints.quickbooks.dates.toMillis('2017-07-19T13:12:56+00:00')`
- **endpoint.dates.toDate** given string with format return date date. `app.endpoints.quickbooks.dates.toDate('2017-07-19T13:12:56+00:00')`
- **endpoint.dates.fromMillis** given milliseconds return string with format. `app.endpoints.quickbooks.dates.fromMillis(1500469976000)`
- **endpoint.dates.fromDate** given a date return string with format. `app.endpoints.quickbooks.dates.fromDate(new Date())`

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.




