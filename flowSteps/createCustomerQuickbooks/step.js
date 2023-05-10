step.createCustomerQuickbooks = function (inputs) {

	var inputsLogic = {
		name: inputs.name || ""
	};

	var options = {
		path: parse("/customer"),
		body: {
			DisplayName: inputsLogic.name
		}
	}

	return endpoint._post(options);
};

var parse = function (url, pathVariables){

	var regex = /{([^}]*)}/g;

	if (!url.match(regex)){
		return url;
	}

	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}

	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})

	return url;
}