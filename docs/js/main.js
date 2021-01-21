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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.js */ \"./src/table.js\");\n/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst frameworkUrl = \"https://raw.githubusercontent.com/jujhars13/security-controls/master/data/controls.json\"\n\nfunction component() {\n  const element = document.getElementById('container');\n\n  const arr = ['Hello', 'webpack', 'test'];\n  element.innerHTML = arr.join(' ');\n\n  return element;\n}\n\ndocument.body.appendChild(component());\nconst tableDiv = document.getElementById('data-table');\n\nconst margin = { top: 100, right: 100, bottom: 100, left: 100 };\nconst width = Math.min(1024, window.innerWidth - 10) - margin.left - margin.right;\nconst height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);\nconst color = d3.scale.category10();\n// fetch the data and render  table\nfetch(frameworkUrl)\n  .then((response) => response.json())\n  .then((incoming) => {\n    //console.log(incoming);\n    const filteredData= incoming.filter(r=>r.source=='nist_csf_v1.1');\n\n    const radarChartOptions = {\n      width,\n      height,\n      margin,\n      maxValue: 1,\n      levels: 4, // how may rings\n      roundStrokes: true, // round or square edges\n      strokeWidth: 3, // The width of the stroke around each blob,\n      color,\n      legendLabelFontSize: 19\n    };\n\n    // render table\n    tableDiv.innerHTML = _table_js__WEBPACK_IMPORTED_MODULE_0__.renderTable(filteredData);\n\n  })\n  .catch((err) => console.error(err));\n\n\n//# sourceURL=webpack://security-frameworks/./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst renderTable = (data = {}) => {\n  console.log(data);\n  return \"<table><tr><td>test</td></tr></table>\";\n};\n\nmodule.exports = {\n  renderTable\n}\n\n\n//# sourceURL=webpack://security-frameworks/./src/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;