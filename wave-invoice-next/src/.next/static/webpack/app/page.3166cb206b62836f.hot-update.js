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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CustomerForm(param) {\n    let { customer } = param;\n    var _customer, _customer1, _customer2, _customer3, _customer4, _customer5, _customer6;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: (_customer = customer) === null || _customer === void 0 ? void 0 : _customer.name,\n        email: (_customer1 = customer) === null || _customer1 === void 0 ? void 0 : _customer1.email,\n        channel: (_customer2 = customer) === null || _customer2 === void 0 ? void 0 : _customer2.channel,\n        address: (_customer3 = customer) === null || _customer3 === void 0 ? void 0 : _customer3.address,\n        postal: (_customer4 = customer) === null || _customer4 === void 0 ? void 0 : _customer4.postal,\n        city: (_customer5 = customer) === null || _customer5 === void 0 ? void 0 : _customer5.city,\n        province: (_customer6 = customer) === null || _customer6 === void 0 ? void 0 : _customer6.province\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (customer) {\n            setFormData(customer.name || \"\");\n            setFormData(customer.email || \"\");\n        }\n    }, [\n        customer\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!formData.name || !formData.email) {\n            alert(\"Name and email fields are required!\");\n            return;\n        }\n        console.log(formData); // This will log the data\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"name\",\n                value: formData.name,\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                value: formData.email,\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"channel\",\n                value: formData.channel,\n                onChange: handleInputChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"website\",\n                        children: \"Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"phone\",\n                        children: \"Phone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"other\",\n                        children: \"Other\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"address\",\n                value: formData.address,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"postal\",\n                value: formData.postal,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"city\",\n                value: formData.city,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"province\",\n                value: formData.province,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomerForm, \"sIMIw8efBZYoU0mjDhJP+UQwr8E=\");\n_c = CustomerForm;\nvar _c;\n$RefreshReg$(_c, \"CustomerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRSxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjtRQUV2QkEsV0FDQ0EsWUFDRUEsWUFDQUEsWUFDREEsWUFDRkEsWUFDSUE7O0lBUGQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxJQUFJLEdBQUVILFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUcsSUFBSTtRQUNwQkMsS0FBSyxHQUFFSixhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVJLEtBQUs7UUFDdEJDLE9BQU8sR0FBRUwsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVSyxPQUFPO1FBQzFCQyxPQUFPLEdBQUVOLGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVU0sT0FBTztRQUMxQkMsTUFBTSxHQUFFUCxhQUFBQSxzQkFBQUEsaUNBQUFBLFdBQVVPLE1BQU07UUFDeEJDLElBQUksR0FBRVIsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVUSxJQUFJO1FBQ3BCQyxRQUFRLEdBQUVULGFBQUFBLHNCQUFBQSxpQ0FBQUEsV0FBVVMsUUFBUTtJQUNoQztJQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QixNQUFNLEVBQUVSLElBQUksRUFBRVMsS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENYLFlBQVlZLENBQUFBLE9BQVM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDWCxLQUFLLEVBQUVTO1lBQU07SUFDbEQ7SUFFQWQsZ0RBQVNBLENBQUM7UUFDTixJQUFJRSxVQUFVO1lBQ1ZFLFlBQVlGLFNBQVNHLElBQUksSUFBSTtZQUM3QkQsWUFBWUYsU0FBU0ksS0FBSyxJQUFJO1FBQ2xDO0lBQ0osR0FBRztRQUFFSjtLQUFVO0lBRWYsTUFBTWUsZUFBZSxDQUFDSjtRQUNsQkEsRUFBRUssY0FBYztRQUVoQixJQUFJLENBQUNmLFNBQVNFLElBQUksSUFBSSxDQUFDRixTQUFTRyxLQUFLLEVBQUU7WUFDbkNhLE1BQU07WUFDTjtRQUNKO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQ2xCLFdBQVkseUJBQXlCO0lBQ3JEO0lBRUEscUJBQ0ksOERBQUNtQjtRQUFLQyxVQUFVTjs7MEJBQ1osOERBQUNPO2dCQUFNbkIsTUFBSztnQkFBT1MsT0FBT1gsU0FBU0UsSUFBSTtnQkFBRW9CLFVBQVViO2dCQUFtQmMsUUFBUTs7Ozs7OzBCQUM5RSw4REFBQ0Y7Z0JBQU1uQixNQUFLO2dCQUFRUyxPQUFPWCxTQUFTRyxLQUFLO2dCQUFFbUIsVUFBVWI7Z0JBQW1CYyxRQUFROzs7Ozs7MEJBQ2hGLDhEQUFDQztnQkFBT3RCLE1BQUs7Z0JBQVVTLE9BQU9YLFNBQVNJLE9BQU87Z0JBQUVrQixVQUFVYjs7a0NBQ3RELDhEQUFDZ0I7d0JBQU9kLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNjO3dCQUFPZCxPQUFNO2tDQUFROzs7Ozs7a0NBQ3RCLDhEQUFDYzt3QkFBT2QsT0FBTTtrQ0FBUTs7Ozs7O2tDQUN0Qiw4REFBQ2M7d0JBQU9kLE9BQU07a0NBQVE7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNVO2dCQUFNbkIsTUFBSztnQkFBVVMsT0FBT1gsU0FBU0ssT0FBTztnQkFBRWlCLFVBQVViOzs7Ozs7MEJBQ3pELDhEQUFDWTtnQkFBTW5CLE1BQUs7Z0JBQVNTLE9BQU9YLFNBQVNNLE1BQU07Z0JBQUVnQixVQUFVYjs7Ozs7OzBCQUN2RCw4REFBQ1k7Z0JBQU1uQixNQUFLO2dCQUFPUyxPQUFPWCxTQUFTTyxJQUFJO2dCQUFFZSxVQUFVYjs7Ozs7OzBCQUNuRCw4REFBQ1k7Z0JBQU1uQixNQUFLO2dCQUFXUyxPQUFPWCxTQUFTUSxRQUFRO2dCQUFFYyxVQUFVYjs7Ozs7OzBCQUUzRCw4REFBQ2lCO2dCQUFPQyxNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHbEM7R0FwRHdCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckZvcm0uanM/ZmEwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lckZvcm0oeyBjdXN0b21lciB9KSB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IGN1c3RvbWVyPy5uYW1lLFxuICAgICAgICBlbWFpbDogY3VzdG9tZXI/LmVtYWlsLFxuICAgICAgICBjaGFubmVsOiBjdXN0b21lcj8uY2hhbm5lbCxcbiAgICAgICAgYWRkcmVzczogY3VzdG9tZXI/LmFkZHJlc3MsXG4gICAgICAgIHBvc3RhbDogY3VzdG9tZXI/LnBvc3RhbCxcbiAgICAgICAgY2l0eTogY3VzdG9tZXI/LmNpdHksXG4gICAgICAgIHByb3ZpbmNlOiBjdXN0b21lcj8ucHJvdmluY2VcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldEZvcm1EYXRhKHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXN0b21lcikge1xuICAgICAgICAgICAgc2V0Rm9ybURhdGEoY3VzdG9tZXIubmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKGN1c3RvbWVyLmVtYWlsIHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgfSwgWyhjdXN0b21lcildKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIWZvcm1EYXRhLm5hbWUgfHwgIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICAgICAgICBhbGVydCgnTmFtZSBhbmQgZW1haWwgZmllbGRzIGFyZSByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTsgIC8vIFRoaXMgd2lsbCBsb2cgdGhlIGRhdGFcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2hhbm5lbFwiIHZhbHVlPXtmb3JtRGF0YS5jaGFubmVsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3ZWJzaXRlXCI+V2Vic2l0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbWFpbFwiPkVtYWlsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBob25lXCI+UGhvbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImFkZHJlc3NcIiB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBvc3RhbFwiIHZhbHVlPXtmb3JtRGF0YS5wb3N0YWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjaXR5XCIgdmFsdWU9e2Zvcm1EYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcm92aW5jZVwiIHZhbHVlPXtmb3JtRGF0YS5wcm92aW5jZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkN1c3RvbWVyRm9ybSIsImN1c3RvbWVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsImNoYW5uZWwiLCJhZGRyZXNzIiwicG9zdGFsIiwiY2l0eSIsInByb3ZpbmNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomerForm.js\n"));

/***/ })

});