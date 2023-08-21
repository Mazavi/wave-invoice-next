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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const updateCustomer = (updatedData)=>{\n        const newCustomers = customers.map((customer)=>customer.id === selectedCustomer.id ? updatedData : customer);\n        setCustomers(newCustomers);\n        setSelectedCustomer(updatedData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // Fetching customers here\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(customer),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateCustomer: updateCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yX1QyH7MvsYvHM3VzN1pjHSSBs0=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ00sa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLGlCQUFpQixDQUFDQztRQUN0QixNQUFNQyxlQUFlUixVQUFVUyxHQUFHLENBQUNDLENBQUFBLFdBQ2pDQSxTQUFTQyxFQUFFLEtBQUtULGlCQUFpQlMsRUFBRSxHQUFHSixjQUFjRztRQUd0RFQsYUFBYU87UUFDYkwsb0JBQW9CSTtJQUN0QjtJQUVBVixnREFBU0EsQ0FBQztJQUNSLDBCQUEwQjtJQUM1QixHQUFHLEVBQUU7SUFFTEEsZ0RBQVNBLENBQUM7UUFDUlEsWUFBWUg7SUFDZCxHQUFHO1FBQUNBO0tBQWlCO0lBRXJCLHFCQUNFLDhEQUFDVTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFZCxVQUFVUyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUssc0JBQ3hCLDhEQUFDQzt3QkFBZUMsU0FBUyxJQUFNZCxvQkFBb0JPO2tDQUNoREEsU0FBU1EsSUFBSTt1QkFEUEg7Ozs7Ozs7Ozs7WUFLWmIsa0NBQ0MsOERBQUNKLGdFQUFZQTtnQkFDWFksVUFBVVI7Z0JBQ1ZFLFVBQVVBO2dCQUNWQyxhQUFhQTtnQkFDYkMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7O0FBSzFCO0dBMUN3QlA7S0FBQUE7QUE2Q2pCLGVBQWVvQjtJQUNwQixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFFeEIsSUFBSSxDQUFDRCxJQUFJRSxFQUFFLEVBQUU7UUFDWCwyREFBMkQ7UUFDM0QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsTUFBTUMsT0FBTyxNQUFNSixJQUFJSyxJQUFJO0lBQzNCLE9BQU87UUFDTEMsT0FBTztZQUNMMUIsV0FBV3dCLEtBQUt4QixTQUFTLElBQUksRUFBRTtRQUNqQztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbiBcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3VzdG9tZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB1cGRhdGVDdXN0b21lciA9ICh1cGRhdGVkRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld0N1c3RvbWVycyA9IGN1c3RvbWVycy5tYXAoY3VzdG9tZXIgPT5cbiAgICAgIGN1c3RvbWVyLmlkID09PSBzZWxlY3RlZEN1c3RvbWVyLmlkID8gdXBkYXRlZERhdGEgOiBjdXN0b21lclxuICAgICk7XG5cbiAgICBzZXRDdXN0b21lcnMobmV3Q3VzdG9tZXJzKTtcbiAgICBzZXRTZWxlY3RlZEN1c3RvbWVyKHVwZGF0ZWREYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoaW5nIGN1c3RvbWVycyBoZXJlXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvcm1EYXRhKHNlbGVjdGVkQ3VzdG9tZXIpO1xuICB9LCBbc2VsZWN0ZWRDdXN0b21lcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DdXN0b21lcnM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Y3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIoY3VzdG9tZXIpfT5cbiAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHtzZWxlY3RlZEN1c3RvbWVyICYmIChcbiAgICAgICAgPEN1c3RvbWVyRm9ybSBcbiAgICAgICAgICBjdXN0b21lcj17c2VsZWN0ZWRDdXN0b21lcn0gXG4gICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfSBcbiAgICAgICAgICBzZXRGb3JtRGF0YT17c2V0Rm9ybURhdGF9XG4gICAgICAgICAgdXBkYXRlQ3VzdG9tZXI9e3VwZGF0ZUN1c3RvbWVyfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd2F2ZWFjY291bnRpbmcuZ2l0aHViLmlvL3NlLWNoYWxsZW5nZS1mZS1jdXN0b21lcnMvc2V0dGluZ3MuanNvbicpO1xuICBcbiAgaWYgKCFyZXMub2spIHtcbiAgICAvLyBUaGlzIHdpbGwgYWN0aXZhdGUgdGhlIGNsb3Nlc3QgYGVycm9yLmpzYCBFcnJvciBCb3VuZGFyeVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXN0b21lcnM6IGRhdGEuY3VzdG9tZXJzIHx8IFtdXG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3VzdG9tZXJGb3JtIiwiSG9tZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInNlbGVjdGVkQ3VzdG9tZXIiLCJzZXRTZWxlY3RlZEN1c3RvbWVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVwZGF0ZUN1c3RvbWVyIiwidXBkYXRlZERhdGEiLCJuZXdDdXN0b21lcnMiLCJtYXAiLCJjdXN0b21lciIsImlkIiwiZGl2IiwiaDEiLCJ1bCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwibmFtZSIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});