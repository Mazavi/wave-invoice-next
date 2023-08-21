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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        channel: \"\",\n        address: \"\",\n        postal: \"\",\n        city: \"\",\n        province: \"\"\n    });\n    const updateCustomer = (updatedData)=>{\n        const updatedCustomers = customers.map((customer)=>{\n            return customer.id === updatedData.id ? updatedData : customer;\n        });\n        setCustomers(newCustomers);\n        setSelectedCustomer(updatedData);\n    };\n    console.log(\"Debug customers:\", customers); // Debugging line\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\").then((response)=>response.json()).then((data)=>setCustomers(data.customers));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    console.log(JSON.stringify(formData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: customers ? customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(customer),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this)) : \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateCustomer: updateCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"vLiSHa76+ZISt2GOIYTlpTQ3sBg=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0csS0FBSyxLQUFHO1FBQUgsRUFBRyxHQUFIOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNyQ1UsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3hCLE1BQU1DLG1CQUFtQmYsVUFBVWdCLEdBQUcsQ0FBQ0MsQ0FBQUE7WUFDdkMsT0FBT0EsU0FBU0MsRUFBRSxLQUFLSixZQUFZSSxFQUFFLEdBQUdKLGNBQWNHO1FBQ3JEO1FBRURoQixhQUFha0I7UUFDYmhCLG9CQUFvQlc7SUFDdEI7SUFDRU0sUUFBUUMsR0FBRyxDQUFDLG9CQUFvQnJCLFlBQVksaUJBQWlCO0lBRTdESCxnREFBU0EsQ0FBQztRQUNOeUIsTUFBTSw0RUFDREMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVF6QixhQUFheUIsS0FBSzFCLFNBQVM7SUFDakQsR0FBRyxFQUFFO0lBRUxILGdEQUFTQSxDQUFDO1FBQ05RLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckJrQixRQUFRQyxHQUFHLENBQUNNLEtBQUtDLFNBQVMsQ0FBQ3hCO0lBRTNCLHFCQUNJLDhEQUFDeUI7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDSS9CLFlBQVlBLFVBQVVnQixHQUFHLENBQUMsQ0FBQ0MsVUFBVWUsc0JBQ2xDLDhEQUFDQzt3QkFBZUMsU0FBUyxJQUFNL0Isb0JBQW9CYztrQ0FDOUNBLFNBQVNYLElBQUk7dUJBRFQwQjs7OztnQ0FHUjs7Ozs7O1lBRVI5QixrQ0FBb0IsOERBQUNKLGdFQUFZQTtnQkFBQ21CLFVBQVVmO2dCQUFtQkUsVUFBVUE7Z0JBQVVDLGFBQWFBO2dCQUFhUSxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFHMUk7R0FoRHdCZDtLQUFBQTtBQWtEakIsZUFBZW9DO0lBQ3BCLE1BQU1DLE1BQU0sTUFBTWQsTUFBTTtJQUV4QixJQUFJLENBQUNjLElBQUlDLEVBQUUsRUFBRTtRQUNYLDJEQUEyRDtRQUMzRCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxNQUFNWixPQUFPLE1BQU1VLElBQUlYLElBQUk7SUFDM0IsT0FBTztRQUNMYyxPQUFPO1lBQ0x2QyxXQUFXMEIsS0FBSzFCLFNBQVMsSUFBSSxFQUFFO1FBQ2pDO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuIFxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXN0b21lckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21lckZvcm0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB9KSB7XG4gICAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgY2hhbm5lbDogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBwb3N0YWw6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgcHJvdmluY2U6ICcnXG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVDdXN0b21lciA9ICh1cGRhdGVkRGF0YSkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lcnMgPSBjdXN0b21lcnMubWFwKGN1c3RvbWVyID0+IHtcbiAgICByZXR1cm4gY3VzdG9tZXIuaWQgPT09IHVwZGF0ZWREYXRhLmlkID8gdXBkYXRlZERhdGEgOiBjdXN0b21lcjtcbiAgICAgfSk7XG5cbiAgICBzZXRDdXN0b21lcnMobmV3Q3VzdG9tZXJzKTtcbiAgICBzZXRTZWxlY3RlZEN1c3RvbWVyKHVwZGF0ZWREYXRhKTtcbiAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGN1c3RvbWVyczpcIiwgY3VzdG9tZXJzKTsgLy8gRGVidWdnaW5nIGxpbmVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwczovL3dhdmVhY2NvdW50aW5nLmdpdGh1Yi5pby9zZS1jaGFsbGVuZ2UtZmUtY3VzdG9tZXJzL3NldHRpbmdzLmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDdXN0b21lcnMoZGF0YS5jdXN0b21lcnMpKTtcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBzZXRGb3JtRGF0YShzZWxlY3RlZEN1c3RvbWVyKTtcbiAgICB9LCBbc2VsZWN0ZWRDdXN0b21lcl0pXG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmb3JtRGF0YSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DdXN0b21lcnM8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXN0b21lcnMgPyBjdXN0b21lcnMubWFwKChjdXN0b21lciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIoY3VzdG9tZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpIDogXCJMb2FkaW5nXCJ9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIgJiYgPEN1c3RvbWVyRm9ybSBjdXN0b21lcj17c2VsZWN0ZWRDdXN0b21lcn0gIGZvcm1EYXRhPXtmb3JtRGF0YX0gc2V0Rm9ybURhdGE9e3NldEZvcm1EYXRhfSB1cGRhdGVDdXN0b21lcj17dXBkYXRlQ3VzdG9tZXJ9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93YXZlYWNjb3VudGluZy5naXRodWIuaW8vc2UtY2hhbGxlbmdlLWZlLWN1c3RvbWVycy9zZXR0aW5ncy5qc29uJyk7XG4gIFxuICBpZiAoIXJlcy5vaykge1xuICAgIC8vIFRoaXMgd2lsbCBhY3RpdmF0ZSB0aGUgY2xvc2VzdCBgZXJyb3IuanNgIEVycm9yIEJvdW5kYXJ5XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1c3RvbWVyczogZGF0YS5jdXN0b21lcnMgfHwgW11cbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDdXN0b21lckZvcm0iLCJIb21lIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwic2VsZWN0ZWRDdXN0b21lciIsInNldFNlbGVjdGVkQ3VzdG9tZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwiY2hhbm5lbCIsImFkZHJlc3MiLCJwb3N0YWwiLCJjaXR5IiwicHJvdmluY2UiLCJ1cGRhdGVDdXN0b21lciIsInVwZGF0ZWREYXRhIiwidXBkYXRlZEN1c3RvbWVycyIsIm1hcCIsImN1c3RvbWVyIiwiaWQiLCJuZXdDdXN0b21lcnMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJoMSIsInVsIiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJnZXREYXRhIiwicmVzIiwib2siLCJFcnJvciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});