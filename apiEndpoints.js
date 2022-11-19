
function getCatFact() {
    var getCatFactUrl = 'https://catfact.ninja/fact?max_length=200';

    var catFactResponse = httpGet(getCatFactUrl);

    console.log(catFactResponse);
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}