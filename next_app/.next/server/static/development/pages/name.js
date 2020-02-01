module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/FormLayout.js":
/*!*****************************!*\
  !*** ./comps/FormLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NextButtonLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextButtonLayout */ "./comps/NextButtonLayout.js");
/* harmony import */ var _PrevButtonLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrevButtonLayout */ "./comps/PrevButtonLayout.js");
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/FormLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const layoutStyle = {
  textAlign: 'center'
};

const Layout = props => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.children, __jsx(_PrevButtonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_NextButtonLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/InputLayout.js":
/*!******************************!*\
  !*** ./comps/InputLayout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/InputLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  textAlign: 'center',
  margin: '5vh',
  height: '5vh',
  width: '25vw',
  fontSize: '4vh',
  fontFamily: "Trebuchet MS"
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("input", {
  style: layoutStyle,
  type: "text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/NextButtonLayout.js":
/*!***********************************!*\
  !*** ./comps/NextButtonLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/NextButtonLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  backgroundColor: 'gray',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '3vh',
  borderRadius: '50%',
  width: '10vw',
  margin: '5vh',
  fontFamily: "Trebuchet MS"
};

const Layout = props => __jsx("div", {
  style: {
    display: 'inline-block'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("button", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Next"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/PrevButtonLayout.js":
/*!***********************************!*\
  !*** ./comps/PrevButtonLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/PrevButtonLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  backgroundColor: 'gray',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '3vh',
  borderRadius: '50%',
  width: '10vw',
  margin: '5vh',
  fontFamily: "Trebuchet MS"
};

const Layout = props => __jsx("div", {
  style: {
    display: 'inline-block'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("button", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Previous"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/QuestionLayout.js":
/*!*********************************!*\
  !*** ./comps/QuestionLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/QuestionLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  textAlign: 'center',
  fontSize: '10vh',
  color: 'dimgray',
  fontFamily: "Trebuchet MS",
  margin: '5vh',
  marginTop: '25vh'
};

const Layout = props => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/name.js":
/*!***********************!*\
  !*** ./pages/name.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Name; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/FormLayout */ "./comps/FormLayout.js");
/* harmony import */ var _comps_QuestionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/QuestionLayout */ "./comps/QuestionLayout.js");
/* harmony import */ var _comps_InputLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/InputLayout */ "./comps/InputLayout.js");
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/pages/name.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Name() {
  return __jsx(_comps_FormLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-592836427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_comps_QuestionLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h", {
    className: "jsx-592836427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "What is your name?")), __jsx(_comps_InputLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "592836427",
    __self: this
  }, ".submit.jsx-592836427:{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaG9icmllbi9EZXNrdG9wL0lMYWJPT1AvbmV4dF9hcHAvcGFnZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhYyxBQUU4QixjQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zYXJhaG9icmllbi9EZXNrdG9wL0lMYWJPT1AvbmV4dF9hcHAvcGFnZXMvbmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvRm9ybUxheW91dCdcbmltcG9ydCBRdWVzdGlvbkxheW91dCBmcm9tICcuLi9jb21wcy9RdWVzdGlvbkxheW91dCdcbmltcG9ydCBJbnB1dExheW91dCBmcm9tICcuLi9jb21wcy9JbnB1dExheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmFtZSgpIHtcbiAgcmV0dXJuIChcblx0PExheW91dD5cblx0ICAgIDxmb3JtPlxuXHRcdCAgPFF1ZXN0aW9uTGF5b3V0PlxuXHRcdCAgXHQ8aD5XaGF0IGlzIHlvdXIgbmFtZT88L2g+XG5cdFx0ICA8L1F1ZXN0aW9uTGF5b3V0PlxuXHRcdCAgPElucHV0TGF5b3V0IC8+XG5cdFx0PC9mb3JtPlxuXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN1Ym1pdDp7ZGlzcGxheTpibG9jayB9XG4gICAgICBgfTwvc3R5bGU+XG5cdDwvTGF5b3V0PlxuICApO1xuIHJldHVybiAoXG4gXHQ8TGF5b3V0IC8+XG4gKTtcbn0iXX0= */\n/*@ sourceURL=/Users/sarahobrien/Desktop/ILabOOP/next_app/pages/name.js */"));
  return __jsx(_comps_FormLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
}

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/name.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahobrien/Desktop/ILabOOP/next_app/pages/name.js */"./pages/name.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=name.js.map