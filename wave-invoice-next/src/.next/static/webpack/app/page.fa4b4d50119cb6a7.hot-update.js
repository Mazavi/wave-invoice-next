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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        channel: \"\",\n        address: \"\",\n        postal: \"\",\n        city: \"\",\n        province: \"\"\n    });\n    console.log(\"Debug customers:\", customers); // Debugging line\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\").then((response)=>response.json()).then((data)=>setCustomers(data.customers));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    const updateSelectedCustomer = (updatedData)=>{\n        if (!updatedData) return;\n        // Update selected customer\n        setSelectedCustomer(updatedData);\n        // Update the customers array to include the new details\n        const updatedCustomers = customers.map((customer)=>{\n            if (customer && updatedData) {\n                return customer.id === updatedData.id ? updatedData : customer;\n            }\n            return customer;\n        });\n        setCustomers(updatedCustomers);\n    };\n    console.log(JSON.stringify(formData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: customers ? customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(customer),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)) : \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateSelectedCustomer: updateSelectedCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 58,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"vLiSHa76+ZISt2GOIYTlpTQ3sBg=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0csS0FBSyxLQUFHO1FBQUgsRUFBRyxHQUFIOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNyQ1UsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JkLFlBQVksaUJBQWlCO0lBRTdESCxnREFBU0EsQ0FBQztRQUNOa0IsTUFBTSw0RUFDREMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFsQixhQUFha0IsS0FBS25CLFNBQVM7SUFDakQsR0FBRyxFQUFFO0lBRUxILGdEQUFTQSxDQUFDO1FBQ05RLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckIsTUFBTWtCLHlCQUF5QixDQUFDQztRQUMxQixJQUFJLENBQUNBLGFBQWE7UUFDbEIsMkJBQTJCO1FBQzNCbEIsb0JBQW9Ca0I7UUFDcEIsd0RBQXdEO1FBQ3hELE1BQU1DLG1CQUFtQnRCLFVBQVV1QixHQUFHLENBQUNDLENBQUFBO1lBQ3JDLElBQUlBLFlBQVlILGFBQVk7Z0JBQ3hCLE9BQU9HLFNBQVNDLEVBQUUsS0FBS0osWUFBWUksRUFBRSxHQUFHSixjQUFjRztZQUMxRDtZQUNBLE9BQU9BO1FBQ1g7UUFDQXZCLGFBQWFxQjtJQUVqQjtJQUNBVCxRQUFRQyxHQUFHLENBQUNZLEtBQUtDLFNBQVMsQ0FBQ3ZCO0lBRTNCLHFCQUNJLDhEQUFDd0I7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDSTlCLFlBQVlBLFVBQVV1QixHQUFHLENBQUMsQ0FBQ0MsVUFBVU8sc0JBQ2xDLDhEQUFDQzt3QkFBZUMsU0FBUyxJQUFNOUIsb0JBQW9CcUI7a0NBQzlDQSxTQUFTbEIsSUFBSTt1QkFEVHlCOzs7O2dDQUdSOzs7Ozs7WUFFUjdCLGtDQUFvQiw4REFBQ0osZ0VBQVlBO2dCQUFDMEIsVUFBVXRCO2dCQUFtQkUsVUFBVUE7Z0JBQVVDLGFBQWFBO2dCQUFhZSx3QkFBd0JBOzs7Ozs7Ozs7Ozs7QUFHbEo7R0F0RHdCckI7S0FBQUE7QUF3RGpCLGVBQWVtQztJQUNwQixNQUFNQyxNQUFNLE1BQU1wQixNQUFNO0lBRXhCLElBQUksQ0FBQ29CLElBQUlDLEVBQUUsRUFBRTtRQUNYLDJEQUEyRDtRQUMzRCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxNQUFNbEIsT0FBTyxNQUFNZ0IsSUFBSWpCLElBQUk7SUFDM0IsT0FBTztRQUNMb0IsT0FBTztZQUNMdEMsV0FBV21CLEtBQUtuQixTQUFTLElBQUksRUFBRTtRQUNqQztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbiBcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3VzdG9tZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VzdG9tZXJGb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgfSkge1xuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ3VzdG9tZXIsIHNldFNlbGVjdGVkQ3VzdG9tZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGNoYW5uZWw6ICcnLFxuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgcG9zdGFsOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgICAgIHByb3ZpbmNlOiAnJ1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJEZWJ1ZyBjdXN0b21lcnM6XCIsIGN1c3RvbWVycyk7IC8vIERlYnVnZ2luZyBsaW5lXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly93YXZlYWNjb3VudGluZy5naXRodWIuaW8vc2UtY2hhbGxlbmdlLWZlLWN1c3RvbWVycy9zZXR0aW5ncy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q3VzdG9tZXJzKGRhdGEuY3VzdG9tZXJzKSk7XG4gICAgfSwgW10pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgc2V0Rm9ybURhdGEoc2VsZWN0ZWRDdXN0b21lcik7XG4gICAgfSwgW3NlbGVjdGVkQ3VzdG9tZXJdKVxuXG4gICAgY29uc3QgdXBkYXRlU2VsZWN0ZWRDdXN0b21lciA9ICh1cGRhdGVkRGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdXBkYXRlZERhdGEpIHJldHVybjtcbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgY3VzdG9tZXJcbiAgICAgICAgICBzZXRTZWxlY3RlZEN1c3RvbWVyKHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGN1c3RvbWVycyBhcnJheSB0byBpbmNsdWRlIHRoZSBuZXcgZGV0YWlsc1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lcnMgPSBjdXN0b21lcnMubWFwKGN1c3RvbWVyID0+IHtcbiAgICAgICAgICAgIGlmIChjdXN0b21lciAmJiB1cGRhdGVkRGF0YSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyLmlkID09PSB1cGRhdGVkRGF0YS5pZCA/IHVwZGF0ZWREYXRhIDogY3VzdG9tZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEN1c3RvbWVycyh1cGRhdGVkQ3VzdG9tZXJzKTtcblxuICAgIH07XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q3VzdG9tZXJzPC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y3VzdG9tZXJzID8gY3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEN1c3RvbWVyKGN1c3RvbWVyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKSA6IFwiTG9hZGluZ1wifVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHtzZWxlY3RlZEN1c3RvbWVyICYmIDxDdXN0b21lckZvcm0gY3VzdG9tZXI9e3NlbGVjdGVkQ3VzdG9tZXJ9ICBmb3JtRGF0YT17Zm9ybURhdGF9IHNldEZvcm1EYXRhPXtzZXRGb3JtRGF0YX0gdXBkYXRlU2VsZWN0ZWRDdXN0b21lcj17dXBkYXRlU2VsZWN0ZWRDdXN0b21lcn0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93YXZlYWNjb3VudGluZy5naXRodWIuaW8vc2UtY2hhbGxlbmdlLWZlLWN1c3RvbWVycy9zZXR0aW5ncy5qc29uJyk7XG4gIFxuICBpZiAoIXJlcy5vaykge1xuICAgIC8vIFRoaXMgd2lsbCBhY3RpdmF0ZSB0aGUgY2xvc2VzdCBgZXJyb3IuanNgIEVycm9yIEJvdW5kYXJ5XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1c3RvbWVyczogZGF0YS5jdXN0b21lcnMgfHwgW11cbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDdXN0b21lckZvcm0iLCJIb21lIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwic2VsZWN0ZWRDdXN0b21lciIsInNldFNlbGVjdGVkQ3VzdG9tZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwiY2hhbm5lbCIsImFkZHJlc3MiLCJwb3N0YWwiLCJjaXR5IiwicHJvdmluY2UiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVwZGF0ZVNlbGVjdGVkQ3VzdG9tZXIiLCJ1cGRhdGVkRGF0YSIsInVwZGF0ZWRDdXN0b21lcnMiLCJtYXAiLCJjdXN0b21lciIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImgxIiwidWwiLCJpbmRleCIsImxpIiwib25DbGljayIsImdldERhdGEiLCJyZXMiLCJvayIsIkVycm9yIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});