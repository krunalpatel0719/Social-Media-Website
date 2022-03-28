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

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"Posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(\"timestamp\", \"desc\"))), 3), realtimePosts = ref[0], loading = ref[1], error = ref[2];\n    //orderBy(\"name\", \"desc\")\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(function(post) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                key_id: post.id,\n                name: post.data().username,\n                message: post.data().content,\n                uid: post.data().uid,\n                timestamp: post.data().timestamp,\n                likes: post.data().likes,\n                postImage: post.data().postImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Posts.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\components\\\\Posts.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n    {}\n}\n_s(Posts, \"hWlN6KBAv9EVKiOdWxaRMvBa/y0=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQzhCO0FBQ3JDO0FBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDbkRNLEtBQUssR0FBRyxDQUFDOzs7SUFDZCxHQUFLLENBQW9DTCxHQUUzQyxrQkFGMkNBLDZFQUFhLENBQ3RERyx5REFBSyxDQUFDRCw4REFBVSxDQUFDSCx5Q0FBRSxFQUFFLENBQU8sU0FBR0ssMkRBQU8sQ0FBQyxDQUFXLFlBQUUsQ0FBTSxjQURuREUsYUFBYSxHQUFxQk4sR0FFM0MsS0FGd0JPLE9BQU8sR0FBWVAsR0FFM0MsS0FGaUNRLEtBQUssR0FBS1IsR0FFM0M7SUFDRCxFQUF5QjtJQUV6QixNQUFNLDZFQUNIUyxDQUFHO2tCQUVGSCxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsYUFBYSxDQUFFSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7MEJBRXpCLE1BQU0sK0RBQUxYLDZDQUFJO2dCQUNIWSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFBRTtnQkFDZkMsSUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQUksR0FBR0MsUUFBUTtnQkFDMUJDLE9BQU8sRUFBRU4sSUFBSSxDQUFDSSxJQUFJLEdBQUdHLE9BQU87Z0JBQzVCQyxHQUFHLEVBQUlSLElBQUksQ0FBQ0ksSUFBSSxHQUFHSSxHQUFHO2dCQUN0QkMsU0FBUyxFQUFFVCxJQUFJLENBQUNJLElBQUksR0FBR0ssU0FBUztnQkFDaENDLEtBQUssRUFBSVYsSUFBSSxDQUFDSSxJQUFJLEdBQUdNLEtBQUs7Z0JBQzFCQyxTQUFTLEVBQUVYLElBQUksQ0FBQ0ksSUFBSSxHQUFHTyxTQUFTOzs7Ozs7Ozs7Ozs7SUFNMUMsQ0FBQyxDQTBCUTtBQUVYLENBQUM7R0FwRFNsQixLQUFLOztRQUMrQkwseUVBQWE7OztLQURqREssS0FBSztBQXNEZiwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMuanM/NzVkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgcXVlcnksIG9yZGVyQnl9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuIGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gICAgIGNvbnN0IFtyZWFsdGltZVBvc3RzLCBsb2FkaW5nLCBlcnJvcl0gPSAgdXNlQ29sbGVjdGlvbihcclxuICAgICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIlBvc3RzXCIpLCBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKSlcclxuICApO1xyXG4gIC8vb3JkZXJCeShcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIHtcclxuICAgICAgcmVhbHRpbWVQb3N0cz8uZG9jcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICBcclxuICAgICAgICAgIDxQb3N0XHJcbiAgICAgICAgICAgIGtleV9pZD17cG9zdC5pZH1cclxuICAgICAgICAgICAgbmFtZT17cG9zdC5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3Bvc3QuZGF0YSgpLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIHVpZCA9IHtwb3N0LmRhdGEoKS51aWR9XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcD17cG9zdC5kYXRhKCkudGltZXN0YW1wfVxyXG4gICAgICAgICAgICBsaWtlcyA9IHtwb3N0LmRhdGEoKS5saWtlc31cclxuICAgICAgICAgICAgcG9zdEltYWdlPXtwb3N0LmRhdGEoKS5wb3N0SW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgKSlcclxuICAgICB9XHJcbiAgPC9kaXY+KVxyXG4gIHsvKiBcclxuICAgIDxkaXY+XHJcbiAgICAgIHtyZWFsdGltZVBvc3RzXHJcbiAgICAgICAgPyBcclxuICAgICAgICByZWFsdGltZVBvc3RzPy5kb2NzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdFxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgICAgICBuYW1lPXtwb3N0LmRhdGEoKS51c2VybmFtZX1cclxuICAgICAgICAgICAgICBtZXNzYWdlPXtwb3N0LmRhdGEoKS5jb250ZW50fVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGltZXN0YW1wPXtwb3N0LmRhdGEoKS50aW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcG9zdEltYWdlPXtwb3N0LmRhdGEoKS5wb3N0SW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogcG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxQb3N0XHJcbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgIG5hbWU9e3Bvc3QudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgbWVzc2FnZT17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGltZXN0YW1wPXtwb3N0LnRpbWVzdGFtcH1cclxuICAgICAgICAgICAgICBwb3N0SW1hZ2U9e3Bvc3QucG9zdEltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAqL31cclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiXSwibmFtZXMiOlsiZGIiLCJ1c2VDb2xsZWN0aW9uIiwiUG9zdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJQb3N0cyIsInJlYWx0aW1lUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkaXYiLCJkb2NzIiwibWFwIiwicG9zdCIsImtleV9pZCIsImlkIiwibmFtZSIsImRhdGEiLCJ1c2VybmFtZSIsIm1lc3NhZ2UiLCJjb250ZW50IiwidWlkIiwidGltZXN0YW1wIiwibGlrZXMiLCJwb3N0SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts.js\n");

/***/ })

});