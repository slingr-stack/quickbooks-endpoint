////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.account = {};

endpoint.account.update = {};

endpoint.query = {};

endpoint.attachable = {};

endpoint.attachable.update = {};

endpoint.attachable.delete = {};

endpoint.batch = {};

endpoint.bill = {};

endpoint.bill.update = {};

endpoint.bill.delete = {};

endpoint.billpayment = {};

endpoint.billpayment.update = {};

endpoint.billpayment.delete = {};

endpoint.cdc = {};

endpoint.class = {};

endpoint.class.update = {};

endpoint.companyinfo = {};

endpoint.creditmemo = {};

endpoint.creditmemo.update = {};

endpoint.creditmemo.delete = {};

endpoint.customer = {};

endpoint.customer.update = {};

endpoint.department = {};

endpoint.department.update = {};

endpoint.deposit = {};

endpoint.deposit.update = {};

endpoint.deposit.delete = {};

endpoint.employee = {};

endpoint.employee.update = {};

endpoint.estimate = {};

endpoint.estimate.update = {};

endpoint.estimate.delete = {};

endpoint.invoice = {};

endpoint.invoice.update = {};

endpoint.invoice.delete = {};

endpoint.invoice.send = {};

endpoint.item = {};

endpoint.item.update = {};

endpoint.journalentry = {};

endpoint.journalentry.delete = {};

endpoint.payment = {};

endpoint.payment.update = {};

endpoint.payment.delete = {};

endpoint.paymentmethod = {};

endpoint.paymentmethod.update = {};

endpoint.preferences = {};

endpoint.preferences.update = {};

endpoint.purchase = {};

endpoint.purchase.update = {};

endpoint.purchase.delete = {};

endpoint.purchaseorder = {};

endpoint.purchaseorder.update = {};

endpoint.purchaseorder.delete = {};

endpoint.refundreceipt = {};

endpoint.refundreceipt.update = {};

endpoint.refundreceipt.delete = {};

endpoint.reports = {};

endpoint.salesreceipt = {};

endpoint.salesreceipt.update = {};

endpoint.salesreceipt.delete = {};

endpoint.taxagency = {};

endpoint.taxcode = {};

endpoint.taxrate = {};

endpoint.taxservice = {};

endpoint.taxservice.taxcode = {};

endpoint.term = {};

endpoint.term.update = {};

endpoint.timeactivity = {};

endpoint.timeactivity.update = {};

endpoint.timeactivity.delete = {};

endpoint.transfer = {};

endpoint.transfer.update = {};

endpoint.transfer.delete = {};

endpoint.vendor = {};

endpoint.vendor.update = {};

endpoint.vendorcredit = {};

endpoint.vendorcredit.update = {};

endpoint.vendorcredit.delete = {};

