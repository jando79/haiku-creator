/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_haiku_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/haiku.js */ \"./src/js/haiku.js\");\n/* harmony import */ var _js_haiku_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/haiku-generator.js */ \"./src/js/haiku-generator.js\");\n\n\n\n\nfunction handleFormSubmission() {\n  const haiku = new _js_haiku_js__WEBPACK_IMPORTED_MODULE_0__[\"Haiku\"]();\n  event.preventDefault();\n  let input = document.getElementById(\"input\").value;\n  let linesNumber = haiku.Lines(input);\n  if (linesNumber !== 3) {\n    document.getElementById(\"result\").innerText = \"Please add 3 lines\";\n  }\n  else if (haiku.ifHaiku(input) === true) {\n    document.getElementById(\"result\").innerText = \"Congratulations! Your haiku is beautiful!\";\n  }\n  else {\n    document.getElementById(\"result\").innerText = \"It's not a haiku, please try again!\";\n  }\n}\n\nfunction createHaiku() {\n  event.preventDefault();\n  let randomHaiku = Object(_js_haiku_generator_js__WEBPACK_IMPORTED_MODULE_1__[\"haikuGenerator\"])();\n  document.getElementById(\"line1\").innerText = randomHaiku[0];\n  document.getElementById(\"line2\").innerText = randomHaiku[1];\n  document.getElementById(\"line3\").innerText = randomHaiku[2];\n}\n\nwindow.addEventListener(\"load\", function () {\n  document.querySelector(\"form#new-form\").addEventListener(\"submit\", handleFormSubmission);\n  document.getElementById(\"generate\").addEventListener(\"click\", createHaiku);\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDbUI7OztBQUd6RDtBQUNBLG9CQUFvQixrREFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDZFQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYWlrdSB9IGZyb20gJy4vanMvaGFpa3UuanMnO1xuaW1wb3J0IHsgaGFpa3VHZW5lcmF0b3IgfSBmcm9tICcuL2pzL2hhaWt1LWdlbmVyYXRvci5qcyc7XG5cblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGNvbnN0IGhhaWt1ID0gbmV3IEhhaWt1KCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIikudmFsdWU7XG4gIGxldCBsaW5lc051bWJlciA9IGhhaWt1LkxpbmVzKGlucHV0KTtcbiAgaWYgKGxpbmVzTnVtYmVyICE9PSAzKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuaW5uZXJUZXh0ID0gXCJQbGVhc2UgYWRkIDMgbGluZXNcIjtcbiAgfVxuICBlbHNlIGlmIChoYWlrdS5pZkhhaWt1KGlucHV0KSA9PT0gdHJ1ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLmlubmVyVGV4dCA9IFwiQ29uZ3JhdHVsYXRpb25zISBZb3VyIGhhaWt1IGlzIGJlYXV0aWZ1bCFcIjtcbiAgfVxuICBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS5pbm5lclRleHQgPSBcIkl0J3Mgbm90IGEgaGFpa3UsIHBsZWFzZSB0cnkgYWdhaW4hXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGFpa3UoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCByYW5kb21IYWlrdSA9IGhhaWt1R2VuZXJhdG9yKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIikuaW5uZXJUZXh0ID0gcmFuZG9tSGFpa3VbMF07XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIikuaW5uZXJUZXh0ID0gcmFuZG9tSGFpa3VbMV07XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIikuaW5uZXJUZXh0ID0gcmFuZG9tSGFpa3VbMl07XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI25ldy1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVIYWlrdSk7XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/haiku-generator.js":
/*!***********************************!*\
  !*** ./src/js/haiku-generator.js ***!
  \***********************************/
