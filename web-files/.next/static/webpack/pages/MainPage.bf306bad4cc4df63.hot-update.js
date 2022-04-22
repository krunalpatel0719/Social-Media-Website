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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _SidebarRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarRow */ \"./components/SidebarRow.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\Sidebar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n  _s();\n\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_1__.auth.currentUser;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var GoToRequests = function GoToRequests() {\n    router.push(\"/FriendRequestsPage\");\n  };\n\n  var GoToFriends = function GoToFriends() {\n    router.push(\"/FriendsPage\");\n  }; // Renders the side bar and it's icons\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"p-2 mt-5 max-w-[600px] xl:min-w-[300px]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: GoToFriends,\n      children: window.location.pathname == \"/FriendsPage\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UsersIcon,\n        title: \"Friends\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UsersIcon,\n        title: \"Friends\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: GoToRequests,\n      children: window.location.pathname == \"/FriendRequestsPage\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.UserGroupIcon,\n        title: \"Friend Requests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.UserGroupIcon,\n        title: \"Friend Requests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Sidebar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU1MsT0FBVCxHQUFtQjtBQUFBOztBQUNmLE1BQU1DLElBQUksR0FBR0osdURBQWI7QUFDQSxNQUFNTSxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLHFCQUFaO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCSCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxjQUFaO0FBQ0gsR0FGRCxDQVJlLENBWWY7OztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsNEJBQ0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDLFdBQS9CO0FBQUEsZ0JBQ0tDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsY0FBNUIsZ0JBQ0csOERBQUMsbURBQUQ7QUFBWSxZQUFJLEVBQUVkLDZEQUFsQjtBQUE2QixhQUFLLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQUdHLDhEQUFDLG1EQUFEO0FBQVksWUFBSSxFQUFFQSw2REFBbEI7QUFBNkIsYUFBSyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFTSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRVMsWUFBL0I7QUFBQSxnQkFDS0csTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixJQUE0QixxQkFBNUIsZ0JBQ0csOERBQUMsbURBQUQ7QUFBWSxZQUFJLEVBQUVsQixtRUFBbEI7QUFBaUMsYUFBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFHRyw4REFBQyxtREFBRDtBQUFZLFlBQUksRUFBRUEsbUVBQWxCO0FBQWlDLGFBQUssRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQWhDUVM7VUFFVUQ7OztLQUZWQztBQWtDVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJHcm91cEljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0e1xyXG4gICAgQ2FsZW5kYXJJY29uLFxyXG4gICAgQ2xvY2tJY29uLFxyXG4gICAgRGVza3RvcENvbXB1dGVySWNvbixcclxuICAgIFVzZXJzSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgU2lkZWJhclJvdyBmcm9tIFwiLi9TaWRlYmFyUm93XCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IEdvVG9SZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9GcmllbmRSZXF1ZXN0c1BhZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgR29Ub0ZyaWVuZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvRnJpZW5kc1BhZ2VcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbmRlcnMgdGhlIHNpZGUgYmFyIGFuZCBpdCdzIGljb25zXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG10LTUgbWF4LXctWzYwMHB4XSB4bDptaW4tdy1bMzAwcHhdXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e0dvVG9GcmllbmRzfT5cclxuICAgICAgICAgICAgICAgIHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvRnJpZW5kc1BhZ2VcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclJvdyBJY29uPXtVc2Vyc0ljb259IHRpdGxlPVwiRnJpZW5kc1wiLz5cclxuICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclJvdyBJY29uPXtVc2Vyc0ljb259IHRpdGxlPVwiRnJpZW5kc1wiLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17R29Ub1JlcXVlc3RzfT5cclxuICAgICAgICAgICAgICAgIHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvRnJpZW5kUmVxdWVzdHNQYWdlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17VXNlckdyb3VwSWNvbn0gdGl0bGU9XCJGcmllbmQgUmVxdWVzdHNcIi8+XHJcbiAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17VXNlckdyb3VwSWNvbn0gdGl0bGU9XCJGcmllbmQgUmVxdWVzdHNcIi8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiVXNlckdyb3VwSWNvbiIsIkNhbGVuZGFySWNvbiIsIkNsb2NrSWNvbiIsIkRlc2t0b3BDb21wdXRlckljb24iLCJVc2Vyc0ljb24iLCJTaWRlYmFyUm93IiwiYXV0aCIsImRiIiwidXNlUm91dGVyIiwiU2lkZWJhciIsInVzZXIiLCJjdXJyZW50VXNlciIsInJvdXRlciIsIkdvVG9SZXF1ZXN0cyIsInB1c2giLCJHb1RvRnJpZW5kcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});