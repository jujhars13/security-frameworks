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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.js */ \"./src/table.js\");\n/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst frameworkUrl = \"https://raw.githubusercontent.com/jujhars13/security-controls/master/data/controls.json\"\n\nconst tableDiv = document.getElementById('data-table');\n\n// fetch the data and render table\nfetch(frameworkUrl)\n  .then((response) => response.json())\n  .then((incoming) => {\n\n    // render table\n    _table_js__WEBPACK_IMPORTED_MODULE_0__.renderTable(tableDiv, incoming.filter(r => r.source == 'nist_csf_v1.1'), { 'caption': 'NIST CSF 1.1' });\n\n  })\n  .catch((err) => console.error(err));\n\n\n//# sourceURL=webpack://security-frameworks/./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/***/ (function(module) {

eval("\nconst renderTable = (domId, data = {}, options = undefined) => {\n  const cfg = { sortAscending: true, caption: \"\" };\n\n  // Put all of the options into cfg\n  if (typeof options !== \"undefined\") {\n    for (let i in options) {\n      if (typeof options[i] !== \"undefined\") {\n        cfg[i] = options[i];\n      }\n    }\n  }\n\n  const table = d3.select(domId).append(\"table\").attr(\"id\", \"rendered-table\").attr(\"class\", \"table table-striped table-bordered \");\n  table.append(\"caption\").text(cfg.caption);\n\n  const headings = [\n    { head: \"id\" },\n    { head: \"title\" },\n    { head: \"description\" },\n    { head: \"seq\" }\n  ];\n\n  // table headers\n  table\n    .append(\"thead\")\n    .attr(\"class\", \"thead-dark\")\n    .append(\"tr\")\n    .selectAll(\"th\")\n    .data(headings).enter()\n    .append(\"th\")\n    .attr(\"class\", \"header\")\n    .text((d) => d.head)\n    // sort headers\n    .on(\"click\", (d) => {\n      console.log('set');\n      if (cfg.sortAscending) {\n        rows.sort((a, b) => d3.ascending(Object.values(b)[0].value, Object.values(a)[0].value));\n        cfg.sortAscending = false;\n        this.className = \"aes\";\n      } else {\n        rows.sort((a, b) => d3.descending(Object.values(b)[0].value, Object.values(a)[0].value));\n        cfg.sortAscending = true;\n        this.className = \"des\";\n      }\n    });\n\n  // render rows\n  const rows = table.append(\"tbody\").attr(\"class\", \"\").selectAll(\"tr\").data(data).enter().append(\"tr\");\n  rows\n    .selectAll(\"td\")\n    .data(data => {\n      return headings.map((heading) => {\n        let row = Object.assign({}, data);\n        row.text = data[heading.head];\n\n        // override the raw Id field\n        if (heading.head == 'id') {\n          row.text = data.id_raw;\n        }\n\n        return row;\n      })\n    }).enter()\n    .append(\"td\")\n    .text((d) => d.text)\n    .attr('data-source', d => d.source)\n\n\n  return table;\n};\n\nmodule.exports = {\n  renderTable\n}\n\n\n//# sourceURL=webpack://security-frameworks/./src/table.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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