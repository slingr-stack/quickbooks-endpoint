////////////////////////////////////////////////////////////////////////////
//                                                                        //
//  This file is generated with quickbooks/gen/gen-quickbooks-helpers.js  //
//                                                                        //
//  Public API - Account functions                                        //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"post": {
		"account.create": {
			"0": "account"
		},
		"account.update": {
			"0": "account?operation=update"
		},
		"attachable.create": {
			"0": "attachable"
		},
		"attachable.update": {
			"0": "attachable?operation=update"
		},
		"attachable.delete": {
			"0": "attachable?operation=delete"
		},
		"batch.batchRequest": {
			"0": "batch"
		},
		"bill.create": {
			"0": "bill"
		},
		"bill.update": {
			"0": "bill?operation=update"
		},
		"bill.delete": {
			"0": "bill?operation=delete"
		},
		"billPayment.create": {
			"0": "billpayment"
		},
		"billPayment.update": {
			"0": "billpayment?operation=update"
		},
		"billPayment.delete": {
			"0": "billpayment?operation=delete"
		},
		"class.create": {
			"0": "class"
		},
		"class.update": {
			"0": "class?operation=update"
		},
		"creditMemo.create": {
			"0": "creditmemo"
		},
		"creditMemo.update": {
			"0": "creditmemo?operation=update"
		},
		"creditMemo.delete": {
			"0": "creditmemo?operation=delete"
		},
		"customer.create": {
			"0": "customer"
		},
		"customer.update": {
			"0": "customer?operation=update"
		},
		"department.create": {
			"0": "department"
		},
		"department.update": {
			"0": "department?operation=update"
		},
		"deposit.create": {
			"0": "deposit"
		},
		"deposit.update": {
			"0": "deposit?operation=update"
		},
		"deposit.delete": {
			"0": "deposit?operation=delete"
		},
		"employee.create": {
			"0": "employee"
		},
		"employee.update": {
			"0": "employee?operation=update"
		},
		"estimate.create": {
			"0": "estimate"
		},
		"estimate.update": {
			"0": "estimate?operation=update"
		},
		"estimate.delete": {
			"0": "estimate?operation=delete"
		},
		"invoice.create": {
			"0": "invoice"
		},
		"invoice.update": {
			"0": "invoice?operation=update"
		},
		"invoice.delete": {
			"0": "invoice?operation=delete"
		},
		"invoice.send": {
			"2": "invoice/:entityId/send?sentTo=:emailAddress"
		},
		"item.create": {
			"0": "item"
		},
		"item.update": {
			"0": "item?operation=update"
		},
		"journalEntry.create": {
			"0": "journalentry"
		},
		"journalEntry.update": {
			"0": "deposit?operation=update"
		},
		"journalEntry.delete": {
			"0": "journalentry?operation=delete"
		},
		"payment.create": {
			"0": "payment"
		},
		"payment.update": {
			"0": "payment?operation=update"
		},
		"payment.delete": {
			"0": "payment?operation=delete"
		},
		"paymentMethod.create": {
			"0": "paymentmethod"
		},
		"paymentMethod.update": {
			"0": "paymentmethod?operation=update"
		},
		"preferences.update": {
			"0": "preferences?operation=update"
		},
		"purchase.create": {
			"0": "purchase"
		},
		"purchase.update": {
			"0": "purchase?operation=update"
		},
		"purchase.delete": {
			"0": "purchase?operation=delete"
		},
		"purchaseOrder.create": {
			"0": "purchaseorder"
		},
		"purchaseOrder.update": {
			"0": "purchaseorder?operation=update"
		},
		"purchaseOrder.delete": {
			"0": "purchaseorder?operation=delete"
		},
		"refundReceipt.create": {
			"0": "refundreceipt"
		},
		"refundReceipt.update": {
			"0": "refundreceipt?operation=update"
		},
		"refundReceipt.delete": {
			"0": "refundreceipt?operation=delete"
		},
		"salesReceipt.create": {
			"0": "salesreceipt"
		},
		"salesReceipt.update": {
			"0": "salesreceipt?operation=update"
		},
		"salesReceipt.delete": {
			"0": "salesreceipt?operation=delete"
		},
		"taxAgency.create": {
			"0": "taxagency"
		},
		"taxService.create": {
			"0": "taxservice/taxcode"
		},
		"term.create": {
			"0": "term"
		},
		"term.update": {
			"0": "term?operation=update"
		},
		"timeActivity.create": {
			"0": "timeactivity"
		},
		"timeActivity.update": {
			"0": "timeactivity?operation=update"
		},
		"timeActivity.delete": {
			"0": "timeactivity?operation=delete"
		},
		"transfer.create": {
			"0": "transfer"
		},
		"transfer.update": {
			"0": "transfer?operation=update"
		},
		"transfer.delete": {
			"0": "transfer?operation=delete"
		},
		"vendor.create": {
			"0": "vendor"
		},
		"vendor.update": {
			"0": "vendor?operation=update"
		},
		"vendorCredit.create": {
			"0": "vendorcredit"
		},
		"vendorCredit.update": {
			"0": "vendorcredit?operation=update"
		},
		"vendorCredit.delete": {
			"0": "vendorcredit?operation=delete"
		}
	},
	"get": {
		"account.read": {
			"1": "account/:entityId"
		},
		"account.query": {
			"1": "query?query=:query"
		},
		"attachable.read": {
			"1": "attachable/:entityId"
		},
		"attachable.query": {
			"1": "query?query=:query"
		},
		"bill.read": {
			"1": "bill/:entityId"
		},
		"bill.query": {
			"1": "query?query=:query"
		},
		"billPayment.read": {
			"1": "billpayment/:entityId"
		},
		"billPayment.query": {
			"1": "query?query=:query"
		},
		"budget.query": {
			"1": "query?query=:query"
		},
		"changeDataCapture.changeDataCapture": {
			"2": "cdc?entities=:entities&changedSince=:changedSince"
		},
		"class.read": {
			"1": "class/:entityId"
		},
		"class.query": {
			"1": "query?query=:query"
		},
		"companyInfo.read": {
			"1": "companyinfo/:companyId"
		},
		"companyInfo.query": {
			"1": "query?query=:query"
		},
		"creditMemo.read": {
			"1": "creditmemo/:entityId"
		},
		"creditMemo.query": {
			"1": "query?query=:query"
		},
		"customer.read": {
			"1": "customer/:entityId"
		},
		"customer.query": {
			"1": "query?query=:query"
		},
		"department.read": {
			"1": "department/:entityId"
		},
		"department.query": {
			"1": "query?query=:query"
		},
		"deposit.read": {
			"1": "deposit/:entityId"
		},
		"deposit.query": {
			"1": "query?query=:query"
		},
		"employee.read": {
			"1": "employee/:entityId"
		},
		"employee.query": {
			"1": "query?query=:query"
		},
		"estimate.read": {
			"1": "estimate/:entityId"
		},
		"estimate.query": {
			"1": "query?query=:query"
		},
		"invoice.read": {
			"1": "invoice/:entityId"
		},
		"invoice.query": {
			"1": "query?query=:query"
		},
		"item.read": {
			"1": "item/:entityId"
		},
		"item.query": {
			"1": "query?query=:query"
		},
		"journalEntry.read": {
			"1": "journalentry/:entityId"
		},
		"journalEntry.query": {
			"1": "query?query=:query"
		},
		"payment.read": {
			"1": "payment/:entityId"
		},
		"payment.query": {
			"1": "query?query=:query"
		},
		"paymentMethod.read": {
			"1": "paymentmethod/:entityId"
		},
		"paymentMethod.query": {
			"1": "query?query=:query"
		},
		"preferences.read": {
			"0": "preferences"
		},
		"preferences.query": {
			"1": "query?query=:query"
		},
		"purchase.read": {
			"1": "purchase/:entityId"
		},
		"purchase.query": {
			"1": "query?query=:query"
		},
		"purchaseOrder.read": {
			"1": "purchaseorder/:entityId"
		},
		"purchaseOrder.query": {
			"1": "query?query=:query"
		},
		"refundReceipt.read": {
			"1": "refundreceipt/:entityId"
		},
		"refundReceipt.query": {
			"1": "query?query=:query"
		},
		"reports.read": {
			"1": "reports/:reportType"
		},
		"salesReceipt.read": {
			"1": "salesreceipt/:entityId"
		},
		"salesReceipt.query": {
			"1": "query?query=:query"
		},
		"taxAgency.read": {
			"1": "taxagency/:entityId"
		},
		"taxAgency.query": {
			"1": "query?query=:query"
		},
		"taxCode.read": {
			"1": "taxcode/:entityId"
		},
		"taxCode.query": {
			"1": "query?query=:query"
		},
		"taxRate.read": {
			"1": "taxrate/:entityId"
		},
		"taxRate.query": {
			"1": "query?query=:query"
		},
		"term.read": {
			"1": "term/:entityId"
		},
		"term.query": {
			"1": "query?query=:query"
		},
		"timeActivity.read": {
			"1": "timeactivity/:entityId"
		},
		"timeActivity.query": {
			"1": "query?query=:query"
		},
		"transfer.read": {
			"1": "transfer/:entityId"
		},
		"transfer.query": {
			"1": "query?query=:query"
		},
		"vendor.read": {
			"1": "vendor/:entityId"
		},
		"vendor.query": {
			"1": "query?query=:query"
		},
		"vendorCredit.read": {
			"1": "vendorcredit/:entityId"
		},
		"vendorCredit.query": {
			"1": "query?query=:query"
		}
	}
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;
            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid.';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};

