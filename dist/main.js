/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipFactory = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst board = __webpack_require__(/*! ./shipPlacement */ \"./src/shipPlacement.js\");\n\nconst playerBoard = document.getElementById(\"board-container\");\n\nconst Gameboard = () => {\n  const receiveAttack = (x, y) => {\n    // board[]\n  };\n\n  return console.log(board);\n};\n\n//create a modal that asks the user to place the ships on a grid\n//when all the ships were placed, pass the newly created gameboard to the gameboard fn\n//\n\n\n//# sourceURL=webpack://odin-battleship/./src/main.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const shipFactory = (length) => {\n  let hits = 0;\n  const hit = () => (hits += 1);\n\n  const isSunk = () => {\n    if (length <= hits) return true;\n    return false;\n  };\n  return { length, hits, isSunk, hit };\n};\n\nmodule.exports = shipFactory;\n\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

/***/ }),

/***/ "./src/shipPlacement.js":
/*!******************************!*\
  !*** ./src/shipPlacement.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipFactory = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst rotateShip = document.getElementById(\"startGame\");\nconst shipGridContainer = document.getElementById(\"ship-placement-grid\");\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst playerBoard = document.getElementById(\"board-container\");\nconst enemyBoard = document.getElementById(\"enemy-board-container\");\nconst shipName = document.querySelector(\"[data-ship-name]\");\n\nconst endModal = document.querySelector(\".endmodal\");\nconst btnRestart = document.querySelector(\".btnRestart\");\n\nshipName.innerHTML = \"Carrier\";\n\nconst closeModal = function () {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n  populateGrid(playerBoard, board);\n  populateGrid(enemyBoard, enemyShips, false);\n};\n\nconst openModal = () => {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\nlet board = Array(10)\n  .fill(\"\")\n  .map(() => Array(10).fill(\"\"));\n\nlet opponentBoard = Array(10)\n  .fill(\"\")\n  .map(() => Array(10).fill(\"\"));\n\nconst populateGrid = (container, board, isSeen = true) => {\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = document.createElement(\"div\");\n\n      cell.dataset.h = i + 1;\n      cell.dataset.v = j + 1;\n      cell.classList.add(\"modal-cell\");\n\n      if (typeof board[i][j] == \"object\" && isSeen) cell.classList.add(\"ship\");\n      container.appendChild(cell);\n    }\n  }\n};\n\nconst ships = [\n  { name: \"Carrier\", size: 5 },\n  { name: \"Battleship\", size: 4 },\n  { name: \"Destroyer\", size: 3 },\n  { name: \"Submarine\", size: 3 },\n  { name: \"Patrol Boat\", size: 2 },\n];\nlet rotate = false;\nlet size = ships[0].size;\nlet n = 1;\n\nconst placeShip = (e) => {\n  let target = e.target;\n  let x = target.dataset.h - 1;\n  let y = target.dataset.v - 1;\n  // console.log(x, size);\n  if (target.classList.value == \"modal-cell\") {\n    if (rotate) {\n      if (x + size > 10) return;\n      for (let i = 0; i < size; i++) {\n        board[x + i][y] = shipFactory(size);\n        let next = document.querySelector(\n          `[data-h=\"${x + 1 + i}\"][data-v=\"${y + 1}\"]`\n        );\n        target = next;\n        target.classList.add(\"ship\");\n      }\n    } else {\n      if (y + size > 10) return;\n      for (let i = 0; i < size; i++) {\n        board[x][y + i] = shipFactory(size);\n        let next = document.querySelector(\n          `[data-h=\"${x + 1}\"][data-v=\"${y + 1 + i}\"]`\n        );\n        target = next;\n        target.classList.add(\"ship\");\n      }\n    }\n    if (n >= 5) return closeModal();\n    size = ships[n].size;\n    shipName.innerHTML = ships[n].name;\n    n++;\n  }\n};\n\nconst placeEnemyShips = (board, size) => {\n  let x = Math.floor(Math.random() * 10);\n  let y = Math.floor(Math.random() * 10);\n\n  const direction = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n\n  for (let i = 0; i < size; i++) {\n    if (direction === \"horizontal\") {\n      if (x + i > 9) return false;\n      if (board[x + i][y] !== \"\") return false;\n      if (\n        (x - 1 >= 0 && board[x - 1][y] !== \"\") ||\n        (x + i + 1 < 10 && board[x + i + 1][y] !== \"\") ||\n        (y - 1 >= 0 && board[x + i][y - 1] !== \"\") ||\n        (y + 1 < 10 && board[x + i][y + 1] !== \"\")\n      ) {\n        return false;\n      }\n      board[x + i][y] = shipFactory(size);\n    } else {\n      if (y + i > 9) return false;\n      if (board[x][y + i] !== \"\") return false;\n      if (\n        (x - 1 >= 0 && board[x - 1][y + i] !== \"\") ||\n        (x + 1 < 10 && board[x + 1][y + i] !== \"\") ||\n        (y - 1 >= 0 && board[x][y - 1] !== \"\") ||\n        (y + i + 1 < 10 && board[x][y + i + 1] !== \"\")\n      ) {\n        return false;\n      }\n      board[x][y + i] = shipFactory(size);\n    }\n  }\n  return true;\n};\n\nconst getEnemyBoard = () => {\n  const shipLengths = [5, 4, 3, 3, 2];\n  for (const shipLength of shipLengths) {\n    while (!placeEnemyShips(opponentBoard, shipLength)) {\n      opponentBoard = JSON.parse(JSON.stringify(originalBoard)); // restore original board\n    }\n    originalBoard = JSON.parse(JSON.stringify(opponentBoard)); // save\n  }\n  return originalBoard;\n};\n\nconst aiMove = () => {\n  let x = Math.floor(Math.random() * 10) + 1;\n  let y = Math.floor(Math.random() * 10) + 1;\n  let target = playerBoard.querySelector(`[data-h=\"${x}\"][data-v=\"${y}\"]`);\n  console.log(target);\n  if (\n    target.classList.value.includes(\"hit\") ||\n    target.classList.value.includes(\"miss\")\n  ) {\n    aiMove();\n  }\n  if (board[x - 1][y - 1] !== \"\") {\n    target.classList.add(\"hit\");\n  } else target.classList.add(\"miss\");\n};\n\nlet originalBoard = JSON.parse(JSON.stringify(opponentBoard));\n\nconst enemyShips = getEnemyBoard();\nconst performAttack = (e) => {\n  let board = enemyShips;\n\n  if (e.target.classList[0] !== \"modal-cell\") return;\n  let x = e.target.dataset.h - 1;\n  let y = e.target.dataset.v - 1;\n  if (typeof board[x][y] == \"object\") {\n    e.target.classList.add(\"hit\");\n  } else e.target.classList.add(\"miss\");\n  aiMove();\n  let winner = checkWinner();\n\n  if (winner) {\n    document.querySelector(\"[data-winner]\").innerHTML = winner;\n    endModal.classList.remove(\"hidden\");\n    overlay.classList.remove(\"hidden\");\n  }\n};\n\nconst checkWinner = () => {\n  const hits = enemyBoard.querySelectorAll(\".hit\").length;\n  const enemyHits = playerBoard.querySelectorAll(\".hit\").length;\n  if (hits == 17) return \"You won, you sunk all the enemy ships\";\n  if (enemyHits == 17) return \"You lost, all your ships have been sunk\";\n};\n\nconst restartGame = () => {\n  window.location.reload();\n};\n\nenemyBoard.addEventListener(\"click\", performAttack);\n\nwindow.setTimeout(populateGrid(shipGridContainer, board), 0);\nwindow.setTimeout(openModal, 500);\n\nrotateShip.addEventListener(\"click\", () => {\n  if (rotate) rotate = false;\n  else rotate = true;\n});\nmodal.addEventListener(\"click\", placeShip);\n\nbtnRestart.addEventListener(\"click\", restartGame);\n\nmodule.exports = board;\n\n\n//# sourceURL=webpack://odin-battleship/./src/shipPlacement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;