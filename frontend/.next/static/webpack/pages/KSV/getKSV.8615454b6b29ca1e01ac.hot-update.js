"use strict";
self["webpackHotUpdate_N_E"]("pages/KSV/getKSV",{

/***/ "./pages/KSV/getKSV.js":
/*!*****************************!*\
  !*** ./pages/KSV/getKSV.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\NGUDA\\Desktop\\app\\frontend\\pages\\KSV\\getKSV.js",
    _s = $RefreshSig$();







function Profile() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      KSV = _useState[0],
      setKSV = _useState[1];

  axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:8090/api/KSV/select', {
    params: {
      ksv: newKSV,
      ebene: newEbene
    }
  }).then(function (res) {
    console.log(res.data);
    setKSV(res.data);
  });
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  console.log(router.query);
  var newKSV = router.query.newKSV;
  console.log(newKSV);
  var newEbene = router.query.newEbene;
  console.log(newEbene);
  getKSV(newKSV, newEbene);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: KSV && KSV.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "button",
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_3___default().push('getKSV');
                },
                children: item.BEZEICHNUNG
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(Profile, "o4I9Fna2RtcrIEGKIOtfEprbmz0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi44NjE1NDU0YjZiMjljYTFlMDFhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFT0osK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVSSyxHQUZRO0FBQUEsTUFFSEMsTUFGRzs7QUFLWEosRUFBQUEsZ0RBQUEsQ0FBVSxzQ0FBVixFQUFrRDtBQUFDTSxJQUFBQSxNQUFNLEVBQUU7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFQyxNQUFOO0FBQWNDLE1BQUFBLEtBQUssRUFBRUM7QUFBckI7QUFBVCxHQUFsRCxFQUE2RkMsSUFBN0YsQ0FBa0csVUFBQUMsR0FBRyxFQUFJO0FBQ3JHQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNBWCxJQUFBQSxNQUFNLENBQUNRLEdBQUcsQ0FBQ0csSUFBTCxDQUFOO0FBQ0gsR0FIRDtBQUtKLE1BQU1DLE1BQU0sR0FBR2pCLHNEQUFTLEVBQXhCO0FBQ0FjLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFNLENBQUNDLEtBQW5CO0FBR0EsTUFBTVQsTUFBTSxHQUFHUSxNQUFNLENBQUNDLEtBQVAsQ0FBYVQsTUFBNUI7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVo7QUFFQSxNQUFNRSxRQUFRLEdBQUdNLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhUCxRQUE5QjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUVBUSxFQUFBQSxNQUFNLENBQUNWLE1BQUQsRUFBU0UsUUFBVCxDQUFOO0FBR0Ysc0JBQ0U7QUFBQSwyQkFDSTtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tQLEdBQUcsSUFBSUEsR0FBRyxDQUFDZ0IsR0FBSixDQUFRLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUFpQjtBQUFBLHlDQUFpQjtBQUFBLDJDQUFJO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFPLEVBQUU7QUFBQSx5QkFBTXBCLHVEQUFBLENBQVksUUFBWixDQUFOO0FBQUEsaUJBQS9CO0FBQUEsMEJBQTZEbUIsSUFBSSxDQUFDRztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFKLE9BQTZGSCxJQUFJLENBQUNJLEVBQUwsR0FBVSxHQUFWLEdBQWdCSixJQUFJLENBQUNqQixHQUFyQixHQUEyQixHQUEzQixHQUFpQ2lCLElBQUksQ0FBQ0csV0FBdEMsR0FBb0QsR0FBcEQsR0FBMERILElBQUksQ0FBQ0ssS0FBL0QsR0FBdUUsR0FBdkUsR0FBNkVMLElBQUksQ0FBQ00sS0FBbEYsR0FBMEYsR0FBMUYsR0FBZ0dOLElBQUksQ0FBQ08sZUFBbE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQjtBQUFBLGFBQVNOLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBakI7QUFBQSxTQUFSO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FoQ1FuQjtVQVVVSDs7O0tBVlZHO0FBa0NULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0tTVi9nZXRLU1YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcblxyXG4gICAgY29uc3QgW0tTViwgc2V0S1NWXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC9hcGkvS1NWL3NlbGVjdCcsIHtwYXJhbXM6IHtrc3Y6IG5ld0tTViwgZWJlbmU6IG5ld0ViZW5lfSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgc2V0S1NWKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbmV3S1NWID0gcm91dGVyLnF1ZXJ5Lm5ld0tTVjtcclxuICAgIGNvbnNvbGUubG9nKG5ld0tTVik7XHJcblxyXG4gICAgY29uc3QgbmV3RWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdFYmVuZSk7XHJcblxyXG4gICAgZ2V0S1NWKG5ld0tTViwgbmV3RWJlbmUpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtLU1YgJiYgS1NWLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4gPHA+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCdnZXRLU1YnKX0+e2l0ZW0uQkVaRUlDSE5VTkd9PC9idXR0b24+IHtpdGVtLklEICsgXCIgXCIgKyBpdGVtLktTViArIFwiIFwiICsgaXRlbS5CRVpFSUNITlVORyArIFwiIFwiICsgaXRlbS5FQkVORSArIFwiIFwiICsgaXRlbS5ST1dJRCArIFwiIFwiICsgaXRlbS5CRVRSSUVCU0JFUkVJQ0h9PC9wPjwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiUm91dGVyIiwiUHJvZmlsZSIsIktTViIsInNldEtTViIsImdldCIsInBhcmFtcyIsImtzdiIsIm5ld0tTViIsImViZW5lIiwibmV3RWJlbmUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsImdldEtTViIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJCRVpFSUNITlVORyIsIklEIiwiRUJFTkUiLCJST1dJRCIsIkJFVFJJRUJTQkVSRUlDSCJdLCJzb3VyY2VSb290IjoiIn0=