endpoint.account = {};
endpoint.account.create = {};
endpoint.account.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for account.create.post');
	}
	var url = parse(urlsData['post']['account.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.account.update = {};
endpoint.account.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for account.update.post');
	}
	var url = parse(urlsData['post']['account.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.attachable = {};
endpoint.attachable.create = {};
endpoint.attachable.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for attachable.create.post');
	}
	var url = parse(urlsData['post']['attachable.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.attachable.update = {};
endpoint.attachable.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for attachable.update.post');
	}
	var url = parse(urlsData['post']['attachable.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.attachable.delete = {};
endpoint.attachable.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for attachable.delete.post');
	}
	var url = parse(urlsData['post']['attachable.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.batch = {};
endpoint.batch.batchRequest = {};
endpoint.batch.batchRequest = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for batch.batchRequest.post');
	}
	var url = parse(urlsData['post']['batch.batchRequest'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.bill = {};
endpoint.bill.create = {};
endpoint.bill.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for bill.create.post');
	}
	var url = parse(urlsData['post']['bill.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.bill.update = {};
endpoint.bill.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for bill.update.post');
	}
	var url = parse(urlsData['post']['bill.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.bill.delete = {};
endpoint.bill.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for bill.delete.post');
	}
	var url = parse(urlsData['post']['bill.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.billPayment = {};
endpoint.billPayment.create = {};
endpoint.billPayment.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for billPayment.create.post');
	}
	var url = parse(urlsData['post']['billPayment.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.billPayment.update = {};
endpoint.billPayment.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for billPayment.update.post');
	}
	var url = parse(urlsData['post']['billPayment.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.billPayment.delete = {};
endpoint.billPayment.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for billPayment.delete.post');
	}
	var url = parse(urlsData['post']['billPayment.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.class = {};
endpoint.class.create = {};
endpoint.class.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for class.create.post');
	}
	var url = parse(urlsData['post']['class.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.class.update = {};
endpoint.class.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for class.update.post');
	}
	var url = parse(urlsData['post']['class.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.creditMemo = {};
endpoint.creditMemo.create = {};
endpoint.creditMemo.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for creditMemo.create.post');
	}
	var url = parse(urlsData['post']['creditMemo.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.creditMemo.update = {};
endpoint.creditMemo.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for creditMemo.update.post');
	}
	var url = parse(urlsData['post']['creditMemo.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.creditMemo.delete = {};
endpoint.creditMemo.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for creditMemo.delete.post');
	}
	var url = parse(urlsData['post']['creditMemo.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.customer = {};
endpoint.customer.create = {};
endpoint.customer.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for customer.create.post');
	}
	var url = parse(urlsData['post']['customer.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.customer.update = {};
endpoint.customer.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for customer.update.post');
	}
	var url = parse(urlsData['post']['customer.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.department = {};
endpoint.department.create = {};
endpoint.department.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for department.create.post');
	}
	var url = parse(urlsData['post']['department.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.department.update = {};
endpoint.department.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for department.update.post');
	}
	var url = parse(urlsData['post']['department.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.deposit = {};
endpoint.deposit.create = {};
endpoint.deposit.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposit.create.post');
	}
	var url = parse(urlsData['post']['deposit.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.deposit.update = {};
endpoint.deposit.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposit.update.post');
	}
	var url = parse(urlsData['post']['deposit.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.deposit.delete = {};
endpoint.deposit.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposit.delete.post');
	}
	var url = parse(urlsData['post']['deposit.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.employee = {};
endpoint.employee.create = {};
endpoint.employee.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for employee.create.post');
	}
	var url = parse(urlsData['post']['employee.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.employee.update = {};
endpoint.employee.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for employee.update.post');
	}
	var url = parse(urlsData['post']['employee.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.estimate = {};
endpoint.estimate.create = {};
endpoint.estimate.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for estimate.create.post');
	}
	var url = parse(urlsData['post']['estimate.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.estimate.update = {};
endpoint.estimate.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for estimate.update.post');
	}
	var url = parse(urlsData['post']['estimate.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.estimate.delete = {};
endpoint.estimate.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for estimate.delete.post');
	}
	var url = parse(urlsData['post']['estimate.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.invoice = {};
endpoint.invoice.create = {};
endpoint.invoice.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for invoice.create.post');
	}
	var url = parse(urlsData['post']['invoice.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.invoice.update = {};
endpoint.invoice.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for invoice.update.post');
	}
	var url = parse(urlsData['post']['invoice.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.invoice.delete = {};
endpoint.invoice.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for invoice.delete.post');
	}
	var url = parse(urlsData['post']['invoice.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.invoice.send = {};
endpoint.invoice.send = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for invoice.send.post');
	}
	var url = parse(urlsData['post']['invoice.send'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.item = {};
endpoint.item.create = {};
endpoint.item.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for item.create.post');
	}
	var url = parse(urlsData['post']['item.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.item.update = {};
endpoint.item.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for item.update.post');
	}
	var url = parse(urlsData['post']['item.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.journalEntry = {};
endpoint.journalEntry.create = {};
endpoint.journalEntry.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for journalEntry.create.post');
	}
	var url = parse(urlsData['post']['journalEntry.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.journalEntry.update = {};
endpoint.journalEntry.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for journalEntry.update.post');
	}
	var url = parse(urlsData['post']['journalEntry.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.journalEntry.delete = {};
endpoint.journalEntry.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for journalEntry.delete.post');
	}
	var url = parse(urlsData['post']['journalEntry.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.payment = {};
endpoint.payment.create = {};
endpoint.payment.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for payment.create.post');
	}
	var url = parse(urlsData['post']['payment.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.payment.update = {};
endpoint.payment.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for payment.update.post');
	}
	var url = parse(urlsData['post']['payment.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.payment.delete = {};
endpoint.payment.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for payment.delete.post');
	}
	var url = parse(urlsData['post']['payment.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.paymentMethod = {};
endpoint.paymentMethod.create = {};
endpoint.paymentMethod.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for paymentMethod.create.post');
	}
	var url = parse(urlsData['post']['paymentMethod.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.paymentMethod.update = {};
endpoint.paymentMethod.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for paymentMethod.update.post');
	}
	var url = parse(urlsData['post']['paymentMethod.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.preferences = {};
endpoint.preferences.update = {};
endpoint.preferences.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for preferences.update.post');
	}
	var url = parse(urlsData['post']['preferences.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchase = {};
endpoint.purchase.create = {};
endpoint.purchase.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchase.create.post');
	}
	var url = parse(urlsData['post']['purchase.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchase.update = {};
endpoint.purchase.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchase.update.post');
	}
	var url = parse(urlsData['post']['purchase.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchase.delete = {};
endpoint.purchase.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchase.delete.post');
	}
	var url = parse(urlsData['post']['purchase.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchaseOrder = {};
endpoint.purchaseOrder.create = {};
endpoint.purchaseOrder.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchaseOrder.create.post');
	}
	var url = parse(urlsData['post']['purchaseOrder.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchaseOrder.update = {};
endpoint.purchaseOrder.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchaseOrder.update.post');
	}
	var url = parse(urlsData['post']['purchaseOrder.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.purchaseOrder.delete = {};
endpoint.purchaseOrder.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for purchaseOrder.delete.post');
	}
	var url = parse(urlsData['post']['purchaseOrder.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.refundReceipt = {};
endpoint.refundReceipt.create = {};
endpoint.refundReceipt.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for refundReceipt.create.post');
	}
	var url = parse(urlsData['post']['refundReceipt.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.refundReceipt.update = {};
endpoint.refundReceipt.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for refundReceipt.update.post');
	}
	var url = parse(urlsData['post']['refundReceipt.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.refundReceipt.delete = {};
endpoint.refundReceipt.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for refundReceipt.delete.post');
	}
	var url = parse(urlsData['post']['refundReceipt.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.salesReceipt = {};
endpoint.salesReceipt.create = {};
endpoint.salesReceipt.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for salesReceipt.create.post');
	}
	var url = parse(urlsData['post']['salesReceipt.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.salesReceipt.update = {};
endpoint.salesReceipt.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for salesReceipt.update.post');
	}
	var url = parse(urlsData['post']['salesReceipt.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.salesReceipt.delete = {};
endpoint.salesReceipt.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for salesReceipt.delete.post');
	}
	var url = parse(urlsData['post']['salesReceipt.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.taxAgency = {};
endpoint.taxAgency.create = {};
endpoint.taxAgency.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for taxAgency.create.post');
	}
	var url = parse(urlsData['post']['taxAgency.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.taxService = {};
endpoint.taxService.create = {};
endpoint.taxService.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for taxService.create.post');
	}
	var url = parse(urlsData['post']['taxService.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.term = {};
endpoint.term.create = {};
endpoint.term.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for term.create.post');
	}
	var url = parse(urlsData['post']['term.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.term.update = {};
endpoint.term.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for term.update.post');
	}
	var url = parse(urlsData['post']['term.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.timeActivity = {};
endpoint.timeActivity.create = {};
endpoint.timeActivity.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for timeActivity.create.post');
	}
	var url = parse(urlsData['post']['timeActivity.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.timeActivity.update = {};
endpoint.timeActivity.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for timeActivity.update.post');
	}
	var url = parse(urlsData['post']['timeActivity.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.timeActivity.delete = {};
endpoint.timeActivity.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for timeActivity.delete.post');
	}
	var url = parse(urlsData['post']['timeActivity.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.transfer = {};
endpoint.transfer.create = {};
endpoint.transfer.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for transfer.create.post');
	}
	var url = parse(urlsData['post']['transfer.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.transfer.update = {};
endpoint.transfer.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for transfer.update.post');
	}
	var url = parse(urlsData['post']['transfer.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.transfer.delete = {};
endpoint.transfer.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for transfer.delete.post');
	}
	var url = parse(urlsData['post']['transfer.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.vendor = {};
endpoint.vendor.create = {};
endpoint.vendor.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for vendor.create.post');
	}
	var url = parse(urlsData['post']['vendor.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.vendor.update = {};
endpoint.vendor.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for vendor.update.post');
	}
	var url = parse(urlsData['post']['vendor.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.vendorCredit = {};
endpoint.vendorCredit.create = {};
endpoint.vendorCredit.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for vendorCredit.create.post');
	}
	var url = parse(urlsData['post']['vendorCredit.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.vendorCredit.update = {};
endpoint.vendorCredit.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for vendorCredit.update.post');
	}
	var url = parse(urlsData['post']['vendorCredit.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.vendorCredit.delete = {};
endpoint.vendorCredit.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for vendorCredit.delete.post');
	}
	var url = parse(urlsData['post']['vendorCredit.delete'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[QuickBooks] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.account.read = {};
endpoint.account.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['account.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.account.query = {};
endpoint.account.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['account.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.attachable.read = {};
endpoint.attachable.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['attachable.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.attachable.query = {};
endpoint.attachable.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['attachable.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.bill.read = {};
endpoint.bill.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['bill.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.bill.query = {};
endpoint.bill.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['bill.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.billPayment.read = {};
endpoint.billPayment.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['billPayment.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.billPayment.query = {};
endpoint.billPayment.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['billPayment.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.budget = {};
endpoint.budget.query = {};
endpoint.budget.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['budget.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.changeDataCapture = {};
endpoint.changeDataCapture.changeDataCapture = {};
endpoint.changeDataCapture.changeDataCapture = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['changeDataCapture.changeDataCapture'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.class.read = {};
endpoint.class.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['class.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.class.query = {};
endpoint.class.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['class.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyInfo = {};
endpoint.companyInfo.read = {};
endpoint.companyInfo.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyInfo.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyInfo.query = {};
endpoint.companyInfo.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyInfo.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.creditMemo.read = {};
endpoint.creditMemo.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['creditMemo.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.creditMemo.query = {};
endpoint.creditMemo.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['creditMemo.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.customer.read = {};
endpoint.customer.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['customer.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.customer.query = {};
endpoint.customer.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['customer.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.department.read = {};
endpoint.department.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['department.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.department.query = {};
endpoint.department.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['department.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.deposit.read = {};
endpoint.deposit.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['deposit.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.deposit.query = {};
endpoint.deposit.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['deposit.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.employee.read = {};
endpoint.employee.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['employee.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.employee.query = {};
endpoint.employee.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['employee.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.estimate.read = {};
endpoint.estimate.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['estimate.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.estimate.query = {};
endpoint.estimate.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['estimate.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.invoice.read = {};
endpoint.invoice.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['invoice.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.invoice.query = {};
endpoint.invoice.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['invoice.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.item.read = {};
endpoint.item.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['item.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.item.query = {};
endpoint.item.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['item.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.journalEntry.read = {};
endpoint.journalEntry.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['journalEntry.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.journalEntry.query = {};
endpoint.journalEntry.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['journalEntry.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.payment.read = {};
endpoint.payment.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['payment.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.payment.query = {};
endpoint.payment.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['payment.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.paymentMethod.read = {};
endpoint.paymentMethod.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['paymentMethod.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.paymentMethod.query = {};
endpoint.paymentMethod.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['paymentMethod.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.preferences.read = {};
endpoint.preferences.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['preferences.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.preferences.query = {};
endpoint.preferences.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['preferences.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.purchase.read = {};
endpoint.purchase.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['purchase.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.purchase.query = {};
endpoint.purchase.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['purchase.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.purchaseOrder.read = {};
endpoint.purchaseOrder.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['purchaseOrder.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.purchaseOrder.query = {};
endpoint.purchaseOrder.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['purchaseOrder.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.refundReceipt.read = {};
endpoint.refundReceipt.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['refundReceipt.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.refundReceipt.query = {};
endpoint.refundReceipt.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['refundReceipt.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports = {};
endpoint.reports.read = {};
endpoint.reports.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.salesReceipt.read = {};
endpoint.salesReceipt.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['salesReceipt.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.salesReceipt.query = {};
endpoint.salesReceipt.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['salesReceipt.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxAgency.read = {};
endpoint.taxAgency.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxAgency.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxAgency.query = {};
endpoint.taxAgency.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxAgency.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxCode = {};
endpoint.taxCode.read = {};
endpoint.taxCode.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxCode.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxCode.query = {};
endpoint.taxCode.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxCode.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxRate = {};
endpoint.taxRate.read = {};
endpoint.taxRate.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxRate.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.taxRate.query = {};
endpoint.taxRate.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['taxRate.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.term.read = {};
endpoint.term.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['term.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.term.query = {};
endpoint.term.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['term.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.timeActivity.read = {};
endpoint.timeActivity.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['timeActivity.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.timeActivity.query = {};
endpoint.timeActivity.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['timeActivity.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.transfer.read = {};
endpoint.transfer.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['transfer.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.transfer.query = {};
endpoint.transfer.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['transfer.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.vendor.read = {};
endpoint.vendor.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['vendor.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.vendor.query = {};
endpoint.vendor.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['vendor.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.vendorCredit.read = {};
endpoint.vendorCredit.read = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['vendorCredit.read'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.vendorCredit.query = {};
endpoint.vendorCredit.query = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['vendorCredit.query'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[QuickBooks] GET from: ' + url);
	return endpoint.get(url);
};

