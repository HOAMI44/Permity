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
                flag = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvS1NWL2dldEtTVi43NGY3MjY2NGIyYzA2ZjgzMjdiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sT0FBVCxHQUFtQjtBQUFBOztBQUFBO0FBQUE7O0FBRWYsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBRmUsa0JBR09MLCtDQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHUk0sR0FIUTtBQUFBLE1BR0hDLE1BSEc7O0FBS2YsTUFBTUMsTUFBTTtBQUFBLHVSQUFHLGlCQUFNQyxNQUFOLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYUixjQUFBQSxnREFBQSxDQUFVLHNDQUFWLEVBQWtEO0FBQUNVLGdCQUFBQSxNQUFNLEVBQUU7QUFBQ0Msa0JBQUFBLEdBQUcsRUFBRUosTUFBTjtBQUFjSyxrQkFBQUEsS0FBSyxFQUFFSjtBQUFyQjtBQUFULGVBQWxELEVBQTZGSyxJQUE3RixDQUFrRyxVQUFBQyxHQUFHLEVBQUk7QUFDckdDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNBWixnQkFBQUEsTUFBTSxDQUFDUyxHQUFHLENBQUNHLElBQUwsQ0FBTjtBQUNBZCxnQkFBQUEsSUFBSSxHQUFHLEtBQVA7QUFDSCxlQUpEOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFRQSxXQUFTWSxJQUFULEdBQWU7QUFBQTs7QUFDWCxRQUFNQyxNQUFNLEdBQUdwQixzREFBUyxFQUF4QjtBQUNBZ0IsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLE1BQU0sQ0FBQ0MsS0FBbkI7QUFHQSxRQUFNYixNQUFNLEdBQUdZLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhYixNQUE1QjtBQUNBUSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVBLFFBQU1DLFFBQVEsR0FBR1csTUFBTSxDQUFDQyxLQUFQLENBQWFaLFFBQTlCO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaO0FBRUFGLElBQUFBLE1BQU0sQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULENBQU47QUFDSDs7QUF6QmMsS0FhTlUsSUFiTTtBQUFBLFlBY0luQixrREFkSjtBQUFBOztBQTJCZm1CLEVBQUFBLElBQUk7QUFNTixzQkFDRTtBQUFBLDJCQUNJO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS2QsR0FBRyxJQUFJQSxHQUFHLENBQUNpQixHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQWlCO0FBQUEseUNBQWlCO0FBQUEsMkNBQUk7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU8sRUFBRTtBQUFBLHlCQUFNdEIsdURBQUEsQ0FBWSxRQUFaLENBQU47QUFBQSxpQkFBL0I7QUFBQSwwQkFBNkRxQixJQUFJLENBQUNHO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUosT0FBNkZILElBQUksQ0FBQ0ksRUFBTCxHQUFVLEdBQVYsR0FBZ0JKLElBQUksQ0FBQ2xCLEdBQXJCLEdBQTJCLEdBQTNCLEdBQWlDa0IsSUFBSSxDQUFDRyxXQUF0QyxHQUFvRCxHQUFwRCxHQUEwREgsSUFBSSxDQUFDSyxLQUEvRCxHQUF1RSxHQUF2RSxHQUE2RUwsSUFBSSxDQUFDTSxLQUFsRixHQUEwRixHQUExRixHQUFnR04sSUFBSSxDQUFDTyxlQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpCO0FBQUEsYUFBU04sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFqQjtBQUFBLFNBQVI7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztJQTFDUXJCOztLQUFBQTtBQTRDVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9LU1YvZ2V0S1NWLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIHZhciBmbGFnID0gdHJ1ZTtcclxuICAgIGNvbnN0IFtLU1YsIHNldEtTVl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0S1NWID0gYXN5bmMobmV3S1NWLCBuZXdFYmVuZSkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDkwL2FwaS9LU1Yvc2VsZWN0Jywge3BhcmFtczoge2tzdjogbmV3S1NWLCBlYmVuZTogbmV3RWJlbmV9IH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRLU1YocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0KCl7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbmV3S1NWID0gcm91dGVyLnF1ZXJ5Lm5ld0tTVjtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdLU1YpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbmV3RWJlbmUgPSByb3V0ZXIucXVlcnkubmV3RWJlbmU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3RWJlbmUpO1xyXG4gICAgXHJcbiAgICAgICAgZ2V0S1NWKG5ld0tTViwgbmV3RWJlbmUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXN0KCk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7S1NWICYmIEtTVi5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+IDxwPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnZ2V0S1NWJyl9PntpdGVtLkJFWkVJQ0hOVU5HfTwvYnV0dG9uPiB7aXRlbS5JRCArIFwiIFwiICsgaXRlbS5LU1YgKyBcIiBcIiArIGl0ZW0uQkVaRUlDSE5VTkcgKyBcIiBcIiArIGl0ZW0uRUJFTkUgKyBcIiBcIiArIGl0ZW0uUk9XSUQgKyBcIiBcIiArIGl0ZW0uQkVUUklFQlNCRVJFSUNIfTwvcD48L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlJvdXRlciIsIlByb2ZpbGUiLCJmbGFnIiwiS1NWIiwic2V0S1NWIiwiZ2V0S1NWIiwibmV3S1NWIiwibmV3RWJlbmUiLCJnZXQiLCJwYXJhbXMiLCJrc3YiLCJlYmVuZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInRlc3QiLCJyb3V0ZXIiLCJxdWVyeSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJCRVpFSUNITlVORyIsIklEIiwiRUJFTkUiLCJST1dJRCIsIkJFVFJJRUJTQkVSRUlDSCJdLCJzb3VyY2VSb290IjoiIn0=