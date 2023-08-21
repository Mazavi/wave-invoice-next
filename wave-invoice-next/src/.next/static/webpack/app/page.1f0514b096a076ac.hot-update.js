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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CustomerForm(param) {\n    let { customer } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: customer.name,\n        email: customer.email,\n        channel: customer.channel,\n        address: customer.address,\n        postal: customer.postal,\n        city: customer.city,\n        province: customer.province\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (customer) {\n            formData(customer.name || \"\");\n            setEmail(customer.email || \"\");\n        }\n    }, [\n        customer\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!formData.name || !formData.email) {\n            alert(\"Name and email fields are required!\");\n            return;\n        }\n        console.log(formData); // This will log the data\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"name\",\n                value: formData.name,\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                value: formData.email,\n                onChange: handleInputChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"channel\",\n                value: formData.channel,\n                onChange: handleInputChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"website\",\n                        children: \"Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"phone\",\n                        children: \"Phone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"other\",\n                        children: \"Other\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"address\",\n                value: formData.address,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"postal\",\n                value: formData.postal,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"city\",\n                value: formData.city,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"province\",\n                value: formData.province,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/components/CustomerForm.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomerForm, \"gWP6RaEHvo2J24cCTaEE0p8kNmk=\");\n_c = CustomerForm;\nvar _c;\n$RefreshReg$(_c, \"CustomerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRSxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDakMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxNQUFNSCxTQUFTRyxJQUFJO1FBQ25CQyxPQUFPSixTQUFTSSxLQUFLO1FBQ3JCQyxTQUFTTCxTQUFTSyxPQUFPO1FBQ3pCQyxTQUFTTixTQUFTTSxPQUFPO1FBQ3pCQyxRQUFRUCxTQUFTTyxNQUFNO1FBQ3ZCQyxNQUFNUixTQUFTUSxJQUFJO1FBQ25CQyxVQUFVVCxTQUFTUyxRQUFRO0lBQy9CO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRVIsSUFBSSxFQUFFUyxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTTtRQUNoQ1gsWUFBWVksQ0FBQUEsT0FBUztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNYLEtBQUssRUFBRVM7WUFBTTtJQUNsRDtJQUVBZCxnREFBU0EsQ0FBQztRQUNOLElBQUlFLFVBQVU7WUFDVkMsU0FBU0QsU0FBU0csSUFBSSxJQUFJO1lBQzFCWSxTQUFTZixTQUFTSSxLQUFLLElBQUk7UUFDL0I7SUFDSixHQUFHO1FBQUNKO0tBQVM7SUFFYixNQUFNZ0IsZUFBZSxDQUFDTDtRQUNsQkEsRUFBRU0sY0FBYztRQUVoQixJQUFJLENBQUNoQixTQUFTRSxJQUFJLElBQUksQ0FBQ0YsU0FBU0csS0FBSyxFQUFFO1lBQ25DYyxNQUFNO1lBQ047UUFDSjtRQUVBQyxRQUFRQyxHQUFHLENBQUNuQixXQUFZLHlCQUF5QjtJQUNyRDtJQUVBLHFCQUNJLDhEQUFDb0I7UUFBS0MsVUFBVU47OzBCQUNaLDhEQUFDTztnQkFBTXBCLE1BQUs7Z0JBQU9TLE9BQU9YLFNBQVNFLElBQUk7Z0JBQUVxQixVQUFVZDtnQkFBbUJlLFFBQVE7Ozs7OzswQkFDOUUsOERBQUNGO2dCQUFNcEIsTUFBSztnQkFBUVMsT0FBT1gsU0FBU0csS0FBSztnQkFBRW9CLFVBQVVkO2dCQUFtQmUsUUFBUTs7Ozs7OzBCQUNoRiw4REFBQ0M7Z0JBQU92QixNQUFLO2dCQUFVUyxPQUFPWCxTQUFTSSxPQUFPO2dCQUFFbUIsVUFBVWQ7O2tDQUN0RCw4REFBQ2lCO3dCQUFPZixPQUFNO2tDQUFVOzs7Ozs7a0NBQ3hCLDhEQUFDZTt3QkFBT2YsT0FBTTtrQ0FBUTs7Ozs7O2tDQUN0Qiw4REFBQ2U7d0JBQU9mLE9BQU07a0NBQVE7Ozs7OztrQ0FDdEIsOERBQUNlO3dCQUFPZixPQUFNO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDVztnQkFBTXBCLE1BQUs7Z0JBQVVTLE9BQU9YLFNBQVNLLE9BQU87Z0JBQUVrQixVQUFVZDs7Ozs7OzBCQUN6RCw4REFBQ2E7Z0JBQU1wQixNQUFLO2dCQUFTUyxPQUFPWCxTQUFTTSxNQUFNO2dCQUFFaUIsVUFBVWQ7Ozs7OzswQkFDdkQsOERBQUNhO2dCQUFNcEIsTUFBSztnQkFBT1MsT0FBT1gsU0FBU08sSUFBSTtnQkFBRWdCLFVBQVVkOzs7Ozs7MEJBQ25ELDhEQUFDYTtnQkFBTXBCLE1BQUs7Z0JBQVdTLE9BQU9YLFNBQVNRLFFBQVE7Z0JBQUVlLFVBQVVkOzs7Ozs7MEJBRTNELDhEQUFDa0I7Z0JBQU9DLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUdsQztHQXBEd0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyRm9ybS5qcz9mYTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyRm9ybSh7IGN1c3RvbWVyIH0pIHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogY3VzdG9tZXIubmFtZSxcbiAgICAgICAgZW1haWw6IGN1c3RvbWVyLmVtYWlsLFxuICAgICAgICBjaGFubmVsOiBjdXN0b21lci5jaGFubmVsLFxuICAgICAgICBhZGRyZXNzOiBjdXN0b21lci5hZGRyZXNzLFxuICAgICAgICBwb3N0YWw6IGN1c3RvbWVyLnBvc3RhbCxcbiAgICAgICAgY2l0eTogY3VzdG9tZXIuY2l0eSxcbiAgICAgICAgcHJvdmluY2U6IGN1c3RvbWVyLnByb3ZpbmNlXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VzdG9tZXIpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhKGN1c3RvbWVyLm5hbWUgfHwgXCJcIik7XG4gICAgICAgICAgICBzZXRFbWFpbChjdXN0b21lci5lbWFpbCB8fCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXN0b21lcl0pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghZm9ybURhdGEubmFtZSB8fCAhZm9ybURhdGEuZW1haWwpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdOYW1lIGFuZCBlbWFpbCBmaWVsZHMgYXJlIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpOyAgLy8gVGhpcyB3aWxsIGxvZyB0aGUgZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHZhbHVlPXtmb3JtRGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaGFubmVsXCIgdmFsdWU9e2Zvcm1EYXRhLmNoYW5uZWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlYnNpdGVcIj5XZWJzaXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGhvbmVcIj5QaG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWRkcmVzc1wiIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicG9zdGFsXCIgdmFsdWU9e2Zvcm1EYXRhLnBvc3RhbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNpdHlcIiB2YWx1ZT17Zm9ybURhdGEuY2l0eX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInByb3ZpbmNlXCIgdmFsdWU9e2Zvcm1EYXRhLnByb3ZpbmNlfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3VzdG9tZXJGb3JtIiwiY3VzdG9tZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwiY2hhbm5lbCIsImFkZHJlc3MiLCJwb3N0YWwiLCJjaXR5IiwicHJvdmluY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomerForm.js\n"));

/***/ })

});