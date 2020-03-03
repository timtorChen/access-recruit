webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/UserGrid.js":
/*!************************************!*\
  !*** ./src/components/UserGrid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/timtor/dev/access-recruit/src/components/UserGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserGrid__Wrapper",
  componentId: "sc-1c1bspi-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-gap:25px;justify-content:space-evenly;padding:20px;"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserGrid__User",
  componentId: "sc-1c1bspi-1"
})(["margin:auto;"]);
var Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "UserGrid__Head",
  componentId: "sc-1c1bspi-2"
})(["cursor:pointer;border-radius:50%;height:80px;"]);
var UserName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserGrid__UserName",
  componentId: "sc-1c1bspi-3"
})(["display:inline-block;margin:auto;"]);
var Badge = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserGrid__Badge",
  componentId: "sc-1c1bspi-4"
})(["display:inline-block;"]);

var UserGrid = function UserGrid(_ref) {
  var _ref$users = _ref.users,
      users = _ref$users === void 0 ? [] : _ref$users,
      onUserClick = _ref.onUserClick;
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, users.map(function (user, index) {
    return __jsx(User, {
      key: index,
      onClick: function onClick() {
        onUserClick(user);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(Head, {
      src: user.headUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(UserName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, user.username), !user.badge ? __jsx(Badge, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "\uD83D\uDC51\uFE0F") : null));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserGrid);

/***/ })

})
//# sourceMappingURL=index.js.c01fd52b817a11f2a823.hot-update.js.map