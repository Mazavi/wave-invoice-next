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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        channel: \"\",\n        address: \"\",\n        postal: \"\",\n        city: \"\",\n        province: \"\"\n    });\n    console.log(\"Debug customers:\", customers); // Debugging line\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\").then((response)=>response.json()).then((data)=>setCustomers(data.customers));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    console.log(JSON.stringify(formData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: customers ? customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(updatedData),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)) : \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateCustomer: updateCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 45,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"vLiSHa76+ZISt2GOIYTlpTQ3sBg=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0csS0FBSyxLQUFHO1FBQUgsRUFBRyxHQUFIOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNyQ1UsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JkLFlBQVksaUJBQWlCO0lBRTdESCxnREFBU0EsQ0FBQztRQUNOa0IsTUFBTSw0RUFDREMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFsQixhQUFha0IsS0FBS25CLFNBQVM7SUFDakQsR0FBRyxFQUFFO0lBRUxILGdEQUFTQSxDQUFDO1FBQ05RLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBaUI7SUFHckJXLFFBQVFDLEdBQUcsQ0FBQ00sS0FBS0MsU0FBUyxDQUFDakI7SUFFM0IscUJBQ0ksOERBQUNrQjs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJeEIsWUFBWUEsVUFBVXlCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDbEMsOERBQUNDO3dCQUFlQyxTQUFTLElBQU0xQixvQkFBb0IyQjtrQ0FDOUNKLFNBQVNwQixJQUFJO3VCQURUcUI7Ozs7Z0NBR1I7Ozs7OztZQUVSekIsa0NBQW9CLDhEQUFDSixnRUFBWUE7Z0JBQUM0QixVQUFVeEI7Z0JBQW1CRSxVQUFVQTtnQkFBVUMsYUFBYUE7Z0JBQWEwQixnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFHMUk7R0F6Q3dCaEM7S0FBQUE7QUEyQ2pCLGVBQWVpQztJQUNwQixNQUFNQyxNQUFNLE1BQU1sQixNQUFNO0lBRXhCLElBQUksQ0FBQ2tCLElBQUlDLEVBQUUsRUFBRTtRQUNYLDJEQUEyRDtRQUMzRCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxNQUFNaEIsT0FBTyxNQUFNYyxJQUFJZixJQUFJO0lBQzNCLE9BQU87UUFDTGtCLE9BQU87WUFDTHBDLFdBQVdtQixLQUFLbkIsU0FBUyxJQUFJLEVBQUU7UUFDakM7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG4gXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1c3RvbWVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbWVyRm9ybSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IH0pIHtcbiAgICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEN1c3RvbWVyLCBzZXRTZWxlY3RlZEN1c3RvbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBjaGFubmVsOiAnJyxcbiAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgIHBvc3RhbDogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBwcm92aW5jZTogJydcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiRGVidWcgY3VzdG9tZXJzOlwiLCBjdXN0b21lcnMpOyAvLyBEZWJ1Z2dpbmcgbGluZVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vd2F2ZWFjY291bnRpbmcuZ2l0aHViLmlvL3NlLWNoYWxsZW5nZS1mZS1jdXN0b21lcnMvc2V0dGluZ3MuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldEN1c3RvbWVycyhkYXRhLmN1c3RvbWVycykpO1xuICAgIH0sIFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIHNldEZvcm1EYXRhKHNlbGVjdGVkQ3VzdG9tZXIpO1xuICAgIH0sIFtzZWxlY3RlZEN1c3RvbWVyXSlcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkN1c3RvbWVyczwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2N1c3RvbWVycyA/IGN1c3RvbWVycy5tYXAoKGN1c3RvbWVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcih1cGRhdGVkRGF0YSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSkgOiBcIkxvYWRpbmdcIn1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lciAmJiA8Q3VzdG9tZXJGb3JtIGN1c3RvbWVyPXtzZWxlY3RlZEN1c3RvbWVyfSAgZm9ybURhdGE9e2Zvcm1EYXRhfSBzZXRGb3JtRGF0YT17c2V0Rm9ybURhdGF9IHVwZGF0ZUN1c3RvbWVyPXt1cGRhdGVDdXN0b21lcn0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3dhdmVhY2NvdW50aW5nLmdpdGh1Yi5pby9zZS1jaGFsbGVuZ2UtZmUtY3VzdG9tZXJzL3NldHRpbmdzLmpzb24nKTtcbiAgXG4gIGlmICghcmVzLm9rKSB7XG4gICAgLy8gVGhpcyB3aWxsIGFjdGl2YXRlIHRoZSBjbG9zZXN0IGBlcnJvci5qc2AgRXJyb3IgQm91bmRhcnlcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gIH1cblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY3VzdG9tZXJzOiBkYXRhLmN1c3RvbWVycyB8fCBbXVxuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkN1c3RvbWVyRm9ybSIsIkhvbWUiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJzZWxlY3RlZEN1c3RvbWVyIiwic2V0U2VsZWN0ZWRDdXN0b21lciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJjaGFubmVsIiwiYWRkcmVzcyIsInBvc3RhbCIsImNpdHkiLCJwcm92aW5jZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJjdXN0b21lciIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwidXBkYXRlZERhdGEiLCJ1cGRhdGVDdXN0b21lciIsImdldERhdGEiLCJyZXMiLCJvayIsIkVycm9yIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});