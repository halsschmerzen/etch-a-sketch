// let size = prompt("Enter your size (e.g: 32 = 32x32 Pixels)")

const squareContainer = document.getElementById("sketch-container");


function makeRows(rows, columns) {
    // Create Rows
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    squareContainer.appendChild(row);
    row.id = "divRow";

    // Create Columns

    for(let i = 0; i < columns; i++) {
        let column = document.createElement("div");
        row.appendChild(column);
        column.id = "divColumn";

    }

  }
}

function mouseDiv() {
    const hoverDivs = document.querySelectorAll("#divColumn");
    hoverDivs.forEach(hoverDiv => {
        hoverDiv.addEventListener("mouseover", () => {
            hoverDiv.style.background = "black";
        })
    })
}
makeRows(32,32);
mouseDiv();

