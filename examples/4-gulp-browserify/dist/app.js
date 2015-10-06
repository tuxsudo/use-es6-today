(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesAddJs = require('./modules/add.js');

var _modulesAddJs2 = _interopRequireDefault(_modulesAddJs);

var _modulesQsaJs = require('./modules/qsa.js');

var _modulesQsaJs2 = _interopRequireDefault(_modulesQsaJs);

var _modulesMapsAddClassMapJs = require('./modules/maps/add-class-map.js');

var _modulesMapsAddClassMapJs2 = _interopRequireDefault(_modulesMapsAddClassMapJs);

var _modulesOnReadyJs = require('./modules/on-ready.js');

var _modulesOnReadyJs2 = _interopRequireDefault(_modulesOnReadyJs);

console.log((0, _modulesAddJs2['default'])(1, 2, 3, 4, 5));

(0, _modulesOnReadyJs2['default'])(function (e) {

	console.log('loaded!!');

	(0, _modulesQsaJs2['default'])('a:not([class])').map((0, _modulesMapsAddClassMapJs2['default'])('no-class'));
});

},{"./modules/add.js":2,"./modules/maps/add-class-map.js":3,"./modules/on-ready.js":4,"./modules/qsa.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (l, c) {
    return l + c;
  }, 0);
};

module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (className) {
	return function (element) {
		element.classList.add(className);
		return element;
	};
};

module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (fn) {

	document.addEventListener("DOMContentLoaded", function init(e) {

		fn(e);
		document.removeEventListener("DOMContentLoaded", init);
	});
};

module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (selector, element) {
  return [].slice.call((element || document).querySelectorAll(selector));
};

module.exports = exports["default"];

},{}]},{},[1]);
