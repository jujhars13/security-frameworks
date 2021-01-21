/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("//import * as table from \"./table.js\";\n\nconst frameworkUrl=\"\"\nfunction component() {\n  const element = document.getElementById('container');\n\n  const arr = ['Hello', 'webpack', 'test'];\n  element.innerHTML = arr.join(' ');\n\n  return element;\n\n}\n\ndocument.body.appendChild(component());\n\nconst margin = { top: 100, right: 100, bottom: 100, left: 100 };\nconst width = Math.min(1024, window.innerWidth - 10) - margin.left - margin.right;\nconst height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);\nconst color = d3.scale.category10();\n// fetch the data and render  table\nfetch(\"/data.json\")\n  .then((response) => response.json())\n  .then((rawData) => {\n    const headings = Object.values(rawData.headings);\n    const data = Object.values(rawData.principles);\n    const radarChartOptions = {\n      width,\n      height,\n      margin,\n      maxValue: 1,\n      levels: 4, // how may rings\n      roundStrokes: true, // round or square edges\n      strokeWidth: 3, // The width of the stroke around each blob,\n      color,\n      legendLabelFontSize: 19\n    };\n    \n    // render table\n    //table.generateTable(\".framework-table\", headings, data, radarChartOptions);\n  })\n  .catch((err) => console.error);\n\n//# sourceURL=webpack://security-frameworks/./src/index.js?");
/******/ })()
;