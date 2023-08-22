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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CustomerForm(param) {\n    let { formData, setFormData } = param;\n    var _formData, _formData1, _formData2, _formData3, _formData4, _formData5, _formData6;\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n    };\n    var _formData_name, _formData_email, _formData_channel, _formData_address, _formData_postal, _formData_city, _formData_province;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        style: {\n            margin: \"20px\",\n            padding: \"20px\",\n            border: \"1px solid #ccc\",\n            borderRadius: \"5px\",\n            boxShadow: \"0 0 10px rgba(0, 0, 0, 0.1)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"name\",\n                value: (_formData_name = (_formData = formData) === null || _formData === void 0 ? void 0 : _formData.name) !== null && _formData_name !== void 0 ? _formData_name : \"\",\n                onChange: handleInputChange,\n                required: true,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                value: (_formData_email = (_formData1 = formData) === null || _formData1 === void 0 ? void 0 : _formData1.email) !== null && _formData_email !== void 0 ? _formData_email : \"\",\n                onChange: handleInputChange,\n                required: true,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"channel\",\n                value: (_formData_channel = (_formData2 = formData) === null || _formData2 === void 0 ? void 0 : _formData2.channel) !== null && _formData_channel !== void 0 ? _formData_channel : \"\",\n                onChange: handleInputChange,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"website\",\n                        children: \"Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"phone\",\n                        children: \"Phone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"other\",\n                        children: \"Other\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"address\",\n                value: (_formData_address = (_formData3 = formData) === null || _formData3 === void 0 ? void 0 : _formData3.address) !== null && _formData_address !== void 0 ? _formData_address : \"\",\n                onChange: handleInputChange,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"postal\",\n                value: (_formData_postal = (_formData4 = formData) === null || _formData4 === void 0 ? void 0 : _formData4.postal) !== null && _formData_postal !== void 0 ? _formData_postal : \"\",\n                onChange: handleInputChange,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"city\",\n                value: (_formData_city = (_formData5 = formData) === null || _formData5 === void 0 ? void 0 : _formData5.city) !== null && _formData_city !== void 0 ? _formData_city : \"\",\n                onChange: handleInputChange,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"province\",\n                value: (_formData_province = (_formData6 = formData) === null || _formData6 === void 0 ? void 0 : _formData6.province) !== null && _formData_province !== void 0 ? _formData_province : \"\",\n                onChange: handleInputChange,\n                style: {\n                    display: \"block\",\n                    marginBottom: \"15px\",\n                    padding: \"10px\",\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                style: {\n                    backgroundColor: \"#007bff\",\n                    color: \"white\",\n                    padding: \"10px 20px\",\n                    border: \"none\",\n                    borderRadius: \"4px\",\n                    cursor: \"pointer\",\n                    textAlign: \"center\"\n                },\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = CustomerForm;\nvar _c;\n$RefreshReg$(_c, \"CustomerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLGFBQWEsS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBekI7UUFlSEQsV0FDQ0EsWUFDR0EsWUFNTEEsWUFDREEsWUFDRkEsWUFDSUE7SUF4QjlCLE1BQU1FLG9CQUFvQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENMLFlBQVlNLENBQUFBLE9BQVM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDSCxLQUFLLEVBQUVDO1lBQU07SUFDbEQ7SUFFQSxNQUFNRyxlQUFlLENBQUNMO1FBQ2xCQSxFQUFFTSxjQUFjO0lBRXBCO1FBSzhCVCxnQkFDQ0EsaUJBQ0dBLG1CQU1MQSxtQkFDREEsa0JBQ0ZBLGdCQUNJQTtJQWI5QixxQkFDQSw4REFBQ1U7UUFBS0MsVUFBVUg7UUFBY0ksT0FBTztZQUFFQyxRQUFRO1lBQVFDLFNBQVM7WUFBUUMsUUFBUTtZQUFrQkMsY0FBYztZQUFPQyxXQUFXO1FBQThCOzswQkFDNUosOERBQUNDO2dCQUFNZCxNQUFLO2dCQUFPQyxPQUFPTCxDQUFBQSxrQkFBQUEsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVSSxJQUFJLGNBQWRKLDRCQUFBQSxpQkFBa0I7Z0JBQUltQixVQUFVakI7Z0JBQW1Ca0IsUUFBUTtnQkFBQ1IsT0FBTztvQkFBRVMsU0FBUztvQkFBU0MsY0FBYztvQkFBUVIsU0FBUztvQkFBUVMsT0FBTztvQkFBUVIsUUFBUTtvQkFBa0JDLGNBQWM7Z0JBQU07Ozs7OzswQkFDck4sOERBQUNFO2dCQUFNZCxNQUFLO2dCQUFRQyxPQUFPTCxDQUFBQSxtQkFBQUEsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVd0IsS0FBSyxjQUFmeEIsNkJBQUFBLGtCQUFtQjtnQkFBSW1CLFVBQVVqQjtnQkFBbUJrQixRQUFRO2dCQUFDUixPQUFPO29CQUFFUyxTQUFTO29CQUFTQyxjQUFjO29CQUFRUixTQUFTO29CQUFRUyxPQUFPO29CQUFRUixRQUFRO29CQUFrQkMsY0FBYztnQkFBTTs7Ozs7OzBCQUN2Tiw4REFBQ1M7Z0JBQU9yQixNQUFLO2dCQUFVQyxPQUFPTCxDQUFBQSxxQkFBQUEsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVMEIsT0FBTyxjQUFqQjFCLCtCQUFBQSxvQkFBcUI7Z0JBQUltQixVQUFVakI7Z0JBQW1CVSxPQUFPO29CQUFFUyxTQUFTO29CQUFTQyxjQUFjO29CQUFRUixTQUFTO29CQUFRUyxPQUFPO29CQUFRUixRQUFRO29CQUFrQkMsY0FBYztnQkFBTTs7a0NBQy9NLDhEQUFDVzt3QkFBT3RCLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNzQjt3QkFBT3RCLE9BQU07a0NBQVE7Ozs7OztrQ0FDMUIsOERBQUNzQjt3QkFBT3RCLE9BQU07a0NBQVE7Ozs7OztrQ0FDdEIsOERBQUNzQjt3QkFBT3RCLE9BQU07a0NBQVE7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNhO2dCQUFNZCxNQUFLO2dCQUFVQyxPQUFPTCxDQUFBQSxxQkFBQUEsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVNEIsT0FBTyxjQUFqQjVCLCtCQUFBQSxvQkFBcUI7Z0JBQUltQixVQUFVakI7Z0JBQW1CVSxPQUFPO29CQUFFUyxTQUFTO29CQUFTQyxjQUFjO29CQUFRUixTQUFTO29CQUFRUyxPQUFPO29CQUFRUixRQUFRO29CQUFrQkMsY0FBYztnQkFBTTs7Ozs7OzBCQUNsTiw4REFBQ0U7Z0JBQU1kLE1BQUs7Z0JBQVNDLE9BQU9MLENBQUFBLG9CQUFBQSxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVU2QixNQUFNLGNBQWhCN0IsOEJBQUFBLG1CQUFvQjtnQkFBSW1CLFVBQVVqQjtnQkFBbUJVLE9BQU87b0JBQUVTLFNBQVM7b0JBQVNDLGNBQWM7b0JBQVFSLFNBQVM7b0JBQVFTLE9BQU87b0JBQVFSLFFBQVE7b0JBQWtCQyxjQUFjO2dCQUFNOzs7Ozs7MEJBQ2hOLDhEQUFDRTtnQkFBTWQsTUFBSztnQkFBT0MsT0FBT0wsQ0FBQUEsa0JBQUFBLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVThCLElBQUksY0FBZDlCLDRCQUFBQSxpQkFBa0I7Z0JBQUltQixVQUFVakI7Z0JBQW1CVSxPQUFPO29CQUFFUyxTQUFTO29CQUFTQyxjQUFjO29CQUFRUixTQUFTO29CQUFRUyxPQUFPO29CQUFRUixRQUFRO29CQUFrQkMsY0FBYztnQkFBTTs7Ozs7OzBCQUM1TSw4REFBQ0U7Z0JBQU1kLE1BQUs7Z0JBQVdDLE9BQU9MLENBQUFBLHNCQUFBQSxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVUrQixRQUFRLGNBQWxCL0IsZ0NBQUFBLHFCQUFzQjtnQkFBSW1CLFVBQVVqQjtnQkFBbUJVLE9BQU87b0JBQUVTLFNBQVM7b0JBQVNDLGNBQWM7b0JBQVFSLFNBQVM7b0JBQVFTLE9BQU87b0JBQVFSLFFBQVE7b0JBQWtCQyxjQUFjO2dCQUFNOzs7Ozs7MEJBQ3BOLDhEQUFDZ0I7Z0JBQU9DLE1BQUs7Z0JBQVNyQixPQUFPO29CQUFFc0IsaUJBQWlCO29CQUFXQyxPQUFPO29CQUFTckIsU0FBUztvQkFBYUMsUUFBUTtvQkFBUUMsY0FBYztvQkFBT29CLFFBQVE7b0JBQVdDLFdBQVc7Z0JBQVM7MEJBQUc7Ozs7Ozs7Ozs7OztBQUlwTDtLQS9Cd0J0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyRm9ybS5qcz9mYTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyRm9ybSh7IGZvcm1EYXRhLCBzZXRGb3JtRGF0YSB9KSB7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9OyAgXG5cblxuICAgIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgbWFyZ2luOiAnMjBweCcsIHBhZGRpbmc6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBib3hTaGFkb3c6ICcwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSknIH19PlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGE/Lm5hbWUgPz8gJyd9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMTVweCcsIHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICcxMDAlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19Lz5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YT8uZW1haWwgPz8gJyd9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMTVweCcsIHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICcxMDAlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19Lz5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2hhbm5lbFwiIHZhbHVlPXtmb3JtRGF0YT8uY2hhbm5lbCA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxNXB4JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2Vic2l0ZVwiPldlYnNpdGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbWFpbFwiPkVtYWlsPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaG9uZVwiPlBob25lPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGlucHV0IG5hbWU9XCJhZGRyZXNzXCIgdmFsdWU9e2Zvcm1EYXRhPy5hZGRyZXNzID8/ICcnfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzE1cHgnLCBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScsIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fS8+XG4gICAgPGlucHV0IG5hbWU9XCJwb3N0YWxcIiB2YWx1ZT17Zm9ybURhdGE/LnBvc3RhbCA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxNXB4JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgIDxpbnB1dCBuYW1lPVwiY2l0eVwiIHZhbHVlPXtmb3JtRGF0YT8uY2l0eSA/PyAnJ30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxNXB4JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgIDxpbnB1dCBuYW1lPVwicHJvdmluY2VcIiB2YWx1ZT17Zm9ybURhdGE/LnByb3ZpbmNlID8/ICcnfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzE1cHgnLCBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScsIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fS8+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwN2JmZicsIGNvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCAyMHB4JywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogJzRweCcsIGN1cnNvcjogJ3BvaW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cblxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDdXN0b21lckZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIm9uU3VibWl0Iiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiZW1haWwiLCJzZWxlY3QiLCJjaGFubmVsIiwib3B0aW9uIiwiYWRkcmVzcyIsInBvc3RhbCIsImNpdHkiLCJwcm92aW5jZSIsImJ1dHRvbiIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImN1cnNvciIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomerForm.js\n"));

/***/ })

});