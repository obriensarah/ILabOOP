webpackHotUpdate("static/development/pages/name.js",{

/***/ "./comps/EscButtonLayout.js":
/*!**********************************!*\
  !*** ./comps/EscButtonLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sarahobrien/Desktop/ILabOOP/next_app/comps/EscButtonLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var layoutStyle = {
  backgroundColor: 'red',
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

var Layout = function Layout(props) {
  return __jsx("div", {
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    id: "esc",
    style: layoutStyle,
    onClick: Close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Escape"));
};

function Close() {
  window.location.replace('google.com'); // console.log("closing.");
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=name.js.152f9917e0f3726f67a5.hot-update.js.map