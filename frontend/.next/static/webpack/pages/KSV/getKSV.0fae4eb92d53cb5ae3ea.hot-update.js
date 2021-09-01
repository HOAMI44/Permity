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
    _s = $RefreshSig$();







function Profile() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      KSV = _useState[0],
      setKSV = _useState[1];

  var getKSV = /*#__PURE__*/function () {
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
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getKSV(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  console.log(router.query);
  var newKSV = router.query.newKSV;
  console.log(newKSV);
  var newEbene = router.query.newEbene;
  console.log(newEbene);
  ;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    children: [getKSV(newKSV, newEbene), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 38,
                columnNumber: 71
              }, _this), " ", item.ID + " " + item.KSV + " " + item.BEZEICHNUNG + " " + item.EBENE + " " + item.ROWID + " " + item.BETRIEBSBEREICH]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 67
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 50
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_s(Profile, "o4I9Fna2RtcrIEGKIOtfEprbmz0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi4wZmFlNGViOTJkNTNjYjVhZTNlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUVPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVJLLEdBRlE7QUFBQSxNQUVIQyxNQUZHOztBQUlmLE1BQU1DLE1BQU07QUFBQSx1UkFBRyxpQkFBTUMsTUFBTixFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWFAsY0FBQUEsZ0RBQUEsQ0FBVSxzQ0FBVixFQUFrRDtBQUFDUyxnQkFBQUEsTUFBTSxFQUFFO0FBQUNDLGtCQUFBQSxHQUFHLEVBQUVKLE1BQU47QUFBY0ssa0JBQUFBLEtBQUssRUFBRUo7QUFBckI7QUFBVCxlQUFsRCxFQUE2RkssSUFBN0YsQ0FBa0csVUFBQUMsR0FBRyxFQUFJO0FBQ3JHQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQVosZ0JBQUFBLE1BQU0sQ0FBQ1MsR0FBRyxDQUFDRyxJQUFMLENBQU47QUFFSCxlQUpEOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5YLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFTQSxNQUFNWSxNQUFNLEdBQUdsQixzREFBUyxFQUF4QjtBQUNBZSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsTUFBTSxDQUFDQyxLQUFuQjtBQUdBLE1BQU1aLE1BQU0sR0FBR1csTUFBTSxDQUFDQyxLQUFQLENBQWFaLE1BQTVCO0FBQ0FRLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaO0FBRUEsTUFBTUMsUUFBUSxHQUFHVSxNQUFNLENBQUNDLEtBQVAsQ0FBYVgsUUFBOUI7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFFQTtBQUdGLHNCQUNFO0FBQUEsZUFDS0YsTUFBTSxDQUFDQyxNQUFELEVBQVNDLFFBQVQsQ0FEWCxlQUVJO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS0osR0FBRyxJQUFJQSxHQUFHLENBQUNnQixHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQWlCO0FBQUEseUNBQWlCO0FBQUEsMkNBQUk7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU8sRUFBRTtBQUFBLHlCQUFNcEIsdURBQUEsQ0FBWSxRQUFaLENBQU47QUFBQSxpQkFBL0I7QUFBQSwwQkFBNkRtQixJQUFJLENBQUNHO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUosT0FBNkZILElBQUksQ0FBQ0ksRUFBTCxHQUFVLEdBQVYsR0FBZ0JKLElBQUksQ0FBQ2pCLEdBQXJCLEdBQTJCLEdBQTNCLEdBQWlDaUIsSUFBSSxDQUFDRyxXQUF0QyxHQUFvRCxHQUFwRCxHQUEwREgsSUFBSSxDQUFDSyxLQUEvRCxHQUF1RSxHQUF2RSxHQUE2RUwsSUFBSSxDQUFDTSxLQUFsRixHQUEwRixHQUExRixHQUFnR04sSUFBSSxDQUFDTyxlQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpCO0FBQUEsYUFBU04sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFqQjtBQUFBLFNBQVI7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBcENRbkI7VUFhVUg7OztLQWJWRztBQXNDVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9LU1YvZ2V0S1NWLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIGNvbnN0IFtLU1YsIHNldEtTVl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0S1NWID0gYXN5bmMobmV3S1NWLCBuZXdFYmVuZSkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDkwL2FwaS9LU1Yvc2VsZWN0Jywge3BhcmFtczoge2tzdjogbmV3S1NWLCBlYmVuZTogbmV3RWJlbmV9IH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRLU1YocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG5ld0tTViA9IHJvdXRlci5xdWVyeS5uZXdLU1Y7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdLU1YpO1xyXG5cclxuICAgIGNvbnN0IG5ld0ViZW5lID0gcm91dGVyLnF1ZXJ5Lm5ld0ViZW5lO1xyXG4gICAgY29uc29sZS5sb2cobmV3RWJlbmUpO1xyXG5cclxuICAgIDtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICB7Z2V0S1NWKG5ld0tTViwgbmV3RWJlbmUpfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtLU1YgJiYgS1NWLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4gPHA+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCdnZXRLU1YnKX0+e2l0ZW0uQkVaRUlDSE5VTkd9PC9idXR0b24+IHtpdGVtLklEICsgXCIgXCIgKyBpdGVtLktTViArIFwiIFwiICsgaXRlbS5CRVpFSUNITlVORyArIFwiIFwiICsgaXRlbS5FQkVORSArIFwiIFwiICsgaXRlbS5ST1dJRCArIFwiIFwiICsgaXRlbS5CRVRSSUVCU0JFUkVJQ0h9PC9wPjwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiUm91dGVyIiwiUHJvZmlsZSIsIktTViIsInNldEtTViIsImdldEtTViIsIm5ld0tTViIsIm5ld0ViZW5lIiwiZ2V0IiwicGFyYW1zIiwia3N2IiwiZWJlbmUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJCRVpFSUNITlVORyIsIklEIiwiRUJFTkUiLCJST1dJRCIsIkJFVFJJRUJTQkVSRUlDSCJdLCJzb3VyY2VSb290IjoiIn0=