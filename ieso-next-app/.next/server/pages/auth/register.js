module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/usr/src/app/pages/auth/register.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nlet Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"register__Container\",\n  componentId: \"c855p7-0\"\n})([\"height:100vh;display:flex;justify-content:center;align-items:center;font-family:'Work Sans';& .MuiTextField-root,.MuiButton-root{margin:1rem 0;}\"]);\n\nfunction Register({\n  csrfTokenProp,\n  query\n}) {\n  return __jsx(Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    method: \"post\",\n    action: \"/api/auth/callback/credentials\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    name: \"csrfToken\",\n    type: \"hidden\",\n    defaultValue: csrfTokenProp,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    name: \"register\",\n    type: \"hidden\",\n    defaultValue: \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n    id: \"username\",\n    label: \"Username\",\n    name: \"username\",\n    type: \"text\",\n    fullWidth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n    id: \"password\",\n    label: \"Password\",\n    name: \"password\",\n    type: \"password\",\n    fullWidth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    size: \"small\",\n    color: \"primary\",\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Register\")));\n}\n\nRegister.getInitialProps = async context => {\n  return {\n    csrfTokenProp: await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"csrfToken\"])(context),\n    query: context.query\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzP2Y1NDEiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUmVnaXN0ZXIiLCJjc3JmVG9rZW5Qcm9wIiwicXVlcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY3NyZlRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0pBQWI7O0FBWUEsU0FBU0MsUUFBVCxDQUFrQjtBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFsQixFQUE0QztBQUMxQyxTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixVQUFNLEVBQUMsZ0NBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxXQUFaO0FBQXdCLFFBQUksRUFBQyxRQUE3QjtBQUFzQyxnQkFBWSxFQUFFRCxhQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUksRUFBQyxRQUE1QjtBQUFxQyxnQkFBWSxFQUFDLE1BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxRQUFJLEVBQUMsTUFKUDtBQUtFLGFBQVMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFVRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsUUFBSSxFQUFDLFVBSlA7QUFLRSxhQUFTLE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBaUJFLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsUUFBSSxFQUFDLE9BQWpDO0FBQXlDLFNBQUssRUFBQyxTQUEvQztBQUF5RCxRQUFJLEVBQUMsUUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkYsQ0FERixDQURGO0FBdUJEOztBQUVERCxRQUFRLENBQUNHLGVBQVQsR0FBMkIsTUFBT0MsT0FBUCxJQUFtQjtBQUM1QyxTQUFPO0FBQ0xILGlCQUFhLEVBQUUsTUFBTUksa0VBQVMsQ0FBQ0QsT0FBRCxDQUR6QjtBQUVMRixTQUFLLEVBQUVFLE9BQU8sQ0FBQ0Y7QUFGVixHQUFQO0FBSUQsQ0FMRDs7QUFPZUYsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NyZlRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5sZXQgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcblxuICAmIC5NdWlUZXh0RmllbGQtcm9vdCwgLk11aUJ1dHRvbi1yb290IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgfVxuYFxuXG5mdW5jdGlvbiBSZWdpc3Rlcih7IGNzcmZUb2tlblByb3AsIHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9hcGkvYXV0aC9jYWxsYmFjay9jcmVkZW50aWFscyc+XG4gICAgICAgIDxpbnB1dCBuYW1lPSdjc3JmVG9rZW4nIHR5cGU9J2hpZGRlbicgZGVmYXVsdFZhbHVlPXtjc3JmVG9rZW5Qcm9wfS8+XG4gICAgICAgIDxpbnB1dCBuYW1lPSdyZWdpc3RlcicgdHlwZT0naGlkZGVuJyBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIGxhYmVsPSdVc2VybmFtZSdcbiAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xuICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cblJlZ2lzdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3NyZlRva2VuUHJvcDogYXdhaXQgY3NyZlRva2VuKGNvbnRleHQpLFxuICAgIHF1ZXJ5OiBjb250ZXh0LnF1ZXJ5XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/register.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });