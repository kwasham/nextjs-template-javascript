"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/moralis";
exports.ids = ["vendor-chunks/moralis"];
exports.modules = {

/***/ "(action-browser)/./node_modules/moralis/lib/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/moralis/lib/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Moralis)\n/* harmony export */ });\n/* harmony import */ var _moralisweb3_streams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moralisweb3/streams */ \"(action-browser)/./node_modules/@moralisweb3/streams/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moralisweb3/api-utils */ \"(action-browser)/./node_modules/@moralisweb3/api-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/auth */ \"(action-browser)/./node_modules/@moralisweb3/auth/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/common-evm-utils */ \"(action-browser)/./node_modules/@moralisweb3/common-evm-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_evm_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moralisweb3/evm-api */ \"(action-browser)/./node_modules/@moralisweb3/evm-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_aptos_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @moralisweb3/aptos-api */ \"(action-browser)/./node_modules/@moralisweb3/aptos-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_sol_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/common-sol-utils */ \"(action-browser)/./node_modules/@moralisweb3/common-sol-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_sol_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @moralisweb3/sol-api */ \"(action-browser)/./node_modules/@moralisweb3/sol-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/common-core */ \"(action-browser)/./node_modules/@moralisweb3/common-core/lib/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\n// Core\r\nvar core = _moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__.Core.create();\r\n// Utility modules\r\nvar commonEvmUtils = _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_2__.CommonEvmUtils.create(core);\r\nvar commonSolUtils = _moralisweb3_common_sol_utils__WEBPACK_IMPORTED_MODULE_3__.CommonSolUtils.create(core);\r\nvar apiUtils = _moralisweb3_api_utils__WEBPACK_IMPORTED_MODULE_4__.ApiUtils.create(core);\r\n// Feature modules\r\nvar auth = _moralisweb3_auth__WEBPACK_IMPORTED_MODULE_5__.Auth.create(core);\r\nvar streams = _moralisweb3_streams__WEBPACK_IMPORTED_MODULE_6__.Streams.create(core);\r\nvar evmApi = _moralisweb3_evm_api__WEBPACK_IMPORTED_MODULE_7__.EvmApi.create(core);\r\nvar solApi = _moralisweb3_sol_api__WEBPACK_IMPORTED_MODULE_8__.SolApi.create(core);\r\nvar aptosApi = _moralisweb3_aptos_api__WEBPACK_IMPORTED_MODULE_0__.AptosApi.create(core);\r\n// Register all Moralis modules to Core\r\ncore.registerModules([commonEvmUtils, commonSolUtils, auth, apiUtils, evmApi, solApi, streams]);\r\n_moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__.CoreProvider.setDefault(core);\r\nvar Moralis = {\r\n    Core: core,\r\n    Auth: auth,\r\n    Streams: streams,\r\n    EvmApi: evmApi,\r\n    SolApi: solApi,\r\n    AptosApi: aptosApi,\r\n    EvmUtils: commonEvmUtils,\r\n    SolUtils: commonSolUtils,\r\n    start: function (config) {\r\n        return core.start(config);\r\n    },\r\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9tb3JhbGlzL2xpYi9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQztBQUNHO0FBQ1Q7QUFDc0I7QUFDakI7QUFDSTtBQUNhO0FBQ2pCO0FBQ2dCOztBQUU5RDtBQUNBLFdBQVcsMERBQUk7QUFDZjtBQUNBLHFCQUFxQix5RUFBYztBQUNuQyxxQkFBcUIseUVBQWM7QUFDbkMsZUFBZSw0REFBUTtBQUN2QjtBQUNBLFdBQVcsbURBQUk7QUFDZixjQUFjLHlEQUFPO0FBQ3JCLGFBQWEsd0RBQU07QUFDbkIsYUFBYSx3REFBTTtBQUNuQixlQUFlLDREQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxrRUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRldmlhcy1raXQtcHJvL25leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb3JhbGlzL2xpYi9lc20vaW5kZXguanM/OTA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJlYW1zIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL3N0cmVhbXMnO1xuaW1wb3J0IHsgQXBpVXRpbHMgfSBmcm9tICdAbW9yYWxpc3dlYjMvYXBpLXV0aWxzJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICdAbW9yYWxpc3dlYjMvYXV0aCc7XG5pbXBvcnQgeyBDb21tb25Fdm1VdGlscyB9IGZyb20gJ0Btb3JhbGlzd2ViMy9jb21tb24tZXZtLXV0aWxzJztcbmltcG9ydCB7IEV2bUFwaSB9IGZyb20gJ0Btb3JhbGlzd2ViMy9ldm0tYXBpJztcbmltcG9ydCB7IEFwdG9zQXBpIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2FwdG9zLWFwaSc7XG5pbXBvcnQgeyBDb21tb25Tb2xVdGlscyB9IGZyb20gJ0Btb3JhbGlzd2ViMy9jb21tb24tc29sLXV0aWxzJztcbmltcG9ydCB7IFNvbEFwaSB9IGZyb20gJ0Btb3JhbGlzd2ViMy9zb2wtYXBpJztcbmltcG9ydCB7IENvcmUsIENvcmVQcm92aWRlciB9IGZyb20gJ0Btb3JhbGlzd2ViMy9jb21tb24tY29yZSc7XG5cbi8vIENvcmVcclxudmFyIGNvcmUgPSBDb3JlLmNyZWF0ZSgpO1xyXG4vLyBVdGlsaXR5IG1vZHVsZXNcclxudmFyIGNvbW1vbkV2bVV0aWxzID0gQ29tbW9uRXZtVXRpbHMuY3JlYXRlKGNvcmUpO1xyXG52YXIgY29tbW9uU29sVXRpbHMgPSBDb21tb25Tb2xVdGlscy5jcmVhdGUoY29yZSk7XHJcbnZhciBhcGlVdGlscyA9IEFwaVV0aWxzLmNyZWF0ZShjb3JlKTtcclxuLy8gRmVhdHVyZSBtb2R1bGVzXHJcbnZhciBhdXRoID0gQXV0aC5jcmVhdGUoY29yZSk7XHJcbnZhciBzdHJlYW1zID0gU3RyZWFtcy5jcmVhdGUoY29yZSk7XHJcbnZhciBldm1BcGkgPSBFdm1BcGkuY3JlYXRlKGNvcmUpO1xyXG52YXIgc29sQXBpID0gU29sQXBpLmNyZWF0ZShjb3JlKTtcclxudmFyIGFwdG9zQXBpID0gQXB0b3NBcGkuY3JlYXRlKGNvcmUpO1xyXG4vLyBSZWdpc3RlciBhbGwgTW9yYWxpcyBtb2R1bGVzIHRvIENvcmVcclxuY29yZS5yZWdpc3Rlck1vZHVsZXMoW2NvbW1vbkV2bVV0aWxzLCBjb21tb25Tb2xVdGlscywgYXV0aCwgYXBpVXRpbHMsIGV2bUFwaSwgc29sQXBpLCBzdHJlYW1zXSk7XHJcbkNvcmVQcm92aWRlci5zZXREZWZhdWx0KGNvcmUpO1xyXG52YXIgTW9yYWxpcyA9IHtcclxuICAgIENvcmU6IGNvcmUsXHJcbiAgICBBdXRoOiBhdXRoLFxyXG4gICAgU3RyZWFtczogc3RyZWFtcyxcclxuICAgIEV2bUFwaTogZXZtQXBpLFxyXG4gICAgU29sQXBpOiBzb2xBcGksXHJcbiAgICBBcHRvc0FwaTogYXB0b3NBcGksXHJcbiAgICBFdm1VdGlsczogY29tbW9uRXZtVXRpbHMsXHJcbiAgICBTb2xVdGlsczogY29tbW9uU29sVXRpbHMsXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBjb3JlLnN0YXJ0KGNvbmZpZyk7XHJcbiAgICB9LFxyXG59O1xuXG5leHBvcnQgeyBNb3JhbGlzIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/moralis/lib/esm/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/moralis/lib/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/moralis/lib/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Moralis)\n/* harmony export */ });\n/* harmony import */ var _moralisweb3_streams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moralisweb3/streams */ \"(rsc)/./node_modules/@moralisweb3/streams/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moralisweb3/api-utils */ \"(rsc)/./node_modules/@moralisweb3/api-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/auth */ \"(rsc)/./node_modules/@moralisweb3/auth/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/common-evm-utils */ \"(rsc)/./node_modules/@moralisweb3/common-evm-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_evm_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moralisweb3/evm-api */ \"(rsc)/./node_modules/@moralisweb3/evm-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_aptos_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @moralisweb3/aptos-api */ \"(rsc)/./node_modules/@moralisweb3/aptos-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_sol_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/common-sol-utils */ \"(rsc)/./node_modules/@moralisweb3/common-sol-utils/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_sol_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @moralisweb3/sol-api */ \"(rsc)/./node_modules/@moralisweb3/sol-api/lib/esm/index.js\");\n/* harmony import */ var _moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/common-core */ \"(rsc)/./node_modules/@moralisweb3/common-core/lib/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\n// Core\r\nvar core = _moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__.Core.create();\r\n// Utility modules\r\nvar commonEvmUtils = _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_2__.CommonEvmUtils.create(core);\r\nvar commonSolUtils = _moralisweb3_common_sol_utils__WEBPACK_IMPORTED_MODULE_3__.CommonSolUtils.create(core);\r\nvar apiUtils = _moralisweb3_api_utils__WEBPACK_IMPORTED_MODULE_4__.ApiUtils.create(core);\r\n// Feature modules\r\nvar auth = _moralisweb3_auth__WEBPACK_IMPORTED_MODULE_5__.Auth.create(core);\r\nvar streams = _moralisweb3_streams__WEBPACK_IMPORTED_MODULE_6__.Streams.create(core);\r\nvar evmApi = _moralisweb3_evm_api__WEBPACK_IMPORTED_MODULE_7__.EvmApi.create(core);\r\nvar solApi = _moralisweb3_sol_api__WEBPACK_IMPORTED_MODULE_8__.SolApi.create(core);\r\nvar aptosApi = _moralisweb3_aptos_api__WEBPACK_IMPORTED_MODULE_0__.AptosApi.create(core);\r\n// Register all Moralis modules to Core\r\ncore.registerModules([commonEvmUtils, commonSolUtils, auth, apiUtils, evmApi, solApi, streams]);\r\n_moralisweb3_common_core__WEBPACK_IMPORTED_MODULE_1__.CoreProvider.setDefault(core);\r\nvar Moralis = {\r\n    Core: core,\r\n    Auth: auth,\r\n    Streams: streams,\r\n    EvmApi: evmApi,\r\n    SolApi: solApi,\r\n    AptosApi: aptosApi,\r\n    EvmUtils: commonEvmUtils,\r\n    SolUtils: commonSolUtils,\r\n    start: function (config) {\r\n        return core.start(config);\r\n    },\r\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9yYWxpcy9saWIvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDRztBQUNUO0FBQ3NCO0FBQ2pCO0FBQ0k7QUFDYTtBQUNqQjtBQUNnQjs7QUFFOUQ7QUFDQSxXQUFXLDBEQUFJO0FBQ2Y7QUFDQSxxQkFBcUIseUVBQWM7QUFDbkMscUJBQXFCLHlFQUFjO0FBQ25DLGVBQWUsNERBQVE7QUFDdkI7QUFDQSxXQUFXLG1EQUFJO0FBQ2YsY0FBYyx5REFBTztBQUNyQixhQUFhLHdEQUFNO0FBQ25CLGFBQWEsd0RBQU07QUFDbkIsZUFBZSw0REFBUTtBQUN2QjtBQUNBO0FBQ0Esa0VBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUU4QiIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXZpYXMta2l0LXByby9uZXh0anMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbW9yYWxpcy9saWIvZXNtL2luZGV4LmpzP2EwMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyZWFtcyB9IGZyb20gJ0Btb3JhbGlzd2ViMy9zdHJlYW1zJztcbmltcG9ydCB7IEFwaVV0aWxzIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2FwaS11dGlscyc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2F1dGgnO1xuaW1wb3J0IHsgQ29tbW9uRXZtVXRpbHMgfSBmcm9tICdAbW9yYWxpc3dlYjMvY29tbW9uLWV2bS11dGlscyc7XG5pbXBvcnQgeyBFdm1BcGkgfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLWFwaSc7XG5pbXBvcnQgeyBBcHRvc0FwaSB9IGZyb20gJ0Btb3JhbGlzd2ViMy9hcHRvcy1hcGknO1xuaW1wb3J0IHsgQ29tbW9uU29sVXRpbHMgfSBmcm9tICdAbW9yYWxpc3dlYjMvY29tbW9uLXNvbC11dGlscyc7XG5pbXBvcnQgeyBTb2xBcGkgfSBmcm9tICdAbW9yYWxpc3dlYjMvc29sLWFwaSc7XG5pbXBvcnQgeyBDb3JlLCBDb3JlUHJvdmlkZXIgfSBmcm9tICdAbW9yYWxpc3dlYjMvY29tbW9uLWNvcmUnO1xuXG4vLyBDb3JlXHJcbnZhciBjb3JlID0gQ29yZS5jcmVhdGUoKTtcclxuLy8gVXRpbGl0eSBtb2R1bGVzXHJcbnZhciBjb21tb25Fdm1VdGlscyA9IENvbW1vbkV2bVV0aWxzLmNyZWF0ZShjb3JlKTtcclxudmFyIGNvbW1vblNvbFV0aWxzID0gQ29tbW9uU29sVXRpbHMuY3JlYXRlKGNvcmUpO1xyXG52YXIgYXBpVXRpbHMgPSBBcGlVdGlscy5jcmVhdGUoY29yZSk7XHJcbi8vIEZlYXR1cmUgbW9kdWxlc1xyXG52YXIgYXV0aCA9IEF1dGguY3JlYXRlKGNvcmUpO1xyXG52YXIgc3RyZWFtcyA9IFN0cmVhbXMuY3JlYXRlKGNvcmUpO1xyXG52YXIgZXZtQXBpID0gRXZtQXBpLmNyZWF0ZShjb3JlKTtcclxudmFyIHNvbEFwaSA9IFNvbEFwaS5jcmVhdGUoY29yZSk7XHJcbnZhciBhcHRvc0FwaSA9IEFwdG9zQXBpLmNyZWF0ZShjb3JlKTtcclxuLy8gUmVnaXN0ZXIgYWxsIE1vcmFsaXMgbW9kdWxlcyB0byBDb3JlXHJcbmNvcmUucmVnaXN0ZXJNb2R1bGVzKFtjb21tb25Fdm1VdGlscywgY29tbW9uU29sVXRpbHMsIGF1dGgsIGFwaVV0aWxzLCBldm1BcGksIHNvbEFwaSwgc3RyZWFtc10pO1xyXG5Db3JlUHJvdmlkZXIuc2V0RGVmYXVsdChjb3JlKTtcclxudmFyIE1vcmFsaXMgPSB7XHJcbiAgICBDb3JlOiBjb3JlLFxyXG4gICAgQXV0aDogYXV0aCxcclxuICAgIFN0cmVhbXM6IHN0cmVhbXMsXHJcbiAgICBFdm1BcGk6IGV2bUFwaSxcclxuICAgIFNvbEFwaTogc29sQXBpLFxyXG4gICAgQXB0b3NBcGk6IGFwdG9zQXBpLFxyXG4gICAgRXZtVXRpbHM6IGNvbW1vbkV2bVV0aWxzLFxyXG4gICAgU29sVXRpbHM6IGNvbW1vblNvbFV0aWxzLFxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5zdGFydChjb25maWcpO1xyXG4gICAgfSxcclxufTtcblxuZXhwb3J0IHsgTW9yYWxpcyBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/moralis/lib/esm/index.js\n");

/***/ })

};
;