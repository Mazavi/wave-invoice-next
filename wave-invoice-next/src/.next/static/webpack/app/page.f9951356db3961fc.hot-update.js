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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        channel: \"\",\n        address: \"\",\n        postal: \"\",\n        city: \"\",\n        province: \"\"\n    });\n    console.log(\"Debug customers:\", customers); // Debugging line\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\").then((response)=>response.json()).then((data)=>setCustomers(data.customers));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    const updateSelectedCustomer = (updatedData)=>{\n        if (!updatedData) return;\n        // Update selected customer\n        setSelectedCustomer(updatedData);\n        // Update the customers array to include the new details\n        const updatedCustomers = customers.map((customer)=>{\n            if (customer && updatedData) return customer.id === updatedData.id ? updatedData : customer;\n        });\n        setCustomers(updatedCustomers);\n    };\n    console.log(JSON.stringify(formData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: customers ? customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(customer),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)) : \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateSelectedCustomer: updateSelectedCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"vLiSHa76+ZISt2GOIYTlpTQ3sBg=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0csS0FBSyxLQUFHO1FBQUgsRUFBRyxHQUFIOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNyQ1UsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JkLFlBQVksaUJBQWlCO0lBRTdESCxnREFBU0EsQ0FBQztRQUNOa0IsTUFBTSw0RUFDREMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFsQixhQUFha0IsS0FBS25CLFNBQVM7SUFDakQsR0FBRyxFQUFFO0lBRUxILGdEQUFTQSxDQUFDO1FBQ05RLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckIsTUFBTWtCLHlCQUF5QixDQUFDQztRQUMxQixJQUFJLENBQUNBLGFBQWE7UUFDbEIsMkJBQTJCO1FBQzNCbEIsb0JBQW9Ca0I7UUFDcEIsd0RBQXdEO1FBQ3hELE1BQU1DLG1CQUFtQnRCLFVBQVV1QixHQUFHLENBQUNDLENBQUFBO1lBQ3JDLElBQUlBLFlBQVlILGFBQ2hCLE9BQU9HLFNBQVNDLEVBQUUsS0FBS0osWUFBWUksRUFBRSxHQUFHSixjQUFjRztRQUMxRDtRQUNBdkIsYUFBYXFCO0lBQ2pCO0lBQ0FULFFBQVFDLEdBQUcsQ0FBQ1ksS0FBS0MsU0FBUyxDQUFDdkI7SUFFM0IscUJBQ0ksOERBQUN3Qjs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJOUIsWUFBWUEsVUFBVXVCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVTyxzQkFDbEMsOERBQUNDO3dCQUFlQyxTQUFTLElBQU05QixvQkFBb0JxQjtrQ0FDOUNBLFNBQVNsQixJQUFJO3VCQURUeUI7Ozs7Z0NBR1I7Ozs7OztZQUVSN0Isa0NBQW9CLDhEQUFDSixnRUFBWUE7Z0JBQUMwQixVQUFVdEI7Z0JBQW1CRSxVQUFVQTtnQkFBVUMsYUFBYUE7Z0JBQWFlLHdCQUF3QkE7Ozs7Ozs7Ozs7OztBQUdsSjtHQW5Ed0JyQjtLQUFBQTtBQXFEakIsZUFBZW1DO0lBQ3BCLE1BQU1DLE1BQU0sTUFBTXBCLE1BQU07SUFFeEIsSUFBSSxDQUFDb0IsSUFBSUMsRUFBRSxFQUFFO1FBQ1gsMkRBQTJEO1FBQzNELE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE1BQU1sQixPQUFPLE1BQU1nQixJQUFJakIsSUFBSTtJQUMzQixPQUFPO1FBQ0xvQixPQUFPO1lBQ0x0QyxXQUFXbUIsS0FBS25CLFNBQVMsSUFBSSxFQUFFO1FBQ2pDO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuIFxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXN0b21lckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21lckZvcm0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB9KSB7XG4gICAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgY2hhbm5lbDogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBwb3N0YWw6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgcHJvdmluY2U6ICcnXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGN1c3RvbWVyczpcIiwgY3VzdG9tZXJzKTsgLy8gRGVidWdnaW5nIGxpbmVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwczovL3dhdmVhY2NvdW50aW5nLmdpdGh1Yi5pby9zZS1jaGFsbGVuZ2UtZmUtY3VzdG9tZXJzL3NldHRpbmdzLmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDdXN0b21lcnMoZGF0YS5jdXN0b21lcnMpKTtcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBzZXRGb3JtRGF0YShzZWxlY3RlZEN1c3RvbWVyKTtcbiAgICB9LCBbc2VsZWN0ZWRDdXN0b21lcl0pXG5cbiAgICBjb25zdCB1cGRhdGVTZWxlY3RlZEN1c3RvbWVyID0gKHVwZGF0ZWREYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF1cGRhdGVkRGF0YSkgcmV0dXJuO1xuICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBjdXN0b21lclxuICAgICAgICAgIHNldFNlbGVjdGVkQ3VzdG9tZXIodXBkYXRlZERhdGEpO1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VzdG9tZXJzIGFycmF5IHRvIGluY2x1ZGUgdGhlIG5ldyBkZXRhaWxzXG4gICAgICAgICAgY29uc3QgdXBkYXRlZEN1c3RvbWVycyA9IGN1c3RvbWVycy5tYXAoY3VzdG9tZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGN1c3RvbWVyICYmIHVwZGF0ZWREYXRhKVxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyLmlkID09PSB1cGRhdGVkRGF0YS5pZCA/IHVwZGF0ZWREYXRhIDogY3VzdG9tZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRDdXN0b21lcnModXBkYXRlZEN1c3RvbWVycyk7XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmb3JtRGF0YSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DdXN0b21lcnM8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXN0b21lcnMgPyBjdXN0b21lcnMubWFwKChjdXN0b21lciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIoY3VzdG9tZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpIDogXCJMb2FkaW5nXCJ9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIgJiYgPEN1c3RvbWVyRm9ybSBjdXN0b21lcj17c2VsZWN0ZWRDdXN0b21lcn0gIGZvcm1EYXRhPXtmb3JtRGF0YX0gc2V0Rm9ybURhdGE9e3NldEZvcm1EYXRhfSB1cGRhdGVTZWxlY3RlZEN1c3RvbWVyPXt1cGRhdGVTZWxlY3RlZEN1c3RvbWVyfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3dhdmVhY2NvdW50aW5nLmdpdGh1Yi5pby9zZS1jaGFsbGVuZ2UtZmUtY3VzdG9tZXJzL3NldHRpbmdzLmpzb24nKTtcbiAgXG4gIGlmICghcmVzLm9rKSB7XG4gICAgLy8gVGhpcyB3aWxsIGFjdGl2YXRlIHRoZSBjbG9zZXN0IGBlcnJvci5qc2AgRXJyb3IgQm91bmRhcnlcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gIH1cblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY3VzdG9tZXJzOiBkYXRhLmN1c3RvbWVycyB8fCBbXVxuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkN1c3RvbWVyRm9ybSIsIkhvbWUiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJzZWxlY3RlZEN1c3RvbWVyIiwic2V0U2VsZWN0ZWRDdXN0b21lciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJjaGFubmVsIiwiYWRkcmVzcyIsInBvc3RhbCIsImNpdHkiLCJwcm92aW5jZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXBkYXRlU2VsZWN0ZWRDdXN0b21lciIsInVwZGF0ZWREYXRhIiwidXBkYXRlZEN1c3RvbWVycyIsIm1hcCIsImN1c3RvbWVyIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJ1bCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwiZ2V0RGF0YSIsInJlcyIsIm9rIiwiRXJyb3IiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});