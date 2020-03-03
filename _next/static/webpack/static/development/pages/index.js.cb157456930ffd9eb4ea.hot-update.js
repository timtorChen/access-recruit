webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/timtor/dev/access-recruit/src/components/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      pageCount = _ref.pageCount,
      displayRange = _ref.displayRange,
      marginRange = _ref.marginRange,
      onPageChange = _ref.onPageChange,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["page", "pageCount", "displayRange", "marginRange", "onPageChange"]);

  var isEnd = page === pageCount;
  var isFist = page === 1;
  var nextPage = isEnd ? pageCount : page + 1;
  var prevPage = isFist ? 1 : page - 1;
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), !isFist ? __jsx("button", {
    onClick: function onClick() {
      onPageChange(prevPage);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, '<') : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, page), !isEnd ? __jsx("button", {
    onClick: function onClick() {
      onPageChange(nextPage);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, '>') : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=index.js.cb157456930ffd9eb4ea.hot-update.js.map