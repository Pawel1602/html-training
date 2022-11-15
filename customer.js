let text = '{ "employees" : [' +
    '{ "firstName":"John" , "email":"doe@op.pl" },' +
    '{ "firstName":"Anna" , "email":"smith@wp.pl" },' +
    '{ "firstName":"Peter" , "email":"jones@cc.com" } ]}';

const obj = JSON.parse(text);

function clearTable() {
    var table = document.getElementById("consumerTable");
}

function loadCustomersToTable() {
    var table = document.getElementById("consumerTable");
}

//how to repair issue with buttons in rows?
//add all butons by JS