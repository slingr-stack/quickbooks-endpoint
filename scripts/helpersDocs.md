# Javascript API

The Javascript API of the quickbooks endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET` requests to the [quickbooks API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.quickbooks.post('/batch', body)
var response = app.endpoints.quickbooks.post('/batch')
var response = app.endpoints.quickbooks.get('/reports/:reportType')
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
* API URL: '/account/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.account.get(entityId)
```
---
* API URL: '/account?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.account.update.post(body)
```
---
* API URL: '/attachable'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.post(body)
```
---
* API URL: '/attachable/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.get(entityId)
```
---
* API URL: '/attachable?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.delete.post(body)
```
---
* API URL: '/attachable?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.attachable.update.post(body)
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
* API URL: '/bill/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.bill.get(entityId)
```
---
* API URL: '/bill?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.bill.delete.post(body)
```
---
* API URL: '/bill?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.bill.update.post(body)
```
---
* API URL: '/billpayment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.post(body)
```
---
* API URL: '/billpayment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.get(entityId)
```
---
* API URL: '/billpayment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.delete.post(body)
```
---
* API URL: '/billpayment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.billpayment.update.post(body)
```
---
* API URL: '/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.cdc.get()
```
---
* API URL: '/class'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.class.post(body)
```
---
* API URL: '/class/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.class.get(entityId)
```
---
* API URL: '/class?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.class.update.post(body)
```
---
* API URL: '/companyinfo/:companyId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.companyinfo.get(companyId)
```
---
* API URL: '/creditmemo'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.post(body)
```
---
* API URL: '/creditmemo/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.get(entityId)
```
---
* API URL: '/creditmemo?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.delete.post(body)
```
---
* API URL: '/creditmemo?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.creditmemo.update.post(body)
```
---
* API URL: '/customer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.customer.post(body)
```
---
* API URL: '/customer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.customer.get(entityId)
```
---
* API URL: '/customer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.customer.update.post(body)
```
---
* API URL: '/department'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.department.post(body)
```
---
* API URL: '/department/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.department.get(entityId)
```
---
* API URL: '/department?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.department.update.post(body)
```
---
* API URL: '/deposit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.post(body)
```
---
* API URL: '/deposit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.get(entityId)
```
---
* API URL: '/deposit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.delete.post(body)
```
---
* API URL: '/deposit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.deposit.update.post(body)
```
---
* API URL: '/employee'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.employee.post(body)
```
---
* API URL: '/employee/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.employee.get(entityId)
```
---
* API URL: '/employee?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.employee.update.post(body)
```
---
* API URL: '/estimate'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.post(body)
```
---
* API URL: '/estimate/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.get(entityId)
```
---
* API URL: '/estimate?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.delete.post(body)
```
---
* API URL: '/estimate?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.estimate.update.post(body)
```
---
* API URL: '/invoice'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.post(body)
```
---
* API URL: '/invoice/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.get(entityId)
```
---
* API URL: '/invoice/:entityId/send'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.send.post(entityId, body)
```
---
* API URL: '/invoice?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.delete.post(body)
```
---
* API URL: '/invoice?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.invoice.update.post(body)
```
---
* API URL: '/item'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.item.post(body)
```
---
* API URL: '/item/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.item.get(entityId)
```
---
* API URL: '/item?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.item.update.post(body)
```
---
* API URL: '/journalentry'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.journalentry.post(body)
```
---
* API URL: '/journalentry/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.journalentry.get(entityId)
```
---
* API URL: '/journalentry?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.journalentry.delete.post(body)
```
---
* API URL: '/payment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.post(body)
```
---
* API URL: '/payment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.get(entityId)
```
---
* API URL: '/payment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.delete.post(body)
```
---
* API URL: '/payment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.payment.update.post(body)
```
---
* API URL: '/paymentmethod'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.paymentmethod.post(body)
```
---
* API URL: '/paymentmethod/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.paymentmethod.get(entityId)
```
---
* API URL: '/paymentmethod?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.paymentmethod.update.post(body)
```
---
* API URL: '/preferences'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.preferences.get()
```
---
* API URL: '/preferences?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.preferences.update.post(body)
```
---
* API URL: '/purchase'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.post(body)
```
---
* API URL: '/purchase/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.get(entityId)
```
---
* API URL: '/purchase?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.delete.post(body)
```
---
* API URL: '/purchase?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchase.update.post(body)
```
---
* API URL: '/purchaseorder'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.post(body)
```
---
* API URL: '/purchaseorder/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.get(entityId)
```
---
* API URL: '/purchaseorder?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.delete.post(body)
```
---
* API URL: '/purchaseorder?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.purchaseorder.update.post(body)
```
---
* API URL: '/query?query=' + httpOptions.query.query + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.query.get()
```
---
* API URL: '/refundreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.post(body)
```
---
* API URL: '/refundreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.get(entityId)
```
---
* API URL: '/refundreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.delete.post(body)
```
---
* API URL: '/refundreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.refundreceipt.update.post(body)
```
---
* API URL: '/reports/:reportType'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.reports.get(reportType)
```
---
* API URL: '/salesreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.post(body)
```
---
* API URL: '/salesreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.get(entityId)
```
---
* API URL: '/salesreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.delete.post(body)
```
---
* API URL: '/salesreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.salesreceipt.update.post(body)
```
---
* API URL: '/taxagency'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.taxagency.post(body)
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
* API URL: '/term/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.term.get(entityId)
```
---
* API URL: '/term?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.term.update.post(body)
```
---
* API URL: '/timeactivity'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.post(body)
```
---
* API URL: '/timeactivity/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.get(entityId)
```
---
* API URL: '/timeactivity?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.delete.post(body)
```
---
* API URL: '/timeactivity?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.timeactivity.update.post(body)
```
---
* API URL: '/transfer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.post(body)
```
---
* API URL: '/transfer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.get(entityId)
```
---
* API URL: '/transfer?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.delete.post(body)
```
---
* API URL: '/transfer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.transfer.update.post(body)
```
---
* API URL: '/vendor'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendor.post(body)
```
---
* API URL: '/vendor/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendor.get(entityId)
```
---
* API URL: '/vendor?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendor.update.post(body)
```
---
* API URL: '/vendorcredit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.post(body)
```
---
* API URL: '/vendorcredit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.get(entityId)
```
---
* API URL: '/vendorcredit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.delete.post(body)
```
---
* API URL: '/vendorcredit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
app.endpoints.quickbooks.vendorcredit.update.post(body)
```
---

</details>

