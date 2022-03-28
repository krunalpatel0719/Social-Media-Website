"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/SettingsPage",{

/***/ "./components/AccountInfo.js":
/*!***********************************!*\
  !*** ./components/AccountInfo.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction AccountInfo(param) {\n    var posts = param.posts;\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\n    var user1 = auth.currentUser;\n    //where the real magic will happen//\n    console.log(user1.email);\n    var ref = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('email', \"==\", user1.email))), 3), userInfo = ref[0], loading = ref[1], error = ref[2];\n    var name;\n    var email;\n    var username;\n    userInfo === null || userInfo === void 0 ? void 0 : userInfo.docs.map(function(data) {\n        return name = data.data().first_name + data.data().last_name, email = data.data().email, username = data.data().username;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-grow pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-md md:max-w-lg lg:max-w-2xl \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"profilepic? (maybe who knows?)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"email (noneditable)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"bio (editable)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"age (editable)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"gender (editable) \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"delete account button (require confirmation)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\AccountInfo.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this));\n}\n_s(AccountInfo, \"/lg0oudjrWTLl/P9aBHvuSj0nwk=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection\n    ];\n});\n_c = AccountInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountInfo);\nvar _c;\n$RefreshReg$(_c, \"AccountInfo\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY291bnRJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDTjtBQUN5QztBQUM5QjtBQUMwRjtBQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXJEYyxXQUFXLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSzs7SUFDeEIsR0FBSyxDQUFDQyxJQUFJLEdBQUdQLHNEQUFPO0lBQ3BCLEdBQUssQ0FBQ0YsS0FBSSxHQUFHUyxJQUFJLENBQUNDLFdBQVc7SUFDN0IsRUFBb0M7SUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixLQUFJLENBQUNhLEtBQUs7SUFDdEIsR0FBSyxDQUErQlAsR0FFbEMsa0JBRmtDQSw2RUFBYSxDQUM3Q1YseURBQUssQ0FBQ0QsOERBQVUsQ0FBQ0kseUNBQUUsRUFBRSxDQUFPLFNBQUdELHlEQUFLLENBQUMsQ0FBTyxRQUFFLENBQUksS0FBRUUsS0FBSSxDQUFDYSxLQUFLLFNBRDNEQyxRQUFRLEdBQXFCUixHQUVsQyxLQUZlUyxPQUFPLEdBQVlULEdBRWxDLEtBRndCVSxLQUFLLEdBQUtWLEdBRWxDO0lBQ0YsR0FBRyxDQUFDVyxJQUFJO0lBQ1IsR0FBRyxDQUFDSixLQUFLO0lBQ1QsR0FBRyxDQUFDSyxRQUFRO0lBQ1hKLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUssSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO1FBQUssTUFDL0IsQ0FBSUosSUFBSSxHQUFHSSxJQUFJLENBQUNBLElBQUksR0FBR0MsVUFBVSxHQUFHRCxJQUFJLENBQUNBLElBQUksR0FBR0UsU0FBUyxFQUNyRFYsS0FBSyxHQUFHUSxJQUFJLENBQUNBLElBQUksR0FBR1IsS0FBSyxFQUN6QkssUUFBUSxHQUFHRyxJQUFJLENBQUNBLElBQUksR0FBR0gsUUFBUTs7SUFHbEMsTUFBTSw2RUFDRE0sQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FDVzs4RkFDckJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTRDOzs0RkFDdERDLENBQUM7OEJBQUVULElBQUk7Ozs7Ozs0RkFDUFMsQ0FBQzs4QkFBQyxDQUE4Qjs7Ozs7OzRGQUNoQ0EsQ0FBQzs4QkFBQyxDQUFtQjs7Ozs7OzRGQUNyQkEsQ0FBQzs4QkFBQyxDQUFjOzs7Ozs7NEZBQ2hCQSxDQUFDOzhCQUFDLENBQWM7Ozs7Ozs0RkFDaEJBLENBQUM7OEJBQUMsQ0FBa0I7Ozs7Ozs0RkFDcEJBLENBQUM7OEJBQUMsQ0FBNEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9ELENBQUM7R0EvQlFuQixXQUFXOztRQUtvQkQseUVBQWE7OztLQUw1Q0MsV0FBVztBQWlDcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50SW5mby5qcz8yNjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi9JbnB1dEJveFwiXHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiO1xyXG5pbXBvcnQge2NvbGxlY3Rpb24sIHF1ZXJ5LCBvcmRlckJ5LCB3aGVyZX0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiwgdXNlciB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gQWNjb3VudEluZm8oeyBwb3N0cyB9KSB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICAvL3doZXJlIHRoZSByZWFsIG1hZ2ljIHdpbGwgaGFwcGVuLy9cclxuICAgIGNvbnNvbGUubG9nKHVzZXIuZW1haWwpO1xyXG4gICAgY29uc3QgW3VzZXJJbmZvLCBsb2FkaW5nLCBlcnJvcl0gPSAgdXNlQ29sbGVjdGlvbihcclxuICAgICAgICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIlVzZXJzXCIpLCB3aGVyZSgnZW1haWwnLCBcIj09XCIsIHVzZXIuZW1haWwpKVxyXG4gICAgICk7XHJcbiAgICBsZXQgbmFtZTtcclxuICAgIGxldCBlbWFpbDtcclxuICAgIGxldCB1c2VybmFtZTtcclxuICAgICB1c2VySW5mbz8uZG9jcy5tYXAoKGRhdGEpID0+IChcclxuICAgICAgIG5hbWUgPSBkYXRhLmRhdGEoKS5maXJzdF9uYW1lICsgZGF0YS5kYXRhKCkubGFzdF9uYW1lLFxyXG4gICAgICAgZW1haWwgPSBkYXRhLmRhdGEoKS5lbWFpbCxcclxuICAgICAgIHVzZXJuYW1lID0gZGF0YS5kYXRhKCkudXNlcm5hbWVcclxuICAgICAgKSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgIHBiLTQ0IHB0LTYgbXItNFxyXG4gICAgICAgIHhsOm1yLTQwIG92ZXJmbG93LXktYXV0byBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LW1kIG1kOm1heC13LWxnIGxnOm1heC13LTJ4bCBcIj5cclxuICAgICAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnByb2ZpbGVwaWM/IChtYXliZSB3aG8ga25vd3M/KTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmVtYWlsIChub25lZGl0YWJsZSk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5iaW8gKGVkaXRhYmxlKTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmFnZSAoZWRpdGFibGUpPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Z2VuZGVyIChlZGl0YWJsZSkgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZGVsZXRlIGFjY291bnQgYnV0dG9uIChyZXF1aXJlIGNvbmZpcm1hdGlvbik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50SW5mbyJdLCJuYW1lcyI6WyJJbnB1dEJveCIsIlBvc3RzIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwib3JkZXJCeSIsIndoZXJlIiwiZGIiLCJ1c2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsInVzZUNvbGxlY3Rpb24iLCJBY2NvdW50SW5mbyIsInBvc3RzIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwidXNlckluZm8iLCJsb2FkaW5nIiwiZXJyb3IiLCJuYW1lIiwidXNlcm5hbWUiLCJkb2NzIiwibWFwIiwiZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AccountInfo.js\n");

/***/ })

});