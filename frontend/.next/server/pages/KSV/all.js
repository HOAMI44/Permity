"use strict";
(() => {
var exports = {};
exports.id = "pages/KSV/all";
exports.ids = ["pages/KSV/all"];
exports.modules = {

/***/ "./pages/KSV/all.js":
/*!**************************!*\
  !*** ./pages/KSV/all.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\NGUDA\\Desktop\\app\\frontend\\pages\\KSV\\all.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function KSV() {
  const {
    0: KSV,
    1: setKSV
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: Mitarbeiter,
    1: setMitarbeiter
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    kurzzeichen: ''
  });

  const getKSV = async kurzzeichen1 => {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('http://localhost:8090/api/KSV/all', {
      params: {
        kurzzeichen: kurzzeichen1
      }
    }).then(res => {
      console.log(res.data);
      setKSV(res.data);
    });
  };

  function submit(e) {
    e.preventDefault();
    getKSV(Mitarbeiter.kurzzeichen);
  }

  function handle(e) {
    const newMitarbeiter = _objectSpread({}, Mitarbeiter);

    newMitarbeiter[e.target.id] = e.target.value;
    setMitarbeiter(newMitarbeiter);
    console.log(newMitarbeiter);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => submit(e),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onChange: e => handle(e),
        id: "kurzzeichen",
        value: Mitarbeiter.kurzzeichen,
        placeholder: "kurzzeichen",
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
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
              columnNumber: 75
            }, this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 71
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KSV);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/KSV/all.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDVSxLQUFsRixHQUEwRixHQUExRixHQUFnR1YsSUFBSSxDQUFDVyxlQUFwUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWpCO0FBQUEsV0FBU1YsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF6QjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7QUFDRCxpRUFBZXhCLEdBQWY7Ozs7Ozs7Ozs7QUM3Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL0tTVi9hbGwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEtTVigpIHtcclxuICAgIGNvbnN0IFtLU1YsIHNldEtTVl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbTWl0YXJiZWl0ZXIsIHNldE1pdGFyYmVpdGVyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBrdXJ6emVpY2hlbjogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZ2V0S1NWID0gYXN5bmMoa3VyenplaWNoZW4xKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwOTAvYXBpL0tTVi9hbGwnLCB7cGFyYW1zOiB7a3VyenplaWNoZW46IGt1cnp6ZWljaGVuMX0gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEtTVihyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBnZXRLU1YoTWl0YXJiZWl0ZXIua3VyenplaWNoZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZShlKXtcclxuICAgICAgICBjb25zdCBuZXdNaXRhcmJlaXRlcj0gey4uLk1pdGFyYmVpdGVyfVxyXG4gICAgICAgIG5ld01pdGFyYmVpdGVyW2UudGFyZ2V0LmlkXSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0TWl0YXJiZWl0ZXIobmV3TWl0YXJiZWl0ZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3TWl0YXJiZWl0ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+aGFuZGxlKGUpfSBpZD1cImt1cnp6ZWljaGVuXCIgdmFsdWU9e01pdGFyYmVpdGVyLmt1cnp6ZWljaGVufSBwbGFjZWhvbGRlcj1cImt1cnp6ZWljaGVuXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge0tTViAmJiBLU1YubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PiA8cD4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goe3BhdGhuYW1lOiAnZ2V0S1NWJywgcXVlcnk6IHtuZXdLU1Y6IGl0ZW0uS1NWLCBuZXdFYmVuZTogaXRlbS5FQkVORSArIDF9LH0pfT57aXRlbS5CRVpFSUNITlVOR308L2J1dHRvbj4ge2l0ZW0uSUQgKyBcIiBcIiArIGl0ZW0uS1NWICsgXCIgXCIgKyBpdGVtLkJFWkVJQ0hOVU5HICsgXCIgXCIgKyBpdGVtLkVCRU5FICsgXCIgXCIgKyBpdGVtLlJPV0lEICsgXCIgXCIgKyBpdGVtLkJFVFJJRUJTQkVSRUlDSH08L3A+PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgS1NWOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiS1NWIiwic2V0S1NWIiwiTWl0YXJiZWl0ZXIiLCJzZXRNaXRhcmJlaXRlciIsImt1cnp6ZWljaGVuIiwiZ2V0S1NWIiwia3VyenplaWNoZW4xIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlIiwibmV3TWl0YXJiZWl0ZXIiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJuZXdLU1YiLCJuZXdFYmVuZSIsIkVCRU5FIiwiQkVaRUlDSE5VTkciLCJJRCIsIlJPV0lEIiwiQkVUUklFQlNCRVJFSUNIIl0sInNvdXJjZVJvb3QiOiIifQ==