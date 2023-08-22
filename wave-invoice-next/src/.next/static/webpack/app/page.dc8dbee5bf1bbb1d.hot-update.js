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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   getData: function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomerForm */ \"(app-pages-browser)/./components/CustomerForm.js\");\n/* __next_internal_client_entry_do_not_use__ default,getData auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCustomer, setSelectedCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        channel: \"\",\n        address: \"\",\n        postal: \"\",\n        city: \"\",\n        province: \"\"\n    });\n    const updateCustomer = (updatedData)=>{\n        const newCustomers = customers.map((customer)=>customer.id === selectedCustomer.id ? updatedData : customer);\n        setCustomers(newCustomers);\n        setSelectedCustomer(updatedData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\").then((response)=>response.json()).then((data)=>setCustomers(data.customers));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFormData(selectedCustomer);\n    }, [\n        selectedCustomer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"20px\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    listStyle\n                },\n                children: customers ? customers.map((customer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setSelectedCustomer(customer),\n                        children: customer.name\n                    }, index, false, {\n                        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)) : \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            selectedCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                customer: selectedCustomer,\n                formData: formData,\n                setFormData: setFormData,\n                updateCustomer: updateCustomer\n            }, void 0, false, {\n                fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joyna/Maz/WaveAssessment/wave-invoice-next/wave-invoice-next/src/app/page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"vLiSHa76+ZISt2GOIYTlpTQ3sBg=\");\n_c = Home;\nasync function getData() {\n    const res = await fetch(\"https://waveaccounting.github.io/se-challenge-fe-customers/settings.json\");\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    const data = await res.json();\n    return {\n        props: {\n            customers: data.customers || []\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFHdkMsU0FBU0csS0FBSyxLQUFHO1FBQUgsRUFBRyxHQUFIOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUNyQ1UsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3hCLE1BQU1DLGVBQWVmLFVBQVVnQixHQUFHLENBQUNDLENBQUFBLFdBQ2pDQSxTQUFTQyxFQUFFLEtBQUtoQixpQkFBaUJnQixFQUFFLEdBQUdKLGNBQWNHO1FBR3REaEIsYUFBYWM7UUFDYlosb0JBQW9CVztJQUN0QjtJQUVFakIsZ0RBQVNBLENBQUM7UUFDTnNCLE1BQU0sNEVBQ0RDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRdEIsYUFBYXNCLEtBQUt2QixTQUFTO0lBQ2pELEdBQUcsRUFBRTtJQUVMSCxnREFBU0EsQ0FBQztRQUNOUSxZQUFZSDtJQUNoQixHQUFHO1FBQUNBO0tBQWlCO0lBR3JCLHFCQUNJLDhEQUFDc0I7UUFBSUMsT0FBTztZQUFFQyxRQUFRO1lBQVFDLFNBQVM7UUFBTTs7MEJBQ3pDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBR0osT0FBTztvQkFBRUs7Z0JBQVM7MEJBQ2pCOUIsWUFBWUEsVUFBVWdCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVYyxzQkFDbEMsOERBQUNDO3dCQUFlQyxTQUFTLElBQU05QixvQkFBb0JjO2tDQUM5Q0EsU0FBU1gsSUFBSTt1QkFEVHlCOzs7O2dDQUdSOzs7Ozs7WUFFUjdCLGtDQUFvQiw4REFBQ0osZ0VBQVlBO2dCQUFDbUIsVUFBVWY7Z0JBQW1CRSxVQUFVQTtnQkFBVUMsYUFBYUE7Z0JBQWFRLGdCQUFnQkE7Ozs7Ozs7Ozs7OztBQUcxSTtHQTlDd0JkO0tBQUFBO0FBZ0RqQixlQUFlbUM7SUFDcEIsTUFBTUMsTUFBTSxNQUFNaEIsTUFBTTtJQUV4QixJQUFJLENBQUNnQixJQUFJQyxFQUFFLEVBQUU7UUFDWCwyREFBMkQ7UUFDM0QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsTUFBTWQsT0FBTyxNQUFNWSxJQUFJYixJQUFJO0lBQzNCLE9BQU87UUFDTGdCLE9BQU87WUFDTHRDLFdBQVd1QixLQUFLdkIsU0FBUyxJQUFJLEVBQUU7UUFDakM7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG4gXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1c3RvbWVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbWVyRm9ybSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IH0pIHtcbiAgICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEN1c3RvbWVyLCBzZXRTZWxlY3RlZEN1c3RvbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBjaGFubmVsOiAnJyxcbiAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgIHBvc3RhbDogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBwcm92aW5jZTogJydcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZUN1c3RvbWVyID0gKHVwZGF0ZWREYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3Q3VzdG9tZXJzID0gY3VzdG9tZXJzLm1hcChjdXN0b21lciA9PlxuICAgICAgY3VzdG9tZXIuaWQgPT09IHNlbGVjdGVkQ3VzdG9tZXIuaWQgPyB1cGRhdGVkRGF0YSA6IGN1c3RvbWVyXG4gICAgKTtcblxuICAgIHNldEN1c3RvbWVycyhuZXdDdXN0b21lcnMpO1xuICAgIHNldFNlbGVjdGVkQ3VzdG9tZXIodXBkYXRlZERhdGEpO1xuICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vd2F2ZWFjY291bnRpbmcuZ2l0aHViLmlvL3NlLWNoYWxsZW5nZS1mZS1jdXN0b21lcnMvc2V0dGluZ3MuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldEN1c3RvbWVycyhkYXRhLmN1c3RvbWVycykpO1xuICAgIH0sIFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIHNldEZvcm1EYXRhKHNlbGVjdGVkQ3VzdG9tZXIpO1xuICAgIH0sIFtzZWxlY3RlZEN1c3RvbWVyXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4JywgcGFkZGluZzogJzIwcHgnfX0+XG4gICAgICAgICAgICA8aDE+Q3VzdG9tZXJzPC9oMT5cbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGV9fT5cbiAgICAgICAgICAgICAgICB7Y3VzdG9tZXJzID8gY3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEN1c3RvbWVyKGN1c3RvbWVyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKSA6IFwiTG9hZGluZ1wifVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHtzZWxlY3RlZEN1c3RvbWVyICYmIDxDdXN0b21lckZvcm0gY3VzdG9tZXI9e3NlbGVjdGVkQ3VzdG9tZXJ9ICBmb3JtRGF0YT17Zm9ybURhdGF9IHNldEZvcm1EYXRhPXtzZXRGb3JtRGF0YX0gdXBkYXRlQ3VzdG9tZXI9e3VwZGF0ZUN1c3RvbWVyfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd2F2ZWFjY291bnRpbmcuZ2l0aHViLmlvL3NlLWNoYWxsZW5nZS1mZS1jdXN0b21lcnMvc2V0dGluZ3MuanNvbicpO1xuICBcbiAgaWYgKCFyZXMub2spIHtcbiAgICAvLyBUaGlzIHdpbGwgYWN0aXZhdGUgdGhlIGNsb3Nlc3QgYGVycm9yLmpzYCBFcnJvciBCb3VuZGFyeVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXN0b21lcnM6IGRhdGEuY3VzdG9tZXJzIHx8IFtdXG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3VzdG9tZXJGb3JtIiwiSG9tZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInNlbGVjdGVkQ3VzdG9tZXIiLCJzZXRTZWxlY3RlZEN1c3RvbWVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsImNoYW5uZWwiLCJhZGRyZXNzIiwicG9zdGFsIiwiY2l0eSIsInByb3ZpbmNlIiwidXBkYXRlQ3VzdG9tZXIiLCJ1cGRhdGVkRGF0YSIsIm5ld0N1c3RvbWVycyIsIm1hcCIsImN1c3RvbWVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiaDEiLCJ1bCIsImxpc3RTdHlsZSIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwiZ2V0RGF0YSIsInJlcyIsIm9rIiwiRXJyb3IiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});