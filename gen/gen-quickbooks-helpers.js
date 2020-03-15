var fs = require('fs');

var FILE_NAME = "quickbooks-fn-helpers.js";
var CODE = '';
var cache = {};
var COMPANY_URL_PREFIX = '/company/:companyId/';

var apiURLs = {
    'Account': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/account'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/account?operation=update'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/account/:entityId'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Attachable': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/attachable'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/attachable/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/attachable?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/attachable?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Batch': [
        {
            'name': 'BatchRequest',
            'operation': 'POST',
            'url': '/company/:companyId/batch'
        }
    ],
    'Bill': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/bill'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/bill/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/bill?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/bill?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'BillPayment': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/billpayment'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/billpayment/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/billpayment?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/billpayment?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Budget': [
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'ChangeDataCapture': [
        {
            'name': 'ChangeDataCapture',
            'operation': 'GET',
            'url': '/company/:companyId/cdc?entities=:entities&changedSince=:changedSince'
        }
    ],
    'Class': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/class'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/class/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/class?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'CompanyInfo': [
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/companyinfo/:companyId'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'CreditMemo': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/creditmemo'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/creditmemo/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/creditmemo?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/creditmemo?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Customer': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/customer'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/customer/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/customer?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Department': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/department'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/department/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/department?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Deposit': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/deposit'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/deposit/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/deposit?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/deposit?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Employee': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/employee'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/employee/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/employee?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Estimate': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/estimate'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/estimate/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/estimate?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/estimate?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Invoice': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/invoice'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/invoice/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/invoice?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/invoice?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        },
        {
            'name': 'Send',
            'operation': 'POST',
            'url': '/company/:companyId/invoice/:entityId/send?sentTo=:emailAddress'
        }
    ],
    'Item': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/item'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/item/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/item?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'JournalEntry': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/journalentry'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/journalentry/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/deposit?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/journalentry?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Payment': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/payment'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/payment/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/payment?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/payment?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'PaymentMethod': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/paymentmethod'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/paymentmethod/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/paymentmethod?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Preferences': [
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/preferences'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/preferences?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Purchase': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/purchase'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/purchase/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/purchase?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/purchase?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'PurchaseOrder': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/purchaseorder'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/purchaseorder/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/purchaseorder?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/purchaseorder?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'RefundReceipt': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/refundreceipt'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/refundreceipt/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/refundreceipt?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/refundreceipt?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Reports': [
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/reports/:reportType'
        }
    ],
    'SalesReceipt': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/salesreceipt'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/salesreceipt/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/salesreceipt?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/salesreceipt?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'TaxAgency': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/taxagency'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/taxagency/:entityId'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'TaxCode': [
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/taxcode/:entityId'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'TaxRate': [
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/taxrate/:entityId'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'TaxService': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/taxservice/taxcode'
        }
    ],
    'Term': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/term'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/term/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/term?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'TimeActivity': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/timeactivity'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/timeactivity/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/timeactivity?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/timeactivity?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Transfer': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/transfer'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/transfer/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/transfer?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/transfer?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'Vendor': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/vendor'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/vendor/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/vendor?operation=update'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ],
    'VendorCredit': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/company/:companyId/vendorcredit'
        },
        {
            'name': 'Read',
            'operation': 'GET',
            'url': '/company/:companyId/vendorcredit/:entityId'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/company/:companyId/vendorcredit?operation=update'
        },
        {
            'name': 'Delete',
            'operation': 'POST',
            'url': '/company/:companyId/vendorcredit?operation=delete'
        },
        {
            'name': 'Query',
            'operation': 'GET',
            'url': '/company/:companyId/query?query=:query'
        }
    ]
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

var camelCase = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

var setInitializers = function (fnName) {
    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {
        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }
        if (!cache[path]) {
            tmpCode += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + path + ' = {};\n';
            cache[path] = path;
        }
    }
    return tmpCode;
};

var urlsData = {};
var endpoint = {};
var ENDPOINT_NAMESPACE = 'endpoint';
var NAMESPACE_CONCAT_SYMBOL = '.';

var makeEndpointsHelpers = function () {
    for (var domain in apiURLs) {
        if (apiURLs.hasOwnProperty(domain)) {
            var domainAction = apiURLs[domain];
            for (var key in domainAction) {
                if (domainAction.hasOwnProperty(key)) {
                    var action = domainAction[key];
                    var domainActionURL = action.url;
                    var functionName = camelCase(domain) + NAMESPACE_CONCAT_SYMBOL + camelCase(action.name);
                    var method = action['operation'].toLowerCase();
                    if (domainActionURL.startsWith(COMPANY_URL_PREFIX)) {
                        domainActionURL = domainActionURL.replace(COMPANY_URL_PREFIX, '');// /company/:companyId/account/:entityId -> account/:entityId
                    }

                    var numVars = (domainActionURL.match(/:/g) || []).length;//counting parameters
                    urlsData[method] = urlsData[method] || {};
                    urlsData[method][functionName] = urlsData[method][functionName] || {};
                    urlsData[method][functionName][numVars] = domainActionURL;
                }
            }
        }
    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            CODE += setInitializers(fn);
            if (method == 'get') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[QuickBooks] ' +
                    method.toUpperCase() + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method + '(url);\n};\n\n';
            } else if (method == 'post') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[QuickBooks] ' + method.toUpperCase()
                    + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method
                    + '(url, arguments[arguments.length - 1]);\n};\n\n';
            }
        }
    }

    var MESSAGE = '';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  This file is generated with quickbooks/gen/gen-quickbooks-helpers.js  //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  Public API - Account functions                                        //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});