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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/signin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/usr/src/app/pages/auth/signin.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nlet Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"signin__Container\",\n  componentId: \"l9245o-0\"\n})([\"height:100vh;display:flex;justify-content:center;align-items:center;font-family:'Work Sans';& .MuiTextField-root,.MuiButton-root{margin:1rem 0;}\"]);\n\nfunction SignIn({\n  csrfTokenProp,\n  query\n}) {\n  return __jsx(Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    method: \"post\",\n    action: \"/api/auth/callback/credentials\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    name: \"csrfToken\",\n    type: \"hidden\",\n    defaultValue: csrfTokenProp,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    name: \"register\",\n    type: \"hidden\",\n    defaultValue: \"false\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n    id: \"username\",\n    label: \"Username\",\n    name: \"username\",\n    type: \"text\",\n    fullWidth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n    id: \"password\",\n    label: \"Password\",\n    name: \"password\",\n    type: \"password\",\n    fullWidth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    size: \"small\",\n    color: \"primary\",\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Sign In\")));\n}\n\nSignIn.getInitialProps = async context => {\n  return {\n    csrfTokenProp: await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"csrfToken\"])(context),\n    query: context.query\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3NpZ25pbi5qcz9lOTg4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlNpZ25JbiIsImNzcmZUb2tlblByb3AiLCJxdWVyeSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjc3JmVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3SkFBYjs7QUFZQSxTQUFTQyxNQUFULENBQWdCO0FBQUVDLGVBQUY7QUFBaUJDO0FBQWpCLENBQWhCLEVBQTBDO0FBQ3hDLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFVBQU0sRUFBQyxnQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFdBQVo7QUFBd0IsUUFBSSxFQUFDLFFBQTdCO0FBQXNDLGdCQUFZLEVBQUVELGFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBSSxFQUFDLFFBQTVCO0FBQXFDLGdCQUFZLEVBQUMsT0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsYUFBUyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQVVFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGFBQVMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFpQkUsTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixRQUFJLEVBQUMsT0FBakM7QUFBeUMsU0FBSyxFQUFDLFNBQS9DO0FBQXlELFFBQUksRUFBQyxRQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLENBREYsQ0FERjtBQXVCRDs7QUFFREQsTUFBTSxDQUFDRyxlQUFQLEdBQXlCLE1BQU9DLE9BQVAsSUFBbUI7QUFDMUMsU0FBTztBQUNMSCxpQkFBYSxFQUFFLE1BQU1JLGtFQUFTLENBQUNELE9BQUQsQ0FEekI7QUFFTEYsU0FBSyxFQUFFRSxPQUFPLENBQUNGO0FBRlYsR0FBUDtBQUlELENBTEQ7O0FBT2VGLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9zaWduaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3JmVG9rZW4gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmxldCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xuXG4gICYgLk11aVRleHRGaWVsZC1yb290LCAuTXVpQnV0dG9uLXJvb3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG5gXG5cbmZ1bmN0aW9uIFNpZ25Jbih7IGNzcmZUb2tlblByb3AsIHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9hcGkvYXV0aC9jYWxsYmFjay9jcmVkZW50aWFscyc+XG4gICAgICAgIDxpbnB1dCBuYW1lPSdjc3JmVG9rZW4nIHR5cGU9J2hpZGRlbicgZGVmYXVsdFZhbHVlPXtjc3JmVG9rZW5Qcm9wfS8+XG4gICAgICAgIDxpbnB1dCBuYW1lPSdyZWdpc3RlcicgdHlwZT0naGlkZGVuJyBkZWZhdWx0VmFsdWU9XCJmYWxzZVwiLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPSdwYXNzd29yZCdcbiAgICAgICAgICBsYWJlbD0nUGFzc3dvcmQnXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9J3N1Ym1pdCc+U2lnbiBJbjwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cblNpZ25Jbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNzcmZUb2tlblByb3A6IGF3YWl0IGNzcmZUb2tlbihjb250ZXh0KSxcbiAgICBxdWVyeTogY29udGV4dC5xdWVyeVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

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