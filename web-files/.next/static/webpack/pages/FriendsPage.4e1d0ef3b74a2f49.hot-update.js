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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\FriendPosts.js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction FriendPosts() {\n  _s2();\n\n  var _this = this;\n\n  var user = _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      Array = _useState[0],\n      setArray = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _s, sfRef, collections, data, tempArray;\n\n    return C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!user) {\n              _context.next = 10;\n              break;\n            }\n\n            _s = $RefreshSig$();\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, 'Friends'), user.uid);\n            _context.next = 5;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(sfRef);\n\n          case 5:\n            collections = _context.sent;\n            data = collections.data();\n            tempArray = [];\n            console.log(data);\n            Object.keys(data).forEach(_s(function (usertags) {\n              _s();\n\n              var _useCollection = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"Posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"uid\", \"==\", usertags))),\n                  _useCollection2 = (0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCollection, 3),\n                  realtimePosts = _useCollection2[0],\n                  loading = _useCollection2[1],\n                  error = _useCollection2[2];\n\n              setArray(realtimePosts);\n              /** \r\n               tempArray.push( {\r\n                   key_id:{datas[\"id\"]},\r\n                   name:{datas[username]},\r\n                   message:{datas[content]},\r\n                   uid:{datas[uid]},\r\n                   timestamp:{datas[timestamp]},\r\n                   likes:{datas[likes]},\r\n                   postImage:{datas[postImage]}\r\n                 })\r\n                 */\n            }, \"hWlN6KBAv9EVKiOdWxaRMvBa/y0=\", false, function () {\n              return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection];\n            })); //setArray(tempArray)\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n    children: Array === null || Array === void 0 ? void 0 : Array.docs.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Post, {\n        key_id: post.id,\n        name: post.data().username,\n        message: post.data().content,\n        uid: post.data().uid,\n        timestamp: post.data().timestamp,\n        likes: post.data().likes,\n        postImage: post.data().postImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(FriendPosts, \"Tf0LBQqtxeo09E55zV9UX38g7zE=\");\n\n_c = FriendPosts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendPosts);\n\nvar _c;\n\n$RefreshReg$(_c, \"FriendPosts\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZyaWVuZFBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUMsU0FBUzBCLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFFcEIsTUFBTVgsSUFBSSxHQUFHRCx1REFBYjs7QUFFQSxrQkFBMEJkLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU80QixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQTVCLEVBQUFBLGdEQUFTLHdWQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSGMsSUFERztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVJZSxZQUFBQSxLQUZKLEdBRVlyQix1REFBRyxDQUFDTCw4REFBVSxDQUFDUyx5Q0FBRCxFQUFJLFNBQUosQ0FBWCxFQUEyQkUsSUFBSSxDQUFDZ0IsR0FBaEMsQ0FGZjtBQUFBO0FBQUEsbUJBR3dCbkIsMERBQU0sQ0FBQ2tCLEtBQUQsQ0FIOUI7O0FBQUE7QUFHSUUsWUFBQUEsV0FISjtBQUlJQyxZQUFBQSxJQUpKLEdBSVdELFdBQVcsQ0FBQ0MsSUFBWixFQUpYO0FBS0lDLFlBQUFBLFNBTEosR0FLZ0IsRUFMaEI7QUFNRkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlMLElBQVosRUFBa0JNLE9BQWxCLElBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUFBOztBQUNwQyxtQ0FBeUNsQiw2RUFBYSxDQUNsRGpCLHlEQUFLLENBQUNELDhEQUFVLENBQUNTLHlDQUFELEVBQUssT0FBTCxDQUFYLEVBQTBCTix5REFBSyxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWNpQyxRQUFkLENBQS9CLENBRDZDLENBQXREO0FBQUE7QUFBQSxrQkFBT0MsYUFBUDtBQUFBLGtCQUFzQkMsT0FBdEI7QUFBQSxrQkFBK0JDLEtBQS9COztBQUlBZCxjQUFBQSxRQUFRLENBQUNZLGFBQUQsQ0FBUjtBQUNEO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFYSxhQWxCRDtBQUFBLHNCQUM2Q25CLHlFQUQ3QztBQUFBLGdCQVBFLENBMkJGOztBQTNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBOEJKLEVBOUJJLENBQVQ7QUFnQ0Ysc0JBQ0U7QUFBQSxjQUVFTSxLQUZGLGFBRUVBLEtBRkYsdUJBRUVBLEtBQUssQ0FBRWxCLElBQVAsQ0FBWWtDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDBCQUVkLCtEQUFDLElBQUQ7QUFDRSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsRUFEZjtBQUVFLFlBQUksRUFBRUQsSUFBSSxDQUFDWixJQUFMLEdBQVljLFFBRnBCO0FBR0UsZUFBTyxFQUFFRixJQUFJLENBQUNaLElBQUwsR0FBWWUsT0FIdkI7QUFJRSxXQUFHLEVBQUlILElBQUksQ0FBQ1osSUFBTCxHQUFZRixHQUpyQjtBQUtFLGlCQUFTLEVBQUVjLElBQUksQ0FBQ1osSUFBTCxHQUFZZ0IsU0FMekI7QUFNRSxhQUFLLEVBQUlKLElBQUksQ0FBQ1osSUFBTCxHQUFZaUIsS0FOdkI7QUFPRSxpQkFBUyxFQUFFTCxJQUFJLENBQUNaLElBQUwsR0FBWWtCO0FBUHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGYztBQUFBLEtBQWhCO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztJQXpEU3pCOztLQUFBQTtBQTJEViwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZyaWVuZFBvc3RzLmpzP2VmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4vSW5wdXRCb3hcIjtcclxuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgY29sbGVjdGlvbixcclxuICBxdWVyeSxcclxuICBvcmRlckJ5LFxyXG4gIHdoZXJlLFxyXG4gIHVwZGF0ZURvYyxcclxuICBkb2MsXHJcbiAgZG9jcyxcclxuICBzZXREb2MsXHJcbiAgZ2V0RG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsICB1c2VyfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgZ2V0QXV0aCxcclxuIFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduT3V0LFxyXG4gICAgZGVsZXRlVXNlciwgXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcblxyXG5pbXBvcnQgeyBQZW5jaWxJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuXHJcbiBmdW5jdGlvbiBGcmllbmRQb3N0cygpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuXHJcbiAgICBjb25zdCBbQXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNmUmVmID0gZG9jKGNvbGxlY3Rpb24oZGIsJ0ZyaWVuZHMnKSwgdXNlci51aWQpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IGdldERvYyhzZlJlZik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2xsZWN0aW9ucy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCh1c2VydGFncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JlYWx0aW1lUG9zdHMsIGxvYWRpbmcsIGVycm9yXSA9ICB1c2VDb2xsZWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiUG9zdHNcIiksIHdoZXJlKFwidWlkXCIsIFwiPT1cIiwgdXNlcnRhZ3MpKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0QXJyYXkocmVhbHRpbWVQb3N0cyk7XHJcbiAgICAgICAgICAgICAgIC8qKiBcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5X2lkOntkYXRhc1tcImlkXCJdfSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOntkYXRhc1t1c2VybmFtZV19LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6e2RhdGFzW2NvbnRlbnRdfSxcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6e2RhdGFzW3VpZF19LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDp7ZGF0YXNbdGltZXN0YW1wXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZXM6e2RhdGFzW2xpa2VzXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdEltYWdlOntkYXRhc1twb3N0SW1hZ2VdfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vc2V0QXJyYXkodGVtcEFycmF5KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtdKVxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgIEFycmF5Py5kb2NzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxQb3N0XHJcbiAgICAgICAgICBrZXlfaWQ9e3Bvc3QuaWR9XHJcbiAgICAgICAgICBuYW1lPXtwb3N0LmRhdGEoKS51c2VybmFtZX1cclxuICAgICAgICAgIG1lc3NhZ2U9e3Bvc3QuZGF0YSgpLmNvbnRlbnR9XHJcbiAgICAgICAgICB1aWQgPSB7cG9zdC5kYXRhKCkudWlkfVxyXG4gICAgICAgICAgdGltZXN0YW1wPXtwb3N0LmRhdGEoKS50aW1lc3RhbXB9XHJcbiAgICAgICAgICBsaWtlcyA9IHtwb3N0LmRhdGEoKS5saWtlc31cclxuICAgICAgICAgIHBvc3RJbWFnZT17cG9zdC5kYXRhKCkucG9zdEltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICkpXHJcbiAgICAgfVxyXG4gIDwvZGl2PilcclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRQb3N0czsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dEJveCIsIlBvc3RzIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwib3JkZXJCeSIsIndoZXJlIiwidXBkYXRlRG9jIiwiZG9jIiwiZG9jcyIsInNldERvYyIsImdldERvYyIsImRiIiwiYXV0aCIsInVzZXIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZGVsZXRlVXNlciIsInVzZUNvbGxlY3Rpb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkVkaXRJY29uIiwiUGVuY2lsSWNvbiIsIkZyaWVuZFBvc3RzIiwiY3VycmVudFVzZXIiLCJBcnJheSIsInNldEFycmF5Iiwic2ZSZWYiLCJ1aWQiLCJjb2xsZWN0aW9ucyIsImRhdGEiLCJ0ZW1wQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ1c2VydGFncyIsInJlYWx0aW1lUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXAiLCJwb3N0IiwiaWQiLCJ1c2VybmFtZSIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJsaWtlcyIsInBvc3RJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FriendPosts.js\n");

/***/ })

});