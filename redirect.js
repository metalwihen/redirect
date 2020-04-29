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
		document.getElementById('alternateRedirect').innerHTML = '<a id="alternateRedirectLink" href=\"'+deeplink+'\">Click here to redirect</a>';	
		document.getElementById("manual-redirect").classList.remove('hide');
	 	
	 	redirectNow(deeplink); // doesn't always work
	 	redirectViaMouseClick(); // hack to simulate button click
	}
}

function redirectNow(newUrl) {
    window.location.replace(newUrl);
}

function redirectViaMouseClick() {
	window.onload = function() {
    var clickTarget = document.getElementById("alternateRedirectLink");
    var fakeMouseEvent = document.createEvent('MouseEvents');
    fakeMouseEvent.initMouseEvent("click", true, true, window,
        0, 0, 0, 1, 1, false, false, false, false, 0, null);

    clickTarget.dispatchEvent(fakeMouseEvent);
  };
}