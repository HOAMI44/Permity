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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  console.log(router.query);
  var ksv = router.query.newKSV;
  var ebene = router.query.newEbene;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    test(ksv, ebene);
  }, []);

  function test(newKSV, newEbene) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:8090/api/KSV/select', {
      params: {
        ksv: newKSV,
        ebene: newEbene
      }
    }).then(function (res) {
      console.log(res.data);
      setKSV(res.data);
    });
  }

  function submit(e) {
    e.preventDefault();
    test(ksv, ebene);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: function onSubmit(e) {
      return submit(e);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: KSV && KSV.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "button",
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
                    pathname: 'getKSV',
                    query: {
                      newKSV: item.KSV,
                      newEbene: item.EBENE + 1
                    }
                  });
                },
                children: item.BEZEICHNUNG
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Profile, "wULtZ0r2543zpPe2RcVuX4p/4sE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi41ZWI5Y2EyYWFkNGYxZTBmOGI2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUVPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVJLLEdBRlE7QUFBQSxNQUVIQyxNQUZHOztBQUlmLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7QUFHQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRSxNQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR04sTUFBTSxDQUFDRyxLQUFQLENBQWFJLFFBQTNCO0FBSUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWmlCLElBQUFBLElBQUksQ0FBQ0osR0FBRCxFQUFNRSxLQUFOLENBQUo7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNFLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkUsUUFBdEIsRUFBZ0M7QUFDNUJaLElBQUFBLGdEQUFBLENBQVUsc0NBQVYsRUFBa0Q7QUFBQ2UsTUFBQUEsTUFBTSxFQUFFO0FBQUNOLFFBQUFBLEdBQUcsRUFBRUMsTUFBTjtBQUFjQyxRQUFBQSxLQUFLLEVBQUVDO0FBQXJCO0FBQVQsS0FBbEQsRUFBNkZJLElBQTdGLENBQWtHLFVBQUFDLEdBQUcsRUFBSTtBQUN6R1gsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQWQsTUFBQUEsTUFBTSxDQUFDYSxHQUFHLENBQUNDLElBQUwsQ0FBTjtBQUNDLEtBSEQ7QUFJSDs7QUFFRCxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVIsSUFBQUEsSUFBSSxDQUFDSixHQUFELEVBQU1FLEtBQU4sQ0FBSjtBQUNIOztBQUtILHNCQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsYUFBS0QsTUFBTSxDQUFDQyxDQUFELENBQVg7QUFBQSxLQUFoQjtBQUFBLDJCQUNJO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS2pCLEdBQUcsSUFBSUEsR0FBRyxDQUFDbUIsR0FBSixDQUFRLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUFpQjtBQUFBLHlDQUFpQjtBQUFBLDJDQUFJO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFPLEVBQUU7QUFBQSx5QkFBTXZCLHVEQUFBLENBQVk7QUFBQ3lCLG9CQUFBQSxRQUFRLEVBQUUsUUFBWDtBQUFxQmxCLG9CQUFBQSxLQUFLLEVBQUU7QUFBQ0Usc0JBQUFBLE1BQU0sRUFBRWEsSUFBSSxDQUFDcEIsR0FBZDtBQUFtQlMsc0JBQUFBLFFBQVEsRUFBRVcsSUFBSSxDQUFDSSxLQUFMLEdBQWE7QUFBMUM7QUFBNUIsbUJBQVosQ0FBTjtBQUFBLGlCQUEvQjtBQUFBLDBCQUErSEosSUFBSSxDQUFDSztBQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFKLE9BQStKTCxJQUFJLENBQUNNLEVBQUwsR0FBVSxHQUFWLEdBQWdCTixJQUFJLENBQUNwQixHQUFyQixHQUEyQixHQUEzQixHQUFpQ29CLElBQUksQ0FBQ0ssV0FBdEMsR0FBb0QsR0FBcEQsR0FBMERMLElBQUksQ0FBQ0ksS0FBL0QsR0FBdUUsR0FBdkUsR0FBNkVKLElBQUksQ0FBQ08sS0FBbEYsR0FBMEYsR0FBMUYsR0FBZ0dQLElBQUksQ0FBQ1EsZUFBcFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQjtBQUFBLGFBQVNQLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBakI7QUFBQSxTQUFSO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0F6Q1F0QjtVQUlVSDs7O0tBSlZHO0FBMkNULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0tTVi9nZXRLU1YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIGNvbnN0IFtLU1YsIHNldEtTVl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBrc3YgPSByb3V0ZXIucXVlcnkubmV3S1NWO1xyXG4gICAgY29uc3QgZWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcblxyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0ZXN0KGtzdiwgZWJlbmUpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0KG5ld0tTViwgbmV3RWJlbmUpIHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC9hcGkvS1NWL3NlbGVjdCcsIHtwYXJhbXM6IHtrc3Y6IG5ld0tTViwgZWJlbmU6IG5ld0ViZW5lfSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEtTVihyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0ZXN0KGtzdiwgZWJlbmUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge0tTViAmJiBLU1YubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PiA8cD4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goe3BhdGhuYW1lOiAnZ2V0S1NWJywgcXVlcnk6IHtuZXdLU1Y6IGl0ZW0uS1NWLCBuZXdFYmVuZTogaXRlbS5FQkVORSArIDF9LH0pfT57aXRlbS5CRVpFSUNITlVOR308L2J1dHRvbj4ge2l0ZW0uSUQgKyBcIiBcIiArIGl0ZW0uS1NWICsgXCIgXCIgKyBpdGVtLkJFWkVJQ0hOVU5HICsgXCIgXCIgKyBpdGVtLkVCRU5FICsgXCIgXCIgKyBpdGVtLlJPV0lEICsgXCIgXCIgKyBpdGVtLkJFVFJJRUJTQkVSRUlDSH08L3A+PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJSb3V0ZXIiLCJQcm9maWxlIiwiS1NWIiwic2V0S1NWIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwia3N2IiwibmV3S1NWIiwiZWJlbmUiLCJuZXdFYmVuZSIsInRlc3QiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJwYXRobmFtZSIsIkVCRU5FIiwiQkVaRUlDSE5VTkciLCJJRCIsIlJPV0lEIiwiQkVUUklFQlNCRVJFSUNIIl0sInNvdXJjZVJvb3QiOiIifQ==