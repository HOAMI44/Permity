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
/* harmony import */ var C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\NGUDA\\Desktop\\app\\frontend\\pages\\KSV\\getKSV.js",
    _s2 = $RefreshSig$();







function Profile() {
  _s2();

  var _s = $RefreshSig$(),
      _this = this;

  var flag = true;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      KSV = _useState[0],
      setKSV = _useState[1];

  if (flag == true) {
    var _getKSV = /*#__PURE__*/function () {
      var _ref = (0,C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(newKSV, newEbene) {
        return C_Users_NGUDA_Desktop_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_6___default().get('http://localhost:8090/api/KSV/select', {
                  params: {
                    ksv: newKSV,
                    ebene: newEbene
                  }
                }).then(function (res) {
                  console.log(res.data);
                  setKSV(res.data);
                  flag = false;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function _getKSV(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  function test() {
    _s();

    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    console.log(router.query);
    var newKSV = router.query.newKSV;
    console.log(newKSV);
    var newEbene = router.query.newEbene;
    console.log(newEbene);
    getKSV(newKSV, newEbene);
  }

  _s(test, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
  });

  test();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: KSV && KSV.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "button",
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_5___default().push('getKSV');
                },
                children: item.BEZEICHNUNG
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s2(Profile, "dp/MNw5YDYh66A0doRVMyV8YSLM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi5iODQwNzlmYjNmOTdjZTcxMTk3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sT0FBVCxHQUFtQjtBQUFBOztBQUFBO0FBQUE7O0FBRWYsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBRmUsa0JBR09MLCtDQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHUk0sR0FIUTtBQUFBLE1BR0hDLE1BSEc7O0FBS2YsTUFBR0YsSUFBSSxJQUFJLElBQVgsRUFBZ0I7QUFDWixRQUFNRyxPQUFNO0FBQUEseVJBQUcsaUJBQU1DLE1BQU4sRUFBY0MsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hSLGdCQUFBQSxnREFBQSxDQUFVLHNDQUFWLEVBQWtEO0FBQUNVLGtCQUFBQSxNQUFNLEVBQUU7QUFBQ0Msb0JBQUFBLEdBQUcsRUFBRUosTUFBTjtBQUFjSyxvQkFBQUEsS0FBSyxFQUFFSjtBQUFyQjtBQUFULGlCQUFsRCxFQUE2RkssSUFBN0YsQ0FBa0csVUFBQUMsR0FBRyxFQUFJO0FBQ3JHQyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQVosa0JBQUFBLE1BQU0sQ0FBQ1MsR0FBRyxDQUFDRyxJQUFMLENBQU47QUFDQWQsa0JBQUFBLElBQUksR0FBRyxLQUFQO0FBQ0gsaUJBSkQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBTkcsT0FBTTtBQUFBO0FBQUE7QUFBQSxPQUFaO0FBT0g7O0FBR0QsV0FBU1ksSUFBVCxHQUFlO0FBQUE7O0FBQ1gsUUFBTUMsTUFBTSxHQUFHcEIsc0RBQVMsRUFBeEI7QUFDQWdCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFNLENBQUNDLEtBQW5CO0FBR0EsUUFBTWIsTUFBTSxHQUFHWSxNQUFNLENBQUNDLEtBQVAsQ0FBYWIsTUFBNUI7QUFDQVEsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULE1BQVo7QUFFQSxRQUFNQyxRQUFRLEdBQUdXLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhWixRQUE5QjtBQUNBTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUVBRixJQUFBQSxNQUFNLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxDQUFOO0FBQ0g7O0FBNUJjLEtBZ0JOVSxJQWhCTTtBQUFBLFlBaUJJbkIsa0RBakJKO0FBQUE7O0FBOEJmbUIsRUFBQUEsSUFBSTtBQU1OLHNCQUNFO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUFBLGtCQUNLZCxHQUFHLElBQUlBLEdBQUcsQ0FBQ2lCLEdBQUosQ0FBUSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw4QkFBaUI7QUFBQSx5Q0FBaUI7QUFBQSwyQ0FBSTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTyxFQUFFO0FBQUEseUJBQU10Qix1REFBQSxDQUFZLFFBQVosQ0FBTjtBQUFBLGlCQUEvQjtBQUFBLDBCQUE2RHFCLElBQUksQ0FBQ0c7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSixPQUE2RkgsSUFBSSxDQUFDSSxFQUFMLEdBQVUsR0FBVixHQUFnQkosSUFBSSxDQUFDbEIsR0FBckIsR0FBMkIsR0FBM0IsR0FBaUNrQixJQUFJLENBQUNHLFdBQXRDLEdBQW9ELEdBQXBELEdBQTBESCxJQUFJLENBQUNLLEtBQS9ELEdBQXVFLEdBQXZFLEdBQTZFTCxJQUFJLENBQUNNLEtBQWxGLEdBQTBGLEdBQTFGLEdBQWdHTixJQUFJLENBQUNPLGVBQWxNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakI7QUFBQSxhQUFTTixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWpCO0FBQUEsU0FBUjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0lBN0NRckI7O0tBQUFBO0FBK0NULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0tTVi9nZXRLU1YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcblxyXG4gICAgdmFyIGZsYWcgPSB0cnVlO1xyXG4gICAgY29uc3QgW0tTViwgc2V0S1NWXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBpZihmbGFnID09IHRydWUpe1xyXG4gICAgICAgIGNvbnN0IGdldEtTViA9IGFzeW5jKG5ld0tTViwgbmV3RWJlbmUpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwOTAvYXBpL0tTVi9zZWxlY3QnLCB7cGFyYW1zOiB7a3N2OiBuZXdLU1YsIGViZW5lOiBuZXdFYmVuZX0gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0S1NWKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3QoKXtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBuZXdLU1YgPSByb3V0ZXIucXVlcnkubmV3S1NWO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0tTVik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuZXdFYmVuZSA9IHJvdXRlci5xdWVyeS5uZXdFYmVuZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdFYmVuZSk7XHJcbiAgICBcclxuICAgICAgICBnZXRLU1YobmV3S1NWLCBuZXdFYmVuZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRlc3QoKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtLU1YgJiYgS1NWLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4gPHA+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCdnZXRLU1YnKX0+e2l0ZW0uQkVaRUlDSE5VTkd9PC9idXR0b24+IHtpdGVtLklEICsgXCIgXCIgKyBpdGVtLktTViArIFwiIFwiICsgaXRlbS5CRVpFSUNITlVORyArIFwiIFwiICsgaXRlbS5FQkVORSArIFwiIFwiICsgaXRlbS5ST1dJRCArIFwiIFwiICsgaXRlbS5CRVRSSUVCU0JFUkVJQ0h9PC9wPjwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiUm91dGVyIiwiUHJvZmlsZSIsImZsYWciLCJLU1YiLCJzZXRLU1YiLCJnZXRLU1YiLCJuZXdLU1YiLCJuZXdFYmVuZSIsImdldCIsInBhcmFtcyIsImtzdiIsImViZW5lIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidGVzdCIsInJvdXRlciIsInF1ZXJ5IiwibWFwIiwiaXRlbSIsImluZGV4IiwicHVzaCIsIkJFWkVJQ0hOVU5HIiwiSUQiLCJFQkVORSIsIlJPV0lEIiwiQkVUUklFQlNCRVJFSUNIIl0sInNvdXJjZVJvb3QiOiIifQ==