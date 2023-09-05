// let size = prompt("Enter your size (e.g: 32 = 32x32 Pixels)")

const squareContainer = document.getElementById("sketch-container");
let rgbSwitch = false;

function rgbSwitcher() {
  const rgbButton = document.querySelectorAll("#rgb-mode");
  const rgbStatus = document.querySelector("#rgb-status");

  rgbButton.forEach((button) => {
    button.addEventListener("click", () => {
      rgbSwitch = !rgbSwitch;
      if (rgbSwitch) {
        rgbStatus.textContent = "RGB Mode: on";
        rgbReturner
      } else {
        rgbStatus.textContent = "RGB Mode: off";
      }
    });
  });
}

function rgbReturner() {
    const rgbColors = ["red", "green", "blue"];
    while(rgbSwitch==true) {
        return rgbColors[Math.random()*rgbColors.length];
    }
}


function makeRows(rows, columns) {
  // Create Rows
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    squareContainer.appendChild(row);
    row.id = "divRow";

    // Create Columns

    for (let i = 0; i < columns; i++) {
      let column = document.createElement("div");
      row.appendChild(column);
      column.id = "divColumn";
    }
  }
}

function mouseDiv() {
  const hoverDivs = document.querySelectorAll("#divColumn");
  hoverDivs.forEach((hoverDiv) => {
    hoverDiv.addEventListener("mouseover", () => {
      hoverDiv.style.background = "black";
    });
  });
}
function resetCanvas() {
  const columnDivs = document.querySelectorAll("#divColumn");
  columnDivs.forEach((columnDiv) => {
    columnDiv.style.background = "white";
  });
}

function resetButton() {
  const resButton = document.querySelectorAll("#reset-button");
  resButton.forEach((button) => {
    button.addEventListener("click", () => {
      resetCanvas();
    });
  });
}

makeRows(32, 32);
resetButton();
mouseDiv();
rgbSwitcher();
