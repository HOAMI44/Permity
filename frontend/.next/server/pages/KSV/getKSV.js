"use strict";
(() => {
var exports = {};
exports.id = "pages/KSV/getKSV";
exports.ids = ["pages/KSV/getKSV"];
exports.modules = {

/***/ "./pages/KSV/getKSV.js":
/*!*****************************!*\
  !*** ./pages/KSV/getKSV.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\NGUDA\\Desktop\\app\\frontend\\pages\\KSV\\getKSV.js";







function Profile() {
  const {
    0: KSV,
    1: setKSV
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  console.log(router.query);
  const ksv = router.query.newKSV;
  const ebene = router.query.newEbene;

  function test(newKSV, newEbene) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:8090/api/KSV/select', {
      params: {
        ksv: newKSV,
        ebene: newEbene
      }
    }).then(res => {
      console.log(res.data);
      setKSV(res.data);
    });
  }

  function submit(e) {
    e.preventDefault();
    test(ksv, ebene);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: e => submit(e),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: KSV && KSV.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
                pathname: 'getKSV',
                query: {
                  newKSV: item.KSV,
                  newEbene: item.EBENE + 1
                }
              }),
              children: item.BEZEICHNUNG
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 71
            }, this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 67
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 50
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/KSV/getKSV.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbmQvLi9wYWdlcy9LU1YvZ2V0S1NWLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJzd3JcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcblxyXG4gICAgY29uc3QgW0tTViwgc2V0S1NWXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGtzdiA9IHJvdXRlci5xdWVyeS5uZXdLU1Y7XHJcbiAgICBjb25zdCBlYmVuZSA9IHJvdXRlci5xdWVyeS5uZXdFYmVuZTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0KG5ld0tTViwgbmV3RWJlbmUpIHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC9hcGkvS1NWL3NlbGVjdCcsIHtwYXJhbXM6IHtrc3Y6IG5ld0tTViwgZWJlbmU6IG5ld0ViZW5lfSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEtTVihyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0ZXN0KGtzdiwgZWJlbmUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge0tTViAmJiBLU1YubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PiA8cD4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goe3BhdGhuYW1lOiAnZ2V0S1NWJywgcXVlcnk6IHtuZXdLU1Y6IGl0ZW0uS1NWLCBuZXdFYmVuZTogaXRlbS5FQkVORSArIDF9LH0pfT57aXRlbS5CRVpFSUNITlVOR308L2J1dHRvbj4ge2l0ZW0uSUQgKyBcIiBcIiArIGl0ZW0uS1NWICsgXCIgXCIgKyBpdGVtLkJFWkVJQ0hOVU5HICsgXCIgXCIgKyBpdGVtLkVCRU5FICsgXCIgXCIgKyBpdGVtLlJPV0lEICsgXCIgXCIgKyBpdGVtLkJFVFJJRUJTQkVSRUlDSH08L3A+PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlJvdXRlciIsIlByb2ZpbGUiLCJLU1YiLCJzZXRLU1YiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJrc3YiLCJuZXdLU1YiLCJlYmVuZSIsIm5ld0ViZW5lIiwidGVzdCIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiaXRlbSIsImluZGV4IiwicHVzaCIsInBhdGhuYW1lIiwiRUJFTkUiLCJCRVpFSUNITlVORyIsIklEIiwiUk9XSUQiLCJCRVRSSUVCU0JFUkVJQ0giXSwic291cmNlUm9vdCI6IiJ9