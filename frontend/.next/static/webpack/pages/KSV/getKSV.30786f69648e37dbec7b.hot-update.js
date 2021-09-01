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
  console.log(ksv);
  var ebene = router.query.newEbene;
  console.log(ebene);
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
                lineNumber: 40,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi4zMDc4NmY2OTY0OGUzN2RiZWM3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUVPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVJLLEdBRlE7QUFBQSxNQUVIQyxNQUZHOztBQUlmLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7QUFHQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRSxNQUF6QjtBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWjtBQUVBLE1BQU1FLEtBQUssR0FBR04sTUFBTSxDQUFDRyxLQUFQLENBQWFJLFFBQTNCO0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxLQUFaO0FBR0FmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaaUIsSUFBQUEsSUFBSSxDQUFDSixHQUFELEVBQU1FLEtBQU4sQ0FBSjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0UsSUFBVCxDQUFjSCxNQUFkLEVBQXNCRSxRQUF0QixFQUFnQztBQUM1QlosSUFBQUEsZ0RBQUEsQ0FBVSxzQ0FBVixFQUFrRDtBQUFDZSxNQUFBQSxNQUFNLEVBQUU7QUFBQ04sUUFBQUEsR0FBRyxFQUFFQyxNQUFOO0FBQWNDLFFBQUFBLEtBQUssRUFBRUM7QUFBckI7QUFBVCxLQUFsRCxFQUE2RkksSUFBN0YsQ0FBa0csVUFBQUMsR0FBRyxFQUFJO0FBQ3pHWCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBRyxDQUFDQyxJQUFoQjtBQUNBZCxNQUFBQSxNQUFNLENBQUNhLEdBQUcsQ0FBQ0MsSUFBTCxDQUFOO0FBQ0MsS0FIRDtBQUlIOztBQUlILHNCQUNFO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUFBLGtCQUNLZixHQUFHLElBQUlBLEdBQUcsQ0FBQ2dCLEdBQUosQ0FBUSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw4QkFBaUI7QUFBQSx5Q0FBaUI7QUFBQSwyQ0FBSTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTyxFQUFFO0FBQUEseUJBQU1wQix1REFBQSxDQUFZLFFBQVosQ0FBTjtBQUFBLGlCQUEvQjtBQUFBLDBCQUE2RG1CLElBQUksQ0FBQ0c7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSixPQUE2RkgsSUFBSSxDQUFDSSxFQUFMLEdBQVUsR0FBVixHQUFnQkosSUFBSSxDQUFDakIsR0FBckIsR0FBMkIsR0FBM0IsR0FBaUNpQixJQUFJLENBQUNHLFdBQXRDLEdBQW9ELEdBQXBELEdBQTBESCxJQUFJLENBQUNLLEtBQS9ELEdBQXVFLEdBQXZFLEdBQTZFTCxJQUFJLENBQUNNLEtBQWxGLEdBQTBGLEdBQTFGLEdBQWdHTixJQUFJLENBQUNPLGVBQWxNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakI7QUFBQSxhQUFTTixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWpCO0FBQUEsU0FBUjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBckNRbkI7VUFJVUg7OztLQUpWRztBQXVDVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9LU1YvZ2V0S1NWLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuXHJcbiAgICBjb25zdCBbS1NWLCBzZXRLU1ZdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3Qga3N2ID0gcm91dGVyLnF1ZXJ5Lm5ld0tTVjtcclxuICAgIGNvbnNvbGUubG9nKGtzdik7XHJcblxyXG4gICAgY29uc3QgZWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcbiAgICBjb25zb2xlLmxvZyhlYmVuZSk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRlc3Qoa3N2LCBlYmVuZSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3QobmV3S1NWLCBuZXdFYmVuZSkge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDkwL2FwaS9LU1Yvc2VsZWN0Jywge3BhcmFtczoge2tzdjogbmV3S1NWLCBlYmVuZTogbmV3RWJlbmV9IH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0S1NWKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge0tTViAmJiBLU1YubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PiA8cD4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJ2dldEtTVicpfT57aXRlbS5CRVpFSUNITlVOR308L2J1dHRvbj4ge2l0ZW0uSUQgKyBcIiBcIiArIGl0ZW0uS1NWICsgXCIgXCIgKyBpdGVtLkJFWkVJQ0hOVU5HICsgXCIgXCIgKyBpdGVtLkVCRU5FICsgXCIgXCIgKyBpdGVtLlJPV0lEICsgXCIgXCIgKyBpdGVtLkJFVFJJRUJTQkVSRUlDSH08L3A+PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJSb3V0ZXIiLCJQcm9maWxlIiwiS1NWIiwic2V0S1NWIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwia3N2IiwibmV3S1NWIiwiZWJlbmUiLCJuZXdFYmVuZSIsInRlc3QiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJCRVpFSUNITlVORyIsIklEIiwiRUJFTkUiLCJST1dJRCIsIkJFVFJJRUJTQkVSRUlDSCJdLCJzb3VyY2VSb290IjoiIn0=