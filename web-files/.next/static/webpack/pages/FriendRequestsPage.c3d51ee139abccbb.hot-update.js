"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FriendRequestsPage",{

/***/ "./components/Request.js":
/*!*******************************!*\
  !*** ./components/Request.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\Request.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Request(_ref) {\n  _s();\n\n  var key_id = _ref.key_id;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      bio = _useState[0],\n      setBio = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      name = _useState3[0],\n      setName = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      age = _useState4[0],\n      setAge = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      gender = _useState5[0],\n      setGender = _useState5[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var sfRef, collections, data;\n    return C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!_firebase__WEBPACK_IMPORTED_MODULE_6__.user) {\n              _context.next = 13;\n              break;\n            }\n\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, 'Users'), key_id);\n            _context.next = 4;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(sfRef);\n\n          case 4:\n            collections = _context.sent;\n            console.log(collections.data());\n            data = collections.data();\n            setBio(data.bio);\n            setUsername(data.username);\n            setName(data.data().first_name + \" \" + data.data().last_name);\n            console.log(name);\n            setAge(data.age);\n            setGender(data.gender);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n    children: [\"Pushin P \", key_id, \" \", name]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Request, \"n+s+f0itNckKUxXW2BNws0Fo0qk=\");\n\n_c = Request;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\n\nvar _c;\n\n$RefreshReg$(_c, \"Request\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0EsU0FBU3dCLE9BQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBRXRCLGtCQUFzQnpCLCtDQUFRLEVBQTlCO0FBQUEsTUFBTzBCLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFnQzNCLCtDQUFRLEVBQXhDO0FBQUEsTUFBTzRCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXdCN0IsK0NBQVEsRUFBaEM7QUFBQSxNQUFPOEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQXNCL0IsK0NBQVEsRUFBOUI7QUFBQSxNQUFPZ0MsR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQTRCakMsK0NBQVEsRUFBcEM7QUFBQSxNQUFPa0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUVsQyxFQUFBQSxnREFBUyx3VkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTFksMkNBREs7QUFBQTtBQUFBO0FBQUE7O0FBRUV1QixZQUFBQSxLQUZGLEdBRVUzQix1REFBRyxDQUFDTCw4REFBVSxDQUFDUSx5Q0FBRCxFQUFJLE9BQUosQ0FBWCxFQUF5QmEsTUFBekIsQ0FGYjtBQUFBO0FBQUEsbUJBR3NCZCwwREFBTSxDQUFDeUIsS0FBRCxDQUg1Qjs7QUFBQTtBQUdFQyxZQUFBQSxXQUhGO0FBSUpDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFXLENBQUNHLElBQVosRUFBWjtBQUNNQSxZQUFBQSxJQUxGLEdBS1NILFdBQVcsQ0FBQ0csSUFBWixFQUxUO0FBTUpiLFlBQUFBLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDZCxHQUFOLENBQU47QUFDQUcsWUFBQUEsV0FBVyxDQUFDVyxJQUFJLENBQUNaLFFBQU4sQ0FBWDtBQUNBRyxZQUFBQSxPQUFPLENBQUNTLElBQUksQ0FBQ0EsSUFBTCxHQUFZQyxVQUFaLEdBQXlCLEdBQXpCLEdBQStCRCxJQUFJLENBQUNBLElBQUwsR0FBWUUsU0FBNUMsQ0FBUDtBQUNBSixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWjtBQUNBRyxZQUFBQSxNQUFNLENBQUNPLElBQUksQ0FBQ1IsR0FBTixDQUFOO0FBQ0FHLFlBQUFBLFNBQVMsQ0FBQ0ssSUFBSSxDQUFDTixNQUFOLENBQVQ7O0FBWEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFUO0FBZUYsc0JBQ0k7QUFBQSw0QkFBYVQsTUFBYixPQUFzQkssSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0ExQlFOOztLQUFBQTtBQTRCVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3QuanM/MzQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi9JbnB1dEJveFwiO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4vUG9zdHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uLFxyXG4gIHF1ZXJ5LFxyXG4gIG9yZGVyQnksXHJcbiAgd2hlcmUsXHJcbiAgdXBkYXRlRG9jLFxyXG4gIGRvYyxcclxuICBzZXREb2MsXHJcbiAgZ2V0RG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIsIHVzZXJ9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBnZXRBdXRoLFxyXG4gXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25PdXQsXHJcbiAgICBkZWxldGVVc2VyLCBcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuXHJcbmltcG9ydCB7IFBlbmNpbEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3Qoe2tleV9pZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2ZSZWYgPSBkb2MoY29sbGVjdGlvbihkYiwnVXNlcnMnKSwga2V5X2lkKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSBhd2FpdCBnZXREb2Moc2ZSZWYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xsZWN0aW9ucy5kYXRhKCkpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2xsZWN0aW9ucy5kYXRhKCk7XHJcbiAgICAgICAgICAgIHNldEJpbyhkYXRhLmJpbyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBzZXROYW1lKGRhdGEuZGF0YSgpLmZpcnN0X25hbWUgKyBcIiBcIiArIGRhdGEuZGF0YSgpLmxhc3RfbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgICAgICBzZXRBZ2UoZGF0YS5hZ2UpO1xyXG4gICAgICAgICAgICBzZXRHZW5kZXIoZGF0YS5nZW5kZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHA+UHVzaGluIFAge2tleV9pZH0ge25hbWV9PC9wPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dEJveCIsIlBvc3RzIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwib3JkZXJCeSIsIndoZXJlIiwidXBkYXRlRG9jIiwiZG9jIiwic2V0RG9jIiwiZ2V0RG9jIiwiZGIiLCJ1c2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImRlbGV0ZVVzZXIiLCJ1c2VDb2xsZWN0aW9uIiwiQWNjb3VudENpcmNsZUljb24iLCJFZGl0SWNvbiIsIlBlbmNpbEljb24iLCJSZXF1ZXN0Iiwia2V5X2lkIiwiYmlvIiwic2V0QmlvIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIm5hbWUiLCJzZXROYW1lIiwiYWdlIiwic2V0QWdlIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwic2ZSZWYiLCJjb2xsZWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Request.js\n");

/***/ })

});