/*! exports provided: haikuGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"haikuGenerator\", function() { return haikuGenerator; });\nlet fiveSyllables = ['Roses are so red', 'Delightful display', 'To the suns glory', 'Her eyes, Primroses', 'When you die you die', 'David has children', 'Water once again', 'Snow of yesterday', 'Was it but a dream?', 'Elliot also', 'And Olivia'];\nlet sevenSyllables = ['In the morning I get up', 'Snowdrops bow their pure white heads', 'That fell like cherry blossoms', 'Woven in the heavy mist', 'A frog jumps into the pond', 'The white flag of surrender', 'Along a sidewalk café', 'Turning to sun and to seed', 'One blue egg all summer long', 'Fabulous floral worlds bloom', 'In the backyard swimming pool'];\n\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min);\n}\n\nfunction haikuGenerator() {\n  let randomHaiku = [];\n  randomHaiku.push(fiveSyllables[getRandomInt(0, fiveSyllables.length - 1)]);\n  randomHaiku.push(sevenSyllables[getRandomInt(0, sevenSyllables.length - 1)]);\n  randomHaiku.push(fiveSyllables[getRandomInt(0, fiveSyllables.length - 1)]);\n  return randomHaiku;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGFpa3UtZ2VuZXJhdG9yLmpzPzNiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvanMvaGFpa3UtZ2VuZXJhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGZpdmVTeWxsYWJsZXMgPSBbJ1Jvc2VzIGFyZSBzbyByZWQnLCAnRGVsaWdodGZ1bCBkaXNwbGF5JywgJ1RvIHRoZSBzdW5zIGdsb3J5JywgJ0hlciBleWVzLCBQcmltcm9zZXMnLCAnV2hlbiB5b3UgZGllIHlvdSBkaWUnLCAnRGF2aWQgaGFzIGNoaWxkcmVuJywgJ1dhdGVyIG9uY2UgYWdhaW4nLCAnU25vdyBvZiB5ZXN0ZXJkYXknLCAnV2FzIGl0IGJ1dCBhIGRyZWFtPycsICdFbGxpb3QgYWxzbycsICdBbmQgT2xpdmlhJ107XG5sZXQgc2V2ZW5TeWxsYWJsZXMgPSBbJ0luIHRoZSBtb3JuaW5nIEkgZ2V0IHVwJywgJ1Nub3dkcm9wcyBib3cgdGhlaXIgcHVyZSB3aGl0ZSBoZWFkcycsICdUaGF0IGZlbGwgbGlrZSBjaGVycnkgYmxvc3NvbXMnLCAnV292ZW4gaW4gdGhlIGhlYXZ5IG1pc3QnLCAnQSBmcm9nIGp1bXBzIGludG8gdGhlIHBvbmQnLCAnVGhlIHdoaXRlIGZsYWcgb2Ygc3VycmVuZGVyJywgJ0Fsb25nIGEgc2lkZXdhbGsgY2Fmw6knLCAnVHVybmluZyB0byBzdW4gYW5kIHRvIHNlZWQnLCAnT25lIGJsdWUgZWdnIGFsbCBzdW1tZXIgbG9uZycsICdGYWJ1bG91cyBmbG9yYWwgd29ybGRzIGJsb29tJywgJ0luIHRoZSBiYWNreWFyZCBzd2ltbWluZyBwb29sJ107XG5cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYWlrdUdlbmVyYXRvcigpIHtcbiAgbGV0IHJhbmRvbUhhaWt1ID0gW107XG4gIHJhbmRvbUhhaWt1LnB1c2goZml2ZVN5bGxhYmxlc1tnZXRSYW5kb21JbnQoMCwgZml2ZVN5bGxhYmxlcy5sZW5ndGggLSAxKV0pO1xuICByYW5kb21IYWlrdS5wdXNoKHNldmVuU3lsbGFibGVzW2dldFJhbmRvbUludCgwLCBzZXZlblN5bGxhYmxlcy5sZW5ndGggLSAxKV0pO1xuICByYW5kb21IYWlrdS5wdXNoKGZpdmVTeWxsYWJsZXNbZ2V0UmFuZG9tSW50KDAsIGZpdmVTeWxsYWJsZXMubGVuZ3RoIC0gMSldKTtcbiAgcmV0dXJuIHJhbmRvbUhhaWt1O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/haiku-generator.js\n");

/***/ }),

/***/ "./src/js/haiku.js":
/*!*************************!*\
  !*** ./src/js/haiku.js ***!
  \*************************/
