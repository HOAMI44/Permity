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
  var newKSV = router.query.newKSV;
  console.log(newKSV);
  var newEbene = router.query.newEbene;
  console.log(newEbene);
  axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:8090/api/KSV/select', {
    params: {
      ksv: newKSV,
      ebene: newEbene
    }
  }).then(function (res) {
    console.log(res.data);
    setKSV(res.data);
  });
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
                lineNumber: 31,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi45NzFhNjZlY2EwZDEyYWNkY2NiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFT0osK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVSSyxHQUZRO0FBQUEsTUFFSEMsTUFGRzs7QUFJZixNQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQXhCO0FBQ0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLEtBQW5CO0FBR0EsTUFBTUMsTUFBTSxHQUFHSixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsTUFBNUI7QUFDQUgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLE1BQVo7QUFFQSxNQUFNQyxRQUFRLEdBQUdMLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRSxRQUE5QjtBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUVBVixFQUFBQSxnREFBQSxDQUFVLHNDQUFWLEVBQWtEO0FBQUNZLElBQUFBLE1BQU0sRUFBRTtBQUFDQyxNQUFBQSxHQUFHLEVBQUVKLE1BQU47QUFBY0ssTUFBQUEsS0FBSyxFQUFFSjtBQUFyQjtBQUFULEdBQWxELEVBQTZGSyxJQUE3RixDQUFrRyxVQUFBQyxHQUFHLEVBQUk7QUFDckdWLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxHQUFHLENBQUNDLElBQWhCO0FBQ0FiLElBQUFBLE1BQU0sQ0FBQ1ksR0FBRyxDQUFDQyxJQUFMLENBQU47QUFDSCxHQUhEO0FBTUYsc0JBQ0U7QUFBQSwyQkFDSTtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tkLEdBQUcsSUFBSUEsR0FBRyxDQUFDZSxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQWlCO0FBQUEseUNBQWlCO0FBQUEsMkNBQUk7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU8sRUFBRTtBQUFBLHlCQUFNbkIsdURBQUEsQ0FBWSxRQUFaLENBQU47QUFBQSxpQkFBL0I7QUFBQSwwQkFBNkRrQixJQUFJLENBQUNHO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUosT0FBNkZILElBQUksQ0FBQ0ksRUFBTCxHQUFVLEdBQVYsR0FBZ0JKLElBQUksQ0FBQ2hCLEdBQXJCLEdBQTJCLEdBQTNCLEdBQWlDZ0IsSUFBSSxDQUFDRyxXQUF0QyxHQUFvRCxHQUFwRCxHQUEwREgsSUFBSSxDQUFDSyxLQUEvRCxHQUF1RSxHQUF2RSxHQUE2RUwsSUFBSSxDQUFDTSxLQUFsRixHQUEwRixHQUExRixHQUFnR04sSUFBSSxDQUFDTyxlQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpCO0FBQUEsYUFBU04sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFqQjtBQUFBLFNBQVI7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQTdCUWxCO1VBSVVIOzs7S0FKVkc7QUErQlQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvS1NWL2dldEtTVi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuXHJcbiAgICBjb25zdCBbS1NWLCBzZXRLU1ZdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbmV3S1NWID0gcm91dGVyLnF1ZXJ5Lm5ld0tTVjtcclxuICAgIGNvbnNvbGUubG9nKG5ld0tTVik7XHJcblxyXG4gICAgY29uc3QgbmV3RWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdFYmVuZSk7XHJcblxyXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwOTAvYXBpL0tTVi9zZWxlY3QnLCB7cGFyYW1zOiB7a3N2OiBuZXdLU1YsIGViZW5lOiBuZXdFYmVuZX0gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRLU1YocmVzLmRhdGEpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7S1NWICYmIEtTVi5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+IDxwPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnZ2V0S1NWJyl9PntpdGVtLkJFWkVJQ0hOVU5HfTwvYnV0dG9uPiB7aXRlbS5JRCArIFwiIFwiICsgaXRlbS5LU1YgKyBcIiBcIiArIGl0ZW0uQkVaRUlDSE5VTkcgKyBcIiBcIiArIGl0ZW0uRUJFTkUgKyBcIiBcIiArIGl0ZW0uUk9XSUQgKyBcIiBcIiArIGl0ZW0uQkVUUklFQlNCRVJFSUNIfTwvcD48L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlJvdXRlciIsIlByb2ZpbGUiLCJLU1YiLCJzZXRLU1YiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJuZXdLU1YiLCJuZXdFYmVuZSIsImdldCIsInBhcmFtcyIsImtzdiIsImViZW5lIiwidGhlbiIsInJlcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwdXNoIiwiQkVaRUlDSE5VTkciLCJJRCIsIkVCRU5FIiwiUk9XSUQiLCJCRVRSSUVCU0JFUkVJQ0giXSwic291cmNlUm9vdCI6IiJ9