endpoint.account.post = function(httpOptions) {
    var url = parse('/account');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.account.update.post = function(httpOptions) {
    var url = parse('/account?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.account.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/account/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.query.get = function(httpOptions) {
    var url = parse('/query?query=' + httpOptions.query.query + '');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.attachable.post = function(httpOptions) {
    var url = parse('/attachable');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.attachable.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/attachable/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.attachable.update.post = function(httpOptions) {
    var url = parse('/attachable?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.attachable.delete.post = function(httpOptions) {
    var url = parse('/attachable?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batch.post = function(httpOptions) {
    var url = parse('/batch');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bill.post = function(httpOptions) {
    var url = parse('/bill');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bill.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/bill/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.bill.update.post = function(httpOptions) {
    var url = parse('/bill?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bill.delete.post = function(httpOptions) {
    var url = parse('/bill?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.billpayment.post = function(httpOptions) {
    var url = parse('/billpayment');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.billpayment.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/billpayment/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.billpayment.update.post = function(httpOptions) {
    var url = parse('/billpayment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.billpayment.delete.post = function(httpOptions) {
    var url = parse('/billpayment?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.cdc.get = function(httpOptions) {
    var url = parse('/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + '');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.class.post = function(httpOptions) {
    var url = parse('/class');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.class.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/class/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.class.update.post = function(httpOptions) {
    var url = parse('/class?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.companyinfo.get = function(companyId, httpOptions) {
    if (!companyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [companyId].');
        return;
    }
    var url = parse('/companyinfo/:companyId', [companyId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.creditmemo.post = function(httpOptions) {
    var url = parse('/creditmemo');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.creditmemo.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/creditmemo/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.creditmemo.update.post = function(httpOptions) {
    var url = parse('/creditmemo?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.creditmemo.delete.post = function(httpOptions) {
    var url = parse('/creditmemo?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.customer.post = function(httpOptions) {
    var url = parse('/customer');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.customer.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/customer/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.customer.update.post = function(httpOptions) {
    var url = parse('/customer?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.department.post = function(httpOptions) {
    var url = parse('/department');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.department.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/department/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.department.update.post = function(httpOptions) {
    var url = parse('/department?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.deposit.post = function(httpOptions) {
    var url = parse('/deposit');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.deposit.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/deposit/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.deposit.update.post = function(httpOptions) {
    var url = parse('/deposit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.deposit.delete.post = function(httpOptions) {
    var url = parse('/deposit?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.employee.post = function(httpOptions) {
    var url = parse('/employee');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.employee.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/employee/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.employee.update.post = function(httpOptions) {
    var url = parse('/employee?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.estimate.post = function(httpOptions) {
    var url = parse('/estimate');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.estimate.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/estimate/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.estimate.update.post = function(httpOptions) {
    var url = parse('/estimate?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.estimate.delete.post = function(httpOptions) {
    var url = parse('/estimate?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoice.post = function(httpOptions) {
    var url = parse('/invoice');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoice.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/invoice/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.invoice.update.post = function(httpOptions) {
    var url = parse('/invoice?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoice.delete.post = function(httpOptions) {
    var url = parse('/invoice?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoice.send.post = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/invoice/:entityId/send', [entityId]);
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.item.post = function(httpOptions) {
    var url = parse('/item');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.item.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/item/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.item.update.post = function(httpOptions) {
    var url = parse('/item?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.journalentry.post = function(httpOptions) {
    var url = parse('/journalentry');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.journalentry.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/journalentry/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.journalentry.delete.post = function(httpOptions) {
    var url = parse('/journalentry?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.payment.post = function(httpOptions) {
    var url = parse('/payment');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.payment.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/payment/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.payment.update.post = function(httpOptions) {
    var url = parse('/payment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.payment.delete.post = function(httpOptions) {
    var url = parse('/payment?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.paymentmethod.post = function(httpOptions) {
    var url = parse('/paymentmethod');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.paymentmethod.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/paymentmethod/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.paymentmethod.update.post = function(httpOptions) {
    var url = parse('/paymentmethod?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.preferences.get = function(httpOptions) {
    var url = parse('/preferences');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.preferences.update.post = function(httpOptions) {
    var url = parse('/preferences?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchase.post = function(httpOptions) {
    var url = parse('/purchase');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchase.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/purchase/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.purchase.update.post = function(httpOptions) {
    var url = parse('/purchase?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchase.delete.post = function(httpOptions) {
    var url = parse('/purchase?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchaseorder.post = function(httpOptions) {
    var url = parse('/purchaseorder');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchaseorder.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/purchaseorder/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.purchaseorder.update.post = function(httpOptions) {
    var url = parse('/purchaseorder?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.purchaseorder.delete.post = function(httpOptions) {
    var url = parse('/purchaseorder?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.refundreceipt.post = function(httpOptions) {
    var url = parse('/refundreceipt');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.refundreceipt.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/refundreceipt/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.refundreceipt.update.post = function(httpOptions) {
    var url = parse('/refundreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.refundreceipt.delete.post = function(httpOptions) {
    var url = parse('/refundreceipt?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.reports.get = function(reportType, httpOptions) {
    if (!reportType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reportType].');
        return;
    }
    var url = parse('/reports/:reportType', [reportType]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.salesreceipt.post = function(httpOptions) {
    var url = parse('/salesreceipt');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.salesreceipt.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/salesreceipt/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.salesreceipt.update.post = function(httpOptions) {
    var url = parse('/salesreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.salesreceipt.delete.post = function(httpOptions) {
    var url = parse('/salesreceipt?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.taxagency.post = function(httpOptions) {
    var url = parse('/taxagency');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.taxagency.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxagency/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.taxcode.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxcode/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.taxrate.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxrate/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.taxservice.taxcode.post = function(httpOptions) {
    var url = parse('/taxservice/taxcode');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.term.post = function(httpOptions) {
    var url = parse('/term');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.term.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/term/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.term.update.post = function(httpOptions) {
    var url = parse('/term?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.timeactivity.post = function(httpOptions) {
    var url = parse('/timeactivity');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.timeactivity.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/timeactivity/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.timeactivity.update.post = function(httpOptions) {
    var url = parse('/timeactivity?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.timeactivity.delete.post = function(httpOptions) {
    var url = parse('/timeactivity?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.transfer.post = function(httpOptions) {
    var url = parse('/transfer');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.transfer.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/transfer/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.transfer.update.post = function(httpOptions) {
    var url = parse('/transfer?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.transfer.delete.post = function(httpOptions) {
    var url = parse('/transfer?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.vendor.post = function(httpOptions) {
    var url = parse('/vendor');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.vendor.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/vendor/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.vendor.update.post = function(httpOptions) {
    var url = parse('/vendor?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.vendorcredit.post = function(httpOptions) {
    var url = parse('/vendorcredit');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.vendorcredit.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/vendorcredit/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.vendorcredit.update.post = function(httpOptions) {
    var url = parse('/vendorcredit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.vendorcredit.delete.post = function(httpOptions) {
    var url = parse('/vendorcredit?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}