/*! exports provided: Haiku */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Haiku\", function() { return Haiku; });\nclass Haiku {\n\n  constructor(input) {\n    this.input = input;\n  }\n\n  countInstances(string, word){\n    return (string).split(word).length - 1;\n  }\n\n  Lines(input){\n    if (this.countInstances(input, \"\\n\") === 2) {\n      return 3;\n    }\n  }\n\n  Vowel(input) {\n    if (this.countInstances(input, 'a') === 0 && this.countInstances(input, 'e') === 0 && this.countInstances(input, 'i') === 0 && this.countInstances(input, 'o') === 0 && this.countInstances(input, 'u') === 0 && this.countInstances(input, 'u') === 0) {\n      return false;\n    }\n    else {\n      return true;\n    }\n  }\n\n  Rule1(input) {\n    let array = input.split(\"\");\n    let vowelCount = 0;\n    const allVowels = [\"a\", \"o\", \"e\", \"i\", \"u\", \"y\", \"A\", \"O\", \"E\", \"I\", \"U\", \"Y\"];\n    allVowels.forEach((element) => {\n      if (this.countInstances(input, element) > 0) {\n        vowelCount = vowelCount + this.countInstances(input, element);\n      }\n    });\n\n    let diphCount = 0;\n    const diphVowels = [\"oo\", \"ui\", \"ea\", \"ay\", \"ae\", \"oi\", \"ou\", \"oa\", \"ee\", \"ai\", \"eau\", \"oy\", \"ey\", \"ye\", \"ei\", \"you\", \"ya\"];\n    diphVowels.forEach((element) => {\n      if (this.countInstances(input, element) > 0) {\n        diphCount = diphCount + this.countInstances(input, element);\n      }\n    });\n\n    if (array[array.length - 1] === 'e'  && vowelCount > 1 && array[array.length - 2] !== 'l' && array[array.length - 2] !== 'e' && array[array.length - 2] !== 'a') {\n      return vowelCount - diphCount - 1;\n    }\n    else {\n      return vowelCount - diphCount;\n    }\n  }\n\n  BreakIntoLines(input) {\n    let outputArray = [];\n    let indexOf = input.indexOf(\"\\n\");\n    outputArray.push(input.slice(0, indexOf));\n    input = input.slice(indexOf + 1, input.length);\n    indexOf = input.indexOf(\"\\n\");\n    outputArray.push(input.slice(0, indexOf));\n    input = input.slice(indexOf + 1, input.length);\n    outputArray.push(input);\n    return outputArray;\n  }\n\n  CountSyllables(input) {\n    let words = input.split(\" \");\n    let totalCount = 0;\n    words.forEach((element) => {\n      totalCount = totalCount + this.Rule1(element);\n    });\n    return totalCount;\n  }\n\n  ifHaiku(input) {\n    if (this.Lines(input) === 3) {\n      let finalArray = [];\n      let newArray = this.BreakIntoLines(input);\n      newArray.forEach((element) => {\n        finalArray.push(this.CountSyllables(element));\n      });\n      if (finalArray.toString() === '5,7,5') {\n        return true;\n      }\n      else {\n        return false;\n      }\n    }\n    else {\n      return false;\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGFpa3UuanM/NzhmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9qcy9oYWlrdS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIYWlrdSB7XG5cbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gIH1cblxuICBjb3VudEluc3RhbmNlcyhzdHJpbmcsIHdvcmQpe1xuICAgIHJldHVybiAoc3RyaW5nKS5zcGxpdCh3b3JkKS5sZW5ndGggLSAxO1xuICB9XG5cbiAgTGluZXMoaW5wdXQpe1xuICAgIGlmICh0aGlzLmNvdW50SW5zdGFuY2VzKGlucHV0LCBcIlxcblwiKSA9PT0gMikge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICB9XG5cbiAgVm93ZWwoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5jb3VudEluc3RhbmNlcyhpbnB1dCwgJ2EnKSA9PT0gMCAmJiB0aGlzLmNvdW50SW5zdGFuY2VzKGlucHV0LCAnZScpID09PSAwICYmIHRoaXMuY291bnRJbnN0YW5jZXMoaW5wdXQsICdpJykgPT09IDAgJiYgdGhpcy5jb3VudEluc3RhbmNlcyhpbnB1dCwgJ28nKSA9PT0gMCAmJiB0aGlzLmNvdW50SW5zdGFuY2VzKGlucHV0LCAndScpID09PSAwICYmIHRoaXMuY291bnRJbnN0YW5jZXMoaW5wdXQsICd1JykgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBSdWxlMShpbnB1dCkge1xuICAgIGxldCBhcnJheSA9IGlucHV0LnNwbGl0KFwiXCIpO1xuICAgIGxldCB2b3dlbENvdW50ID0gMDtcbiAgICBjb25zdCBhbGxWb3dlbHMgPSBbXCJhXCIsIFwib1wiLCBcImVcIiwgXCJpXCIsIFwidVwiLCBcInlcIiwgXCJBXCIsIFwiT1wiLCBcIkVcIiwgXCJJXCIsIFwiVVwiLCBcIllcIl07XG4gICAgYWxsVm93ZWxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvdW50SW5zdGFuY2VzKGlucHV0LCBlbGVtZW50KSA+IDApIHtcbiAgICAgICAgdm93ZWxDb3VudCA9IHZvd2VsQ291bnQgKyB0aGlzLmNvdW50SW5zdGFuY2VzKGlucHV0LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBkaXBoQ291bnQgPSAwO1xuICAgIGNvbnN0IGRpcGhWb3dlbHMgPSBbXCJvb1wiLCBcInVpXCIsIFwiZWFcIiwgXCJheVwiLCBcImFlXCIsIFwib2lcIiwgXCJvdVwiLCBcIm9hXCIsIFwiZWVcIiwgXCJhaVwiLCBcImVhdVwiLCBcIm95XCIsIFwiZXlcIiwgXCJ5ZVwiLCBcImVpXCIsIFwieW91XCIsIFwieWFcIl07XG4gICAgZGlwaFZvd2Vscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jb3VudEluc3RhbmNlcyhpbnB1dCwgZWxlbWVudCkgPiAwKSB7XG4gICAgICAgIGRpcGhDb3VudCA9IGRpcGhDb3VudCArIHRoaXMuY291bnRJbnN0YW5jZXMoaW5wdXQsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID09PSAnZScgICYmIHZvd2VsQ291bnQgPiAxICYmIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdICE9PSAnbCcgJiYgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl0gIT09ICdlJyAmJiBhcnJheVthcnJheS5sZW5ndGggLSAyXSAhPT0gJ2EnKSB7XG4gICAgICByZXR1cm4gdm93ZWxDb3VudCAtIGRpcGhDb3VudCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHZvd2VsQ291bnQgLSBkaXBoQ291bnQ7XG4gICAgfVxuICB9XG5cbiAgQnJlYWtJbnRvTGluZXMoaW5wdXQpIHtcbiAgICBsZXQgb3V0cHV0QXJyYXkgPSBbXTtcbiAgICBsZXQgaW5kZXhPZiA9IGlucHV0LmluZGV4T2YoXCJcXG5cIik7XG4gICAgb3V0cHV0QXJyYXkucHVzaChpbnB1dC5zbGljZSgwLCBpbmRleE9mKSk7XG4gICAgaW5wdXQgPSBpbnB1dC5zbGljZShpbmRleE9mICsgMSwgaW5wdXQubGVuZ3RoKTtcbiAgICBpbmRleE9mID0gaW5wdXQuaW5kZXhPZihcIlxcblwiKTtcbiAgICBvdXRwdXRBcnJheS5wdXNoKGlucHV0LnNsaWNlKDAsIGluZGV4T2YpKTtcbiAgICBpbnB1dCA9IGlucHV0LnNsaWNlKGluZGV4T2YgKyAxLCBpbnB1dC5sZW5ndGgpO1xuICAgIG91dHB1dEFycmF5LnB1c2goaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXRBcnJheTtcbiAgfVxuXG4gIENvdW50U3lsbGFibGVzKGlucHV0KSB7XG4gICAgbGV0IHdvcmRzID0gaW5wdXQuc3BsaXQoXCIgXCIpO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcbiAgICB3b3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0b3RhbENvdW50ID0gdG90YWxDb3VudCArIHRoaXMuUnVsZTEoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsQ291bnQ7XG4gIH1cblxuICBpZkhhaWt1KGlucHV0KSB7XG4gICAgaWYgKHRoaXMuTGluZXMoaW5wdXQpID09PSAzKSB7XG4gICAgICBsZXQgZmluYWxBcnJheSA9IFtdO1xuICAgICAgbGV0IG5ld0FycmF5ID0gdGhpcy5CcmVha0ludG9MaW5lcyhpbnB1dCk7XG4gICAgICBuZXdBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGZpbmFsQXJyYXkucHVzaCh0aGlzLkNvdW50U3lsbGFibGVzKGVsZW1lbnQpKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZpbmFsQXJyYXkudG9TdHJpbmcoKSA9PT0gJzUsNyw1Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/haiku.js\n");

/***/ })

/******/ });