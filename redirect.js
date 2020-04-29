function redirectOnOpen() {
	var url = retrieveUrl();
	// console.log("Original="+url);

	var encodedDeeplink = parseRedirectUrl(url);
	// console.log("Encoded Deeplink="+encodedDeeplink);

	var shouldParse = isValidString(encodedDeeplink)
	// console.log("isValidString="+shouldParse);

	if(!shouldParse) {
		return;
	}

	var deeplink = convertFromBase64(encodedDeeplink);
	// console.log("Deeplink="+deeplink);

	var shouldRedirect = isValidString(deeplink) && isValidUrl(deeplink)
	// console.log("isValidUrl="+shouldRedirect);

	if(shouldRedirect) {	
		document.getElementById('alternateRedirect').innerHTML = '<a href=\"'+deeplink+'\">Click here to redirect</a>';	
		document.getElementById("manual-redirect").classList.remove('hide');
	 	
	 	redirectNow(deeplink)
	}
}