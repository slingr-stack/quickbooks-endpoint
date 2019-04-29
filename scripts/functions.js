/////////////////////
// Public API
/////////////////////

endpoint.dates = {};
endpoint.dates.toMillis = function (stringDate) {
    var json = endpoint._convertDateToTimestamp({date: stringDate});
    if (json && json instanceof Object) {
        return json.timestamp;
    }
    return null;
};

endpoint.dates.toDate = function (stringDate) {
    var json = endpoint._convertDateToTimestamp({date: stringDate});
    if (json && json instanceof Object) {
        return new Date(json.timestamp);
    }
    return null;
};

endpoint.dates.fromMillis = function (millis) {
    var json = endpoint._formatFromMillis({millis: millis});
    if (json && json instanceof Object) {
        return json.date;
    }
    return null;
};

endpoint.dates.fromDate = function (date) {
    if (date) {
        var json = endpoint._formatFromMillis({millis: date.getTime()});
        if (json && json instanceof Object) {
            return json.date;
        }
    }
    return null;
};

/////////////////////////////////////
// Public API - Generic Functions
///////////////////////////////////

endpoint.get = function (url) {
    var options = checkHttpOptions(url, {});
    return endpoint._get(options);
};

endpoint.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._post(options);
};

endpoint.query = function (query) {
    var url = 'query?query=' + query;
    return endpoint.get(url);
};

/////////////////////////////
//  Private helpers
/////////////////////////////

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
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);