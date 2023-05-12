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

endpoint.update = {};

endpoint.update.account = {};

endpoint.query = {};

endpoint.attachable = {};

endpoint.update.attachable = {};

endpoint.del = {};

endpoint.del.attachable = {};

endpoint.batch = {};

endpoint.bill = {};

endpoint.update.bill = {};

endpoint.del.bill = {};

endpoint.billpayment = {};

endpoint.update.billpayment = {};

endpoint.del.billpayment = {};

endpoint.cdc = {};

endpoint.class = {};

endpoint.update.class = {};

endpoint.companyinfo = {};

endpoint.creditmemo = {};

endpoint.update.creditmemo = {};

endpoint.del.creditmemo = {};

endpoint.customer = {};

endpoint.update.customer = {};

endpoint.department = {};

endpoint.update.department = {};

endpoint.deposit = {};

endpoint.update.deposit = {};

endpoint.del.deposit = {};

endpoint.employee = {};

endpoint.update.employee = {};

endpoint.estimate = {};

endpoint.update.estimate = {};

endpoint.del.estimate = {};

endpoint.invoice = {};

endpoint.update.invoice = {};

endpoint.del.invoice = {};

endpoint.invoice.send = {};

endpoint.item = {};

endpoint.update.item = {};

endpoint.journalentry = {};

endpoint.del.journalentry = {};

endpoint.payment = {};

endpoint.update.payment = {};

endpoint.del.payment = {};

endpoint.paymentmethod = {};

endpoint.update.paymentmethod = {};

endpoint.preferences = {};

endpoint.update.preferences = {};

endpoint.purchase = {};

endpoint.update.purchase = {};

endpoint.del.purchase = {};

endpoint.purchaseorder = {};

endpoint.update.purchaseorder = {};

endpoint.del.purchaseorder = {};

endpoint.refundreceipt = {};

endpoint.update.refundreceipt = {};

endpoint.del.refundreceipt = {};

endpoint.reports = {};

endpoint.salesreceipt = {};

endpoint.update.salesreceipt = {};

endpoint.del.salesreceipt = {};

endpoint.taxagency = {};

endpoint.taxcode = {};

endpoint.taxrate = {};

endpoint.taxservice = {};

endpoint.taxservice.taxcode = {};

endpoint.term = {};

endpoint.update.term = {};

endpoint.timeactivity = {};

endpoint.update.timeactivity = {};

endpoint.del.timeactivity = {};

endpoint.transfer = {};

endpoint.update.transfer = {};

endpoint.del.transfer = {};

endpoint.vendor = {};

endpoint.update.vendor = {};

endpoint.vendorcredit = {};

endpoint.update.vendorcredit = {};

endpoint.del.vendorcredit = {};

endpoint.account.post = function(httpOptions) {
    var url = parse('/account');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.update.account.post = function(httpOptions) {
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
    var url = parse('/query?query=' + httpOptions.query.query == null?  + '');
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

endpoint.update.attachable.post = function(httpOptions) {
    var url = parse('/attachable?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.attachable.post = function(httpOptions) {
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

endpoint.update.bill.post = function(httpOptions) {
    var url = parse('/bill?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.bill.post = function(httpOptions) {
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

endpoint.update.billpayment.post = function(httpOptions) {
    var url = parse('/billpayment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.billpayment.post = function(httpOptions) {
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

endpoint.update.class.post = function(httpOptions) {
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

endpoint.update.creditmemo.post = function(httpOptions) {
    var url = parse('/creditmemo?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.creditmemo.post = function(httpOptions) {
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

endpoint.update.customer.post = function(httpOptions) {
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

endpoint.update.department.post = function(httpOptions) {
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

endpoint.update.deposit.post = function(httpOptions) {
    var url = parse('/deposit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.deposit.post = function(httpOptions) {
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

endpoint.update.employee.post = function(httpOptions) {
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

endpoint.update.estimate.post = function(httpOptions) {
    var url = parse('/estimate?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.estimate.post = function(httpOptions) {
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

endpoint.update.invoice.post = function(httpOptions) {
    var url = parse('/invoice?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.invoice.post = function(httpOptions) {
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

endpoint.update.item.post = function(httpOptions) {
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

endpoint.del.journalentry.post = function(httpOptions) {
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

endpoint.update.payment.post = function(httpOptions) {
    var url = parse('/payment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.payment.post = function(httpOptions) {
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

endpoint.update.paymentmethod.post = function(httpOptions) {
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

endpoint.update.preferences.post = function(httpOptions) {
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

endpoint.update.purchase.post = function(httpOptions) {
    var url = parse('/purchase?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.purchase.post = function(httpOptions) {
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

endpoint.update.purchaseorder.post = function(httpOptions) {
    var url = parse('/purchaseorder?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.purchaseorder.post = function(httpOptions) {
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

endpoint.update.refundreceipt.post = function(httpOptions) {
    var url = parse('/refundreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.refundreceipt.post = function(httpOptions) {
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

endpoint.update.salesreceipt.post = function(httpOptions) {
    var url = parse('/salesreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.salesreceipt.post = function(httpOptions) {
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

endpoint.update.term.post = function(httpOptions) {
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

endpoint.update.timeactivity.post = function(httpOptions) {
    var url = parse('/timeactivity?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.timeactivity.post = function(httpOptions) {
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

endpoint.update.transfer.post = function(httpOptions) {
    var url = parse('/transfer?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.transfer.post = function(httpOptions) {
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

endpoint.update.vendor.post = function(httpOptions) {
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

endpoint.update.vendorcredit.post = function(httpOptions) {
    var url = parse('/vendorcredit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.del.vendorcredit.post = function(httpOptions) {
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
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
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