let text = '{ "employees" : [' +
    '{ "firstName":"John" , "email":"doe@op.pl" },' +
    '{ "firstName":"Anna" , "email":"smith@wp.pl" },' +
    '{ "firstName":"Peter" , "email":"jones@cc.com" } ]}';

const obj = JSON.parse(text);

function clearTable() {
    var table = document.getElementById("consumerTable");

    var oldTBody = table.tBodies[0];
    var newTBody = document.createElement('tbody');

    oldTBody.parentNode.replaceChild(newTBody, oldTBody);


}

function loadCustomersToTable() {
    let employeesAmount = obj.employees.length;

    console.log("Employes amount: %s", employeesAmount);

    obj.employees.forEach(addEmployeeToTable);
    //obj.employees.


}

//here will come employe from json file
function addEmployeeToTable(item, index, arr) {
    var tab = document.getElementById("consumerTable");
    var cntRows = tab.rows.length;
    var tr = tab.insertRow(cntRows);

    var tdName = tr.insertCell(0);
    tdName.innerText = item.firstName;
    var tdEmail = tr.insertCell(1);
    tdEmail.innerText = item.email;
    var tdAction = tr.insertCell(2);

    appendButtonToCell(tdAction);
    appendDeleteRowButtonToCell(tdAction);

}

//how to repair issue with buttons in rows?
//add all butons by JS