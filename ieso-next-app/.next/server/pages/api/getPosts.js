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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getPosts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/getPosts.js":
/*!*******************************!*\
  !*** ./pages/api/getPosts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb://mongo:27017\";\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](uri);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  let page = req.body.page;\n  await client.connect();\n  const database = client.db(\"posts\");\n  const collection = database.collection(\"posts\");\n  let posts = await collection.find().sort({\n    timestamp: -1\n  }).limit(10).skip(page * 10).toArray();\n  posts = posts.map(post => {\n    if (post.public_private === \"private\") {\n      delete post.username;\n    }\n\n    return post;\n  });\n  req.statusCode = 200;\n  res.json({\n    posts\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0UG9zdHMuanM/OWQ5ZiJdLCJuYW1lcyI6WyJ1cmkiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsInJlcSIsInJlcyIsInBhZ2UiLCJib2R5IiwiY29ubmVjdCIsImRhdGFiYXNlIiwiZGIiLCJjb2xsZWN0aW9uIiwicG9zdHMiLCJmaW5kIiwic29ydCIsInRpbWVzdGFtcCIsImxpbWl0Iiwic2tpcCIsInRvQXJyYXkiLCJtYXAiLCJwb3N0IiwicHVibGljX3ByaXZhdGUiLCJ1c2VybmFtZSIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLEdBQUcsR0FBRyx1QkFBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFnQkYsR0FBaEIsQ0FBZjtBQUVlLHNFQUFPRyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUosQ0FBU0QsSUFBcEI7QUFDQSxRQUFNSixNQUFNLENBQUNNLE9BQVAsRUFBTjtBQUNBLFFBQU1DLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFQLENBQVUsT0FBVixDQUFqQjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUFULENBQW9CLE9BQXBCLENBQW5CO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLE1BQU1ELFVBQVUsQ0FBQ0UsSUFBWCxHQUFrQkMsSUFBbEIsQ0FBdUI7QUFBQ0MsYUFBUyxFQUFFLENBQUM7QUFBYixHQUF2QixFQUF3Q0MsS0FBeEMsQ0FBOEMsRUFBOUMsRUFBa0RDLElBQWxELENBQXVEWCxJQUFJLEdBQUcsRUFBOUQsRUFBa0VZLE9BQWxFLEVBQWxCO0FBQ0FOLE9BQUssR0FBR0EsS0FBSyxDQUFDTyxHQUFOLENBQVVDLElBQUksSUFBSTtBQUN4QixRQUFJQSxJQUFJLENBQUNDLGNBQUwsS0FBd0IsU0FBNUIsRUFBdUM7QUFDckMsYUFBT0QsSUFBSSxDQUFDRSxRQUFaO0FBQ0Q7O0FBQ0QsV0FBT0YsSUFBUDtBQUNELEdBTE8sQ0FBUjtBQU1BaEIsS0FBRyxDQUFDbUIsVUFBSixHQUFpQixHQUFqQjtBQUNBbEIsS0FBRyxDQUFDbUIsSUFBSixDQUFTO0FBQUNaO0FBQUQsR0FBVDtBQUNELENBZEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0UG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5jb25zdCB1cmkgPSBcIm1vbmdvZGI6Ly9tb25nbzoyNzAxN1wiO1xuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBsZXQgcGFnZSA9IHJlcS5ib2R5LnBhZ2VcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxuICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYihcInBvc3RzXCIpXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwicG9zdHNcIilcbiAgbGV0IHBvc3RzID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKCkuc29ydCh7dGltZXN0YW1wOiAtMX0pLmxpbWl0KDEwKS5za2lwKHBhZ2UgKiAxMCkudG9BcnJheSgpXG4gIHBvc3RzID0gcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgIGlmIChwb3N0LnB1YmxpY19wcml2YXRlID09PSBcInByaXZhdGVcIikge1xuICAgICAgZGVsZXRlIHBvc3QudXNlcm5hbWVcbiAgICB9XG4gICAgcmV0dXJuIHBvc3RcbiAgfSlcbiAgcmVxLnN0YXR1c0NvZGUgPSAyMDBcbiAgcmVzLmpzb24oe3Bvc3RzfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/getPosts.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });