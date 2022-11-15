function addRow() {
    var table = document.getElementById("consumerTable");
    var cntRows = table.rows.length;
    console.log("Amount of rows in table: %s", cntRows);
    var row = table.insertRow(cntRows);

    var cntColumns = table.rows[0].cells.length;

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
    document.getElementById("consumerTable").deleteRow(i);
}

function appendButtonToCell(td) {
    //create add button
    var addButton = document.createElement("button");
    addButton.type = "button";
    //addButton.className = "btn";
    addButton.innerText = "Add row";
    addButton.onclick = (function () { return addRow() });
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