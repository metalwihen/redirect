// Script to handle redirects
function isValidUrl(data) {
    if (data == null || data == '' || data == undefined) {
        return false;
    }

    // try {
    // 	new URL(string);
    // } catch (_) {
    // 	return false;  
    // }

    return true;
}

function retrieveUrl() {
    var parser = document.createElement('a');
    parser.href = window.location;
    return parser.href;
}

function parseRedirectUrl(url) {
    var parts = url.split('?to=');
    var redirectUrl = parts[1];
    return redirectUrl;
}

// function convertToBase64(string) {
//     return btoa(unescape(encodeURIComponent(string)));
// }

// function convertFromBase64(string) {
//     return decodeURIComponent(escape(window.atob(string)));
// }

function redirectNow(newUrl) {
    window.location.replace(deeplink);
}