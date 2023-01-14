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

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const shipFactory = (length, hits = 0) => {\n  const hit = () => hits++;\n  const isSunk = () => {\n    if (length <= hits) return true;\n    return false;\n  };\n  return { length, hits, isSunk, hit };\n};\n\nmodule.exports = shipFactory;\n\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

/***/ }),

/***/ "./src/shipPlacement.js":
/*!******************************!*\
  !*** ./src/shipPlacement.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipFactory = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst startGame = document.getElementById(\"startGame\");\nconst shipGridContainer = document.getElementById(\"ship-placement-grid\");\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst playerBoard = document.getElementById(\"board-container\");\nconst enemyBoard = document.getElementById(\"enemy-board-container\");\nconst shipName = document.querySelector(\"[data-ship-name]\");\nshipName.innerHTML = \"Carrier\";\n\nconst closeModal = function () {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n  populateGrid(playerBoard, board);\n  populateGrid(enemyBoard, board);\n};\n\nconst openModal = () => {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\nlet board = [\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n];\n\nconst populateGrid = (container, board) => {\n  console.log(container);\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = document.createElement(\"div\");\n\n      cell.dataset.h = i + 1;\n      cell.dataset.v = j + 1;\n      cell.classList.add(\"modal-cell\");\n\n      if (typeof board[i][j] == \"object\") cell.classList.add(\"ship\");\n      container.appendChild(cell);\n    }\n  }\n};\nconst placeShip = (e) => {\n  let target = e.target;\n  if (target.classList.value == \"modal-cell\") {\n    for (let i = 0; i < 5; i++) {\n      // let rotate = true;\n\n      board[target.dataset.h - 1][target.dataset.v - 1] = shipFactory(5);\n      console.log(target);\n      target.classList.add(\"ship\");\n      let next = target.nextSibling;\n      target = next;\n    }\n    console.log(board);\n  }\n};\n\nwindow.setTimeout(populateGrid(shipGridContainer, board), 0);\nwindow.setTimeout(openModal, 500);\n\nstartGame.addEventListener(\"click\", closeModal);\nmodal.addEventListener(\"click\", placeShip);\n\n// modal.addEventListener(\"click\", (e) => {\n//   if (e.target.classList.value == \"modal-cell\") {\n//     sh++;\n//     // shipName.innerHTML = ships[sh];\n//     let ships = [\n//       \"Carrier\",\n//       \"Battleship\",\n//       \"Destroyer\",\n//       \"Submarine\",\n//       \"Patrol Boat\",\n//     ];\n//     shipName.innerHTML = ships[sh];\n\n//     // console.log(e.target.dataset.h);\n//     // console.log(e.target.dataset.v);\n//     let current = e.target;\n//     if (sh == 1) {\n//       for (let i = 0; i < 5; i++) {\n//         let targetCell = document.querySelector(`[data-]`);\n//         console.log();\n//         // let current = e.target;\n//         board[e.target.dataset.h - 1][e.target.dataset.v - 1 + i] =\n//           shipFactory(5);\n//         current.classList.add(\"ship\");\n//         current.classList.add(\"carrier\");\n//         let next = current.nextSibling;\n//         current = next;\n//       }\n//     } else if (sh == 2) {\n//       for (let i = 0; i < 4; i++) {\n//         // let current = e.target;\n//         board[e.target.dataset.h - 1][e.target.dataset.v - 1 + i] =\n//           shipFactory(4);\n//         current.classList.add(\"ship\");\n//         current.classList.add(\"battleship\");\n//         let next = current.nextSibling;\n//         current = next;\n//       }\n//     } else if (sh == 3) {\n//       for (let i = 0; i < 3; i++) {\n//         // let current = e.target;\n//         board[e.target.dataset.h - 1][e.target.dataset.v - 1 + i] =\n//           shipFactory(3);\n//         current.classList.add(\"ship\");\n//         current.classList.add(\"destroyer\");\n//         let next = current.nextSibling;\n//         current = next;\n//       }\n//     } else if (sh == 4) {\n//       for (let i = 0; i < 3; i++) {\n//         // let current = e.target;\n//         board[e.target.dataset.h - 1][e.target.dataset.v - 1 + i] =\n//           shipFactory(3);\n//         current.classList.add(\"ship\");\n//         current.classList.add(\"submarine\");\n//         let next = current.nextSibling;\n//         current = next;\n//       }\n//     } else if (sh == 5) {\n//       for (let i = 0; i < 2; i++) {\n//         // let current = e.target;\n//         board[e.target.dataset.h - 1][e.target.dataset.v - 1 + i] =\n//           shipFactory(2);\n//         current.classList.add(\"ship\");\n//         current.classList.add(\"patrolBoat\");\n//         let next = current.nextSibling;\n//         current = next;\n//       }\n//     }\n//     // console.log(board);\n//   } else return;\n// });\n\nmodule.exports = board;\n\n\n//# sourceURL=webpack://odin-battleship/./src/shipPlacement.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/shipPlacement.js");
/******/ 	
/******/ })()
;