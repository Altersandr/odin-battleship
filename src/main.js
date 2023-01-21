const shipFactory = require("./ship");
const rotateShip = document.getElementById("startGame");
const shipGridContainer = document.getElementById("ship-placement-grid");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const playerBoard = document.getElementById("board-container");
const enemyBoard = document.getElementById("enemy-board-container");
const shipName = document.querySelector("[data-ship-name]");

const endModal = document.querySelector(".endmodal");
const btnRestart = document.querySelector(".btnRestart");

shipName.innerHTML = "Carrier";

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  populateGrid(playerBoard, board);
  populateGrid(enemyBoard, enemyShips, false);
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let board = Array(10)
  .fill("")
  .map(() => Array(10).fill(""));

let opponentBoard = Array(10)
  .fill("")
  .map(() => Array(10).fill(""));

const populateGrid = (container, board, isSeen = true) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");

      cell.dataset.h = i + 1;
      cell.dataset.v = j + 1;
      cell.classList.add("modal-cell");

      if (typeof board[i][j] == "object" && isSeen) cell.classList.add("ship");
      container.appendChild(cell);
    }
  }
};

const ships = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Destroyer", size: 3 },
  { name: "Submarine", size: 3 },
  { name: "Patrol Boat", size: 2 },
];
let rotate = false;
let size = ships[0].size;
let n = 1;

const placeShip = (e) => {
  let target = e.target;
  let x = target.dataset.h - 1;
  let y = target.dataset.v - 1;
  if (target.classList.value.includes("modal-cell")) {
    if (rotate) {
      if (x + size > 10) return;
      for (let i = 0; i < size; i++) {
        board[x + i][y] = shipFactory(size);
        let next = document.querySelector(
          `[data-h="${x + 1 + i}"][data-v="${y + 1}"]`
        );
        target = next;
        target.classList.add("ship");
      }
    } else {
      if (y + size > 10) return;
      for (let i = 0; i < size; i++) {
        board[x][y + i] = shipFactory(size);
        let next = document.querySelector(
          `[data-h="${x + 1}"][data-v="${y + 1 + i}"]`
        );
        target = next;
        target.classList.add("ship");
      }
    }
    if (n >= 5) return closeModal();
    size = ships[n].size;
    shipName.innerHTML = ships[n].name;
    n++;
  }
};

const placeEnemyShips = (board, size) => {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

  for (let i = 0; i < size; i++) {
    if (direction === "horizontal") {
      if (x + i > 9) return false;
      if (board[x + i][y] !== "") return false;
      if (
        (x - 1 >= 0 && board[x - 1][y] !== "") ||
        (x + i + 1 < 10 && board[x + i + 1][y] !== "") ||
        (y - 1 >= 0 && board[x + i][y - 1] !== "") ||
        (y + 1 < 10 && board[x + i][y + 1] !== "")
      ) {
        return false;
      }
      board[x + i][y] = shipFactory(size);
    } else {
      if (y + i > 9) return false;
      if (board[x][y + i] !== "") return false;
      if (
        (x - 1 >= 0 && board[x - 1][y + i] !== "") ||
        (x + 1 < 10 && board[x + 1][y + i] !== "") ||
        (y - 1 >= 0 && board[x][y - 1] !== "") ||
        (y + i + 1 < 10 && board[x][y + i + 1] !== "")
      ) {
        return false;
      }
      board[x][y + i] = shipFactory(size);
    }
  }
  return true;
};

const getEnemyBoard = () => {
  const shipLengths = [5, 4, 3, 3, 2];
  for (const shipLength of shipLengths) {
    while (!placeEnemyShips(opponentBoard, shipLength)) {
      opponentBoard = JSON.parse(JSON.stringify(originalBoard)); // restore original board
    }
    originalBoard = JSON.parse(JSON.stringify(opponentBoard)); // save
  }
  return originalBoard;
};

const aiMove = () => {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  let target = playerBoard.querySelector(`[data-h="${x}"][data-v="${y}"]`);
  console.log(target);
  if (
    target.classList.value.includes("hit") ||
    target.classList.value.includes("miss")
  ) {
    aiMove();
  }
  if (board[x - 1][y - 1] !== "") {
    target.classList.add("hit");
  } else target.classList.add("miss");
};

let originalBoard = JSON.parse(JSON.stringify(opponentBoard));

const enemyShips = getEnemyBoard();
const performAttack = (e) => {
  let board = enemyShips;

  if (
    e.target.classList[0] !== "modal-cell" ||
    e.target.classList.value.includes("hit") ||
    e.target.classList.value.includes("miss")
  )
    return;
  let x = e.target.dataset.h - 1;
  let y = e.target.dataset.v - 1;
  if (typeof board[x][y] == "object") {
    e.target.classList.add("hit");
  } else e.target.classList.add("miss");
  aiMove();
  let winner = checkWinner();

  if (winner) {
    document.querySelector("[data-winner]").innerHTML = winner;
    endModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};

const checkWinner = () => {
  const hits = enemyBoard.querySelectorAll(".hit").length;
  const enemyHits = playerBoard.querySelectorAll(".hit").length;
  if (hits == 17) return "You won, you sunk all the enemy ships";
  if (enemyHits == 17) return "You lost, all your ships have been sunk";
};

const restartGame = () => {
  window.location.reload();
};

enemyBoard.addEventListener("click", performAttack);

window.setTimeout(populateGrid(shipGridContainer, board), 0);
window.setTimeout(openModal, 500);

rotateShip.addEventListener("click", () => {
  if (rotate) rotate = false;
  else rotate = true;
});

btnRestart.addEventListener("click", restartGame);

modal.addEventListener("mouseover", (e) => {
  if (e.target.classList.value.includes("modal-cell")) {
    let x = parseInt(e.target.dataset.h);
    let y = parseInt(e.target.dataset.v);

    for (let i = 0; i < size; i++) {
      if (rotate) {
        const cell = shipGridContainer.querySelector(
          `[data-h="${x + i}"][data-v="${y}"]`
        );

        if (cell !== null) cell.classList.add("hover");
      } else {
        cell = shipGridContainer.querySelector(
          `[data-h="${x}"][data-v="${y + i}"]`
        );
        if (cell !== null) cell.classList.add("hover");
      }
    }
  } else return;
});

modal.addEventListener("mouseout", (e) => {
  if (e.target.classList.value.includes("modal-cell")) {
    let x = parseInt(e.target.dataset.h);
    let y = parseInt(e.target.dataset.v);

    for (let i = 0; i < size; i++) {
      if (rotate) {
        const cell = shipGridContainer.querySelector(
          `[data-h="${x + i}"][data-v="${y}"]`
        );
        if (cell !== null) cell.classList.remove("hover");
      } else {
        cell = shipGridContainer.querySelector(
          `[data-h="${x}"][data-v="${y + i}"]`
        );
        if (cell !== null) cell.classList.remove("hover");
      }
    }
  } else return;
});
modal.addEventListener("click", placeShip);
