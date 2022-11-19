
function getCatFact(maxLength) {
    var getCatFactUrl = 'https://catfact.ninja/fact?max_length=';
    let getCatFactUrlWithMaxLengthValue = getCatFactUrl.concat(maxLength);

    var catFactResponse = httpGet(getCatFactUrlWithMaxLengthValue);

    console.log(catFactResponse);
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}