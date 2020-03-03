webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/timtor/dev/access-recruit/src/components/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      pageCount = _ref.pageCount,
      displayRange = _ref.displayRange,
      marginRange = _ref.marginRange,
      onPageChange = _ref.onPageChange;
  var isEnd = page === pageCount;
  var isFist = page === 1;
  var nextPage = isEnd ? pageCount : page + 1;
  var prevPage = isFist ? 1 : page - 1;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, !isFist ? __jsx("button", {
    onClick: function onClick() {
      onPageChange(prevPage);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, '<') : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, page), !isEnd ? __jsx("button", {
    onClick: function onClick() {
      onPageChange(nextPage);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, '>') : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=index.js.e8b183a5aff55ba0ba9c.hot-update.js.map