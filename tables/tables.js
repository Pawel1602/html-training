function addRow(r) {
    var tbody = document.getElementById("consumerTableBody");
    //get index from current row
    var currentRow = r.parentNode.parentNode.rowIndex;
    var row = tbody.insertRow(currentRow);

    var cntColumns = tbody.rows[0].cells.length;

    for (let i = 0; i < cntColumns; i++) {
        //insert cells in new created row in table
        row.insertCell(i);
    }

    //add additional cell with add/delete buttons
    var td = row.cells[cntColumns - 1];
    td.className = "buttonRow";


    appendButtonToCell(td);
    appendDeleteRowButtonToCell(td);

    console.log("Amount of coulumns in row: %s", cntColumns);
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("consumerTableBody").deleteRow(i - 1);
}

function appendButtonToCell(td) {
    //create add button
    var addButton = document.createElement("button");
    addButton.type = "button";
    //addButton.className = "btn";
    addButton.innerText = "Add row";
    addButton.onclick = (function () { return addRow(this) });
    td.appendChild(addButton);
}

function appendDeleteRowButtonToCell(td) {

    //create delete btn
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    //deleteButton.className = "btn";
    deleteButton.innerText = "Delete row";
    deleteButton.onclick = (function () { return deleteRow(this) });
    td.appendChild(deleteButton);
}

function clearTable() {
    var table = document.getElementById("consumerTable");

    var oldTBody = document.getElementById("consumerTableBody");
    oldTBody.remove();
    var newTBody = document.createElement("tbody");

    newTBody.id = "consumerTableBody";

    table.appendChild(newTBody);
}