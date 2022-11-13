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

    console.log("Amount of coulumns in row: %s", cntColumns);
}