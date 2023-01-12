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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// window.addEventListener('DOMContentLoaded', ()=>{\n//   let board = [\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//     [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n//   ];\n//   document.getElementById('ship-placement-grid').\n// });\n\nconst playerBoard = document.getElementById(\"board-container\");\n// const addShip = (cell) => {\n//   return cell.addEventListener(\"click\", (e) => {\n//     board[cell.dataset.x][cell.dataset.y] = shipFactory();\n//   });\n// };\n\n// const placeShip =\nconst Gameboard = () => {\n  let board = [\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n  ];\n  let x = 0;\n  let y = 0;\n  board.forEach((column) => {\n    x++;\n    y = 0;\n    column.forEach((row) => {\n      y++;\n      let cell = document.createElement(\"div\");\n      cell.dataset.x = x;\n      cell.dataset.y = y;\n      cell.addEventListener(\"click\", (e) => {\n        // cell.style.backgroundColor = \"gray\";\n        cell.classList.add(\"ship\");\n        board[cell.dataset.x][cell.dataset.y] = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(1);\n        console.log(board);\n      });\n\n      // addShip(cell, board);\n      playerBoard.appendChild(cell);\n    });\n  });\n\n  const receiveAttack = (x, y) => {\n    // board[]\n  };\n\n  return board;\n};\n\nGameboard();\n\n// const addShip = (cell) => {\n//   return cell.addEventListener(\"click\", (e) => {\n//     board[cell.dataset.x][cell.dataset.y] = shipFactory();\n//   });\n// };\n// const gameBoard = boardFactory();\n\n//create a modal that asks the user to place the ships on a grid\n//when all the ships were placed, pass the newly created gameboard to the gameboard fn\n//\n\n\n//# sourceURL=webpack://odin-battleship/./src/main.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const shipFactory = (length, hits = 0) => {\n  const hit = () => hits++;\n  const isSunk = () => {\n    if (length <= hits) return true;\n    return false;\n  };\n  return { length, hits, isSunk, hit };\n};\n\n// let ship = shipFactory(4);\n// const newShip = shipFactory(5, 2, false);\n// console.log(ship.hit());\n// console.log(ship.isSunk());\n// console.log(ship.hit());\n// console.log(ship.hit());\n// console.log(ship.hit());\n// console.log(ship.hit());\n// console.log(ship.isSunk());\n\n// // ship.hit()\n// // console.log(personFactory(\"oleks\", 27));\n\n// export { shipFactory };\n\nmodule.exports = shipFactory;\n\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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