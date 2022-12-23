// const example1 = document.getElementById('exampleOne');

// const example2 = document.getElementById("exampleTwo");
// console.log(`example2.classList`, example2.classList);

// const toggleClass = (element, className) => {
//   if (element.classList.contains(className)){
//     element.classList.remove(className)
//   } else {
//     element.classList.add(className)
//   }
// }
// example2.classList.toggle("large");
// console.log(`toggle .large`, example2.classList);

const renderChessBoard = (cellsCount) => {
  const table = document.createElement("table");
  table.classList.add("chessboard");

  for (let i = 0; i < cellsCount; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cellsCount; j++) {
      const cell = document.createElement("td");
      cell.classList.add("chessboard-cell");

      let isDark;

      if (i % 2 === 0) {
        isDark = j % 2 === 0;
      } else {
        isDark = j % 2 !== 0;
      }

      if (isDark) {
        cell.classList.add("chessboard-cell--dark");
      }

      row.append(cell);
    }
    table.append(row);
  }

  document.body.append(table);

  return table;
  // tr
  // td
};

const toggleChessBoard = (chessBoard) => {
  console.log("func");
  const allCells = chessBoard.querySelectorAll("td");
  allCells.forEach((cell) => {
    cell.classList.toggle("chessboard-cell--dark");
  });
};

const board = renderChessBoard(9);
const btn = document.getElementById("toggle");
btn.addEventListener("click", () => toggleChessBoard(board));