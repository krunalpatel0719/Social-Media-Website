"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FriendsPage",{

/***/ "./components/FriendPosts.js":
/*!***********************************!*\
  !*** ./components/FriendPosts.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\FriendPosts.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FriendPosts() {\n  _s();\n\n  var _realtimePosts,\n      _this = this;\n\n  var user = auth.currentUser;\n\n  var _useState = useState([]),\n      _useState2 = (0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      Array = _useState2[0],\n      setArray = _useState2[1];\n\n  useEffect( /*#__PURE__*/(0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var sfRef, collections, data, tempArray;\n    return C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!user) {\n              _context.next = 10;\n              break;\n            }\n\n            sfRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'Friends'), user.uid);\n            _context.next = 4;\n            return getDoc(sfRef);\n\n          case 4:\n            collections = _context.sent;\n            data = collections.data();\n            tempArray = [];\n            console.log(data);\n            Object.keys(data).forEach(function (usertags) {\n              console.log(usertags);\n              tempArray.push({\n                key_id: usertags\n              });\n            });\n            setArray(tempArray);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    children: (_realtimePosts = realtimePosts) === null || _realtimePosts === void 0 ? void 0 : _realtimePosts.docs.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        key_id: post.id,\n        name: post.data().username,\n        message: post.data().content,\n        uid: post.data().uid,\n        timestamp: post.data().timestamp,\n        likes: post.data().likes,\n        postImage: post.data().postImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FriendPosts, \"Tf0LBQqtxeo09E55zV9UX38g7zE=\");\n\n_c = FriendPosts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendPosts);\n\nvar _c;\n\n$RefreshReg$(_c, \"FriendPosts\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZyaWVuZFBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxTQUFTTSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7QUFBQTs7QUFFcEIsTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFdBQWxCOztBQUVBLGtCQUEwQkMsUUFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBQyxFQUFBQSxTQUFTLHdWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNITixJQURHO0FBQUE7QUFBQTtBQUFBOztBQUVJTyxZQUFBQSxLQUZKLEdBRVlDLEdBQUcsQ0FBQ1osOERBQVUsQ0FBQ0gseUNBQUQsRUFBSSxTQUFKLENBQVgsRUFBMkJPLElBQUksQ0FBQ1MsR0FBaEMsQ0FGZjtBQUFBO0FBQUEsbUJBR3dCQyxNQUFNLENBQUNILEtBQUQsQ0FIOUI7O0FBQUE7QUFHSUksWUFBQUEsV0FISjtBQUlJQyxZQUFBQSxJQUpKLEdBSVdELFdBQVcsQ0FBQ0MsSUFBWixFQUpYO0FBS0lDLFlBQUFBLFNBTEosR0FLZ0IsRUFMaEI7QUFNRkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlMLElBQVosRUFBa0JNLE9BQWxCLENBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUNyQ0wsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFDQU4sY0FBQUEsU0FBUyxDQUFDTyxJQUFWLENBQWdCO0FBQ2ZDLGdCQUFBQSxNQUFNLEVBQUNGO0FBRFEsZUFBaEI7QUFJRixhQU5EO0FBUUFkLFlBQUFBLFFBQVEsQ0FBQ1EsU0FBRCxDQUFSOztBQWZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFpQkosRUFqQkksQ0FBVDtBQW1CRixzQkFDRTtBQUFBLGdDQUVFUyxhQUZGLG1EQUVFLGVBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSwwQkFFcEIsOERBQUMsNkNBQUQ7QUFDRSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsRUFEZjtBQUVFLFlBQUksRUFBRUQsSUFBSSxDQUFDYixJQUFMLEdBQVllLFFBRnBCO0FBR0UsZUFBTyxFQUFFRixJQUFJLENBQUNiLElBQUwsR0FBWWdCLE9BSHZCO0FBSUUsV0FBRyxFQUFJSCxJQUFJLENBQUNiLElBQUwsR0FBWUgsR0FKckI7QUFLRSxpQkFBUyxFQUFFZ0IsSUFBSSxDQUFDYixJQUFMLEdBQVlpQixTQUx6QjtBQU1FLGFBQUssRUFBSUosSUFBSSxDQUFDYixJQUFMLEdBQVlrQixLQU52QjtBQU9FLGlCQUFTLEVBQUVMLElBQUksQ0FBQ2IsSUFBTCxHQUFZbUI7QUFQekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZvQjtBQUFBLEtBQXhCO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQTVDU2hDOztLQUFBQTtBQThDViwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZyaWVuZFBvc3RzLmpzP2VmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xyXG5pbXBvcnQge2NvbGxlY3Rpb24sIHF1ZXJ5LCBvcmRlckJ5fSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbiBmdW5jdGlvbiBGcmllbmRQb3N0cygpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuXHJcbiAgICBjb25zdCBbQXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNmUmVmID0gZG9jKGNvbGxlY3Rpb24oZGIsJ0ZyaWVuZHMnKSwgdXNlci51aWQpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IGdldERvYyhzZlJlZik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2xsZWN0aW9ucy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCh1c2VydGFncykgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VydGFncyk7XHJcbiAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICBrZXlfaWQ6dXNlcnRhZ3NcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldEFycmF5KHRlbXBBcnJheSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtdKVxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgIHJlYWx0aW1lUG9zdHM/LmRvY3MubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8UG9zdFxyXG4gICAgICAgICAgICBrZXlfaWQ9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgIG5hbWU9e3Bvc3QuZGF0YSgpLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtwb3N0LmRhdGEoKS5jb250ZW50fVxyXG4gICAgICAgICAgICB1aWQgPSB7cG9zdC5kYXRhKCkudWlkfVxyXG4gICAgICAgICAgICB0aW1lc3RhbXA9e3Bvc3QuZGF0YSgpLnRpbWVzdGFtcH1cclxuICAgICAgICAgICAgbGlrZXMgPSB7cG9zdC5kYXRhKCkubGlrZXN9XHJcbiAgICAgICAgICAgIHBvc3RJbWFnZT17cG9zdC5kYXRhKCkucG9zdEltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICkpXHJcbiAgICAgfVxyXG4gIDwvZGl2PilcclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRQb3N0czsiXSwibmFtZXMiOlsiZGIiLCJ1c2VDb2xsZWN0aW9uIiwiUG9zdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJGcmllbmRQb3N0cyIsInVzZXIiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsIkFycmF5Iiwic2V0QXJyYXkiLCJ1c2VFZmZlY3QiLCJzZlJlZiIsImRvYyIsInVpZCIsImdldERvYyIsImNvbGxlY3Rpb25zIiwiZGF0YSIsInRlbXBBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInVzZXJ0YWdzIiwicHVzaCIsImtleV9pZCIsInJlYWx0aW1lUG9zdHMiLCJkb2NzIiwibWFwIiwicG9zdCIsImlkIiwidXNlcm5hbWUiLCJjb250ZW50IiwidGltZXN0YW1wIiwibGlrZXMiLCJwb3N0SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FriendPosts.js\n");

/***/ })

});