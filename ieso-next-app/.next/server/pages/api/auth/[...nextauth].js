module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst uri = \"mongodb://mongo:27017\";\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_3__[\"MongoClient\"](uri);\nconst SALT_ROUNDS = 12;\n\nconst signIn = async ({\n  username,\n  password\n}) => {\n  await client.connect();\n  const database = client.db(\"accounts\");\n  const collection = database.collection(\"users\");\n  const query = {\n    username: username\n  };\n  let found = await collection.findOne(query);\n  if (!found) return Promise.reject('/auth/signin?error=CredentialsSignin');\n  let compare = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(password, found.hash);\n  if (!compare) return Promise.reject('/auth/signin?error=CredentialsSignin');\n  return Promise.resolve({\n    name: username\n  });\n};\n\nconst register = async ({\n  username,\n  password\n}) => {\n  await client.connect();\n  const database = client.db(\"accounts\");\n  const collection = database.collection(\"users\");\n  let hash = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.hash(password, SALT_ROUNDS);\n  const user = {\n    username,\n    hash\n  };\n\n  try {\n    await collection.insertOne(user);\n    return Promise.resolve({\n      name: username\n    });\n  } catch (e) {\n    console.log(e);\n    return Promise.reject('/auth/register?error=CredentialsSignin');\n  }\n};\n\nconst options = {\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({\n    // The name to display on the sign in form (e.g. 'Sign in with...')\n    name: 'Credentials',\n    // The credentials is used to generate a suitable form on the sign in page.\n    // You can specify whatever fields you are expecting to be submitted.\n    // e.g. domain, username, password, 2FA token, etc.\n    credentials: {\n      username: {\n        label: \"Username\",\n        type: \"text\",\n        placeholder: \"jsmith\"\n      },\n      password: {\n        label: \"Password\",\n        type: \"password\"\n      },\n      register: {\n        label: \"Register\",\n        type: \"checkbox\"\n      }\n    },\n    authorize: async credentials => {\n      if (credentials.register === \"true\") return register(credentials);else return signIn(credentials);\n    }\n  })],\n  pages: {\n    signIn: '/auth/signin'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsidXJpIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJTQUxUX1JPVU5EUyIsInNpZ25JbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25uZWN0IiwiZGF0YWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImZvdW5kIiwiZmluZE9uZSIsIlByb21pc2UiLCJyZWplY3QiLCJjb21wYXJlIiwiYmNyeXB0IiwiaGFzaCIsInJlc29sdmUiLCJuYW1lIiwicmVnaXN0ZXIiLCJ1c2VyIiwiaW5zZXJ0T25lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0aG9yaXplIiwicGFnZXMiLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsdUJBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsbURBQUosQ0FBZ0JGLEdBQWhCLENBQWY7QUFDQSxNQUFNRyxXQUFXLEdBQUcsRUFBcEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE9BQU87QUFBQ0MsVUFBRDtBQUFXQztBQUFYLENBQVAsS0FBZ0M7QUFDN0MsUUFBTUwsTUFBTSxDQUFDTSxPQUFQLEVBQU47QUFDQSxRQUFNQyxRQUFRLEdBQUdQLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLFVBQVYsQ0FBakI7QUFDQSxRQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixPQUFwQixDQUFuQjtBQUVBLFFBQU1DLEtBQUssR0FBRztBQUFFTixZQUFRLEVBQUVBO0FBQVosR0FBZDtBQUVBLE1BQUlPLEtBQUssR0FBRyxNQUFNRixVQUFVLENBQUNHLE9BQVgsQ0FBbUJGLEtBQW5CLENBQWxCO0FBQ0EsTUFBSSxDQUFDQyxLQUFMLEVBQVksT0FBT0UsT0FBTyxDQUFDQyxNQUFSLENBQWUsc0NBQWYsQ0FBUDtBQUVaLE1BQUlDLE9BQU8sR0FBRyxNQUFNQyw2Q0FBTSxDQUFDRCxPQUFQLENBQWVWLFFBQWYsRUFBeUJNLEtBQUssQ0FBQ00sSUFBL0IsQ0FBcEI7QUFDQSxNQUFJLENBQUNGLE9BQUwsRUFBYyxPQUFPRixPQUFPLENBQUNDLE1BQVIsQ0FBZSxzQ0FBZixDQUFQO0FBRWQsU0FBT0QsT0FBTyxDQUFDSyxPQUFSLENBQWdCO0FBQUVDLFFBQUksRUFBRWY7QUFBUixHQUFoQixDQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsTUFBTWdCLFFBQVEsR0FBRyxPQUFPO0FBQUNoQixVQUFEO0FBQVdDO0FBQVgsQ0FBUCxLQUFnQztBQUMvQyxRQUFNTCxNQUFNLENBQUNNLE9BQVAsRUFBTjtBQUNBLFFBQU1DLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFQLENBQVUsVUFBVixDQUFqQjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUFULENBQW9CLE9BQXBCLENBQW5CO0FBRUEsTUFBSVEsSUFBSSxHQUFHLE1BQU1ELDZDQUFNLENBQUNDLElBQVAsQ0FBWVosUUFBWixFQUFzQkgsV0FBdEIsQ0FBakI7QUFFQSxRQUFNbUIsSUFBSSxHQUFHO0FBQUVqQixZQUFGO0FBQVlhO0FBQVosR0FBYjs7QUFFQSxNQUFJO0FBQ0YsVUFBTVIsVUFBVSxDQUFDYSxTQUFYLENBQXFCRCxJQUFyQixDQUFOO0FBQ0EsV0FBT1IsT0FBTyxDQUFDSyxPQUFSLENBQWdCO0FBQUVDLFVBQUksRUFBRWY7QUFBUixLQUFoQixDQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9tQixDQUFQLEVBQVU7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQSxXQUFPVixPQUFPLENBQUNDLE1BQVIsQ0FBZSx3Q0FBZixDQUFQO0FBQ0Q7QUFDRixDQWhCRDs7QUFrQkEsTUFBTVksT0FBTyxHQUFHO0FBQ2Q7QUFDQUMsV0FBUyxFQUFFLENBQ1RDLDBEQUFTLENBQUNDLFdBQVYsQ0FBc0I7QUFDcEI7QUFDQVYsUUFBSSxFQUFFLGFBRmM7QUFHcEI7QUFDQTtBQUNBO0FBQ0FXLGVBQVcsRUFBRTtBQUNYMUIsY0FBUSxFQUFFO0FBQUUyQixhQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBSSxFQUFFLE1BQTNCO0FBQW1DQyxtQkFBVyxFQUFFO0FBQWhELE9BREM7QUFFWDVCLGNBQVEsRUFBRTtBQUFFMEIsYUFBSyxFQUFFLFVBQVQ7QUFBcUJDLFlBQUksRUFBRTtBQUEzQixPQUZDO0FBR1haLGNBQVEsRUFBRTtBQUFFVyxhQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBSSxFQUFFO0FBQTNCO0FBSEMsS0FOTztBQVdwQkUsYUFBUyxFQUFFLE1BQU1KLFdBQU4sSUFBcUI7QUFDOUIsVUFBSUEsV0FBVyxDQUFDVixRQUFaLEtBQXlCLE1BQTdCLEVBQXFDLE9BQU9BLFFBQVEsQ0FBQ1UsV0FBRCxDQUFmLENBQXJDLEtBQ0ssT0FBTzNCLE1BQU0sQ0FBQzJCLFdBQUQsQ0FBYjtBQUNOO0FBZG1CLEdBQXRCLENBRFMsQ0FGRztBQW9CZEssT0FBSyxFQUFFO0FBQ0xoQyxVQUFNLEVBQUU7QUFESDtBQXBCTyxDQUFoQjtBQXlCZSxnRUFBQ2lDLEdBQUQsRUFBTUMsR0FBTixLQUFjQyxnREFBUSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV1gsT0FBWCxDQUFyQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IHVyaSA9IFwibW9uZ29kYjovL21vbmdvOjI3MDE3XCI7XG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcbmNvbnN0IFNBTFRfUk9VTkRTID0gMTJcblxuY29uc3Qgc2lnbkluID0gYXN5bmMgKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KClcbiAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJhY2NvdW50c1wiKVxuICBjb25zdCBjb2xsZWN0aW9uID0gZGF0YWJhc2UuY29sbGVjdGlvbihcInVzZXJzXCIpXG5cbiAgY29uc3QgcXVlcnkgPSB7IHVzZXJuYW1lOiB1c2VybmFtZSB9XG5cbiAgbGV0IGZvdW5kID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lKHF1ZXJ5KVxuICBpZiAoIWZvdW5kKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoJy9hdXRoL3NpZ25pbj9lcnJvcj1DcmVkZW50aWFsc1NpZ25pbicpXG5cbiAgbGV0IGNvbXBhcmUgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgZm91bmQuaGFzaClcbiAgaWYgKCFjb21wYXJlKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoJy9hdXRoL3NpZ25pbj9lcnJvcj1DcmVkZW50aWFsc1NpZ25pbicpXG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IHVzZXJuYW1lIH0pXG59XG5cbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KClcbiAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJhY2NvdW50c1wiKVxuICBjb25zdCBjb2xsZWN0aW9uID0gZGF0YWJhc2UuY29sbGVjdGlvbihcInVzZXJzXCIpXG5cbiAgbGV0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgU0FMVF9ST1VORFMpXG5cbiAgY29uc3QgdXNlciA9IHsgdXNlcm5hbWUsIGhhc2ggfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUodXNlcilcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogdXNlcm5hbWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCcvYXV0aC9yZWdpc3Rlcj9lcnJvcj1DcmVkZW50aWFsc1NpZ25pbicpXG4gIH1cbn1cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgcmVnaXN0ZXI6IHsgbGFiZWw6IFwiUmVnaXN0ZXJcIiwgdHlwZTogXCJjaGVja2JveFwiIH1cbiAgICAgIH0sXG4gICAgICBhdXRob3JpemU6IGFzeW5jIGNyZWRlbnRpYWxzID0+IHtcbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnJlZ2lzdGVyID09PSBcInRydWVcIikgcmV0dXJuIHJlZ2lzdGVyKGNyZWRlbnRpYWxzKVxuICAgICAgICBlbHNlIHJldHVybiBzaWduSW4oY3JlZGVudGlhbHMpXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });