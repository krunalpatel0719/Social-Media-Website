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

/***/ "./components/Requests.js":
/*!********************************!*\
  !*** ./components/Requests.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputBox */ \"./components/InputBox.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Request */ \"./components/Request.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Sam\\\\Documents\\\\GitHub\\\\Group-2\\\\web-files\\\\components\\\\Requests.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Requests(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  // Handles the requests for friends \n  var user = _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser; // const [realtimeUsers, loading, error] =  useCollection(\n  //      query(collection(db, \"FriendRequests\"), where(id, \"==\", user.uid))\n  // );\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),\n      searchArray = _useState[0],\n      setSearchArray = _useState[1];\n  /*\r\n  useEffect(async () => {\r\n      if (user) {\r\n      \r\n        console.log(\"use effect run again\")\r\n        const querySnapshot = await getDocs(collection(db, \"FriendRequests\"));\r\n        const tempArray = []\r\n        let tempQuerySnapshot;\r\n        querySnapshot.forEach((doc) => {\r\n          tempQuerySnapshot\r\n        });\r\n          tempArray.push( {\r\n          key_id: doc.id,\r\n        })\r\n        setSearchArray(tempArray)\r\n       \r\n      }\r\n    }, [])\r\n    */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)( /*#__PURE__*/(0,C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var sfRef, collections;\n    return C_Users_Sam_Documents_GitHub_Group_2_web_files_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!user) {\n              _context.next = 6;\n              break;\n            }\n\n            sfRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'FriendRequests'), user.uid);\n            _context.next = 4;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(sfRef);\n\n          case 4:\n            collections = _context.sent;\n            collections === null || collections === void 0 ? void 0 : collections.docs.map(function (potentialFriend) {\n              return console.log(potentialFriend.id);\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Requests, \"dkryzuzwBbYSdMme6sP6utbqMFA=\");\n\n_c = Requests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requests);\n/**{ realtimeUsers?.docs.map((potentialFriend) => (\r\n                <Request\r\n                key_id={potentialFriend.data().id}\r\n                \r\n                />\r\n        ))\r\n            } */\n\nvar _c;\n\n$RefreshReg$(_c, \"Requests\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU2tCLFFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFekI7QUFFQSxNQUFNQyxJQUFJLEdBQUduQix1REFBYixDQUp5QixDQU0xQjtBQUNEO0FBQ0M7O0FBRUMsa0JBQXNDZSwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPTSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtNTixFQUFBQSxnREFBUyx3VkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTEcsSUFESztBQUFBO0FBQUE7QUFBQTs7QUFFRUksWUFBQUEsS0FGRixHQUVVaEIsdURBQUcsQ0FBQ0osOERBQVUsQ0FBQ0YseUNBQUQsRUFBSSxnQkFBSixDQUFYLEVBQWtDa0IsSUFBSSxDQUFDSyxHQUF2QyxDQUZiO0FBQUE7QUFBQSxtQkFHc0JsQiwwREFBTSxDQUFDaUIsS0FBRCxDQUg1Qjs7QUFBQTtBQUdFRSxZQUFBQSxXQUhGO0FBSUpBLFlBQUFBLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsWUFBQUEsV0FBVyxDQUFFZCxJQUFiLENBQWtCZSxHQUFsQixDQUFzQixVQUFDQyxlQUFEO0FBQUEscUJBQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsZUFBZSxDQUFDRyxFQUE1QixDQURrQjtBQUFBLGFBQXRCOztBQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFRTixFQVJNLENBQVQ7QUFVRixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FsRFFiOztLQUFBQTtBQW9EVCwrREFBZUEsUUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdHMuanM/YTFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4vSW5wdXRCb3hcIlxyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQge2NvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jLCBkb2MsIEZpZWxkUGF0aCwgZG9jdW1lbnRJZCwgZ2V0RG9jcywgZG9jcywgbGlzdENvbGxlY3Rpb25zfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnREb3dubG9hZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3RzKHsgcG9zdHMgfSkge1xyXG5cclxuICAgIC8vIEhhbmRsZXMgdGhlIHJlcXVlc3RzIGZvciBmcmllbmRzIFxyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuXHJcbiAgIC8vIGNvbnN0IFtyZWFsdGltZVVzZXJzLCBsb2FkaW5nLCBlcnJvcl0gPSAgdXNlQ29sbGVjdGlvbihcclxuICAvLyAgICAgIHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiRnJpZW5kUmVxdWVzdHNcIiksIHdoZXJlKGlkLCBcIj09XCIsIHVzZXIudWlkKSlcclxuICAgLy8gKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoQXJyYXksIHNldFNlYXJjaEFycmF5XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCBydW4gYWdhaW5cIilcclxuICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwiRnJpZW5kUmVxdWVzdHNcIikpO1xyXG4gICAgICAgICAgY29uc3QgdGVtcEFycmF5ID0gW11cclxuICAgICAgICAgIGxldCB0ZW1wUXVlcnlTbmFwc2hvdDtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXBRdWVyeVNuYXBzaG90XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0ZW1wQXJyYXkucHVzaCgge1xyXG4gICAgICAgICAgICBrZXlfaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRTZWFyY2hBcnJheSh0ZW1wQXJyYXkpXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICAgICovXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNmUmVmID0gZG9jKGNvbGxlY3Rpb24oZGIsJ0ZyaWVuZFJlcXVlc3RzJyksIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSBhd2FpdCBnZXREb2Moc2ZSZWYpO1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9ucz8uZG9jcy5tYXAoKHBvdGVudGlhbEZyaWVuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG90ZW50aWFsRnJpZW5kLmlkKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0c1xyXG5cclxuLyoqeyByZWFsdGltZVVzZXJzPy5kb2NzLm1hcCgocG90ZW50aWFsRnJpZW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdFxyXG4gICAgICAgICAgICAgICAga2V5X2lkPXtwb3RlbnRpYWxGcmllbmQuZGF0YSgpLmlkfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIH0gKi8iXSwibmFtZXMiOlsiSW5wdXRCb3giLCJhdXRoIiwiZGIiLCJ1c2VDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJkb2MiLCJGaWVsZFBhdGgiLCJkb2N1bWVudElkIiwiZ2V0RG9jcyIsImRvY3MiLCJsaXN0Q29sbGVjdGlvbnMiLCJSZXF1ZXN0IiwiRG9jdW1lbnREb3dubG9hZEljb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlcXVlc3RzIiwicG9zdHMiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJzZWFyY2hBcnJheSIsInNldFNlYXJjaEFycmF5Iiwic2ZSZWYiLCJ1aWQiLCJjb2xsZWN0aW9ucyIsIm1hcCIsInBvdGVudGlhbEZyaWVuZCIsImNvbnNvbGUiLCJsb2ciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Requests.js\n");

/***/ })

});