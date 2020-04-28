function convert() {
    var inputVal = document.getElementById('inputLink').value;
    // console.log("inputUrl="+inputVal);

    var shouldConvert = isValidString(inputVal) && isValidUrl(inputVal)
    // console.log("isValid="+shouldConvert);
    if(!shouldConvert){
        document.getElementById('errorMessage').innerHTML = "Invalid URL";        
        return;
    }

    var encodedUrl = convertToBase64(inputVal);
    var websiteUrl = parseEverythingButRedirectUrl(retrieveUrl());
    var finalUrl = websiteUrl + SEPARATOR + encodedUrl;
    // console.log("finalUrl="+finalUrl);
    
    document.getElementById('outputLink').innerHTML = finalUrl;
}