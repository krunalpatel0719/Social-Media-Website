/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"logInWithEmailAndPassword\": () => (/* binding */ logInWithEmailAndPassword),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"registerWithEmailAndPassword\": () => (/* binding */ registerWithEmailAndPassword),\n/* harmony export */   \"sendPasswordReset\": () => (/* binding */ sendPasswordReset)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp({\n  apiKey: \"AIzaSyCW4V3_hr-y8WpaMozaB1EzRLCXirEZXAY\",\n  authDomain: \"social-media-clone-31986.firebaseapp.com\",\n  projectId: \"social-media-clone-31986\",\n  storageBucket: \"social-media-clone-31986.appspot.com\",\n  messagingSenderId: \"787430361542\",\n  appId: \"1:787430361542:web:bb29f96509fd3e1f9bcac7\" // databaseURL: \"https://selab2022-f6ec0-default-rtdb.firebaseio.com\",\n  // measurementId: \"G-D2CSK3DMYC\"\n\n}); ///Make references to the firestore, storage and auth\n\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\nconst logInWithEmailAndPassword = async (email, password) => {\n  try {\n    await signInWithEmailAndPassword(auth, email, password);\n  } catch (err) {\n    console.error(err);\n    alert(err.message);\n  }\n};\n\nconst registerWithEmailAndPassword = async (name, email, password) => {\n  try {\n    const res = await createUserWithEmailAndPassword(auth, email, password);\n    const user = res.user;\n    await addDoc(collection(db, \"users\"), {\n      uid: user.uid,\n      name,\n      authProvider: \"local\",\n      email\n    });\n  } catch (err) {\n    console.error(err);\n    alert(err.message);\n  }\n};\n\nconst sendPasswordReset = async email => {\n  try {\n    await sendPasswordResetEmail(auth, email);\n    alert(\"Password reset link sent!\");\n  } catch (err) {\n    console.error(err);\n    alert(err.message);\n  }\n};\n\nconst logout = () => {\n  signOut(auth);\n};\n\n //  db.settings({ timestampsInSnapshots: true});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxHQUFHLEdBQUdKLHVEQUFBLENBQXVCO0VBQ2pDTSxNQUFNLEVBQUUseUNBRHlCO0VBRWpDQyxVQUFVLEVBQUUsMENBRnFCO0VBR2pDQyxTQUFTLEVBQUUsMEJBSHNCO0VBSWpDQyxhQUFhLEVBQUUsc0NBSmtCO0VBS2pDQyxpQkFBaUIsRUFBRSxjQUxjO0VBTWpDQyxLQUFLLEVBQUUsMkNBTjBCLENBUS9CO0VBRUE7O0FBVitCLENBQXZCLENBQVosRUFhQTs7QUFDRSxNQUFNQyxJQUFJLEdBQUdYLHNEQUFPLENBQUNHLEdBQUQsQ0FBcEI7QUFDQSxNQUFNUyxFQUFFLEdBQUdYLGdFQUFZLENBQUNFLEdBQUQsQ0FBdkI7QUFDQSxNQUFNVSxPQUFPLEdBQUdYLDREQUFVLENBQUNDLEdBQUQsQ0FBMUI7O0FBR0EsTUFBTVcseUJBQXlCLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxRQUFkLEtBQTJCO0VBQzNELElBQUk7SUFDRixNQUFNQywwQkFBMEIsQ0FBQ04sSUFBRCxFQUFPSSxLQUFQLEVBQWNDLFFBQWQsQ0FBaEM7RUFDRCxDQUZELENBRUUsT0FBT0UsR0FBUCxFQUFZO0lBQ1pDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0lBQ0FHLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxPQUFMLENBQUw7RUFDRDtBQUNGLENBUEQ7O0FBUUEsTUFBTUMsNEJBQTRCLEdBQUcsT0FBT0MsSUFBUCxFQUFhVCxLQUFiLEVBQW9CQyxRQUFwQixLQUFpQztFQUNwRSxJQUFJO0lBQ0YsTUFBTVMsR0FBRyxHQUFHLE1BQU1DLDhCQUE4QixDQUFDZixJQUFELEVBQU9JLEtBQVAsRUFBY0MsUUFBZCxDQUFoRDtJQUNBLE1BQU1XLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFqQjtJQUNBLE1BQU1DLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDakIsRUFBRCxFQUFLLE9BQUwsQ0FBWCxFQUEwQjtNQUNwQ2tCLEdBQUcsRUFBRUgsSUFBSSxDQUFDRyxHQUQwQjtNQUVwQ04sSUFGb0M7TUFHcENPLFlBQVksRUFBRSxPQUhzQjtNQUlwQ2hCO0lBSm9DLENBQTFCLENBQVo7RUFNRCxDQVRELENBU0UsT0FBT0csR0FBUCxFQUFZO0lBQ1pDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0lBQ0FHLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxPQUFMLENBQUw7RUFDRDtBQUNGLENBZEQ7O0FBZUEsTUFBTVUsaUJBQWlCLEdBQUcsTUFBT2pCLEtBQVAsSUFBaUI7RUFDekMsSUFBSTtJQUNGLE1BQU1rQixzQkFBc0IsQ0FBQ3RCLElBQUQsRUFBT0ksS0FBUCxDQUE1QjtJQUNBTSxLQUFLLENBQUMsMkJBQUQsQ0FBTDtFQUNELENBSEQsQ0FHRSxPQUFPSCxHQUFQLEVBQVk7SUFDWkMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7SUFDQUcsS0FBSyxDQUFDSCxHQUFHLENBQUNJLE9BQUwsQ0FBTDtFQUNEO0FBQ0YsQ0FSRDs7QUFTQSxNQUFNWSxNQUFNLEdBQUcsTUFBTTtFQUNuQkMsT0FBTyxDQUFDeEIsSUFBRCxDQUFQO0FBQ0QsQ0FGRDs7Q0FZRixnRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1maWxlcy8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNXNFYzX2hyLXk4V3BhTW96YUIxRXpSTENYaXJFWlhBWVwiLFxyXG4gIGF1dGhEb21haW46IFwic29jaWFsLW1lZGlhLWNsb25lLTMxOTg2LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJzb2NpYWwtbWVkaWEtY2xvbmUtMzE5ODZcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInNvY2lhbC1tZWRpYS1jbG9uZS0zMTk4Ni5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjc4NzQzMDM2MTU0MlwiLFxyXG4gIGFwcElkOiBcIjE6Nzg3NDMwMzYxNTQyOndlYjpiYjI5Zjk2NTA5ZmQzZTFmOWJjYWM3XCIsXHJcblxyXG4gICAgLy8gZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zZWxhYjIwMjItZjZlYzAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgIFxyXG4gICAgLy8gbWVhc3VyZW1lbnRJZDogXCJHLUQyQ1NLM0RNWUNcIlxyXG4gIH0pO1xyXG5cclxuLy8vTWFrZSByZWZlcmVuY2VzIHRvIHRoZSBmaXJlc3RvcmUsIHN0b3JhZ2UgYW5kIGF1dGhcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgbG9nSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gYXN5bmMgKG5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXMudXNlcjtcclxuICAgICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHtcclxuICAgICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXV0aFByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXQgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIHJlc2V0IGxpbmsgc2VudCFcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzaWduT3V0KGF1dGgpO1xyXG4gIH07XHJcbiAgZXhwb3J0IHtcclxuICAgIGF1dGgsXHJcbiAgICBkYixcclxuICAgIGxvZ0luV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICByZWdpc3RlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXQsXHJcbiAgICBsb2dvdXQsXHJcbiAgfTtcclxuXHJcbi8vICBkYi5zZXR0aW5ncyh7IHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZX0pOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImF1dGgiLCJkYiIsInN0b3JhZ2UiLCJsb2dJbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwicmVnaXN0ZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm5hbWUiLCJyZXMiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInVpZCIsImF1dGhQcm92aWRlciIsInNlbmRQYXNzd29yZFJlc2V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImxvZ291dCIsInNpZ25PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_1__]);\n_firebase__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\Krunal Patel\\\\Desktop\\\\SocialMedia\\\\Social-Media-Website\\\\web-files\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // Default  page with next and react \n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUF5QztFQUN2QyxvQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQUdEOztBQUVELGlFQUFlRixLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZmlsZXMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7YXV0aCwgZGJ9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbi8vIERlZmF1bHQgIHBhZ2Ugd2l0aCBuZXh0IGFuZCByZWFjdCBcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbImF1dGgiLCJkYiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();