"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/MainPage",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _SidebarRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarRow */ \"./components/SidebarRow.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Sidebar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n  _s();\n\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_1__.auth.currentUser;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var GoToRequests = function GoToRequests() {\n    router.push(\"/FriendRequestsPage\");\n  }; // Renders the side bar and it's icons\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"p-2 mt-5 max-w-[600px] xl:min-w-[300px]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: GoToFriends,\n        children: window.location.pathname == \"/FriendsPage\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UsersIcon,\n          title: \"Friends\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 25\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UsersIcon,\n          title: \"Friends\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: GoToRequests,\n        children: window.location.pathname == \"/FriendRequestsPage\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.UserGroupIcon,\n          title: \"Friend Requests\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 25\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.UserGroupIcon,\n          title: \"Friend Requests\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Sidebar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU1MsT0FBVCxHQUFtQjtBQUFBOztBQUNmLE1BQU1DLElBQUksR0FBR0osdURBQWI7QUFDQSxNQUFNTSxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLHFCQUFaO0FBQ0gsR0FGRCxDQUplLENBUWY7OztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsV0FBL0I7QUFBQSxrQkFDS0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixJQUE0QixjQUE1QixnQkFDRyw4REFBQyxtREFBRDtBQUFZLGNBQUksRUFBRWQsNkRBQWxCO0FBQTZCLGVBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUdHLDhEQUFDLG1EQUFEO0FBQVksY0FBSSxFQUFFQSw2REFBbEI7QUFBNkIsZUFBSyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVVE7QUFBQSw2QkFDQTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRVMsWUFBL0I7QUFBQSxrQkFDS0csTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixJQUE0QixxQkFBNUIsZ0JBQ0csOERBQUMsbURBQUQ7QUFBWSxjQUFJLEVBQUVsQixtRUFBbEI7QUFBaUMsZUFBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZ0JBR0csOERBQUMsbURBQUQ7QUFBWSxjQUFJLEVBQUVBLG1FQUFsQjtBQUFpQyxlQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBL0JRUztVQUVVRDs7O0tBRlZDO0FBaUNULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz8zZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXNlckdyb3VwSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnR7XHJcbiAgICBDYWxlbmRhckljb24sXHJcbiAgICBDbG9ja0ljb24sXHJcbiAgICBEZXNrdG9wQ29tcHV0ZXJJY29uLFxyXG4gICAgVXNlcnNJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBTaWRlYmFyUm93IGZyb20gXCIuL1NpZGViYXJSb3dcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgR29Ub1JlcXVlc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0ZyaWVuZFJlcXVlc3RzUGFnZVwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmVuZGVycyB0aGUgc2lkZSBiYXIgYW5kIGl0J3MgaWNvbnNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgbXQtNSBtYXgtdy1bNjAwcHhdIHhsOm1pbi13LVszMDBweF1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e0dvVG9GcmllbmRzfT5cclxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL0ZyaWVuZHNQYWdlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyUm93IEljb249e1VzZXJzSWNvbn0gdGl0bGU9XCJGcmllbmRzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17VXNlcnNJY29ufSB0aXRsZT1cIkZyaWVuZHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17R29Ub1JlcXVlc3RzfT5cclxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL0ZyaWVuZFJlcXVlc3RzUGFnZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclJvdyBJY29uPXtVc2VyR3JvdXBJY29ufSB0aXRsZT1cIkZyaWVuZCBSZXF1ZXN0c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyUm93IEljb249e1VzZXJHcm91cEljb259IHRpdGxlPVwiRnJpZW5kIFJlcXVlc3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbIlVzZXJHcm91cEljb24iLCJDYWxlbmRhckljb24iLCJDbG9ja0ljb24iLCJEZXNrdG9wQ29tcHV0ZXJJY29uIiwiVXNlcnNJY29uIiwiU2lkZWJhclJvdyIsImF1dGgiLCJkYiIsInVzZVJvdXRlciIsIlNpZGViYXIiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJHb1RvUmVxdWVzdHMiLCJwdXNoIiwiR29Ub0ZyaWVuZHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});