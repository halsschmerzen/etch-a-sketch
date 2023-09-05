const squareContainer = document.getElementById("sketch-container");

// squareContainer.style.border = "2px solid red";

function makeRows(rows, columns) {
    // Create Rows
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    squareContainer.appendChild(row);
    row.className = "divRow";

    // Create Columns

    for(let i = 0; i < columns; i++) {
        let column = document.createElement("div");
        row.appendChild(column);
        column.className = "divColumn";

    }

  }
}

makeRows(8,8);
