"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CustomerForm(param) {\n    let { customer, formData, setFormData } = param;\n    var _formData, _formData1, _formData2, _formData3, _formData4, _formData5, _formData6;\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n    };\n    var _formData_name, _formData_email, _formData_channel, _formData_address, _formData_postal, _formData_city, _formData_province;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"name\",\n                value: (_formData_name = (_formData = formData) === null || _formData === void 0 ? void 0 : _formData.name) !== null && _formData_name !== void 0 ? _formData_name : \"\",\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                value: (_formData_email = (_formData1 = formData) === null || _formData1 === void 0 ? void 0 : _formData1.email) !== null && _formData_email !== void 0 ? _formData_email : \"\",\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"channel\",\n                value: (_formData_channel = (_formData2 = formData) === null || _formData2 === void 0 ? void 0 : _formData2.channel) !== null && _formData_channel !== void 0 ? _formData_channel : \"\",\n                onChange: handleInputChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"website\",\n                        children: \"Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"phone\",\n                        children: \"Phone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"other\",\n                        children: \"Other\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"address\",\n                value: (_formData_address = (_formData3 = formData) === null || _formData3 === void 0 ? void 0 : _formData3.address) !== null && _formData_address !== void 0 ? _formData_address : \"\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"postal\",\n                value: (_formData_postal = (_formData4 = formData) === null || _formData4 === void 0 ? void 0 : _formData4.postal) !== null && _formData_postal !== void 0 ? _formData_postal : \"\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"city\",\n                value: (_formData_city = (_formData5 = formData) === null || _formData5 === void 0 ? void 0 : _formData5.city) !== null && _formData_city !== void 0 ? _formData_city : \"\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"province\",\n                value: (_formData_province = (_formData6 = formData) === null || _formData6 === void 0 ? void 0 : _formData6.province) !== null && _formData_province !== void 0 ? _formData_province : \"\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = CustomerForm;\nvar _c;\n$RefreshReg$(_c, \"CustomerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLGFBQWEsS0FBbUM7UUFBbkMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFuQztRQWNDRCxXQUNDQSxZQUNHQSxZQU1EQSxZQUNEQSxZQUNGQSxZQUNJQTtJQXZCdEMsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ0wsWUFBWU0sQ0FBQUEsT0FBUztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNILEtBQUssRUFBRUM7WUFBTTtJQUNsRDtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDbEJBLEVBQUVNLGNBQWM7SUFFcEI7UUFJa0NULGdCQUNDQSxpQkFDR0EsbUJBTURBLG1CQUNEQSxrQkFDRkEsZ0JBQ0lBO0lBYnRDLHFCQUNJLDhEQUFDVTtRQUFLQyxVQUFVSDs7MEJBQ1osOERBQUNJO2dCQUFNUixNQUFLO2dCQUFPQyxPQUFPTCxDQUFBQSxrQkFBQUEsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVSSxJQUFJLGNBQWRKLDRCQUFBQSxpQkFBa0I7Z0JBQUlhLFVBQVVYO2dCQUFtQlksUUFBUTs7Ozs7OzBCQUNyRiw4REFBQ0Y7Z0JBQU1SLE1BQUs7Z0JBQVFDLE9BQU9MLENBQUFBLG1CQUFBQSxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVlLEtBQUssY0FBZmYsNkJBQUFBLGtCQUFtQjtnQkFBSWEsVUFBVVg7Z0JBQW1CWSxRQUFROzs7Ozs7MEJBQ3ZGLDhEQUFDRTtnQkFBT1osTUFBSztnQkFBVUMsT0FBT0wsQ0FBQUEscUJBQUFBLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVWlCLE9BQU8sY0FBakJqQiwrQkFBQUEsb0JBQXFCO2dCQUFJYSxVQUFVWDs7a0NBQzdELDhEQUFDZ0I7d0JBQU9iLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNhO3dCQUFPYixPQUFNO2tDQUFROzs7Ozs7a0NBQ3RCLDhEQUFDYTt3QkFBT2IsT0FBTTtrQ0FBUTs7Ozs7O2tDQUN0Qiw4REFBQ2E7d0JBQU9iLE9BQU07a0NBQVE7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNPO2dCQUFNUixNQUFLO2dCQUFVQyxPQUFPTCxDQUFBQSxxQkFBQUEsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVbUIsT0FBTyxjQUFqQm5CLCtCQUFBQSxvQkFBcUI7Z0JBQUlhLFVBQVVYOzs7Ozs7MEJBQ2hFLDhEQUFDVTtnQkFBTVIsTUFBSztnQkFBU0MsT0FBT0wsQ0FBQUEsb0JBQUFBLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVW9CLE1BQU0sY0FBaEJwQiw4QkFBQUEsbUJBQW9CO2dCQUFJYSxVQUFVWDs7Ozs7OzBCQUM5RCw4REFBQ1U7Z0JBQU1SLE1BQUs7Z0JBQU9DLE9BQU9MLENBQUFBLGtCQUFBQSxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVxQixJQUFJLGNBQWRyQiw0QkFBQUEsaUJBQWtCO2dCQUFJYSxVQUFVWDs7Ozs7OzBCQUMxRCw4REFBQ1U7Z0JBQU1SLE1BQUs7Z0JBQVdDLE9BQU9MLENBQUFBLHNCQUFBQSxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVzQixRQUFRLGNBQWxCdEIsZ0NBQUFBLHFCQUFzQjtnQkFBSWEsVUFBVVg7Ozs7OzswQkFFbEUsOERBQUNxQjtnQkFBT0MsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBR2xDO0tBOUJ3QjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtLmpzP2ZhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJGb3JtKHsgY3VzdG9tZXIsIGZvcm1EYXRhLCBzZXRGb3JtRGF0YSB9KSB7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9OyAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHZhbHVlPXtmb3JtRGF0YT8ubmFtZSA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YT8uZW1haWwgPz8gJyd9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNoYW5uZWxcIiB2YWx1ZT17Zm9ybURhdGE/LmNoYW5uZWwgPz8gJyd9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlYnNpdGVcIj5XZWJzaXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGhvbmVcIj5QaG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWRkcmVzc1wiIHZhbHVlPXtmb3JtRGF0YT8uYWRkcmVzcyA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBvc3RhbFwiIHZhbHVlPXtmb3JtRGF0YT8ucG9zdGFsID8/ICcnfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2l0eVwiIHZhbHVlPXtmb3JtRGF0YT8uY2l0eSA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInByb3ZpbmNlXCIgdmFsdWU9e2Zvcm1EYXRhPy5wcm92aW5jZSA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkN1c3RvbWVyRm9ybSIsImN1c3RvbWVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImVtYWlsIiwic2VsZWN0IiwiY2hhbm5lbCIsIm9wdGlvbiIsImFkZHJlc3MiLCJwb3N0YWwiLCJjaXR5IiwicHJvdmluY2UiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomerForm.js\n"));

/***/ })

});