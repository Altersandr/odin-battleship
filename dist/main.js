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

eval("const shipFactory = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst startGame = document.getElementById(\"startGame\");\nconst shipGridContainer = document.getElementById(\"ship-placement-grid\");\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst playerBoard = document.getElementById(\"board-container\");\nconst enemyBoard = document.getElementById(\"enemy-board-container\");\nconst shipName = document.querySelector(\"[data-ship-name]\");\nshipName.innerHTML = \"Carrier\";\n\nconst closeModal = function () {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n  populateGrid(playerBoard, board);\n  populateGrid(\n    enemyBoard,\n    [\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", shipFactory(5), \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", shipFactory(5), \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", shipFactory(5), \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n      [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    ],\n    false\n  );\n};\n\nconst openModal = () => {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\nlet board = [\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n];\n\nconst populateGrid = (container, board, isSeen = true) => {\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = document.createElement(\"div\");\n\n      cell.dataset.h = i + 1;\n      cell.dataset.v = j + 1;\n      cell.classList.add(\"modal-cell\");\n\n      if (typeof board[i][j] == \"object\" && isSeen) cell.classList.add(\"ship\");\n      container.appendChild(cell);\n    }\n  }\n};\n\nconst ships = [\n  { name: \"Carrier\", size: 5 },\n  { name: \"Battleship\", size: 4 },\n  { name: \"Destroyer\", size: 3 },\n  { name: \"Submarine\", size: 3 },\n  { name: \"Patrol Boat\", size: 2 },\n];\n\nlet size = ships[0].size;\nlet n = 1;\n\nconst placeShip = (e) => {\n  let target = e.target;\n  // console.log(target.dataset.h + 1);\n\n  if (target.dataset.v - 1 >= 6) return;\n  if (target.classList.value == \"modal-cell\") {\n    for (let i = 0; i < size; i++) {\n      let rotate = true;\n      board[target.dataset.h - 1][target.dataset.v - 1] = shipFactory(size);\n      target.classList.add(\"ship\");\n      let next = target.nextSibling;\n      target = next;\n    }\n    if (n >= 5) return closeModal();\n    size = ships[n].size;\n    shipName.innerHTML = ships[n].name;\n    n++;\n  }\n  console.log(board);\n};\n\nconst performAttack = (e) => {\n  let board = [\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", shipFactory(5), \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", shipFactory(5), \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", shipFactory(5), \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  ];\n  // console.log(board);\n  if (e.target.classList[0] !== \"modal-cell\") return;\n  let x = e.target.dataset.h - 1;\n  let y = e.target.dataset.v - 1;\n  if (typeof board[x][y] == \"object\") {\n    let totalHits = board[x][y].hits;\n    board[x][y].hits = totalHits + 1;\n    //how do i even make this work\n    e.target.classList.add(\"ship\");\n  } else e.target.classList.add(\"miss\");\n  // console.log(board[x][y]);\n  // console.log(board[x][y].hits++);\n};\n\nenemyBoard.addEventListener(\"click\", performAttack);\n\nwindow.setTimeout(populateGrid(shipGridContainer, board), 0);\nwindow.setTimeout(openModal, 500);\n\nstartGame.addEventListener(\"click\", closeModal);\nmodal.addEventListener(\"click\", placeShip);\n\nmodule.exports = board;\n\n\n//# sourceURL=webpack://odin-battleship/./src/shipPlacement.js?");

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