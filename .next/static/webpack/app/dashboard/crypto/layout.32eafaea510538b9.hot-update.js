"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/crypto/layout",{

/***/ "(app-pages-browser)/./src/contexts/DataContext.js":
/*!*************************************!*\
  !*** ./src/contexts/DataContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataProvider: function() { return /* binding */ DataProvider; },\n/* harmony export */   useData: function() { return /* binding */ useData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _hooks_use_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/use-user */ \"(app-pages-browser)/./src/hooks/use-user.js\");\n/* __next_internal_client_entry_do_not_use__ DataProvider,useData auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction DataProvider(param) {\n    let { children } = param;\n    _s();\n    const [globalDataCache, setGlobalDataCache] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        selectedChain: \"eth\"\n    });\n    const user = (0,_hooks_use_user__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (user && user.user.id) {\n                const userId = user.user.id;\n                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"users\", userId);\n                const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);\n                if (docSnap.exists()) {\n                    setGlobalDataCache(docSnap.data());\n                }\n            }\n        };\n        fetchData();\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const saveData = async ()=>{\n            if (user && user.user.id) {\n                const userId = user.user.id;\n                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"users\", userId);\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(docRef, globalDataCache);\n            }\n        };\n        saveData();\n    }, [\n        globalDataCache,\n        user\n    ]);\n    console.log(\"Inside DataProvider\", globalDataCache);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            globalDataCache,\n            setGlobalDataCache\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Dashboard\\\\nextjs-template-javascript\\\\src\\\\contexts\\\\DataContext.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(DataProvider, \"viNYz3tVZnK8VPSBtEo+ML/G96I=\", false, function() {\n    return [\n        _hooks_use_user__WEBPACK_IMPORTED_MODULE_3__.useUser\n    ];\n});\n_c = DataProvider;\n;\nconst useData = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DataContext);\n};\n_s1(useData, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"DataProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9EYXRhQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDOEU7QUFDUDtBQUM1QjtBQUUzQyxNQUFNVSw0QkFBY1Qsb0RBQWFBO0FBRTFCLFNBQVNVLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDO1FBQUVZLGVBQWU7SUFBTTtJQUM5RSxNQUFNQyxPQUFPUCx3REFBT0E7SUFDcEIsTUFBTVEsS0FBS1osZ0VBQVlBO0lBRXZCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFlBQVk7WUFDaEIsSUFBSUYsUUFBUUEsS0FBS0EsSUFBSSxDQUFDRyxFQUFFLEVBQUU7Z0JBQ3hCLE1BQU1DLFNBQVNKLEtBQUtBLElBQUksQ0FBQ0csRUFBRTtnQkFDM0IsTUFBTUUsU0FBU2YsdURBQUdBLENBQUNXLElBQUksU0FBU0c7Z0JBQ2hDLE1BQU1FLFVBQVUsTUFBTWYsMERBQU1BLENBQUNjO2dCQUU3QixJQUFJQyxRQUFRQyxNQUFNLElBQUk7b0JBQ3BCVCxtQkFBbUJRLFFBQVFFLElBQUk7Z0JBQ2pDO1lBQ0Y7UUFDRjtRQUVBTjtJQUNGLEdBQUc7UUFBQ0Y7S0FBSztJQUVUWixnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixXQUFXO1lBQ2YsSUFBSVQsUUFBUUEsS0FBS0EsSUFBSSxDQUFDRyxFQUFFLEVBQUU7Z0JBQ3hCLE1BQU1DLFNBQVNKLEtBQUtBLElBQUksQ0FBQ0csRUFBRTtnQkFDM0IsTUFBTUUsU0FBU2YsdURBQUdBLENBQUNXLElBQUksU0FBU0c7Z0JBRWhDLE1BQU1aLDBEQUFNQSxDQUFDYSxRQUFRUjtZQUN2QjtRQUNGO1FBRUFZO0lBQ0YsR0FBRztRQUFDWjtRQUFpQkc7S0FBSztJQUUxQlUsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QmQ7SUFFbkMscUJBQ0UsOERBQUNILFlBQVlrQixRQUFRO1FBQUNDLE9BQU87WUFBRWhCO1lBQWlCQztRQUFtQjtrQkFDaEVGOzs7Ozs7QUFHUDtHQXpDZ0JEOztRQUVERixvREFBT0E7OztLQUZORTs7QUEyQ1QsTUFBTW1CLFVBQVU7O0lBQU01QixPQUFBQSxpREFBVUEsQ0FBQ1E7QUFBVyxFQUFFO0lBQXhDb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzPzQ2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jLCBzZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQC9ob29rcy91c2UtdXNlcic7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXRhUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2dsb2JhbERhdGFDYWNoZSwgc2V0R2xvYmFsRGF0YUNhY2hlXSA9IHVzZVN0YXRlKHsgc2VsZWN0ZWRDaGFpbjogJ2V0aCcgfSk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodXNlciAmJiB1c2VyLnVzZXIuaWQpIHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSB1c2VyLnVzZXIuaWQ7XHJcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCAndXNlcnMnLCB1c2VySWQpO1xyXG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcclxuXHJcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHtcclxuICAgICAgICAgIHNldEdsb2JhbERhdGFDYWNoZShkb2NTbmFwLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHVzZXIgJiYgdXNlci51c2VyLmlkKSB7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlci51c2VyLmlkO1xyXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgJ3VzZXJzJywgdXNlcklkKTtcclxuXHJcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgZ2xvYmFsRGF0YUNhY2hlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzYXZlRGF0YSgpO1xyXG4gIH0sIFtnbG9iYWxEYXRhQ2FjaGUsIHVzZXJdKTtcclxuICBcclxuICBjb25zb2xlLmxvZygnSW5zaWRlIERhdGFQcm92aWRlcicsIGdsb2JhbERhdGFDYWNoZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ2xvYmFsRGF0YUNhY2hlLCBzZXRHbG9iYWxEYXRhQ2FjaGUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VEYXRhID0gKCkgPT4gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsInNldERvYyIsInVzZVVzZXIiLCJEYXRhQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiZ2xvYmFsRGF0YUNhY2hlIiwic2V0R2xvYmFsRGF0YUNhY2hlIiwic2VsZWN0ZWRDaGFpbiIsInVzZXIiLCJkYiIsImZldGNoRGF0YSIsImlkIiwidXNlcklkIiwiZG9jUmVmIiwiZG9jU25hcCIsImV4aXN0cyIsImRhdGEiLCJzYXZlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/DataContext.js\n"));

/***/ })

});