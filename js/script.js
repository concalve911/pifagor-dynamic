"use strict";

const tableContainer = document.getElementById("pifagor__table");
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    if (i === 0 && j === 0) {
      cell.textContent = "";
    } else if (i === 0) {
      cell.textContent = j;
      cell.classList.add("header");
    } else if (j === 0) {
      cell.textContent = i;
      cell.classList.add("header");
    } else {
      cell.textContent = i * j;
    }

    tableContainer.appendChild(cell);
  }
}
