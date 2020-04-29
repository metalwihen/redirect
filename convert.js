function convert() {
    var inputVal = document.getElementById('inputLink').value;
    // console.log("inputUrl="+inputVal);

    var shouldConvert = isValidString(inputVal) && isValidUrl(inputVal)
    // console.log("isValid="+shouldConvert);

    document.getElementById("errorMessage").classList.add('hide');
    document.getElementById("outputLink").classList.add('hide');

    if(!shouldConvert){
        document.getElementById('errorMessage').innerHTML = "Invalid URL. Should follow <code>scheme://prefix.domain:port/path/filename</code>";        
        document.getElementById("errorMessage").classList.remove('hide');        
        return;
    }
  
    var encodedUrl = convertToBase64(inputVal);
    var websiteUrl = parseEverythingButRedirectUrl(retrieveUrl());
    var finalUrl = websiteUrl + SEPARATOR + encodedUrl;
    // console.log("finalUrl="+finalUrl);
    
    document.getElementById('outputLink').innerHTML = finalUrl;
    document.getElementById("outputLink").classList.remove('hide');  
}