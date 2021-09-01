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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 39,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 50
          }, _this);
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi4xMzBjMzI0OGMxOTM1YTIxN2UyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUVPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVJLLEdBRlE7QUFBQSxNQUVIQyxNQUZHOztBQUlmLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7QUFHQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRSxNQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR04sTUFBTSxDQUFDRyxLQUFQLENBQWFJLFFBQTNCOztBQUVBLFdBQVNDLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkUsUUFBdEIsRUFBZ0M7QUFDNUJaLElBQUFBLGdEQUFBLENBQVUsc0NBQVYsRUFBa0Q7QUFBQ2UsTUFBQUEsTUFBTSxFQUFFO0FBQUNOLFFBQUFBLEdBQUcsRUFBRUMsTUFBTjtBQUFjQyxRQUFBQSxLQUFLLEVBQUVDO0FBQXJCO0FBQVQsS0FBbEQsRUFBNkZJLElBQTdGLENBQWtHLFVBQUFDLEdBQUcsRUFBSTtBQUN6R1gsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQWQsTUFBQUEsTUFBTSxDQUFDYSxHQUFHLENBQUNDLElBQUwsQ0FBTjtBQUNDLEtBSEQ7QUFJSDs7QUFFRCxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVIsSUFBQUEsSUFBSSxDQUFDSixHQUFELEVBQU1FLEtBQU4sQ0FBSjtBQUNIOztBQUtILHNCQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsYUFBS0QsTUFBTSxDQUFDQyxDQUFELENBQVg7QUFBQSxLQUFoQjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tqQixHQUFHLElBQUlBLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw4QkFBaUI7QUFBQSx5Q0FBaUI7QUFBQSwyQ0FBSTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTyxFQUFFO0FBQUEseUJBQU12Qix1REFBQSxDQUFZO0FBQUN5QixvQkFBQUEsUUFBUSxFQUFFLFFBQVg7QUFBcUJsQixvQkFBQUEsS0FBSyxFQUFFO0FBQUNFLHNCQUFBQSxNQUFNLEVBQUVhLElBQUksQ0FBQ3BCLEdBQWQ7QUFBbUJTLHNCQUFBQSxRQUFRLEVBQUVXLElBQUksQ0FBQ0ksS0FBTCxHQUFhO0FBQTFDO0FBQTVCLG1CQUFaLENBQU47QUFBQSxpQkFBL0I7QUFBQSwwQkFBK0hKLElBQUksQ0FBQ0s7QUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSixPQUErSkwsSUFBSSxDQUFDTSxFQUFMLEdBQVUsR0FBVixHQUFnQk4sSUFBSSxDQUFDcEIsR0FBckIsR0FBMkIsR0FBM0IsR0FBaUNvQixJQUFJLENBQUNLLFdBQXRDLEdBQW9ELEdBQXBELEdBQTBETCxJQUFJLENBQUNJLEtBQS9ELEdBQXVFLEdBQXZFLEdBQTZFSixJQUFJLENBQUNPLEtBQWxGLEdBQTBGLEdBQTFGLEdBQWdHUCxJQUFJLENBQUNRLGVBQXBRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakI7QUFBQSxhQUFTUCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWpCO0FBQUEsU0FBUjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FwQ1F0QjtVQUlVSDs7O0tBSlZHO0FBc0NULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0tTVi9nZXRLU1YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIGNvbnN0IFtLU1YsIHNldEtTVl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBrc3YgPSByb3V0ZXIucXVlcnkubmV3S1NWO1xyXG4gICAgY29uc3QgZWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdChuZXdLU1YsIG5ld0ViZW5lKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwOTAvYXBpL0tTVi9zZWxlY3QnLCB7cGFyYW1zOiB7a3N2OiBuZXdLU1YsIGViZW5lOiBuZXdFYmVuZX0gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRLU1YocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGVzdChrc3YsIGViZW5lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT5zdWJtaXQoZSl9PlxyXG4gICAgICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtLU1YgJiYgS1NWLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4gPHA+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKHtwYXRobmFtZTogJ2dldEtTVicsIHF1ZXJ5OiB7bmV3S1NWOiBpdGVtLktTViwgbmV3RWJlbmU6IGl0ZW0uRUJFTkUgKyAxfSx9KX0+e2l0ZW0uQkVaRUlDSE5VTkd9PC9idXR0b24+IHtpdGVtLklEICsgXCIgXCIgKyBpdGVtLktTViArIFwiIFwiICsgaXRlbS5CRVpFSUNITlVORyArIFwiIFwiICsgaXRlbS5FQkVORSArIFwiIFwiICsgaXRlbS5ST1dJRCArIFwiIFwiICsgaXRlbS5CRVRSSUVCU0JFUkVJQ0h9PC9wPjwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiUm91dGVyIiwiUHJvZmlsZSIsIktTViIsInNldEtTViIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImtzdiIsIm5ld0tTViIsImViZW5lIiwibmV3RWJlbmUiLCJ0ZXN0IiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwdXNoIiwicGF0aG5hbWUiLCJFQkVORSIsIkJFWkVJQ0hOVU5HIiwiSUQiLCJST1dJRCIsIkJFVFJJRUJTQkVSRUlDSCJdLCJzb3VyY2VSb290IjoiIn0=