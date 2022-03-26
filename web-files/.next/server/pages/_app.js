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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"logInWithEmailAndPassword\": () => (/* binding */ logInWithEmailAndPassword),\n/* harmony export */   \"registerWithEmailAndPassword\": () => (/* binding */ registerWithEmailAndPassword),\n/* harmony export */   \"sendPasswordReset\": () => (/* binding */ sendPasswordReset),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp({\n    apiKey: \"AIzaSyCILKzvuDT33Wiw74x3BJNHFKotirEu6eM\",\n    authDomain: \"selab2022-f6ec0.firebaseapp.com\",\n    databaseURL: \"https://selab2022-f6ec0-default-rtdb.firebaseio.com\",\n    projectId: \"selab2022-f6ec0\",\n    storageBucket: \"selab2022-f6ec0.appspot.com\",\n    messagingSenderId: \"559938006018\",\n    appId: \"1:559938006018:web:f447e89a5560fe15468b1b\",\n    measurementId: \"G-D2CSK3DMYC\"\n});\n///Make references to the firestore, storage and auth\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst logInWithEmailAndPassword = async (email, password)=>{\n    try {\n        await signInWithEmailAndPassword(auth, email, password);\n    } catch (err) {\n        console.error(err);\n        alert(err.message);\n    }\n};\nconst registerWithEmailAndPassword = async (name, email, password)=>{\n    try {\n        const res = await createUserWithEmailAndPassword(auth, email, password);\n        const user = res.user;\n        await addDoc(collection(db, \"users\"), {\n            uid: user.uid,\n            name,\n            authProvider: \"local\",\n            email\n        });\n    } catch (err) {\n        console.error(err);\n        alert(err.message);\n    }\n};\nconst sendPasswordReset = async (email)=>{\n    try {\n        await sendPasswordResetEmail(auth, email);\n        alert(\"Password reset link sent!\");\n    } catch (err) {\n        console.error(err);\n        alert(err.message);\n    }\n};\nconst logout = ()=>{\n    signOut(auth);\n};\n //  db.settings({ timestampsInSnapshots: true});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2xCO0FBQ2lCO0FBQ1o7QUFDc0I7QUFDeEI7QUFDb0I7QUFFN0MsS0FBSyxDQUFDSSxHQUFHLEdBQUdKLHVEQUFzQixDQUFDLENBQUM7SUFDaENNLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQWlDO0lBQzdDQyxXQUFXLEVBQUUsQ0FBcUQ7SUFDbEVDLFNBQVMsRUFBRSxDQUFpQjtJQUM1QkMsYUFBYSxFQUFFLENBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxDQUFjO0FBQy9CLENBQUM7QUFFSCxFQUFxRDtBQUNuRCxLQUFLLENBQUNDLElBQUksR0FBR2Isc0RBQU8sQ0FBQ0csR0FBRztBQUN4QixLQUFLLENBQUNXLEVBQUUsR0FBR2IsZ0VBQVksQ0FBQ0UsR0FBRztBQUMzQixLQUFLLENBQUNZLE9BQU8sR0FBR2IsNERBQVUsQ0FBQ0MsR0FBRztBQUc5QixLQUFLLENBQUNhLHlCQUF5QixVQUFVQyxLQUFLLEVBQUVDLFFBQVEsR0FBSyxDQUFDO0lBQzVELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQywwQkFBMEIsQ0FBQ04sSUFBSSxFQUFFSSxLQUFLLEVBQUVDLFFBQVE7SUFDeEQsQ0FBQyxDQUFDLEtBQUssRUFBRUUsR0FBRyxFQUFFLENBQUM7UUFDYkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUc7UUFDakJHLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBQ0QsS0FBSyxDQUFDQyw0QkFBNEIsVUFBVUMsSUFBSSxFQUFFVCxLQUFLLEVBQUVDLFFBQVEsR0FBSyxDQUFDO0lBQ3JFLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDUyxHQUFHLEdBQUcsS0FBSyxDQUFDQyw4QkFBOEIsQ0FBQ2YsSUFBSSxFQUFFSSxLQUFLLEVBQUVDLFFBQVE7UUFDdEUsS0FBSyxDQUFDVyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0UsSUFBSTtRQUNyQixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDakIsRUFBRSxFQUFFLENBQU8sU0FBRyxDQUFDO1lBQ3JDa0IsR0FBRyxFQUFFSCxJQUFJLENBQUNHLEdBQUc7WUFDYk4sSUFBSTtZQUNKTyxZQUFZLEVBQUUsQ0FBTztZQUNyQmhCLEtBQUs7UUFDUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUcsR0FBRyxFQUFFLENBQUM7UUFDYkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUc7UUFDakJHLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBQ0QsS0FBSyxDQUFDVSxpQkFBaUIsVUFBVWpCLEtBQUssR0FBSyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDa0Isc0JBQXNCLENBQUN0QixJQUFJLEVBQUVJLEtBQUs7UUFDeENNLEtBQUssQ0FBQyxDQUEyQjtJQUNuQyxDQUFDLENBQUMsS0FBSyxFQUFFSCxHQUFHLEVBQUUsQ0FBQztRQUNiQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRztRQUNqQkcsS0FBSyxDQUFDSCxHQUFHLENBQUNJLE9BQU87SUFDbkIsQ0FBQztBQUNILENBQUM7QUFDRCxLQUFLLENBQUNZLE1BQU0sT0FBUyxDQUFDO0lBQ3BCQyxPQUFPLENBQUN4QixJQUFJO0FBQ2QsQ0FBQztBQVVILENBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWZpbGVzLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDSUxLenZ1RFQzM1dpdzc0eDNCSk5IRktvdGlyRXU2ZU1cIixcclxuICAgIGF1dGhEb21haW46IFwic2VsYWIyMDIyLWY2ZWMwLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zZWxhYjIwMjItZjZlYzAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic2VsYWIyMDIyLWY2ZWMwXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInNlbGFiMjAyMi1mNmVjMC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTU5OTM4MDA2MDE4XCIsXHJcbiAgICBhcHBJZDogXCIxOjU1OTkzODAwNjAxODp3ZWI6ZjQ0N2U4OWE1NTYwZmUxNTQ2OGIxYlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUQyQ1NLM0RNWUNcIlxyXG4gIH0pO1xyXG5cclxuLy8vTWFrZSByZWZlcmVuY2VzIHRvIHRoZSBmaXJlc3RvcmUsIHN0b3JhZ2UgYW5kIGF1dGhcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgbG9nSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gYXN5bmMgKG5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXMudXNlcjtcclxuICAgICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHtcclxuICAgICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXV0aFByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXQgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIHJlc2V0IGxpbmsgc2VudCFcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzaWduT3V0KGF1dGgpO1xyXG4gIH07XHJcbiAgZXhwb3J0IHtcclxuICAgIGF1dGgsXHJcbiAgICBkYixcclxuICAgIGxvZ0luV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICByZWdpc3RlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXQsXHJcbiAgICBsb2dvdXQsXHJcbiAgfTtcclxuXHJcbi8vICBkYi5zZXR0aW5ncyh7IHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZX0pOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJkYiIsInN0b3JhZ2UiLCJsb2dJbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwicmVnaXN0ZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm5hbWUiLCJyZXMiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInVpZCIsImF1dGhQcm92aWRlciIsInNlbmRQYXNzd29yZFJlc2V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImxvZ291dCIsInNpZ25PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kruna\\\\OneDrive\\\\Desktop\\\\Group2WebFiles\\\\web-files\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDTTtTQUczQkUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEQsU0FBUztXQUFLQyxTQUFTOzs7Ozs7QUFFNUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWZpbGVzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQge2F1dGgsIGRifSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiYXV0aCIsImRiIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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