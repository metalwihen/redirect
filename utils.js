var SEPARATOR = '?to='

function isValidUrl(data) {
    if (!isValidString(data)) {
        return false;
    }

    try {
    	new URL(data);
    } catch (_) {
    	return false;  
    }

    return true;
}

function isValidString(data) {
    if (data == null || data == '' || data == undefined) {
        return false;
    }

    return true;
}

function retrieveUrl() {
    var parser = document.createElement('a');
    parser.href = window.location;
    return parser.href;
}

function parseRedirectUrl(url) {
    var parts = url.split(SEPARATOR);
    var redirectUrl = parts[1];
    return redirectUrl;
}

function parseEverythingButRedirectUrl(url) {
    var parts = url.split('?to=');
    var websiteUrl = parts[0];
    return websiteUrl;
}

function convertToBase64(string) {
    return window.btoa(string);
}

function convertFromBase64(string) {
    return window.atob(string);
}

function redirectNow(newUrl) {
    window.location.replace(newUrl);
}