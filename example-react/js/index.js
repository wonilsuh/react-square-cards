/*! wonilSuh.com v24 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactComponentNpm"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReactComponentNpm"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_110__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(110);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _MainView = __webpack_require__(111);

	var _MainView2 = _interopRequireDefault(_MainView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.mainApp = function (app) {

		app.init = function (targetEl) {
			_reactDom2.default.render(_react2.default.createElement(_MainView2.default, null), targetEl);
		};

		return app;
	}(window.mainApp || {});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(14).Object.getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(4)
	  , $getPrototypeOf = __webpack_require__(6);

	__webpack_require__(12)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(9)('keys')
	  , uid    = __webpack_require__(11);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , toPrimitive    = __webpack_require__(25)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', {defineProperty: __webpack_require__(18).f});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(34);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(58);
	module.exports = __webpack_require__(62).f('iterator');

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(37)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(39)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(40)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , hide           = __webpack_require__(17)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(42)
	  , $iterCreate    = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(56)
	  , getPrototypeOf = __webpack_require__(6)
	  , ITERATOR       = __webpack_require__(57)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(56)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(17)(IteratorPrototype, __webpack_require__(57)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(19)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(54)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(24)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(55).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(18)
	  , anObject = __webpack_require__(19)
	  , getKeys  = __webpack_require__(46);

	module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(54);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(48)
	  , arrayIndexOf = __webpack_require__(51)(false)
	  , IE_PROTO     = __webpack_require__(8)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(49)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(50);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(48)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(57)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(9)('wks')
	  , uid        = __webpack_require__(11)
	  , Symbol     = __webpack_require__(10).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var global        = __webpack_require__(10)
	  , hide          = __webpack_require__(17)
	  , Iterators     = __webpack_require__(42)
	  , TO_STRING_TAG = __webpack_require__(57)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(60)
	  , step             = __webpack_require__(61)
	  , Iterators        = __webpack_require__(42)
	  , toIObject        = __webpack_require__(48);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(57);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	module.exports = __webpack_require__(14).Symbol;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(10)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(22)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(23)
	  , shared         = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(56)
	  , uid            = __webpack_require__(11)
	  , wks            = __webpack_require__(57)
	  , wksExt         = __webpack_require__(62)
	  , wksDefine      = __webpack_require__(67)
	  , keyOf          = __webpack_require__(68)
	  , enumKeys       = __webpack_require__(69)
	  , isArray        = __webpack_require__(72)
	  , anObject       = __webpack_require__(19)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , createDesc     = __webpack_require__(26)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(73)
	  , $GOPD          = __webpack_require__(75)
	  , $DP            = __webpack_require__(18)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f  = $propertyIsEnumerable;
	  __webpack_require__(70).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(40)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(11)('meta')
	  , isObject = __webpack_require__(20)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(18).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(10)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(40)
	  , wksExt         = __webpack_require__(62)
	  , defineProperty = __webpack_require__(18).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(70)
	  , pIE     = __webpack_require__(71);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , gOPN      = __webpack_require__(74).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(54).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(71)
	  , createDesc     = __webpack_require__(26)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67)('asyncIterator');

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67)('observable');

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(80);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(84);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(83).set});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(19);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	var $Object = __webpack_require__(14).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(44)});

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_110__;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(112);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cardContents = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(' ');

	var MainView = function (_React$Component) {
		(0, _inherits3.default)(MainView, _React$Component);

		function MainView() {
			(0, _classCallCheck3.default)(this, MainView);
			return (0, _possibleConstructorReturn3.default)(this, (MainView.__proto__ || (0, _getPrototypeOf2.default)(MainView)).apply(this, arguments));
		}

		(0, _createClass3.default)(MainView, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_index2.default.WrapWithPackery,
					null,
					cardContents.map(function (content, contentId) {
						return _react2.default.createElement(
							_index2.default.Card,
							{ key: contentId },
							content
						);
					})
				);
			}
		}]);
		return MainView;
	}(_react2.default.Component);

	// const MainView = (props) => (
	// 	<Packery
	// 		className="react-square-cards-wrap"
	// 		elementType={'div'}
	// 		options={{
	// 			itemSelector:'.react-square-card',
	// 			columnWidth:'.react-square-card',
	// 			transitionDuration:0
	// 		}}
	// 		disableImagesLoaded={false}
	// 		updateOnEachImageLoad={false}
	// 	>
	// 		{cardContents.map( (entry, i) => (
	// 			<ReactSquareCards.Card key={`card-${i}`}>{entry}</ReactSquareCards.Card>
	// 		))}
	// 	</Packery>
	// )

	exports.default = MainView;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	/*! wonilSuh.com v24 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(113));
		else if(typeof define === 'function' && define.amd)
			define(["React"], factory);
		else if(typeof exports === 'object')
			exports["ReactComponentNpm"] = factory(require("React"));
		else
			root["ReactComponentNpm"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_87__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "js/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ((function(modules) {
		// Check all modules for deduplicated modules
		for(var i in modules) {
			if(Object.prototype.hasOwnProperty.call(modules, i)) {
				switch(typeof modules[i]) {
				case "function": break;
				case "object":
					// Module can be created from a template
					modules[i] = (function(_m) {
						var args = _m.slice(1), fn = modules[_m[0]];
						return function (a,b,c) {
							fn.apply(this, [a,b,c].concat(args));
						};
					}(modules[i]));
					break;
				default:
					// Module is a copy of another module
					modules[i] = modules[modules[i]];
					break;
				}
			}
		}
		return modules;
	}([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _getPrototypeOf = __webpack_require__(1);

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck2 = __webpack_require__(27);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass2 = __webpack_require__(28);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn2 = __webpack_require__(32);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(79);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _react = __webpack_require__(87);

		var _react2 = _interopRequireDefault(_react);

		var _reactPackeryComponent = __webpack_require__(88);

		var _reactPackeryComponent2 = _interopRequireDefault(_reactPackeryComponent);

		__webpack_require__(106);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Card = function (_React$Component) {
			(0, _inherits3.default)(Card, _React$Component);

			function Card() {
				(0, _classCallCheck3.default)(this, Card);
				return (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).apply(this, arguments));
			}

			(0, _createClass3.default)(Card, [{
				key: 'render',
				value: function render() {
					return _react2.default.createElement(
						'div',
						{ className: 'react-square-card ' + this.props.className },
						_react2.default.createElement(
							'div',
							{ className: 'react-square-card-inner' },
							_react2.default.createElement(
								'div',
								{ className: 'react-square-card-innerer' },
								_react2.default.createElement(
									'div',
									{ className: 'react-square-card-content' },
									this.props.children
								)
							)
						)
					);
				}
			}]);
			return Card;
		}(_react2.default.Component);

		// class WrapWithPackery extends React.Component{

		// 	render(){
		// 		return (
		// 			<Packery
		// 				className="react-square-cards-wrap"
		// 				elementType={'div'}
		// 				options={{
		// 					itemSelector:'.react-square-card',
		// 					columnWidth:'.react-square-card',
		// 					transitionDuration:0
		// 				}}
		// 				disableImagesLoaded={false}
		// 				updateOnEachImageLoad={false}
		// 			>
		// 				{this.props.children}
		// 			</Packery>
		// 		);
		// 	}
		// }

		// var Packery = PackeryGen(React);

		var Wrap = function Wrap(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'react-square-cards-wrap' },
				props.children
			);
		};

		var ReactSquareCards = {
			Wrap: Wrap,
			// WrapWithPackery,
			// WrapWithPackeryGen:(React) => WrapWithPackery,
			Card: Card
		};

		exports.default = ReactSquareCards;

	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(2), __esModule: true };

	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(3);
		module.exports = __webpack_require__(14).Object.getPrototypeOf;

	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.9 Object.getPrototypeOf(O)
		var toObject        = __webpack_require__(4)
		  , $getPrototypeOf = __webpack_require__(6);

		__webpack_require__(12)('getPrototypeOf', function(){
		  return function getPrototypeOf(it){
		    return $getPrototypeOf(toObject(it));
		  };
		});

	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(5);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(7)
		  , toObject    = __webpack_require__(4)
		  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
		  , ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};

	/***/ }),
	/* 7 */
	/***/ (function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(9)('keys')
		  , uid    = __webpack_require__(11);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};

	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(10)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ }),
	/* 10 */
	/***/ (function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ }),
	/* 11 */
	/***/ (function(module, exports) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {

		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(13)
		  , core    = __webpack_require__(14)
		  , fails   = __webpack_require__(23);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};

	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(10)
		  , core      = __webpack_require__(14)
		  , ctx       = __webpack_require__(15)
		  , hide      = __webpack_require__(17)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;

	/***/ }),
	/* 14 */
	/***/ (function(module, exports) {

		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(16);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ }),
	/* 16 */
	/***/ (function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {

		var dP         = __webpack_require__(18)
		  , createDesc = __webpack_require__(26);
		module.exports = __webpack_require__(22) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {

		var anObject       = __webpack_require__(19)
		  , IE8_DOM_DEFINE = __webpack_require__(21)
		  , toPrimitive    = __webpack_require__(25)
		  , dP             = Object.defineProperty;

		exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};

	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(20);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ }),
	/* 20 */
	/***/ (function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ }),
	/* 21 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
		  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ }),
	/* 22 */
	/***/ (function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(23)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ }),
	/* 23 */
	/***/ (function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ }),
	/* 24 */
	/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(20)
		  , document = __webpack_require__(10).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ }),
	/* 25 */
	/***/ (function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(20);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};

	/***/ }),
	/* 26 */
	/***/ (function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ }),
	/* 27 */
	/***/ (function(module, exports) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

	/***/ }),
	/* 28 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _defineProperty = __webpack_require__(29);

		var _defineProperty2 = _interopRequireDefault(_defineProperty);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

	/***/ }),
	/* 29 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(30), __esModule: true };

	/***/ }),
	/* 30 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(31);
		var $Object = __webpack_require__(14).Object;
		module.exports = function defineProperty(it, key, desc){
		  return $Object.defineProperty(it, key, desc);
		};

	/***/ }),
	/* 31 */
	/***/ (function(module, exports, __webpack_require__) {

		var $export = __webpack_require__(13);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(22), 'Object', {defineProperty: __webpack_require__(18).f});

	/***/ }),
	/* 32 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(33);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
		};

	/***/ }),
	/* 33 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _iterator = __webpack_require__(34);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _symbol = __webpack_require__(63);

		var _symbol2 = _interopRequireDefault(_symbol);

		var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
		  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
		  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};

	/***/ }),
	/* 34 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(35), __esModule: true };

	/***/ }),
	/* 35 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(36);
		__webpack_require__(58);
		module.exports = __webpack_require__(62).f('iterator');

	/***/ }),
	/* 36 */
	/***/ (function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(37)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(39)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ }),
	/* 37 */
	/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(38)
		  , defined   = __webpack_require__(5);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ }),
	/* 38 */
	/***/ (function(module, exports) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ }),
	/* 39 */
	/***/ (function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(40)
		  , $export        = __webpack_require__(13)
		  , redefine       = __webpack_require__(41)
		  , hide           = __webpack_require__(17)
		  , has            = __webpack_require__(7)
		  , Iterators      = __webpack_require__(42)
		  , $iterCreate    = __webpack_require__(43)
		  , setToStringTag = __webpack_require__(56)
		  , getPrototypeOf = __webpack_require__(6)
		  , ITERATOR       = __webpack_require__(57)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';

		var returnThis = function(){ return this; };

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ }),
	/* 40 */
	/***/ (function(module, exports) {

		module.exports = true;

	/***/ }),
	/* 41 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(17);

	/***/ }),
	/* 42 */
	/***/ (function(module, exports) {

		module.exports = {};

	/***/ }),
	/* 43 */
	/***/ (function(module, exports, __webpack_require__) {

		'use strict';
		var create         = __webpack_require__(44)
		  , descriptor     = __webpack_require__(26)
		  , setToStringTag = __webpack_require__(56)
		  , IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(17)(IteratorPrototype, __webpack_require__(57)('iterator'), function(){ return this; });

		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ }),
	/* 44 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(19)
		  , dPs         = __webpack_require__(45)
		  , enumBugKeys = __webpack_require__(54)
		  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(24)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(55).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};

		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};


	/***/ }),
	/* 45 */
	/***/ (function(module, exports, __webpack_require__) {

		var dP       = __webpack_require__(18)
		  , anObject = __webpack_require__(19)
		  , getKeys  = __webpack_require__(46);

		module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};

	/***/ }),
	/* 46 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(47)
		  , enumBugKeys = __webpack_require__(54);

		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};

	/***/ }),
	/* 47 */
	/***/ (function(module, exports, __webpack_require__) {

		var has          = __webpack_require__(7)
		  , toIObject    = __webpack_require__(48)
		  , arrayIndexOf = __webpack_require__(51)(false)
		  , IE_PROTO     = __webpack_require__(8)('IE_PROTO');

		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};

	/***/ }),
	/* 48 */
	/***/ (function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(49)
		  , defined = __webpack_require__(5);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ }),
	/* 49 */
	/***/ (function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(50);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ }),
	/* 50 */
	/***/ (function(module, exports) {

		var toString = {}.toString;

		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ }),
	/* 51 */
	/***/ (function(module, exports, __webpack_require__) {

		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(48)
		  , toLength  = __webpack_require__(52)
		  , toIndex   = __webpack_require__(53);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};

	/***/ }),
	/* 52 */
	/***/ (function(module, exports, __webpack_require__) {

		// 7.1.15 ToLength
		var toInteger = __webpack_require__(38)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};

	/***/ }),
	/* 53 */
	/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(38)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};

	/***/ }),
	/* 54 */
	/***/ (function(module, exports) {

		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');

	/***/ }),
	/* 55 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(10).document && document.documentElement;

	/***/ }),
	/* 56 */
	/***/ (function(module, exports, __webpack_require__) {

		var def = __webpack_require__(18).f
		  , has = __webpack_require__(7)
		  , TAG = __webpack_require__(57)('toStringTag');

		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ }),
	/* 57 */
	/***/ (function(module, exports, __webpack_require__) {

		var store      = __webpack_require__(9)('wks')
		  , uid        = __webpack_require__(11)
		  , Symbol     = __webpack_require__(10).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';

		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;

	/***/ }),
	/* 58 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(59);
		var global        = __webpack_require__(10)
		  , hide          = __webpack_require__(17)
		  , Iterators     = __webpack_require__(42)
		  , TO_STRING_TAG = __webpack_require__(57)('toStringTag');

		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype;
		  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		  Iterators[NAME] = Iterators.Array;
		}

	/***/ }),
	/* 59 */
	/***/ (function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(60)
		  , step             = __webpack_require__(61)
		  , Iterators        = __webpack_require__(42)
		  , toIObject        = __webpack_require__(48);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ }),
	/* 60 */
	/***/ (function(module, exports) {

		module.exports = function(){ /* empty */ };

	/***/ }),
	/* 61 */
	/***/ (function(module, exports) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ }),
	/* 62 */
	/***/ (function(module, exports, __webpack_require__) {

		exports.f = __webpack_require__(57);

	/***/ }),
	/* 63 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(64), __esModule: true };

	/***/ }),
	/* 64 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(65);
		__webpack_require__(76);
		__webpack_require__(77);
		__webpack_require__(78);
		module.exports = __webpack_require__(14).Symbol;

	/***/ }),
	/* 65 */
	/***/ (function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var global         = __webpack_require__(10)
		  , has            = __webpack_require__(7)
		  , DESCRIPTORS    = __webpack_require__(22)
		  , $export        = __webpack_require__(13)
		  , redefine       = __webpack_require__(41)
		  , META           = __webpack_require__(66).KEY
		  , $fails         = __webpack_require__(23)
		  , shared         = __webpack_require__(9)
		  , setToStringTag = __webpack_require__(56)
		  , uid            = __webpack_require__(11)
		  , wks            = __webpack_require__(57)
		  , wksExt         = __webpack_require__(62)
		  , wksDefine      = __webpack_require__(67)
		  , keyOf          = __webpack_require__(68)
		  , enumKeys       = __webpack_require__(69)
		  , isArray        = __webpack_require__(72)
		  , anObject       = __webpack_require__(19)
		  , toIObject      = __webpack_require__(48)
		  , toPrimitive    = __webpack_require__(25)
		  , createDesc     = __webpack_require__(26)
		  , _create        = __webpack_require__(44)
		  , gOPNExt        = __webpack_require__(73)
		  , $GOPD          = __webpack_require__(75)
		  , $DP            = __webpack_require__(18)
		  , $keys          = __webpack_require__(46)
		  , gOPD           = $GOPD.f
		  , dP             = $DP.f
		  , gOPN           = gOPNExt.f
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , PROTOTYPE      = 'prototype'
		  , HIDDEN         = wks('_hidden')
		  , TO_PRIMITIVE   = wks('toPrimitive')
		  , isEnum         = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , OPSymbols      = shared('op-symbols')
		  , ObjectProto    = Object[PROTOTYPE]
		  , USE_NATIVE     = typeof $Symbol == 'function'
		  , QObject        = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(dP({}, 'a', {
		    get: function(){ return dP(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = gOPD(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  dP(it, key, D);
		  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
		} : dP;

		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
		  sym._k = tag;
		  return sym;
		};

		var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
		  return typeof it == 'symbol';
		} : function(it){
		  return it instanceof $Symbol;
		};

		var $defineProperty = function defineProperty(it, key, D){
		  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
		  anObject(it);
		  key = toPrimitive(key, true);
		  anObject(D);
		  if(has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key = toPrimitive(key, true));
		  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  it  = toIObject(it);
		  key = toPrimitive(key, true);
		  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
		  var D = gOPD(it, key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = gOPN(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
		  } return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var IS_OP  = it === ObjectProto
		    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
		  } return result;
		};

		// 19.4.1.1 Symbol([description])
		if(!USE_NATIVE){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
		    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		    var $set = function(value){
		      if(this === ObjectProto)$set.call(OPSymbols, value);
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    };
		    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
		    return wrap(tag);
		  };
		  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
		    return this._k;
		  });

		  $GOPD.f = $getOwnPropertyDescriptor;
		  $DP.f   = $defineProperty;
		  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
		  __webpack_require__(71).f  = $propertyIsEnumerable;
		  __webpack_require__(70).f = $getOwnPropertySymbols;

		  if(DESCRIPTORS && !__webpack_require__(40)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }

		  wksExt.f = function(name){
		    return wrap(wks(name));
		  }
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

		for(var symbols = (
		  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
		).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

		for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

		$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    if(isSymbol(key))return keyOf(SymbolRegistry, key);
		    throw TypeError(key + ' is not a symbol!');
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		});

		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
		  stringify: function stringify(it){
		    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		    var args = [it]
		      , i    = 1
		      , replacer, $replacer;
		    while(arguments.length > i)args.push(arguments[i++]);
		    replacer = args[1];
		    if(typeof replacer == 'function')$replacer = replacer;
		    if($replacer || !isArray(replacer))replacer = function(key, value){
		      if($replacer)value = $replacer.call(this, key, value);
		      if(!isSymbol(value))return value;
		    };
		    args[1] = replacer;
		    return _stringify.apply($JSON, args);
		  }
		});

		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);

	/***/ }),
	/* 66 */
	/***/ (function(module, exports, __webpack_require__) {

		var META     = __webpack_require__(11)('meta')
		  , isObject = __webpack_require__(20)
		  , has      = __webpack_require__(7)
		  , setDesc  = __webpack_require__(18).f
		  , id       = 0;
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
		var FREEZE = !__webpack_require__(23)(function(){
		  return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function(it){
		  setDesc(it, META, {value: {
		    i: 'O' + ++id, // object ID
		    w: {}          // weak collections IDs
		  }});
		};
		var fastKey = function(it, create){
		  // return primitive with prefix
		  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return 'F';
		    // not necessary to add metadata
		    if(!create)return 'E';
		    // add missing metadata
		    setMeta(it);
		  // return object ID
		  } return it[META].i;
		};
		var getWeak = function(it, create){
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return true;
		    // not necessary to add metadata
		    if(!create)return false;
		    // add missing metadata
		    setMeta(it);
		  // return hash weak collections IDs
		  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		var onFreeze = function(it){
		  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
		  return it;
		};
		var meta = module.exports = {
		  KEY:      META,
		  NEED:     false,
		  fastKey:  fastKey,
		  getWeak:  getWeak,
		  onFreeze: onFreeze
		};

	/***/ }),
	/* 67 */
	/***/ (function(module, exports, __webpack_require__) {

		var global         = __webpack_require__(10)
		  , core           = __webpack_require__(14)
		  , LIBRARY        = __webpack_require__(40)
		  , wksExt         = __webpack_require__(62)
		  , defineProperty = __webpack_require__(18).f;
		module.exports = function(name){
		  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
		  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
		};

	/***/ }),
	/* 68 */
	/***/ (function(module, exports, __webpack_require__) {

		var getKeys   = __webpack_require__(46)
		  , toIObject = __webpack_require__(48);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ }),
	/* 69 */
	/***/ (function(module, exports, __webpack_require__) {

		// all enumerable object keys, includes symbols
		var getKeys = __webpack_require__(46)
		  , gOPS    = __webpack_require__(70)
		  , pIE     = __webpack_require__(71);
		module.exports = function(it){
		  var result     = getKeys(it)
		    , getSymbols = gOPS.f;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = pIE.f
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
		  } return result;
		};

	/***/ }),
	/* 70 */
	/***/ (function(module, exports) {

		exports.f = Object.getOwnPropertySymbols;

	/***/ }),
	/* 71 */
	/***/ (function(module, exports) {

		exports.f = {}.propertyIsEnumerable;

	/***/ }),
	/* 72 */
	/***/ (function(module, exports, __webpack_require__) {

		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(50);
		module.exports = Array.isArray || function isArray(arg){
		  return cof(arg) == 'Array';
		};

	/***/ }),
	/* 73 */
	/***/ (function(module, exports, __webpack_require__) {

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(48)
		  , gOPN      = __webpack_require__(74).f
		  , toString  = {}.toString;

		var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];

		var getWindowNames = function(it){
		  try {
		    return gOPN(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};

		module.exports.f = function getOwnPropertyNames(it){
		  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};


	/***/ }),
	/* 74 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var $keys      = __webpack_require__(47)
		  , hiddenKeys = __webpack_require__(54).concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
		  return $keys(O, hiddenKeys);
		};

	/***/ }),
	/* 75 */
	/***/ (function(module, exports, __webpack_require__) {

		var pIE            = __webpack_require__(71)
		  , createDesc     = __webpack_require__(26)
		  , toIObject      = __webpack_require__(48)
		  , toPrimitive    = __webpack_require__(25)
		  , has            = __webpack_require__(7)
		  , IE8_DOM_DEFINE = __webpack_require__(21)
		  , gOPD           = Object.getOwnPropertyDescriptor;

		exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
		  O = toIObject(O);
		  P = toPrimitive(P, true);
		  if(IE8_DOM_DEFINE)try {
		    return gOPD(O, P);
		  } catch(e){ /* empty */ }
		  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
		};

	/***/ }),
	/* 76 */
	/***/ (function(module, exports) {

		

	/***/ }),
	/* 77 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(67)('asyncIterator');

	/***/ }),
	/* 78 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(67)('observable');

	/***/ }),
	/* 79 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _setPrototypeOf = __webpack_require__(80);

		var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

		var _create = __webpack_require__(84);

		var _create2 = _interopRequireDefault(_create);

		var _typeof2 = __webpack_require__(33);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
		  }

		  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
		};

	/***/ }),
	/* 80 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(81), __esModule: true };

	/***/ }),
	/* 81 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(82);
		module.exports = __webpack_require__(14).Object.setPrototypeOf;

	/***/ }),
	/* 82 */
	/***/ (function(module, exports, __webpack_require__) {

		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		var $export = __webpack_require__(13);
		$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(83).set});

	/***/ }),
	/* 83 */
	/***/ (function(module, exports, __webpack_require__) {

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var isObject = __webpack_require__(20)
		  , anObject = __webpack_require__(19);
		var check = function(O, proto){
		  anObject(O);
		  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
		};
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function(test, buggy, set){
		      try {
		        set = __webpack_require__(15)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch(e){ buggy = true; }
		      return function setPrototypeOf(O, proto){
		        check(O, proto);
		        if(buggy)O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};

	/***/ }),
	/* 84 */
	/***/ (function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(85), __esModule: true };

	/***/ }),
	/* 85 */
	/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(86);
		var $Object = __webpack_require__(14).Object;
		module.exports = function create(P, D){
		  return $Object.create(P, D);
		};

	/***/ }),
	/* 86 */
	/***/ (function(module, exports, __webpack_require__) {

		var $export = __webpack_require__(13)
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		$export($export.S, 'Object', {create: __webpack_require__(44)});

	/***/ }),
	/* 87 */
	/***/ (function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

	/***/ }),
	/* 88 */
	/***/ (function(module, exports, __webpack_require__) {

		var isBrowser = (typeof window !== 'undefined');
		var Packery = isBrowser ? window.Packery || __webpack_require__(89) : null;
		var imagesloaded = isBrowser ? __webpack_require__(103) : null;
		var refName = 'packeryContainer';

		function PackeryComponent(React) {
		    return React.createClass({
		        packery: false,

		        domChildren: [],

		        displayName: 'PackeryComponent',

		        propTypes: {
		            disableImagesLoaded: React.PropTypes.bool,
		            options: React.PropTypes.object
		        },

		        getDefaultProps: function() {
		            return {
		                disableImagesLoaded: false,
		                options: {},
		                className: '',
		                elementType: 'div'
		            };
		        },

		        initializePackery: function(force) {
		            if (!this.packery || force) {
		                this.packery = new Packery(
		                    this.refs[refName],
		                    this.props.options
		                );

		                this.domChildren = this.getNewDomChildren();
		            }
		        },

		        getNewDomChildren: function() {
		            var node = this.refs[refName];
		            var children = this.props.options.itemSelector ? node.querySelectorAll(this.props.options.itemSelector) : node.children;
		            return Array.prototype.slice.call(children);
		        },

		        diffDomChildren: function() {
		            var oldChildren = this.domChildren.filter(function(element) {
		                /*
		                 * take only elements attached to DOM
		                 * (aka the parent is the packery container, not null)
		                 */
		                return !!element.parentNode;
		            });

		            var newChildren = this.getNewDomChildren();

		            var removed = oldChildren.filter(function(oldChild) {
		                return !~newChildren.indexOf(oldChild);
		            });

		            var domDiff = newChildren.filter(function(newChild) {
		                return !~oldChildren.indexOf(newChild);
		            });

		            var beginningIndex = 0;

		            // get everything added to the beginning of the DOMNode list
		            var prepended = domDiff.filter(function(newChild, i) {
		                var prepend = (beginningIndex === newChildren.indexOf(newChild));

		                if (prepend) {
		                    // increase the index
		                    beginningIndex++;
		                }

		                return prepend;
		            });

		            // we assume that everything else is appended
		            var appended = domDiff.filter(function(el) {
		                return prepended.indexOf(el) === -1;
		            });

		            /*
		             * otherwise we reverse it because so we're going through the list picking off the items that
		             * have been added at the end of the list. this complex logic is preserved in case it needs to be
		             * invoked
		             *
		             * var endingIndex = newChildren.length - 1;
		             *
		             * domDiff.reverse().filter(function(newChild, i){
		             *     var append = endingIndex == newChildren.indexOf(newChild);
		             *
		             *     if (append) {
		             *         endingIndex--;
		             *     }
		             *
		             *     return append;
		             * });
		             */

		            // get everything added to the end of the DOMNode list
		            var moved = [];

		            if (removed.length === 0) {
		                moved = oldChildren.filter(function(child, index) {
		                    return index !== newChildren.indexOf(child);
		                });
		            }

		            this.domChildren = newChildren;

		            return {
		                old: oldChildren,
		                new: newChildren,
		                removed: removed,
		                appended: appended,
		                prepended: prepended,
		                moved: moved
		            };
		        },

		        performLayout: function() {
		            var diff = this.diffDomChildren();

		            if (diff.removed.length > 0) {
		                this.packery.remove(diff.removed);
		                this.packery.reloadItems();
		            }

		            if (diff.appended.length > 0) {
		                this.packery.appended(diff.appended);
		                this.packery.reloadItems();
		            }

		            if (diff.prepended.length > 0) {
		                this.packery.prepended(diff.prepended);
		            }

		            if (diff.moved.length > 0) {
		                this.packery.reloadItems();
		            }

		            this.packery.layout();
		        },

		        imagesLoaded: function() {
		            if (this.props.disableImagesLoaded) return;

		            imagesloaded(
		                this.refs[refName],
		                function(instance) {
		                    this.packery.layout();
		                }.bind(this)
		            );
		        },

		        componentDidMount: function() {
		            this.initializePackery();
		            this.imagesLoaded();
		        },

		        componentDidUpdate: function() {
		            this.performLayout();
		            this.imagesLoaded();
		        },

		        componentWillReceiveProps: function() {
		            this._timer = setTimeout(function() {
		                this.packery.reloadItems();
		                this.isMounted && this.isMounted() && this.forceUpdate();
		            }.bind(this), 0);
		        },

		        componentWillUnmount: function() {
		            clearTimeout(this._timer);
		        },

		        render: function() {
		            return React.createElement(this.props.elementType, {
		                className: this.props.className,
		                ref: refName
		            }, this.props.children);
		        }
		    })
		}

		module.exports = PackeryComponent;


	/***/ }),
	/* 89 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * Packery v1.3.0
		 * bin-packing layout library
		 * http://packery.metafizzy.co
		 *
		 * Commercial use requires one-time purchase of a commercial license
		 * http://packery.metafizzy.co/license.html
		 *
		 * Non-commercial use is licensed under the GPL v3 License
		 *
		 * Copyright 2014 Metafizzy
		 */

		( function( window ) {

		'use strict';

		// -------------------------- Packery -------------------------- //

		// used for AMD definition and requires
		function packeryDefinition( classie, getSize, Outlayer, Rect, Packer, Item ) {

		// create an Outlayer layout class
		var Packery = Outlayer.create('packery');
		Packery.Item = Item;

		Packery.prototype._create = function() {
		  // call super
		  Outlayer.prototype._create.call( this );

		  // initial properties
		  this.packer = new Packer();

		  // Left over from v1.0
		  this.stamp( this.options.stamped );

		  // create drag handlers
		  var _this = this;
		  this.handleDraggabilly = {
		    dragStart: function( draggie ) {
		      _this.itemDragStart( draggie.element );
		    },
		    dragMove: function( draggie ) {
		      _this.itemDragMove( draggie.element, draggie.position.x, draggie.position.y );
		    },
		    dragEnd: function( draggie ) {
		      _this.itemDragEnd( draggie.element );
		    }
		  };

		  this.handleUIDraggable = {
		    start: function handleUIDraggableStart( event ) {
		      _this.itemDragStart( event.currentTarget );
		    },
		    drag: function handleUIDraggableDrag( event, ui ) {
		      _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
		    },
		    stop: function handleUIDraggableStop( event ) {
		      _this.itemDragEnd( event.currentTarget );
		    }
		  };

		};


		// ----- init & layout ----- //

		/**
		 * logic before any new layout
		 */
		Packery.prototype._resetLayout = function() {
		  this.getSize();

		  this._getMeasurements();

		  // reset packer
		  var packer = this.packer;
		  // packer settings, if horizontal or vertical
		  if ( this.options.isHorizontal ) {
		    packer.width = Number.POSITIVE_INFINITY;
		    packer.height = this.size.innerHeight + this.gutter;
		    packer.sortDirection = 'rightwardTopToBottom';
		  } else {
		    packer.width = this.size.innerWidth + this.gutter;
		    packer.height = Number.POSITIVE_INFINITY;
		    packer.sortDirection = 'downwardLeftToRight';
		  }

		  packer.reset();

		  // layout
		  this.maxY = 0;
		  this.maxX = 0;
		};

		/**
		 * update columnWidth, rowHeight, & gutter
		 * @private
		 */
		Packery.prototype._getMeasurements = function() {
		  this._getMeasurement( 'columnWidth', 'width' );
		  this._getMeasurement( 'rowHeight', 'height' );
		  this._getMeasurement( 'gutter', 'width' );
		};

		Packery.prototype._getItemLayoutPosition = function( item ) {
		  this._packItem( item );
		  return item.rect;
		};


		/**
		 * layout item in packer
		 * @param {Packery.Item} item
		 */
		Packery.prototype._packItem = function( item ) {
		  this._setRectSize( item.element, item.rect );
		  // pack the rect in the packer
		  this.packer.pack( item.rect );
		  this._setMaxXY( item.rect );
		};

		/**
		 * set max X and Y value, for size of container
		 * @param {Packery.Rect} rect
		 * @private
		 */
		Packery.prototype._setMaxXY = function( rect ) {
		  this.maxX = Math.max( rect.x + rect.width, this.maxX );
		  this.maxY = Math.max( rect.y + rect.height, this.maxY );
		};

		/**
		 * set the width and height of a rect, applying columnWidth and rowHeight
		 * @param {Element} elem
		 * @param {Packery.Rect} rect
		 */
		Packery.prototype._setRectSize = function( elem, rect ) {
		  var size = getSize( elem );
		  var w = size.outerWidth;
		  var h = size.outerHeight;
		  // size for columnWidth and rowHeight, if available
		  // only check if size is non-zero, #177
		  if ( w || h ) {
		    var colW = this.columnWidth + this.gutter;
		    var rowH = this.rowHeight + this.gutter;
		    w = this.columnWidth ? Math.ceil( w / colW ) * colW : w + this.gutter;
		    h = this.rowHeight ? Math.ceil( h / rowH ) * rowH : h + this.gutter;
		  }
		  // rect must fit in packer
		  rect.width = Math.min( w, this.packer.width );
		  rect.height = Math.min( h, this.packer.height );
		};

		Packery.prototype._getContainerSize = function() {
		  if ( this.options.isHorizontal ) {
		    return {
		      width: this.maxX - this.gutter
		    };
		  } else {
		    return {
		      height: this.maxY - this.gutter
		    };
		  }
		};


		// -------------------------- stamp -------------------------- //

		/**
		 * makes space for element
		 * @param {Element} elem
		 */
		Packery.prototype._manageStamp = function( elem ) {

		  var item = this.getItem( elem );
		  var rect;
		  if ( item && item.isPlacing ) {
		    rect = item.placeRect;
		  } else {
		    var offset = this._getElementOffset( elem );
		    rect = new Rect({
		      x: this.options.isOriginLeft ? offset.left : offset.right,
		      y: this.options.isOriginTop ? offset.top : offset.bottom
		    });
		  }

		  this._setRectSize( elem, rect );
		  // save its space in the packer
		  this.packer.placed( rect );
		  this._setMaxXY( rect );
		};

		// -------------------------- methods -------------------------- //

		function verticalSorter( a, b ) {
		  return a.position.y - b.position.y || a.position.x - b.position.x;
		}

		function horizontalSorter( a, b ) {
		  return a.position.x - b.position.x || a.position.y - b.position.y;
		}

		Packery.prototype.sortItemsByPosition = function() {
		  var sorter = this.options.isHorizontal ? horizontalSorter : verticalSorter;
		  this.items.sort( sorter );
		};

		/**
		 * Fit item element in its current position
		 * Packery will position elements around it
		 * useful for expanding elements
		 *
		 * @param {Element} elem
		 * @param {Number} x - horizontal destination position, optional
		 * @param {Number} y - vertical destination position, optional
		 */
		Packery.prototype.fit = function( elem, x, y ) {
		  var item = this.getItem( elem );
		  if ( !item ) {
		    return;
		  }

		  // prepare internal properties
		  this._getMeasurements();

		  // stamp item to get it out of layout
		  this.stamp( item.element );
		  // required for positionPlaceRect
		  item.getSize();
		  // set placing flag
		  item.isPlacing = true;
		  // fall back to current position for fitting
		  x = x === undefined ? item.rect.x: x;
		  y = y === undefined ? item.rect.y: y;

		  // position it best at its destination
		  item.positionPlaceRect( x, y, true );

		  this._bindFitEvents( item );
		  item.moveTo( item.placeRect.x, item.placeRect.y );
		  // layout everything else
		  this.layout();

		  // return back to regularly scheduled programming
		  this.unstamp( item.element );
		  this.sortItemsByPosition();
		  // un set placing flag, back to normal
		  item.isPlacing = false;
		  // copy place rect position
		  item.copyPlaceRectPosition();
		};

		/**
		 * emit event when item is fit and other items are laid out
		 * @param {Packery.Item} item
		 * @private
		 */
		Packery.prototype._bindFitEvents = function( item ) {
		  var _this = this;
		  var ticks = 0;
		  function tick() {
		    ticks++;
		    if ( ticks !== 2 ) {
		      return;
		    }
		    _this.emitEvent( 'fitComplete', [ _this, item ] );
		  }
		  // when item is laid out
		  item.on( 'layout', function() {
		    tick();
		    return true;
		  });
		  // when all items are laid out
		  this.on( 'layoutComplete', function() {
		    tick();
		    return true;
		  });
		};

		// -------------------------- resize -------------------------- //

		// debounced, layout on resize
		Packery.prototype.resize = function() {
		  // don't trigger if size did not change
		  var size = getSize( this.element );
		  // check that this.size and size are there
		  // IE8 triggers resize on body size change, so they might not be
		  var hasSizes = this.size && size;
		  var innerSize = this.options.isHorizontal ? 'innerHeight' : 'innerWidth';
		  if ( hasSizes && size[ innerSize ] === this.size[ innerSize ] ) {
		    return;
		  }

		  this.layout();
		};

		// -------------------------- drag -------------------------- //

		/**
		 * handle an item drag start event
		 * @param {Element} elem
		 */
		Packery.prototype.itemDragStart = function( elem ) {
		  this.stamp( elem );
		  var item = this.getItem( elem );
		  if ( item ) {
		    item.dragStart();
		  }
		};

		/**
		 * handle an item drag move event
		 * @param {Element} elem
		 * @param {Number} x - horizontal change in position
		 * @param {Number} y - vertical change in position
		 */
		Packery.prototype.itemDragMove = function( elem, x, y ) {
		  var item = this.getItem( elem );
		  if ( item ) {
		    item.dragMove( x, y );
		  }

		  // debounce
		  var _this = this;
		  // debounce triggering layout
		  function delayed() {
		    _this.layout();
		    delete _this.dragTimeout;
		  }

		  this.clearDragTimeout();

		  this.dragTimeout = setTimeout( delayed, 40 );
		};

		Packery.prototype.clearDragTimeout = function() {
		  if ( this.dragTimeout ) {
		    clearTimeout( this.dragTimeout );
		  }
		};

		/**
		 * handle an item drag end event
		 * @param {Element} elem
		 */
		Packery.prototype.itemDragEnd = function( elem ) {
		  var item = this.getItem( elem );
		  var itemDidDrag;
		  if ( item ) {
		    itemDidDrag = item.didDrag;
		    item.dragStop();
		  }
		  // if elem didn't move, or if it doesn't need positioning
		  // unignore and unstamp and call it a day
		  if ( !item || ( !itemDidDrag && !item.needsPositioning ) ) {
		    this.unstamp( elem );
		    return;
		  }
		  // procced with dragged item

		  classie.add( item.element, 'is-positioning-post-drag' );

		  // save this var, as it could get reset in dragStart
		  var onLayoutComplete = this._getDragEndLayoutComplete( elem, item );

		  if ( item.needsPositioning ) {
		    item.on( 'layout', onLayoutComplete );
		    item.moveTo( item.placeRect.x, item.placeRect.y );
		  } else if ( item ) {
		    // item didn't need placement
		    item.copyPlaceRectPosition();
		  }

		  this.clearDragTimeout();
		  this.on( 'layoutComplete', onLayoutComplete );
		  this.layout();

		};

		/**
		 * get drag end callback
		 * @param {Element} elem
		 * @param {Packery.Item} item
		 * @returns {Function} onLayoutComplete
		 */
		Packery.prototype._getDragEndLayoutComplete = function( elem, item ) {
		  var itemNeedsPositioning = item && item.needsPositioning;
		  var completeCount = 0;
		  var asyncCount = itemNeedsPositioning ? 2 : 1;
		  var _this = this;

		  return function onLayoutComplete() {
		    completeCount++;
		    // don't proceed if not complete
		    if ( completeCount !== asyncCount ) {
		      return true;
		    }
		    // reset item
		    if ( item ) {
		      classie.remove( item.element, 'is-positioning-post-drag' );
		      item.isPlacing = false;
		      item.copyPlaceRectPosition();
		    }

		    _this.unstamp( elem );
		    // only sort when item moved
		    _this.sortItemsByPosition();

		    // emit item drag event now that everything is done
		    if ( itemNeedsPositioning ) {
		      _this.emitEvent( 'dragItemPositioned', [ _this, item ] );
		    }
		    // listen once
		    return true;
		  };
		};

		/**
		 * binds Draggabilly events
		 * @param {Draggabilly} draggie
		 */
		Packery.prototype.bindDraggabillyEvents = function( draggie ) {
		  draggie.on( 'dragStart', this.handleDraggabilly.dragStart );
		  draggie.on( 'dragMove', this.handleDraggabilly.dragMove );
		  draggie.on( 'dragEnd', this.handleDraggabilly.dragEnd );
		};

		/**
		 * binds jQuery UI Draggable events
		 * @param {jQuery} $elems
		 */
		Packery.prototype.bindUIDraggableEvents = function( $elems ) {
		  $elems
		    .on( 'dragstart', this.handleUIDraggable.start )
		    .on( 'drag', this.handleUIDraggable.drag )
		    .on( 'dragstop', this.handleUIDraggable.stop );
		};

		Packery.Rect = Rect;
		Packery.Packer = Packer;

		return Packery;

		}

		// -------------------------- transport -------------------------- //
		if ( true ) {
		  // CommonJS
		  module.exports = packeryDefinition(
		    __webpack_require__(90),
		    __webpack_require__(91),
		    __webpack_require__(93),
		    __webpack_require__(100),
		    __webpack_require__(101),
		    __webpack_require__(102)
		  );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [
		      'classie/classie',
		      'get-size/get-size',
		      'outlayer/outlayer',
		      './rect',
		      './packer',
		      './item'
		    ],
		    packeryDefinition );
		} else {
		  // browser global
		  window.Packery = packeryDefinition(
		    window.classie,
		    window.getSize,
		    window.Outlayer,
		    window.Packery.Rect,
		    window.Packery.Packer,
		    window.Packery.Item
		  );
		}

		})( window );


	/***/ }),
	/* 90 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * classie v1.0.1
		 * class helper functions
		 * from bonzo https://github.com/ded/bonzo
		 * MIT license
		 * 
		 * classie.has( elem, 'my-class' ) -> true/false
		 * classie.add( elem, 'my-new-class' )
		 * classie.remove( elem, 'my-unwanted-class' )
		 * classie.toggle( elem, 'my-class' )
		 */

		/*jshint browser: true, strict: true, undef: true, unused: true */
		/*global define: false, module: false */

		( function( window ) {

		'use strict';

		// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
		  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}

		function toggleClass( elem, c ) {
		  var fn = hasClass( elem, c ) ? removeClass : addClass;
		  fn( elem, c );
		}

		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};

		// transport
		if ( true ) {
		  // AMD
		  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === 'object' ) {
		  // CommonJS
		  module.exports = classie;
		} else {
		  // browser global
		  window.classie = classie;
		}

		})( window );


	/***/ }),
	/* 91 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * getSize v1.1.8
		 * measure size of elements
		 * MIT license
		 */

		/*jshint browser: true, strict: true, undef: true, unused: true */
		/*global define: false, exports: false, require: false, module: false */

		( function( window, undefined ) {
		'use strict';

		if (!window) return;

		// -------------------------- helpers -------------------------- //

		var getComputedStyle = window.getComputedStyle;
		var getStyle = getComputedStyle ?
		  function( elem ) {
		    return getComputedStyle( elem, null );
		  } :
		  function( elem ) {
		    return elem.currentStyle;
		  };

		// get a number from a string, not a percentage
		function getStyleSize( value ) {
		  var num = parseFloat( value );
		  // not a percent like '100%', and a number
		  var isValid = value.indexOf('%') === -1 && !isNaN( num );
		  return isValid && num;
		}

		// -------------------------- measurements -------------------------- //

		var measurements = [
		  'paddingLeft',
		  'paddingRight',
		  'paddingTop',
		  'paddingBottom',
		  'marginLeft',
		  'marginRight',
		  'marginTop',
		  'marginBottom',
		  'borderLeftWidth',
		  'borderRightWidth',
		  'borderTopWidth',
		  'borderBottomWidth'
		];

		function getZeroSize() {
		  var size = {
		    width: 0,
		    height: 0,
		    innerWidth: 0,
		    innerHeight: 0,
		    outerWidth: 0,
		    outerHeight: 0
		  };
		  for ( var i=0, len = measurements.length; i < len; i++ ) {
		    var measurement = measurements[i];
		    size[ measurement ] = 0;
		  }
		  return size;
		}



		function defineGetSize( getStyleProperty ) {

		// -------------------------- box sizing -------------------------- //

		var boxSizingProp = getStyleProperty('boxSizing');
		var isBoxSizeOuter;

		/**
		 * WebKit measures the outer-width on style.width on border-box elems
		 * IE & Firefox measures the inner-width
		 */
		( function() {
		  if ( !boxSizingProp ) {
		    return;
		  }

		  var div = document.createElement('div');
		  div.style.width = '200px';
		  div.style.padding = '1px 2px 3px 4px';
		  div.style.borderStyle = 'solid';
		  div.style.borderWidth = '1px 2px 3px 4px';
		  div.style[ boxSizingProp ] = 'border-box';

		  var body = document.body || document.documentElement;
		  body.appendChild( div );
		  var style = getStyle( div );

		  isBoxSizeOuter = getStyleSize( style.width ) === 200;
		  body.removeChild( div );
		})();


		// -------------------------- getSize -------------------------- //

		function getSize( elem ) {
		  // use querySeletor if elem is string
		  if ( typeof elem === 'string' ) {
		    elem = document.querySelector( elem );
		  }

		  // do not proceed on non-objects
		  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
		    return;
		  }

		  var style = getStyle( elem );

		  // if hidden, everything is 0
		  if ( style.display === 'none' ) {
		    return getZeroSize();
		  }

		  var size = {};
		  size.width = elem.offsetWidth;
		  size.height = elem.offsetHeight;

		  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
		    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

		  // get all measurements
		  for ( var i=0, len = measurements.length; i < len; i++ ) {
		    var measurement = measurements[i];
		    var value = style[ measurement ];
		    value = mungeNonPixel( elem, value );
		    var num = parseFloat( value );
		    // any 'auto', 'medium' value will be 0
		    size[ measurement ] = !isNaN( num ) ? num : 0;
		  }

		  var paddingWidth = size.paddingLeft + size.paddingRight;
		  var paddingHeight = size.paddingTop + size.paddingBottom;
		  var marginWidth = size.marginLeft + size.marginRight;
		  var marginHeight = size.marginTop + size.marginBottom;
		  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
		  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

		  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

		  // overwrite width and height if we can get it from style
		  var styleWidth = getStyleSize( style.width );
		  if ( styleWidth !== false ) {
		    size.width = styleWidth +
		      // add padding and border unless it's already including it
		      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
		  }

		  var styleHeight = getStyleSize( style.height );
		  if ( styleHeight !== false ) {
		    size.height = styleHeight +
		      // add padding and border unless it's already including it
		      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
		  }

		  size.innerWidth = size.width - ( paddingWidth + borderWidth );
		  size.innerHeight = size.height - ( paddingHeight + borderHeight );

		  size.outerWidth = size.width + marginWidth;
		  size.outerHeight = size.height + marginHeight;

		  return size;
		}

		// IE8 returns percent values, not pixels
		// taken from jQuery's curCSS
		function mungeNonPixel( elem, value ) {
		  // IE8 and has percent value
		  if ( getComputedStyle || value.indexOf('%') === -1 ) {
		    return value;
		  }
		  var style = elem.style;
		  // Remember the original values
		  var left = style.left;
		  var rs = elem.runtimeStyle;
		  var rsLeft = rs && rs.left;

		  // Put in the new values to get a computed value out
		  if ( rsLeft ) {
		    rs.left = elem.currentStyle.left;
		  }
		  style.left = value;
		  value = style.pixelLeft;

		  // Revert the changed values
		  style.left = left;
		  if ( rsLeft ) {
		    rs.left = rsLeft;
		  }

		  return value;
		}

		return getSize;

		}

		// transport
		if ( true ) {
		  // CommonJS for Component
		  module.exports = defineGetSize( __webpack_require__(92) );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD for RequireJS
		  define( [ 'get-style-property/get-style-property' ], defineGetSize );
		} else {
		  // browser global
		  window.getSize = defineGetSize( window.getStyleProperty );
		}

		})( typeof window !== 'undefined' ? window : null );


	/***/ }),
	/* 92 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * getStyleProperty v1.0.4
		 * original by kangax
		 * http://perfectionkills.com/feature-testing-css-properties/
		 * MIT license
		 */

		/*jshint browser: true, strict: true, undef: true */
		/*global define: false, exports: false, module: false */

		( function( window ) {

		'use strict';

		var prefixes = 'Webkit Moz ms Ms O'.split(' ');
		var docElemStyle = document.documentElement.style;

		function getStyleProperty( propName ) {
		  if ( !propName ) {
		    return;
		  }

		  // test standard property first
		  if ( typeof docElemStyle[ propName ] === 'string' ) {
		    return propName;
		  }

		  // capitalize
		  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

		  // test vendor specific properties
		  var prefixed;
		  for ( var i=0, len = prefixes.length; i < len; i++ ) {
		    prefixed = prefixes[i] + propName;
		    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
		      return prefixed;
		    }
		  }
		}

		// transport
		if ( true ) {
		  // AMD
		  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		    return getStyleProperty;
		  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === 'object' ) {
		  // CommonJS for Component
		  module.exports = getStyleProperty;
		} else {
		  // browser global
		  window.getStyleProperty = getStyleProperty;
		}

		})( window );


	/***/ }),
	/* 93 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * Outlayer v1.2.0
		 * the brains and guts of a layout library
		 * MIT license
		 */

		( function( window ) {
		'use strict';

		if (!window) return;

		// ----- vars ----- //

		var document = window.document;
		var console = window.console;
		var jQuery = window.jQuery;

		var noop = function() {};

		// -------------------------- helpers -------------------------- //

		// extend objects
		function extend( a, b ) {
		  for ( var prop in b ) {
		    a[ prop ] = b[ prop ];
		  }
		  return a;
		}


		var objToString = Object.prototype.toString;
		function isArray( obj ) {
		  return objToString.call( obj ) === '[object Array]';
		}

		// turn element or nodeList into an array
		function makeArray( obj ) {
		  var ary = [];
		  if ( isArray( obj ) ) {
		    // use object if already an array
		    ary = obj;
		  } else if ( obj && typeof obj.length === 'number' ) {
		    // convert nodeList to array
		    for ( var i=0, len = obj.length; i < len; i++ ) {
		      ary.push( obj[i] );
		    }
		  } else {
		    // array of single index
		    ary.push( obj );
		  }
		  return ary;
		}

		// http://stackoverflow.com/a/384380/182183
		var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
		  function isElementDOM2( obj ) {
		    return obj instanceof HTMLElement;
		  } :
		  function isElementQuirky( obj ) {
		    return obj && typeof obj === 'object' &&
		      obj.nodeType === 1 && typeof obj.nodeName === 'string';
		  };

		// index of helper cause IE8
		var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
		    return ary.indexOf( obj );
		  } : function( ary, obj ) {
		    for ( var i=0, len = ary.length; i < len; i++ ) {
		      if ( ary[i] === obj ) {
		        return i;
		      }
		    }
		    return -1;
		  };

		function removeFrom( obj, ary ) {
		  var index = indexOf( ary, obj );
		  if ( index !== -1 ) {
		    ary.splice( index, 1 );
		  }
		}

		// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
		function toDashed( str ) {
		  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
		    return $1 + '-' + $2;
		  }).toLowerCase();
		}


		function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

		// -------------------------- Outlayer -------------------------- //

		// globally unique identifiers
		var GUID = 0;
		// internal store of all Outlayer intances
		var instances = {};


		/**
		 * @param {Element, String} element
		 * @param {Object} options
		 * @constructor
		 */
		function Outlayer( element, options ) {
		  // use element as selector string
		  if ( typeof element === 'string' ) {
		    element = document.querySelector( element );
		  }

		  // bail out if not proper element
		  if ( !element || !isElement( element ) ) {
		    if ( console ) {
		      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
		    }
		    return;
		  }

		  this.element = element;

		  // options
		  this.options = extend( {}, this.constructor.defaults );
		  this.option( options );

		  // add id for Outlayer.getFromElement
		  var id = ++GUID;
		  this.element.outlayerGUID = id; // expando
		  instances[ id ] = this; // associate via id

		  // kick it off
		  this._create();

		  if ( this.options.isInitLayout ) {
		    this.layout();
		  }
		}

		// settings are for internal use only
		Outlayer.namespace = 'outlayer';
		Outlayer.Item = Item;

		// default options
		Outlayer.defaults = {
		  containerStyle: {
		    position: 'relative'
		  },
		  isInitLayout: true,
		  isOriginLeft: true,
		  isOriginTop: true,
		  isResizeBound: true,
		  isResizingContainer: true,
		  // item options
		  transitionDuration: '0.4s',
		  hiddenStyle: {
		    opacity: 0,
		    transform: 'scale(0.001)'
		  },
		  visibleStyle: {
		    opacity: 1,
		    transform: 'scale(1)'
		  }
		};

		// inherit EventEmitter
		extend( Outlayer.prototype, EventEmitter.prototype );

		/**
		 * set options
		 * @param {Object} opts
		 */
		Outlayer.prototype.option = function( opts ) {
		  extend( this.options, opts );
		};

		Outlayer.prototype._create = function() {
		  // get items from children
		  this.reloadItems();
		  // elements that affect layout, but are not laid out
		  this.stamps = [];
		  this.stamp( this.options.stamp );
		  // set container style
		  extend( this.element.style, this.options.containerStyle );

		  // bind resize method
		  if ( this.options.isResizeBound ) {
		    this.bindResize();
		  }
		};

		// goes through all children again and gets bricks in proper order
		Outlayer.prototype.reloadItems = function() {
		  // collection of item elements
		  this.items = this._itemize( this.element.children );
		};


		/**
		 * turn elements into Outlayer.Items to be used in layout
		 * @param {Array or NodeList or HTMLElement} elems
		 * @returns {Array} items - collection of new Outlayer Items
		 */
		Outlayer.prototype._itemize = function( elems ) {

		  var itemElems = this._filterFindItemElements( elems );
		  var Item = this.constructor.Item;

		  // create new Outlayer Items for collection
		  var items = [];
		  for ( var i=0, len = itemElems.length; i < len; i++ ) {
		    var elem = itemElems[i];
		    var item = new Item( elem, this );
		    items.push( item );
		  }

		  return items;
		};

		/**
		 * get item elements to be used in layout
		 * @param {Array or NodeList or HTMLElement} elems
		 * @returns {Array} items - item elements
		 */
		Outlayer.prototype._filterFindItemElements = function( elems ) {
		  // make array of elems
		  elems = makeArray( elems );
		  var itemSelector = this.options.itemSelector;
		  var itemElems = [];

		  for ( var i=0, len = elems.length; i < len; i++ ) {
		    var elem = elems[i];
		    // check that elem is an actual element
		    if ( !isElement( elem ) ) {
		      continue;
		    }
		    // filter & find items if we have an item selector
		    if ( itemSelector ) {
		      // filter siblings
		      if ( matchesSelector( elem, itemSelector ) ) {
		        itemElems.push( elem );
		      }
		      // find children
		      var childElems = elem.querySelectorAll( itemSelector );
		      // concat childElems to filterFound array
		      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
		        itemElems.push( childElems[j] );
		      }
		    } else {
		      itemElems.push( elem );
		    }
		  }

		  return itemElems;
		};

		/**
		 * getter method for getting item elements
		 * @returns {Array} elems - collection of item elements
		 */
		Outlayer.prototype.getItemElements = function() {
		  var elems = [];
		  for ( var i=0, len = this.items.length; i < len; i++ ) {
		    elems.push( this.items[i].element );
		  }
		  return elems;
		};

		// ----- init & layout ----- //

		/**
		 * lays out all items
		 */
		Outlayer.prototype.layout = function() {
		  this._resetLayout();
		  this._manageStamps();

		  // don't animate first layout
		  var isInstant = this.options.isLayoutInstant !== undefined ?
		    this.options.isLayoutInstant : !this._isLayoutInited;
		  this.layoutItems( this.items, isInstant );

		  // flag for initalized
		  this._isLayoutInited = true;
		};

		// _init is alias for layout
		Outlayer.prototype._init = Outlayer.prototype.layout;

		/**
		 * logic before any new layout
		 */
		Outlayer.prototype._resetLayout = function() {
		  this.getSize();
		};


		Outlayer.prototype.getSize = function() {
		  this.size = getSize( this.element );
		};

		/**
		 * get measurement from option, for columnWidth, rowHeight, gutter
		 * if option is String -> get element from selector string, & get size of element
		 * if option is Element -> get size of element
		 * else use option as a number
		 *
		 * @param {String} measurement
		 * @param {String} size - width or height
		 * @private
		 */
		Outlayer.prototype._getMeasurement = function( measurement, size ) {
		  var option = this.options[ measurement ];
		  var elem;
		  if ( !option ) {
		    // default to 0
		    this[ measurement ] = 0;
		  } else {
		    // use option as an element
		    if ( typeof option === 'string' ) {
		      elem = this.element.querySelector( option );
		    } else if ( isElement( option ) ) {
		      elem = option;
		    }
		    // use size of element, if element
		    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
		  }
		};

		/**
		 * layout a collection of item elements
		 * @api public
		 */
		Outlayer.prototype.layoutItems = function( items, isInstant ) {
		  items = this._getItemsForLayout( items );

		  this._layoutItems( items, isInstant );

		  this._postLayout();
		};

		/**
		 * get the items to be laid out
		 * you may want to skip over some items
		 * @param {Array} items
		 * @returns {Array} items
		 */
		Outlayer.prototype._getItemsForLayout = function( items ) {
		  var layoutItems = [];
		  for ( var i=0, len = items.length; i < len; i++ ) {
		    var item = items[i];
		    if ( !item.isIgnored ) {
		      layoutItems.push( item );
		    }
		  }
		  return layoutItems;
		};

		/**
		 * layout items
		 * @param {Array} items
		 * @param {Boolean} isInstant
		 */
		Outlayer.prototype._layoutItems = function( items, isInstant ) {
		  var _this = this;
		  function onItemsLayout() {
		    _this.emitEvent( 'layoutComplete', [ _this, items ] );
		  }

		  if ( !items || !items.length ) {
		    // no items, emit event with empty array
		    onItemsLayout();
		    return;
		  }

		  // emit layoutComplete when done
		  this._itemsOn( items, 'layout', onItemsLayout );

		  var queue = [];

		  for ( var i=0, len = items.length; i < len; i++ ) {
		    var item = items[i];
		    // get x/y object from method
		    var position = this._getItemLayoutPosition( item );
		    // enqueue
		    position.item = item;
		    position.isInstant = isInstant || item.isLayoutInstant;
		    queue.push( position );
		  }

		  this._processLayoutQueue( queue );
		};

		/**
		 * get item layout position
		 * @param {Outlayer.Item} item
		 * @returns {Object} x and y position
		 */
		Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
		  return {
		    x: 0,
		    y: 0
		  };
		};

		/**
		 * iterate over array and position each item
		 * Reason being - separating this logic prevents 'layout invalidation'
		 * thx @paul_irish
		 * @param {Array} queue
		 */
		Outlayer.prototype._processLayoutQueue = function( queue ) {
		  for ( var i=0, len = queue.length; i < len; i++ ) {
		    var obj = queue[i];
		    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
		  }
		};

		/**
		 * Sets position of item in DOM
		 * @param {Outlayer.Item} item
		 * @param {Number} x - horizontal position
		 * @param {Number} y - vertical position
		 * @param {Boolean} isInstant - disables transitions
		 */
		Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
		  if ( isInstant ) {
		    // if not transition, just set CSS
		    item.goTo( x, y );
		  } else {
		    item.moveTo( x, y );
		  }
		};

		/**
		 * Any logic you want to do after each layout,
		 * i.e. size the container
		 */
		Outlayer.prototype._postLayout = function() {
		  this.resizeContainer();
		};

		Outlayer.prototype.resizeContainer = function() {
		  if ( !this.options.isResizingContainer ) {
		    return;
		  }
		  var size = this._getContainerSize();
		  if ( size ) {
		    this._setContainerMeasure( size.width, true );
		    this._setContainerMeasure( size.height, false );
		  }
		};

		/**
		 * Sets width or height of container if returned
		 * @returns {Object} size
		 *   @param {Number} width
		 *   @param {Number} height
		 */
		Outlayer.prototype._getContainerSize = noop;

		/**
		 * @param {Number} measure - size of width or height
		 * @param {Boolean} isWidth
		 */
		Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
		  if ( measure === undefined ) {
		    return;
		  }

		  var elemSize = this.size;
		  // add padding and border width if border box
		  if ( elemSize.isBorderBox ) {
		    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
		      elemSize.borderLeftWidth + elemSize.borderRightWidth :
		      elemSize.paddingBottom + elemSize.paddingTop +
		      elemSize.borderTopWidth + elemSize.borderBottomWidth;
		  }

		  measure = Math.max( measure, 0 );
		  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
		};

		/**
		 * trigger a callback for a collection of items events
		 * @param {Array} items - Outlayer.Items
		 * @param {String} eventName
		 * @param {Function} callback
		 */
		Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
		  var doneCount = 0;
		  var count = items.length;
		  // event callback
		  var _this = this;
		  function tick() {
		    doneCount++;
		    if ( doneCount === count ) {
		      callback.call( _this );
		    }
		    return true; // bind once
		  }
		  // bind callback
		  for ( var i=0, len = items.length; i < len; i++ ) {
		    var item = items[i];
		    item.on( eventName, tick );
		  }
		};

		// -------------------------- ignore & stamps -------------------------- //


		/**
		 * keep item in collection, but do not lay it out
		 * ignored items do not get skipped in layout
		 * @param {Element} elem
		 */
		Outlayer.prototype.ignore = function( elem ) {
		  var item = this.getItem( elem );
		  if ( item ) {
		    item.isIgnored = true;
		  }
		};

		/**
		 * return item to layout collection
		 * @param {Element} elem
		 */
		Outlayer.prototype.unignore = function( elem ) {
		  var item = this.getItem( elem );
		  if ( item ) {
		    delete item.isIgnored;
		  }
		};

		/**
		 * adds elements to stamps
		 * @param {NodeList, Array, Element, or String} elems
		 */
		Outlayer.prototype.stamp = function( elems ) {
		  elems = this._find( elems );
		  if ( !elems ) {
		    return;
		  }

		  this.stamps = this.stamps.concat( elems );
		  // ignore
		  for ( var i=0, len = elems.length; i < len; i++ ) {
		    var elem = elems[i];
		    this.ignore( elem );
		  }
		};

		/**
		 * removes elements to stamps
		 * @param {NodeList, Array, or Element} elems
		 */
		Outlayer.prototype.unstamp = function( elems ) {
		  elems = this._find( elems );
		  if ( !elems ){
		    return;
		  }

		  for ( var i=0, len = elems.length; i < len; i++ ) {
		    var elem = elems[i];
		    // filter out removed stamp elements
		    removeFrom( elem, this.stamps );
		    this.unignore( elem );
		  }

		};

		/**
		 * finds child elements
		 * @param {NodeList, Array, Element, or String} elems
		 * @returns {Array} elems
		 */
		Outlayer.prototype._find = function( elems ) {
		  if ( !elems ) {
		    return;
		  }
		  // if string, use argument as selector string
		  if ( typeof elems === 'string' ) {
		    elems = this.element.querySelectorAll( elems );
		  }
		  elems = makeArray( elems );
		  return elems;
		};

		Outlayer.prototype._manageStamps = function() {
		  if ( !this.stamps || !this.stamps.length ) {
		    return;
		  }

		  this._getBoundingRect();

		  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
		    var stamp = this.stamps[i];
		    this._manageStamp( stamp );
		  }
		};

		// update boundingLeft / Top
		Outlayer.prototype._getBoundingRect = function() {
		  // get bounding rect for container element
		  var boundingRect = this.element.getBoundingClientRect();
		  var size = this.size;
		  this._boundingRect = {
		    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
		    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
		    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
		    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
		  };
		};

		/**
		 * @param {Element} stamp
		**/
		Outlayer.prototype._manageStamp = noop;

		/**
		 * get x/y position of element relative to container element
		 * @param {Element} elem
		 * @returns {Object} offset - has left, top, right, bottom
		 */
		Outlayer.prototype._getElementOffset = function( elem ) {
		  var boundingRect = elem.getBoundingClientRect();
		  var thisRect = this._boundingRect;
		  var size = getSize( elem );
		  var offset = {
		    left: boundingRect.left - thisRect.left - size.marginLeft,
		    top: boundingRect.top - thisRect.top - size.marginTop,
		    right: thisRect.right - boundingRect.right - size.marginRight,
		    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
		  };
		  return offset;
		};

		// -------------------------- resize -------------------------- //

		// enable event handlers for listeners
		// i.e. resize -> onresize
		Outlayer.prototype.handleEvent = function( event ) {
		  var method = 'on' + event.type;
		  if ( this[ method ] ) {
		    this[ method ]( event );
		  }
		};

		/**
		 * Bind layout to window resizing
		 */
		Outlayer.prototype.bindResize = function() {
		  // bind just one listener
		  if ( this.isResizeBound ) {
		    return;
		  }
		  eventie.bind( window, 'resize', this );
		  this.isResizeBound = true;
		};

		/**
		 * Unbind layout to window resizing
		 */
		Outlayer.prototype.unbindResize = function() {
		  if ( this.isResizeBound ) {
		    eventie.unbind( window, 'resize', this );
		  }
		  this.isResizeBound = false;
		};

		// original debounce by John Hann
		// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

		// this fires every resize
		Outlayer.prototype.onresize = function() {
		  if ( this.resizeTimeout ) {
		    clearTimeout( this.resizeTimeout );
		  }

		  var _this = this;
		  function delayed() {
		    _this.resize();
		    delete _this.resizeTimeout;
		  }

		  this.resizeTimeout = setTimeout( delayed, 100 );
		};

		// debounced, layout on resize
		Outlayer.prototype.resize = function() {
		  // don't trigger if size did not change
		  // or if resize was unbound. See #9
		  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
		    return;
		  }

		  this.layout();
		};

		/**
		 * check if layout is needed post layout
		 * @returns Boolean
		 */
		Outlayer.prototype.needsResizeLayout = function() {
		  var size = getSize( this.element );
		  // check that this.size and size are there
		  // IE8 triggers resize on body size change, so they might not be
		  var hasSizes = this.size && size;
		  return hasSizes && size.innerWidth !== this.size.innerWidth;
		};

		// -------------------------- methods -------------------------- //

		/**
		 * add items to Outlayer instance
		 * @param {Array or NodeList or Element} elems
		 * @returns {Array} items - Outlayer.Items
		**/
		Outlayer.prototype.addItems = function( elems ) {
		  var items = this._itemize( elems );
		  // add items to collection
		  if ( items.length ) {
		    this.items = this.items.concat( items );
		  }
		  return items;
		};

		/**
		 * Layout newly-appended item elements
		 * @param {Array or NodeList or Element} elems
		 */
		Outlayer.prototype.appended = function( elems ) {
		  var items = this.addItems( elems );
		  if ( !items.length ) {
		    return;
		  }
		  // layout and reveal just the new items
		  this.layoutItems( items, true );
		  this.reveal( items );
		};

		/**
		 * Layout prepended elements
		 * @param {Array or NodeList or Element} elems
		 */
		Outlayer.prototype.prepended = function( elems ) {
		  var items = this._itemize( elems );
		  if ( !items.length ) {
		    return;
		  }
		  // add items to beginning of collection
		  var previousItems = this.items.slice(0);
		  this.items = items.concat( previousItems );
		  // start new layout
		  this._resetLayout();
		  this._manageStamps();
		  // layout new stuff without transition
		  this.layoutItems( items, true );
		  this.reveal( items );
		  // layout previous items
		  this.layoutItems( previousItems );
		};

		/**
		 * reveal a collection of items
		 * @param {Array of Outlayer.Items} items
		 */
		Outlayer.prototype.reveal = function( items ) {
		  var len = items && items.length;
		  if ( !len ) {
		    return;
		  }
		  for ( var i=0; i < len; i++ ) {
		    var item = items[i];
		    item.reveal();
		  }
		};

		/**
		 * hide a collection of items
		 * @param {Array of Outlayer.Items} items
		 */
		Outlayer.prototype.hide = function( items ) {
		  var len = items && items.length;
		  if ( !len ) {
		    return;
		  }
		  for ( var i=0; i < len; i++ ) {
		    var item = items[i];
		    item.hide();
		  }
		};

		/**
		 * get Outlayer.Item, given an Element
		 * @param {Element} elem
		 * @param {Function} callback
		 * @returns {Outlayer.Item} item
		 */
		Outlayer.prototype.getItem = function( elem ) {
		  // loop through items to get the one that matches
		  for ( var i=0, len = this.items.length; i < len; i++ ) {
		    var item = this.items[i];
		    if ( item.element === elem ) {
		      // return item
		      return item;
		    }
		  }
		};

		/**
		 * get collection of Outlayer.Items, given Elements
		 * @param {Array} elems
		 * @returns {Array} items - Outlayer.Items
		 */
		Outlayer.prototype.getItems = function( elems ) {
		  if ( !elems || !elems.length ) {
		    return;
		  }
		  var items = [];
		  for ( var i=0, len = elems.length; i < len; i++ ) {
		    var elem = elems[i];
		    var item = this.getItem( elem );
		    if ( item ) {
		      items.push( item );
		    }
		  }

		  return items;
		};

		/**
		 * remove element(s) from instance and DOM
		 * @param {Array or NodeList or Element} elems
		 */
		Outlayer.prototype.remove = function( elems ) {
		  elems = makeArray( elems );

		  var removeItems = this.getItems( elems );
		  // bail if no items to remove
		  if ( !removeItems || !removeItems.length ) {
		    return;
		  }

		  this._itemsOn( removeItems, 'remove', function() {
		    this.emitEvent( 'removeComplete', [ this, removeItems ] );
		  });

		  for ( var i=0, len = removeItems.length; i < len; i++ ) {
		    var item = removeItems[i];
		    item.remove();
		    // remove item from collection
		    removeFrom( item, this.items );
		  }
		};

		// ----- destroy ----- //

		// remove and disable Outlayer instance
		Outlayer.prototype.destroy = function() {
		  // clean up dynamic styles
		  var style = this.element.style;
		  style.height = '';
		  style.position = '';
		  style.width = '';
		  // destroy items
		  for ( var i=0, len = this.items.length; i < len; i++ ) {
		    var item = this.items[i];
		    item.destroy();
		  }

		  this.unbindResize();

		  delete this.element.outlayerGUID;
		  // remove data for jQuery
		  if ( jQuery ) {
		    jQuery.removeData( this.element, this.constructor.namespace );
		  }

		};

		// -------------------------- data -------------------------- //

		/**
		 * get Outlayer instance from element
		 * @param {Element} elem
		 * @returns {Outlayer}
		 */
		Outlayer.data = function( elem ) {
		  var id = elem && elem.outlayerGUID;
		  return id && instances[ id ];
		};


		// -------------------------- create Outlayer class -------------------------- //

		/**
		 * create a layout class
		 * @param {String} namespace
		 */
		Outlayer.create = function( namespace, options ) {
		  // sub-class Outlayer
		  function Layout() {
		    Outlayer.apply( this, arguments );
		  }
		  // inherit Outlayer prototype, use Object.create if there
		  if ( Object.create ) {
		    Layout.prototype = Object.create( Outlayer.prototype );
		  } else {
		    extend( Layout.prototype, Outlayer.prototype );
		  }
		  // set contructor, used for namespace and Item
		  Layout.prototype.constructor = Layout;

		  Layout.defaults = extend( {}, Outlayer.defaults );
		  // apply new options
		  extend( Layout.defaults, options );
		  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
		  Layout.prototype.settings = {};

		  Layout.namespace = namespace;

		  Layout.data = Outlayer.data;

		  // sub-class Item
		  Layout.Item = function LayoutItem() {
		    Item.apply( this, arguments );
		  };

		  Layout.Item.prototype = new Item();

		  // -------------------------- declarative -------------------------- //

		  /**
		   * allow user to initialize Outlayer via .js-namespace class
		   * options are parsed from data-namespace-option attribute
		   */
		  docReady( function() {
		    var dashedNamespace = toDashed( namespace );
		    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
		    var dataAttr = 'data-' + dashedNamespace + '-options';

		    for ( var i=0, len = elems.length; i < len; i++ ) {
		      var elem = elems[i];
		      var attr = elem.getAttribute( dataAttr );
		      var options;
		      try {
		        options = attr && JSON.parse( attr );
		      } catch ( error ) {
		        // log error, do not initialize
		        if ( console ) {
		          console.error( 'Error parsing ' + dataAttr + ' on ' +
		            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
		            error );
		        }
		        continue;
		      }
		      // initialize
		      var instance = new Layout( elem, options );
		      // make available via $().data('layoutname')
		      if ( jQuery ) {
		        jQuery.data( elem, namespace, instance );
		      }
		    }
		  });

		  // -------------------------- jQuery bridge -------------------------- //

		  // make into jQuery plugin
		  if ( jQuery && jQuery.bridget ) {
		    jQuery.bridget( namespace, Layout );
		  }

		  return Layout;
		};

		// ----- fin ----- //

		// back in global
		Outlayer.Item = Item;

		return Outlayer;

		}

		// -------------------------- transport -------------------------- //
		if (true) {
		  // CommonJS
		  module.exports = outlayerDefinition(
		    __webpack_require__(94),
		    __webpack_require__(95),
		    __webpack_require__(97),
		    __webpack_require__(91),
		    __webpack_require__(98),
		    __webpack_require__(99)
		  );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [
		      'eventie/eventie',
		      'doc-ready/doc-ready',
		      'eventEmitter/EventEmitter',
		      'get-size/get-size',
		      'matches-selector/matches-selector',
		      './item'
		    ],
		    outlayerDefinition );
		} else {
		  // browser global
		  window.Outlayer = outlayerDefinition(
		    window.eventie,
		    window.docReady,
		    window.EventEmitter,
		    window.getSize,
		    window.matchesSelector,
		    window.Outlayer.Item
		  );
		}

		})( typeof window !== 'undefined' ? window : null );


	/***/ }),
	/* 94 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * eventie v1.0.5
		 * event binding helper
		 *   eventie.bind( elem, 'click', myFn )
		 *   eventie.unbind( elem, 'click', myFn )
		 * MIT license
		 */

		/*jshint browser: true, undef: true, unused: true */
		/*global define: false, module: false */

		( function( window ) {
		'use strict';

		if (!window) return;

		var docElem = document.documentElement;

		var bind = function() {};

		function getIEEvent( obj ) {
		  var event = window.event;
		  // add event.target
		  event.target = event.target || event.srcElement || obj;
		  return event;
		}

		if ( docElem.addEventListener ) {
		  bind = function( obj, type, fn ) {
		    obj.addEventListener( type, fn, false );
		  };
		} else if ( docElem.attachEvent ) {
		  bind = function( obj, type, fn ) {
		    obj[ type + fn ] = fn.handleEvent ?
		      function() {
		        var event = getIEEvent( obj );
		        fn.handleEvent.call( fn, event );
		      } :
		      function() {
		        var event = getIEEvent( obj );
		        fn.call( obj, event );
		      };
		    obj.attachEvent( "on" + type, obj[ type + fn ] );
		  };
		}

		var unbind = function() {};

		if ( docElem.removeEventListener ) {
		  unbind = function( obj, type, fn ) {
		    obj.removeEventListener( type, fn, false );
		  };
		} else if ( docElem.detachEvent ) {
		  unbind = function( obj, type, fn ) {
		    obj.detachEvent( "on" + type, obj[ type + fn ] );
		    try {
		      delete obj[ type + fn ];
		    } catch ( err ) {
		      // can't delete window object properties
		      obj[ type + fn ] = undefined;
		    }
		  };
		}

		var eventie = {
		  bind: bind,
		  unbind: unbind
		};

		// ----- module definition ----- //
		if ( true ) {
		  // CommonJS
		  module.exports = eventie;
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( eventie );
		} else {
		  // browser global
		  window.eventie = eventie;
		}

		})( typeof window !== 'undefined' ? window : null );


	/***/ }),
	/* 95 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * docReady v1.0.3
		 * Cross browser DOMContentLoaded event emitter
		 * MIT license
		 */

		/*jshint browser: true, strict: true, undef: true, unused: true*/
		/*global define: false, require: false, module: false */

		( function( window ) {
		'use strict';

		if (!window) return;

		var document = window.document;
		// collection of functions to be triggered on ready
		var queue = [];

		function docReady( fn ) {
		  // throw out non-functions
		  if ( typeof fn !== 'function' ) {
		    return;
		  }

		  if ( docReady.isReady ) {
		    // ready now, hit it
		    fn();
		  } else {
		    // queue function when ready
		    queue.push( fn );
		  }
		}

		docReady.isReady = false;

		// triggered on various doc ready events
		function init( event ) {
		  // bail if IE8 document is not ready just yet
		  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
		  if ( docReady.isReady || isIE8NotReady ) {
		    return;
		  }
		  docReady.isReady = true;

		  // process queue
		  for ( var i=0, len = queue.length; i < len; i++ ) {
		    var fn = queue[i];
		    fn();
		  }
		}

		function defineDocReady( eventie ) {
		  eventie.bind( document, 'DOMContentLoaded', init );
		  eventie.bind( document, 'readystatechange', init );
		  eventie.bind( window, 'load', init );

		  return docReady;
		}

		// transport
		if ( true ) {
		  module.exports = defineDocReady( __webpack_require__(96) );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  // if RequireJS, then doc is already ready
		  docReady.isReady = typeof requirejs === 'function';
		  define( [ 'eventie/eventie' ], defineDocReady );
		} else {
		  // browser global
		  window.docReady = defineDocReady( window.eventie );
		}

		})( typeof window !== 'undefined' ? window : null );


	/***/ }),
	/* 96 */
	94,
	/* 97 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * EventEmitter v4.2.0 - git.io/ee
		 * Oliver Caldwell
		 * MIT license
		 * @preserve
		 */

		(function () {
			// Place the script in strict mode
			'use strict';

			/**
			 * Class for managing events.
			 * Can be extended to provide event functionality in other classes.
			 *
			 * @class EventEmitter Manages event registering and emitting.
			 */
			function EventEmitter() {}

			// Shortcuts to improve speed and size

			// Easy access to the prototype
			var proto = EventEmitter.prototype;

			/**
			 * Finds the index of the listener for the event in it's storage array.
			 *
			 * @param {Function[]} listeners Array of listeners to search through.
			 * @param {Function} listener Method to look for.
			 * @return {Number} Index of the specified listener, -1 if not found
			 * @api private
			 */
			function indexOfListener(listeners, listener) {
				var i = listeners.length;
				while (i--) {
					if (listeners[i].listener === listener) {
						return i;
					}
				}

				return -1;
			}

			/**
			 * Returns the listener array for the specified event.
			 * Will initialise the event object and listener arrays if required.
			 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
			 * Each property in the object response is an array of listener functions.
			 *
			 * @param {String|RegExp} evt Name of the event to return the listeners from.
			 * @return {Function[]|Object} All listener functions for the event.
			 */
			proto.getListeners = function getListeners(evt) {
				var events = this._getEvents();
				var response;
				var key;

				// Return a concatenated array of all matching events if
				// the selector is a regular expression.
				if (typeof evt === 'object') {
					response = {};
					for (key in events) {
						if (events.hasOwnProperty(key) && evt.test(key)) {
							response[key] = events[key];
						}
					}
				}
				else {
					response = events[evt] || (events[evt] = []);
				}

				return response;
			};

			/**
			 * Takes a list of listener objects and flattens it into a list of listener functions.
			 *
			 * @param {Object[]} listeners Raw listener objects.
			 * @return {Function[]} Just the listener functions.
			 */
			proto.flattenListeners = function flattenListeners(listeners) {
				var flatListeners = [];
				var i;

				for (i = 0; i < listeners.length; i += 1) {
					flatListeners.push(listeners[i].listener);
				}

				return flatListeners;
			};

			/**
			 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
			 *
			 * @param {String|RegExp} evt Name of the event to return the listeners from.
			 * @return {Object} All listener functions for an event in an object.
			 */
			proto.getListenersAsObject = function getListenersAsObject(evt) {
				var listeners = this.getListeners(evt);
				var response;

				if (listeners instanceof Array) {
					response = {};
					response[evt] = listeners;
				}

				return response || listeners;
			};

			/**
			 * Adds a listener function to the specified event.
			 * The listener will not be added if it is a duplicate.
			 * If the listener returns true then it will be removed after it is called.
			 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
			 *
			 * @param {String|RegExp} evt Name of the event to attach the listener to.
			 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.addListener = function addListener(evt, listener) {
				var listeners = this.getListenersAsObject(evt);
				var listenerIsWrapped = typeof listener === 'object';
				var key;

				for (key in listeners) {
					if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
						listeners[key].push(listenerIsWrapped ? listener : {
							listener: listener,
							once: false
						});
					}
				}

				return this;
			};

			/**
			 * Alias of addListener
			 */
			proto.on = proto.addListener;

			/**
			 * Semi-alias of addListener. It will add a listener that will be
			 * automatically removed after it's first execution.
			 *
			 * @param {String|RegExp} evt Name of the event to attach the listener to.
			 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.addOnceListener = function addOnceListener(evt, listener) {
				return this.addListener(evt, {
					listener: listener,
					once: true
				});
			};

			/**
			 * Alias of addOnceListener.
			 */
			proto.once = proto.addOnceListener;

			/**
			 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
			 * You need to tell it what event names should be matched by a regex.
			 *
			 * @param {String} evt Name of the event to create.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.defineEvent = function defineEvent(evt) {
				this.getListeners(evt);
				return this;
			};

			/**
			 * Uses defineEvent to define multiple events.
			 *
			 * @param {String[]} evts An array of event names to define.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.defineEvents = function defineEvents(evts) {
				for (var i = 0; i < evts.length; i += 1) {
					this.defineEvent(evts[i]);
				}
				return this;
			};

			/**
			 * Removes a listener function from the specified event.
			 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
			 *
			 * @param {String|RegExp} evt Name of the event to remove the listener from.
			 * @param {Function} listener Method to remove from the event.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.removeListener = function removeListener(evt, listener) {
				var listeners = this.getListenersAsObject(evt);
				var index;
				var key;

				for (key in listeners) {
					if (listeners.hasOwnProperty(key)) {
						index = indexOfListener(listeners[key], listener);

						if (index !== -1) {
							listeners[key].splice(index, 1);
						}
					}
				}

				return this;
			};

			/**
			 * Alias of removeListener
			 */
			proto.off = proto.removeListener;

			/**
			 * Adds listeners in bulk using the manipulateListeners method.
			 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
			 * You can also pass it a regular expression to add the array of listeners to all events that match it.
			 * Yeah, this function does quite a bit. That's probably a bad thing.
			 *
			 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
			 * @param {Function[]} [listeners] An optional array of listener functions to add.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.addListeners = function addListeners(evt, listeners) {
				// Pass through to manipulateListeners
				return this.manipulateListeners(false, evt, listeners);
			};

			/**
			 * Removes listeners in bulk using the manipulateListeners method.
			 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
			 * You can also pass it an event name and an array of listeners to be removed.
			 * You can also pass it a regular expression to remove the listeners from all events that match it.
			 *
			 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
			 * @param {Function[]} [listeners] An optional array of listener functions to remove.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.removeListeners = function removeListeners(evt, listeners) {
				// Pass through to manipulateListeners
				return this.manipulateListeners(true, evt, listeners);
			};

			/**
			 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
			 * The first argument will determine if the listeners are removed (true) or added (false).
			 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
			 * You can also pass it an event name and an array of listeners to be added/removed.
			 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
			 *
			 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
			 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
			 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
				var i;
				var value;
				var single = remove ? this.removeListener : this.addListener;
				var multiple = remove ? this.removeListeners : this.addListeners;

				// If evt is an object then pass each of it's properties to this method
				if (typeof evt === 'object' && !(evt instanceof RegExp)) {
					for (i in evt) {
						if (evt.hasOwnProperty(i) && (value = evt[i])) {
							// Pass the single listener straight through to the singular method
							if (typeof value === 'function') {
								single.call(this, i, value);
							}
							else {
								// Otherwise pass back to the multiple function
								multiple.call(this, i, value);
							}
						}
					}
				}
				else {
					// So evt must be a string
					// And listeners must be an array of listeners
					// Loop over it and pass each one to the multiple method
					i = listeners.length;
					while (i--) {
						single.call(this, evt, listeners[i]);
					}
				}

				return this;
			};

			/**
			 * Removes all listeners from a specified event.
			 * If you do not specify an event then all listeners will be removed.
			 * That means every event will be emptied.
			 * You can also pass a regex to remove all events that match it.
			 *
			 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.removeEvent = function removeEvent(evt) {
				var type = typeof evt;
				var events = this._getEvents();
				var key;

				// Remove different things depending on the state of evt
				if (type === 'string') {
					// Remove all listeners for the specified event
					delete events[evt];
				}
				else if (type === 'object') {
					// Remove all events matching the regex.
					for (key in events) {
						if (events.hasOwnProperty(key) && evt.test(key)) {
							delete events[key];
						}
					}
				}
				else {
					// Remove all listeners in all events
					delete this._events;
				}

				return this;
			};

			/**
			 * Emits an event of your choice.
			 * When emitted, every listener attached to that event will be executed.
			 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
			 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
			 * So they will not arrive within the array on the other side, they will be separate.
			 * You can also pass a regular expression to emit to all events that match it.
			 *
			 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
			 * @param {Array} [args] Optional array of arguments to be passed to each listener.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.emitEvent = function emitEvent(evt, args) {
				var listeners = this.getListenersAsObject(evt);
				var listener;
				var i;
				var key;
				var response;

				for (key in listeners) {
					if (listeners.hasOwnProperty(key)) {
						i = listeners[key].length;

						while (i--) {
							// If the listener returns true then it shall be removed from the event
							// The function is executed either with a basic call or an apply if there is an args array
							listener = listeners[key][i];
							response = listener.listener.apply(this, args || []);
							if (response === this._getOnceReturnValue() || listener.once === true) {
								this.removeListener(evt, listener.listener);
							}
						}
					}
				}

				return this;
			};

			/**
			 * Alias of emitEvent
			 */
			proto.trigger = proto.emitEvent;

			/**
			 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
			 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
			 *
			 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
			 * @param {...*} Optional additional arguments to be passed to each listener.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.emit = function emit(evt) {
				var args = Array.prototype.slice.call(arguments, 1);
				return this.emitEvent(evt, args);
			};

			/**
			 * Sets the current value to check against when executing listeners. If a
			 * listeners return value matches the one set here then it will be removed
			 * after execution. This value defaults to true.
			 *
			 * @param {*} value The new value to check for when executing listeners.
			 * @return {Object} Current instance of EventEmitter for chaining.
			 */
			proto.setOnceReturnValue = function setOnceReturnValue(value) {
				this._onceReturnValue = value;
				return this;
			};

			/**
			 * Fetches the current value to check against when executing listeners. If
			 * the listeners return value matches this one then it should be removed
			 * automatically. It will return true by default.
			 *
			 * @return {*|Boolean} The current value to check for or the default, true.
			 * @api private
			 */
			proto._getOnceReturnValue = function _getOnceReturnValue() {
				if (this.hasOwnProperty('_onceReturnValue')) {
					return this._onceReturnValue;
				}
				else {
					return true;
				}
			};

			/**
			 * Fetches the events object and creates one if required.
			 *
			 * @return {Object} The events storage object.
			 * @api private
			 */
			proto._getEvents = function _getEvents() {
				return this._events || (this._events = {});
			};

			// Expose the class either via AMD, CommonJS or the global object
			if (true) {
				!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return EventEmitter;
				}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}
			else if (typeof module !== 'undefined' && module.exports){
				module.exports = EventEmitter;
			}
			else {
				this.EventEmitter = EventEmitter;
			}
		}.call(this));


	/***/ }),
	/* 98 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/**
		 * matchesSelector v1.0.3
		 * matchesSelector( element, '.selector' )
		 * MIT license
		 */

		/*jshint browser: true, strict: true, undef: true, unused: true */
		/*global define: false, module: false */

		( function( ElemProto ) {

		  'use strict';

		  var matchesMethod = ( function() {
		    // check for the standard method name first
		    if ( ElemProto.matches ) {
		      return 'matches';
		    }
		    // check un-prefixed
		    if ( ElemProto.matchesSelector ) {
		      return 'matchesSelector';
		    }
		    // check vendor prefixes
		    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

		    for ( var i=0, len = prefixes.length; i < len; i++ ) {
		      var prefix = prefixes[i];
		      var method = prefix + 'MatchesSelector';
		      if ( ElemProto[ method ] ) {
		        return method;
		      }
		    }
		  })();

		  // ----- match ----- //

		  function match( elem, selector ) {
		    return elem[ matchesMethod ]( selector );
		  }

		  // ----- appendToFragment ----- //

		  function checkParent( elem ) {
		    // not needed if already has parent
		    if ( elem.parentNode ) {
		      return;
		    }
		    var fragment = document.createDocumentFragment();
		    fragment.appendChild( elem );
		  }

		  // ----- query ----- //

		  // fall back to using QSA
		  // thx @jonathantneal https://gist.github.com/3062955
		  function query( elem, selector ) {
		    // append to fragment if no parent
		    checkParent( elem );

		    // match elem with all selected elems of parent
		    var elems = elem.parentNode.querySelectorAll( selector );
		    for ( var i=0, len = elems.length; i < len; i++ ) {
		      // return true if match
		      if ( elems[i] === elem ) {
		        return true;
		      }
		    }
		    // otherwise return false
		    return false;
		  }

		  // ----- matchChild ----- //

		  function matchChild( elem, selector ) {
		    checkParent( elem );
		    return match( elem, selector );
		  }

		  // ----- matchesSelector ----- //

		  var matchesSelector;

		  if ( matchesMethod ) {
		    // IE9 supports matchesSelector, but doesn't work on orphaned elems
		    // check for that
		    var div = document.createElement('div');
		    var supportsOrphans = match( div, 'div' );
		    matchesSelector = supportsOrphans ? match : matchChild;
		  } else {
		    matchesSelector = query;
		  }

		  // transport
		  if ( true ) {
		    // AMD
		    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		      return matchesSelector;
		    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if ( typeof exports === 'object' ) {
		    module.exports = matchesSelector;
		  }
		  else {
		    // browser global
		    window.matchesSelector = matchesSelector;
		  }

		})( Element.prototype );


	/***/ }),
	/* 99 */
	/***/ (function(module, exports, __webpack_require__) {

		/**
		 * Outlayer Item
		 */

		( function( window ) {
		'use strict';

		if (!window) return;

		// ----- get style ----- //

		var getComputedStyle = window.getComputedStyle;
		var getStyle = getComputedStyle ?
		  function( elem ) {
		    return getComputedStyle( elem, null );
		  } :
		  function( elem ) {
		    return elem.currentStyle;
		  };


		// extend objects
		function extend( a, b ) {
		  for ( var prop in b ) {
		    a[ prop ] = b[ prop ];
		  }
		  return a;
		}

		function isEmptyObj( obj ) {
		  for ( var prop in obj ) {
		    return false;
		  }
		  prop = null;
		  return true;
		}

		// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
		function toDash( str ) {
		  return str.replace( /([A-Z])/g, function( $1 ){
		    return '-' + $1.toLowerCase();
		  });
		}

		// -------------------------- Outlayer definition -------------------------- //

		function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

		// -------------------------- CSS3 support -------------------------- //

		var transitionProperty = getStyleProperty('transition');
		var transformProperty = getStyleProperty('transform');
		var supportsCSS3 = transitionProperty && transformProperty;
		var is3d = !!getStyleProperty('perspective');

		var transitionEndEvent = {
		  WebkitTransition: 'webkitTransitionEnd',
		  MozTransition: 'transitionend',
		  OTransition: 'otransitionend',
		  transition: 'transitionend'
		}[ transitionProperty ];

		// properties that could have vendor prefix
		var prefixableProperties = [
		  'transform',
		  'transition',
		  'transitionDuration',
		  'transitionProperty'
		];

		// cache all vendor properties
		var vendorProperties = ( function() {
		  var cache = {};
		  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
		    var prop = prefixableProperties[i];
		    var supportedProp = getStyleProperty( prop );
		    if ( supportedProp && supportedProp !== prop ) {
		      cache[ prop ] = supportedProp;
		    }
		  }
		  return cache;
		})();

		// -------------------------- Item -------------------------- //

		function Item( element, layout ) {
		  if ( !element ) {
		    return;
		  }

		  this.element = element;
		  // parent layout class, i.e. Masonry, Isotope, or Packery
		  this.layout = layout;
		  this.position = {
		    x: 0,
		    y: 0
		  };

		  this._create();
		}

		// inherit EventEmitter
		extend( Item.prototype, EventEmitter.prototype );

		Item.prototype._create = function() {
		  // transition objects
		  this._transn = {
		    ingProperties: {},
		    clean: {},
		    onEnd: {}
		  };

		  this.css({
		    position: 'absolute'
		  });
		};

		// trigger specified handler for event type
		Item.prototype.handleEvent = function( event ) {
		  var method = 'on' + event.type;
		  if ( this[ method ] ) {
		    this[ method ]( event );
		  }
		};

		Item.prototype.getSize = function() {
		  this.size = getSize( this.element );
		};

		/**
		 * apply CSS styles to element
		 * @param {Object} style
		 */
		Item.prototype.css = function( style ) {
		  var elemStyle = this.element.style;

		  for ( var prop in style ) {
		    // use vendor property if available
		    var supportedProp = vendorProperties[ prop ] || prop;
		    elemStyle[ supportedProp ] = style[ prop ];
		  }
		};

		 // measure position, and sets it
		Item.prototype.getPosition = function() {
		  var style = getStyle( this.element );
		  var layoutOptions = this.layout.options;
		  var isOriginLeft = layoutOptions.isOriginLeft;
		  var isOriginTop = layoutOptions.isOriginTop;
		  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
		  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

		  // clean up 'auto' or other non-integer values
		  x = isNaN( x ) ? 0 : x;
		  y = isNaN( y ) ? 0 : y;
		  // remove padding from measurement
		  var layoutSize = this.layout.size;
		  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
		  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

		  this.position.x = x;
		  this.position.y = y;
		};

		// set settled position, apply padding
		Item.prototype.layoutPosition = function() {
		  var layoutSize = this.layout.size;
		  var layoutOptions = this.layout.options;
		  var style = {};

		  if ( layoutOptions.isOriginLeft ) {
		    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
		    // reset other property
		    style.right = '';
		  } else {
		    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
		    style.left = '';
		  }

		  if ( layoutOptions.isOriginTop ) {
		    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
		    style.bottom = '';
		  } else {
		    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
		    style.top = '';
		  }

		  this.css( style );
		  this.emitEvent( 'layout', [ this ] );
		};


		// transform translate function
		var translate = is3d ?
		  function( x, y ) {
		    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
		  } :
		  function( x, y ) {
		    return 'translate(' + x + 'px, ' + y + 'px)';
		  };


		Item.prototype._transitionTo = function( x, y ) {
		  this.getPosition();
		  // get current x & y from top/left
		  var curX = this.position.x;
		  var curY = this.position.y;

		  var compareX = parseInt( x, 10 );
		  var compareY = parseInt( y, 10 );
		  var didNotMove = compareX === this.position.x && compareY === this.position.y;

		  // save end position
		  this.setPosition( x, y );

		  // if did not move and not transitioning, just go to layout
		  if ( didNotMove && !this.isTransitioning ) {
		    this.layoutPosition();
		    return;
		  }

		  var transX = x - curX;
		  var transY = y - curY;
		  var transitionStyle = {};
		  // flip cooridinates if origin on right or bottom
		  var layoutOptions = this.layout.options;
		  transX = layoutOptions.isOriginLeft ? transX : -transX;
		  transY = layoutOptions.isOriginTop ? transY : -transY;
		  transitionStyle.transform = translate( transX, transY );

		  this.transition({
		    to: transitionStyle,
		    onTransitionEnd: {
		      transform: this.layoutPosition
		    },
		    isCleaning: true
		  });
		};

		// non transition + transform support
		Item.prototype.goTo = function( x, y ) {
		  this.setPosition( x, y );
		  this.layoutPosition();
		};

		// use transition and transforms if supported
		Item.prototype.moveTo = supportsCSS3 ?
		  Item.prototype._transitionTo : Item.prototype.goTo;

		Item.prototype.setPosition = function( x, y ) {
		  this.position.x = parseInt( x, 10 );
		  this.position.y = parseInt( y, 10 );
		};

		// ----- transition ----- //

		/**
		 * @param {Object} style - CSS
		 * @param {Function} onTransitionEnd
		 */

		// non transition, just trigger callback
		Item.prototype._nonTransition = function( args ) {
		  this.css( args.to );
		  if ( args.isCleaning ) {
		    this._removeStyles( args.to );
		  }
		  for ( var prop in args.onTransitionEnd ) {
		    args.onTransitionEnd[ prop ].call( this );
		  }
		};

		/**
		 * proper transition
		 * @param {Object} args - arguments
		 *   @param {Object} to - style to transition to
		 *   @param {Object} from - style to start transition from
		 *   @param {Boolean} isCleaning - removes transition styles after transition
		 *   @param {Function} onTransitionEnd - callback
		 */
		Item.prototype._transition = function( args ) {
		  // redirect to nonTransition if no transition duration
		  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
		    this._nonTransition( args );
		    return;
		  }

		  var _transition = this._transn;
		  // keep track of onTransitionEnd callback by css property
		  for ( var prop in args.onTransitionEnd ) {
		    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
		  }
		  // keep track of properties that are transitioning
		  for ( prop in args.to ) {
		    _transition.ingProperties[ prop ] = true;
		    // keep track of properties to clean up when transition is done
		    if ( args.isCleaning ) {
		      _transition.clean[ prop ] = true;
		    }
		  }

		  // set from styles
		  if ( args.from ) {
		    this.css( args.from );
		    // force redraw. http://blog.alexmaccaw.com/css-transitions
		    var h = this.element.offsetHeight;
		    // hack for JSHint to hush about unused var
		    h = null;
		  }
		  // enable transition
		  this.enableTransition( args.to );
		  // set styles that are transitioning
		  this.css( args.to );

		  this.isTransitioning = true;

		};

		var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
		  ',opacity' );

		Item.prototype.enableTransition = function(/* style */) {
		  // only enable if not already transitioning
		  // bug in IE10 were re-setting transition style will prevent
		  // transitionend event from triggering
		  if ( this.isTransitioning ) {
		    return;
		  }

		  // make transition: foo, bar, baz from style object
		  // TODO uncomment this bit when IE10 bug is resolved
		  // var transitionValue = [];
		  // for ( var prop in style ) {
		  //   // dash-ify camelCased properties like WebkitTransition
		  //   transitionValue.push( toDash( prop ) );
		  // }
		  // enable transition styles
		  // HACK always enable transform,opacity for IE10
		  this.css({
		    transitionProperty: itemTransitionProperties,
		    transitionDuration: this.layout.options.transitionDuration
		  });
		  // listen for transition end event
		  this.element.addEventListener( transitionEndEvent, this, false );
		};

		Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

		// ----- events ----- //

		Item.prototype.onwebkitTransitionEnd = function( event ) {
		  this.ontransitionend( event );
		};

		Item.prototype.onotransitionend = function( event ) {
		  this.ontransitionend( event );
		};

		// properties that I munge to make my life easier
		var dashedVendorProperties = {
		  '-webkit-transform': 'transform',
		  '-moz-transform': 'transform',
		  '-o-transform': 'transform'
		};

		Item.prototype.ontransitionend = function( event ) {
		  // disregard bubbled events from children
		  if ( event.target !== this.element ) {
		    return;
		  }
		  var _transition = this._transn;
		  // get property name of transitioned property, convert to prefix-free
		  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

		  // remove property that has completed transitioning
		  delete _transition.ingProperties[ propertyName ];
		  // check if any properties are still transitioning
		  if ( isEmptyObj( _transition.ingProperties ) ) {
		    // all properties have completed transitioning
		    this.disableTransition();
		  }
		  // clean style
		  if ( propertyName in _transition.clean ) {
		    // clean up style
		    this.element.style[ event.propertyName ] = '';
		    delete _transition.clean[ propertyName ];
		  }
		  // trigger onTransitionEnd callback
		  if ( propertyName in _transition.onEnd ) {
		    var onTransitionEnd = _transition.onEnd[ propertyName ];
		    onTransitionEnd.call( this );
		    delete _transition.onEnd[ propertyName ];
		  }

		  this.emitEvent( 'transitionEnd', [ this ] );
		};

		Item.prototype.disableTransition = function() {
		  this.removeTransitionStyles();
		  this.element.removeEventListener( transitionEndEvent, this, false );
		  this.isTransitioning = false;
		};

		/**
		 * removes style property from element
		 * @param {Object} style
		**/
		Item.prototype._removeStyles = function( style ) {
		  // clean up transition styles
		  var cleanStyle = {};
		  for ( var prop in style ) {
		    cleanStyle[ prop ] = '';
		  }
		  this.css( cleanStyle );
		};

		var cleanTransitionStyle = {
		  transitionProperty: '',
		  transitionDuration: ''
		};

		Item.prototype.removeTransitionStyles = function() {
		  // remove transition
		  this.css( cleanTransitionStyle );
		};

		// ----- show/hide/remove ----- //

		// remove element from DOM
		Item.prototype.removeElem = function() {
		  this.element.parentNode.removeChild( this.element );
		  this.emitEvent( 'remove', [ this ] );
		};

		Item.prototype.remove = function() {
		  // just remove element if no transition support or no transition
		  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
		    this.removeElem();
		    return;
		  }

		  // start transition
		  var _this = this;
		  this.on( 'transitionEnd', function() {
		    _this.removeElem();
		    return true; // bind once
		  });
		  this.hide();
		};

		Item.prototype.reveal = function() {
		  delete this.isHidden;
		  // remove display: none
		  this.css({ display: '' });

		  var options = this.layout.options;
		  this.transition({
		    from: options.hiddenStyle,
		    to: options.visibleStyle,
		    isCleaning: true
		  });
		};

		Item.prototype.hide = function() {
		  // set flag
		  this.isHidden = true;
		  // remove display: none
		  this.css({ display: '' });

		  var options = this.layout.options;
		  this.transition({
		    from: options.visibleStyle,
		    to: options.hiddenStyle,
		    // keep hidden stuff hidden
		    isCleaning: true,
		    onTransitionEnd: {
		      opacity: function() {
		        // check if still hidden
		        // during transition, item may have been un-hidden
		        if ( this.isHidden ) {
		          this.css({ display: 'none' });
		        }
		      }
		    }
		  });
		};

		Item.prototype.destroy = function() {
		  this.css({
		    position: '',
		    left: '',
		    right: '',
		    top: '',
		    bottom: '',
		    transition: '',
		    transform: ''
		  });
		};

		return Item;

		}

		// -------------------------- transport -------------------------- //
		if (true) {
		  // CommonJS
		  module.exports = outlayerItemDefinition(
		    __webpack_require__(97),
		    __webpack_require__(91),
		    __webpack_require__(92)
		  );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [
		      'eventEmitter/EventEmitter',
		      'get-size/get-size',
		      'get-style-property/get-style-property'
		    ],
		    outlayerItemDefinition );
		} else {
		  // browser global
		  window.Outlayer = {};
		  window.Outlayer.Item = outlayerItemDefinition(
		    window.EventEmitter,
		    window.getSize,
		    window.getStyleProperty
		  );
		}

		})( typeof window !== 'undefined' ? window : null );


	/***/ }),
	/* 100 */
	/***/ (function(module, exports, __webpack_require__) {

		/**
		 * Rect
		 * low-level utility class for basic geometry
		 */

		( function( window ) {

		"use strict";

		// -------------------------- Packery -------------------------- //

		// global namespace
		var Packery = window.Packery = function() {};

		function rectDefinition() {

		// -------------------------- Rect -------------------------- //

		function Rect( props ) {
		  // extend properties from defaults
		  for ( var prop in Rect.defaults ) {
		    this[ prop ] = Rect.defaults[ prop ];
		  }

		  for ( prop in props ) {
		    this[ prop ] = props[ prop ];
		  }

		}

		// make available
		Packery.Rect = Rect;

		Rect.defaults = {
		  x: 0,
		  y: 0,
		  width: 0,
		  height: 0
		};

		/**
		 * Determines whether or not this rectangle wholly encloses another rectangle or point.
		 * @param {Rect} rect
		 * @returns {Boolean}
		**/
		Rect.prototype.contains = function( rect ) {
		  // points don't have width or height
		  var otherWidth = rect.width || 0;
		  var otherHeight = rect.height || 0;
		  return this.x <= rect.x &&
		    this.y <= rect.y &&
		    this.x + this.width >= rect.x + otherWidth &&
		    this.y + this.height >= rect.y + otherHeight;
		};

		/**
		 * Determines whether or not the rectangle intersects with another.
		 * @param {Rect} rect
		 * @returns {Boolean}
		**/
		Rect.prototype.overlaps = function( rect ) {
		  var thisRight = this.x + this.width;
		  var thisBottom = this.y + this.height;
		  var rectRight = rect.x + rect.width;
		  var rectBottom = rect.y + rect.height;

		  // http://stackoverflow.com/a/306332
		  return this.x < rectRight &&
		    thisRight > rect.x &&
		    this.y < rectBottom &&
		    thisBottom > rect.y;
		};

		/**
		 * @param {Rect} rect - the overlapping rect
		 * @returns {Array} freeRects - rects representing the area around the rect
		**/
		Rect.prototype.getMaximalFreeRects = function( rect ) {

		  // if no intersection, return false
		  if ( !this.overlaps( rect ) ) {
		    return false;
		  }

		  var freeRects = [];
		  var freeRect;

		  var thisRight = this.x + this.width;
		  var thisBottom = this.y + this.height;
		  var rectRight = rect.x + rect.width;
		  var rectBottom = rect.y + rect.height;

		  // top
		  if ( this.y < rect.y ) {
		    freeRect = new Rect({
		      x: this.x,
		      y: this.y,
		      width: this.width,
		      height: rect.y - this.y
		    });
		    freeRects.push( freeRect );
		  }

		  // right
		  if ( thisRight > rectRight ) {
		    freeRect = new Rect({
		      x: rectRight,
		      y: this.y,
		      width: thisRight - rectRight,
		      height: this.height
		    });
		    freeRects.push( freeRect );
		  }

		  // bottom
		  if ( thisBottom > rectBottom ) {
		    freeRect = new Rect({
		      x: this.x,
		      y: rectBottom,
		      width: this.width,
		      height: thisBottom - rectBottom
		    });
		    freeRects.push( freeRect );
		  }

		  // left
		  if ( this.x < rect.x ) {
		    freeRect = new Rect({
		      x: this.x,
		      y: this.y,
		      width: rect.x - this.x,
		      height: this.height
		    });
		    freeRects.push( freeRect );
		  }

		  return freeRects;
		};

		Rect.prototype.canFit = function( rect ) {
		  return this.width >= rect.width && this.height >= rect.height;
		};

		return Rect;

		}

		// -------------------------- transport -------------------------- //
		if ( true ) {
		  // CommonJS
		  module.exports = rectDefinition();
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( rectDefinition );
		} else {
		  // browser global
		  window.Packery = window.Packery || {};
		  window.Packery.Rect = rectDefinition();
		}

		})( window );


	/***/ }),
	/* 101 */
	/***/ (function(module, exports, __webpack_require__) {

		/**
		 * Packer
		 * bin-packing algorithm
		 */

		( function( window ) {

		'use strict';

		// -------------------------- Packer -------------------------- //

		function packerDefinition( Rect ) {

		/**
		 * @param {Number} width
		 * @param {Number} height
		 * @param {String} sortDirection
		 *   topLeft for vertical, leftTop for horizontal
		 */
		function Packer( width, height, sortDirection ) {
		  this.width = width || 0;
		  this.height = height || 0;
		  this.sortDirection = sortDirection || 'downwardLeftToRight';

		  this.reset();
		}

		Packer.prototype.reset = function() {
		  this.spaces = [];
		  this.newSpaces = [];

		  var initialSpace = new Rect({
		    x: 0,
		    y: 0,
		    width: this.width,
		    height: this.height
		  });

		  this.spaces.push( initialSpace );
		  // set sorter
		  this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
		};

		// change x and y of rect to fit with in Packer's available spaces
		Packer.prototype.pack = function( rect ) {
		  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
		    var space = this.spaces[i];
		    if ( space.canFit( rect ) ) {
		      this.placeInSpace( rect, space );
		      break;
		    }
		  }
		};

		Packer.prototype.placeInSpace = function( rect, space ) {
		  // place rect in space
		  rect.x = space.x;
		  rect.y = space.y;

		  this.placed( rect );
		};

		// update spaces with placed rect
		Packer.prototype.placed = function( rect ) {
		  // update spaces
		  var revisedSpaces = [];
		  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
		    var space = this.spaces[i];
		    var newSpaces = space.getMaximalFreeRects( rect );
		    // add either the original space or the new spaces to the revised spaces
		    if ( newSpaces ) {
		      revisedSpaces.push.apply( revisedSpaces, newSpaces );
		    } else {
		      revisedSpaces.push( space );
		    }
		  }

		  this.spaces = revisedSpaces;

		  this.mergeSortSpaces();
		};

		Packer.prototype.mergeSortSpaces = function() {
		  // remove redundant spaces
		  Packer.mergeRects( this.spaces );
		  this.spaces.sort( this.sorter );
		};

		// add a space back
		Packer.prototype.addSpace = function( rect ) {
		  this.spaces.push( rect );
		  this.mergeSortSpaces();
		};

		// -------------------------- utility functions -------------------------- //

		/**
		 * Remove redundant rectangle from array of rectangles
		 * @param {Array} rects: an array of Rects
		 * @returns {Array} rects: an array of Rects
		**/
		Packer.mergeRects = function( rects ) {
		  for ( var i=0, len = rects.length; i < len; i++ ) {
		    var rect = rects[i];
		    // skip over this rect if it was already removed
		    if ( !rect ) {
		      continue;
		    }
		    // clone rects we're testing, remove this rect
		    var compareRects = rects.slice(0);
		    // do not compare with self
		    compareRects.splice( i, 1 );
		    // compare this rect with others
		    var removedCount = 0;
		    for ( var j=0, jLen = compareRects.length; j < jLen; j++ ) {
		      var compareRect = compareRects[j];
		      // if this rect contains another,
		      // remove that rect from test collection
		      var indexAdjust = i > j ? 0 : 1;
		      if ( rect.contains( compareRect ) ) {
		        // console.log( 'current test rects:' + testRects.length, testRects );
		        // console.log( i, j, indexAdjust, rect, compareRect );
		        rects.splice( j + indexAdjust - removedCount, 1 );
		        removedCount++;
		      }
		    }
		  }

		  return rects;
		};


		// -------------------------- sorters -------------------------- //

		// functions for sorting rects in order
		var sorters = {
		  // top down, then left to right
		  downwardLeftToRight: function( a, b ) {
		    return a.y - b.y || a.x - b.x;
		  },
		  // left to right, then top down
		  rightwardTopToBottom: function( a, b ) {
		    return a.x - b.x || a.y - b.y;
		  }
		};


		// --------------------------  -------------------------- //

		return Packer;

		}

		// -------------------------- transport -------------------------- //
		if ( true ) {
		  // CommonJS
		  module.exports = packerDefinition(
		    __webpack_require__(100)
		  );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [ './rect' ], packerDefinition );
		} else {
		  // browser global
		  var Packery = window.Packery = window.Packery || {};
		  Packery.Packer = packerDefinition( Packery.Rect );
		}

		})( window );


	/***/ }),
	/* 102 */
	/***/ (function(module, exports, __webpack_require__) {

		/**
		 * Packery Item Element
		**/

		( function( window ) {

		'use strict';

		// -------------------------- Item -------------------------- //

		function itemDefinition( getStyleProperty, Outlayer, Rect ) {

		var transformProperty = getStyleProperty('transform');

		// sub-class Item
		var Item = function PackeryItem() {
		  Outlayer.Item.apply( this, arguments );
		};

		Item.prototype = new Outlayer.Item();

		var protoCreate = Item.prototype._create;
		Item.prototype._create = function() {
		  // call default _create logic
		  protoCreate.call( this );
		  this.rect = new Rect();
		  // rect used for placing, in drag or Packery.fit()
		  this.placeRect = new Rect();
		};

		// -------------------------- drag -------------------------- //

		Item.prototype.dragStart = function() {
		  this.getPosition();
		  this.removeTransitionStyles();
		  // remove transform property from transition
		  if ( this.isTransitioning && transformProperty ) {
		    this.element.style[ transformProperty ] = 'none';
		  }
		  this.getSize();
		  // create place rect, used for position when dragged then dropped
		  // or when positioning
		  this.isPlacing = true;
		  this.needsPositioning = false;
		  this.positionPlaceRect( this.position.x, this.position.y );
		  this.isTransitioning = false;
		  this.didDrag = false;
		};

		/**
		 * handle item when it is dragged
		 * @param {Number} x - horizontal position of dragged item
		 * @param {Number} y - vertical position of dragged item
		 */
		Item.prototype.dragMove = function( x, y ) {
		  this.didDrag = true;
		  var packerySize = this.layout.size;
		  x -= packerySize.paddingLeft;
		  y -= packerySize.paddingTop;
		  this.positionPlaceRect( x, y );
		};

		Item.prototype.dragStop = function() {
		  this.getPosition();
		  var isDiffX = this.position.x !== this.placeRect.x;
		  var isDiffY = this.position.y !== this.placeRect.y;
		  // set post-drag positioning flag
		  this.needsPositioning = isDiffX || isDiffY;
		  // reset flag
		  this.didDrag = false;
		};

		// -------------------------- placing -------------------------- //

		/**
		 * position a rect that will occupy space in the packer
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Boolean} isMaxYContained
		 */
		Item.prototype.positionPlaceRect = function( x, y, isMaxYOpen ) {
		  this.placeRect.x = this.getPlaceRectCoord( x, true );
		  this.placeRect.y = this.getPlaceRectCoord( y, false, isMaxYOpen );
		};

		/**
		 * get x/y coordinate for place rect
		 * @param {Number} coord - x or y
		 * @param {Boolean} isX
		 * @param {Boolean} isMaxOpen - does not limit value to outer bound
		 * @returns {Number} coord - processed x or y
		 */
		Item.prototype.getPlaceRectCoord = function( coord, isX, isMaxOpen ) {
		  var measure = isX ? 'Width' : 'Height';
		  var size = this.size[ 'outer' + measure ];
		  var segment = this.layout[ isX ? 'columnWidth' : 'rowHeight' ];
		  var parentSize = this.layout.size[ 'inner' + measure ];

		  // additional parentSize calculations for Y
		  if ( !isX ) {
		    parentSize = Math.max( parentSize, this.layout.maxY );
		    // prevent gutter from bumping up height when non-vertical grid
		    if ( !this.layout.rowHeight ) {
		      parentSize -= this.layout.gutter;
		    }
		  }

		  var max;

		  if ( segment ) {
		    segment += this.layout.gutter;
		    // allow for last column to reach the edge
		    parentSize += isX ? this.layout.gutter : 0;
		    // snap to closest segment
		    coord = Math.round( coord / segment );
		    // contain to outer bound
		    // contain non-growing bound, allow growing bound to grow
		    var mathMethod;
		    if ( this.layout.options.isHorizontal ) {
		      mathMethod = !isX ? 'floor' : 'ceil';
		    } else {
		      mathMethod = isX ? 'floor' : 'ceil';
		    }
		    var maxSegments = Math[ mathMethod ]( parentSize / segment );
		    maxSegments -= Math.ceil( size / segment );
		    max = maxSegments;
		  } else {
		    max = parentSize - size;
		  }

		  coord = isMaxOpen ? coord : Math.min( coord, max );
		  coord *= segment || 1;

		  return Math.max( 0, coord );
		};

		Item.prototype.copyPlaceRectPosition = function() {
		  this.rect.x = this.placeRect.x;
		  this.rect.y = this.placeRect.y;
		};

		// -----  ----- //

		// remove element from DOM
		Item.prototype.removeElem = function() {
		  this.element.parentNode.removeChild( this.element );
		  // add space back to packer
		  this.layout.packer.addSpace( this.rect );
		  this.emitEvent( 'remove', [ this ] );
		};

		// -----  ----- //

		return Item;

		}

		// -------------------------- transport -------------------------- //
		if ( true ) {
		  // CommonJS
		  module.exports = itemDefinition(
		    __webpack_require__(92),
		    __webpack_require__(93),
		    __webpack_require__(100)
		  );
		} else if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [
		      'get-style-property/get-style-property',
		      'outlayer/outlayer',
		      './rect'
		    ],
		    itemDefinition );
		} else {
		  // browser global
		  window.Packery.Item = itemDefinition(
		    window.getStyleProperty,
		    window.Outlayer,
		    window.Packery.Rect
		  );
		}

		})( window );


	/***/ }),
	/* 103 */
	/***/ (function(module, exports, __webpack_require__) {

		/*!
		 * imagesLoaded v3.1.8
		 * JavaScript is all like "You images are done yet or what?"
		 * MIT License
		 */

		( function( window, factory ) { 'use strict';
		  // universal module definition

		  /*global define: false, module: false, require: false */

		  if ( true ) {
		    // CommonJS
		    module.exports = factory(
		      window,
		      __webpack_require__(104),
		      __webpack_require__(105)
		    );
		  } else if ( typeof define === 'function' && define.amd ) {
		    // AMD
		    define( [
		      'eventEmitter/EventEmitter',
		      'eventie/eventie'
		    ], function( EventEmitter, eventie ) {
		      return factory( window, EventEmitter, eventie );
		    });
		  } else {
		    // browser global
		    window.imagesLoaded = factory(
		      window,
		      window.EventEmitter,
		      window.eventie
		    );
		  }

		})( window,

		// --------------------------  factory -------------------------- //

		function factory( window, EventEmitter, eventie ) {

		'use strict';

		var $ = window.jQuery;
		var console = window.console;
		var hasConsole = typeof console !== 'undefined';

		// -------------------------- helpers -------------------------- //

		// extend objects
		function extend( a, b ) {
		  for ( var prop in b ) {
		    a[ prop ] = b[ prop ];
		  }
		  return a;
		}

		var objToString = Object.prototype.toString;
		function isArray( obj ) {
		  return objToString.call( obj ) === '[object Array]';
		}

		// turn element or nodeList into an array
		function makeArray( obj ) {
		  var ary = [];
		  if ( isArray( obj ) ) {
		    // use object if already an array
		    ary = obj;
		  } else if ( typeof obj.length === 'number' ) {
		    // convert nodeList to array
		    for ( var i=0, len = obj.length; i < len; i++ ) {
		      ary.push( obj[i] );
		    }
		  } else {
		    // array of single index
		    ary.push( obj );
		  }
		  return ary;
		}

		  // -------------------------- imagesLoaded -------------------------- //

		  /**
		   * @param {Array, Element, NodeList, String} elem
		   * @param {Object or Function} options - if function, use as callback
		   * @param {Function} onAlways - callback function
		   */
		  function ImagesLoaded( elem, options, onAlways ) {
		    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
		    if ( !( this instanceof ImagesLoaded ) ) {
		      return new ImagesLoaded( elem, options );
		    }
		    // use elem as selector string
		    if ( typeof elem === 'string' ) {
		      elem = document.querySelectorAll( elem );
		    }

		    this.elements = makeArray( elem );
		    this.options = extend( {}, this.options );

		    if ( typeof options === 'function' ) {
		      onAlways = options;
		    } else {
		      extend( this.options, options );
		    }

		    if ( onAlways ) {
		      this.on( 'always', onAlways );
		    }

		    this.getImages();

		    if ( $ ) {
		      // add jQuery Deferred object
		      this.jqDeferred = new $.Deferred();
		    }

		    // HACK check async to allow time to bind listeners
		    var _this = this;
		    setTimeout( function() {
		      _this.check();
		    });
		  }

		  ImagesLoaded.prototype = new EventEmitter();

		  ImagesLoaded.prototype.options = {};

		  ImagesLoaded.prototype.getImages = function() {
		    this.images = [];

		    // filter & find items if we have an item selector
		    for ( var i=0, len = this.elements.length; i < len; i++ ) {
		      var elem = this.elements[i];
		      // filter siblings
		      if ( elem.nodeName === 'IMG' ) {
		        this.addImage( elem );
		      }
		      // find children
		      // no non-element nodes, #143
		      var nodeType = elem.nodeType;
		      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
		        continue;
		      }
		      var childElems = elem.querySelectorAll('img');
		      // concat childElems to filterFound array
		      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
		        var img = childElems[j];
		        this.addImage( img );
		      }
		    }
		  };

		  /**
		   * @param {Image} img
		   */
		  ImagesLoaded.prototype.addImage = function( img ) {
		    var loadingImage = new LoadingImage( img );
		    this.images.push( loadingImage );
		  };

		  ImagesLoaded.prototype.check = function() {
		    var _this = this;
		    var checkedCount = 0;
		    var length = this.images.length;
		    this.hasAnyBroken = false;
		    // complete if no images
		    if ( !length ) {
		      this.complete();
		      return;
		    }

		    function onConfirm( image, message ) {
		      if ( _this.options.debug && hasConsole ) {
		        console.log( 'confirm', image, message );
		      }

		      _this.progress( image );
		      checkedCount++;
		      if ( checkedCount === length ) {
		        _this.complete();
		      }
		      return true; // bind once
		    }

		    for ( var i=0; i < length; i++ ) {
		      var loadingImage = this.images[i];
		      loadingImage.on( 'confirm', onConfirm );
		      loadingImage.check();
		    }
		  };

		  ImagesLoaded.prototype.progress = function( image ) {
		    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
		    // HACK - Chrome triggers event before object properties have changed. #83
		    var _this = this;
		    setTimeout( function() {
		      _this.emit( 'progress', _this, image );
		      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
		        _this.jqDeferred.notify( _this, image );
		      }
		    });
		  };

		  ImagesLoaded.prototype.complete = function() {
		    var eventName = this.hasAnyBroken ? 'fail' : 'done';
		    this.isComplete = true;
		    var _this = this;
		    // HACK - another setTimeout so that confirm happens after progress
		    setTimeout( function() {
		      _this.emit( eventName, _this );
		      _this.emit( 'always', _this );
		      if ( _this.jqDeferred ) {
		        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
		        _this.jqDeferred[ jqMethod ]( _this );
		      }
		    });
		  };

		  // -------------------------- jquery -------------------------- //

		  if ( $ ) {
		    $.fn.imagesLoaded = function( options, callback ) {
		      var instance = new ImagesLoaded( this, options, callback );
		      return instance.jqDeferred.promise( $(this) );
		    };
		  }


		  // --------------------------  -------------------------- //

		  function LoadingImage( img ) {
		    this.img = img;
		  }

		  LoadingImage.prototype = new EventEmitter();

		  LoadingImage.prototype.check = function() {
		    // first check cached any previous images that have same src
		    var resource = cache[ this.img.src ] || new Resource( this.img.src );
		    if ( resource.isConfirmed ) {
		      this.confirm( resource.isLoaded, 'cached was confirmed' );
		      return;
		    }

		    // If complete is true and browser supports natural sizes,
		    // try to check for image status manually.
		    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
		      // report based on naturalWidth
		      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
		      return;
		    }

		    // If none of the checks above matched, simulate loading on detached element.
		    var _this = this;
		    resource.on( 'confirm', function( resrc, message ) {
		      _this.confirm( resrc.isLoaded, message );
		      return true;
		    });

		    resource.check();
		  };

		  LoadingImage.prototype.confirm = function( isLoaded, message ) {
		    this.isLoaded = isLoaded;
		    this.emit( 'confirm', this, message );
		  };

		  // -------------------------- Resource -------------------------- //

		  // Resource checks each src, only once
		  // separate class from LoadingImage to prevent memory leaks. See #115

		  var cache = {};

		  function Resource( src ) {
		    this.src = src;
		    // add to cache
		    cache[ src ] = this;
		  }

		  Resource.prototype = new EventEmitter();

		  Resource.prototype.check = function() {
		    // only trigger checking once
		    if ( this.isChecked ) {
		      return;
		    }
		    // simulate loading on detached element
		    var proxyImage = new Image();
		    eventie.bind( proxyImage, 'load', this );
		    eventie.bind( proxyImage, 'error', this );
		    proxyImage.src = this.src;
		    // set flag
		    this.isChecked = true;
		  };

		  // ----- events ----- //

		  // trigger specified handler for event type
		  Resource.prototype.handleEvent = function( event ) {
		    var method = 'on' + event.type;
		    if ( this[ method ] ) {
		      this[ method ]( event );
		    }
		  };

		  Resource.prototype.onload = function( event ) {
		    this.confirm( true, 'onload' );
		    this.unbindProxyEvents( event );
		  };

		  Resource.prototype.onerror = function( event ) {
		    this.confirm( false, 'onerror' );
		    this.unbindProxyEvents( event );
		  };

		  // ----- confirm ----- //

		  Resource.prototype.confirm = function( isLoaded, message ) {
		    this.isConfirmed = true;
		    this.isLoaded = isLoaded;
		    this.emit( 'confirm', this, message );
		  };

		  Resource.prototype.unbindProxyEvents = function( event ) {
		    eventie.unbind( event.target, 'load', this );
		    eventie.unbind( event.target, 'error', this );
		  };

		  // -----  ----- //

		  return ImagesLoaded;

		});


	/***/ }),
	/* 104 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * EventEmitter v4.2.11 - git.io/ee
		 * Unlicense - http://unlicense.org/
		 * Oliver Caldwell - http://oli.me.uk/
		 * @preserve
		 */

		;(function () {
		    'use strict';

		    /**
		     * Class for managing events.
		     * Can be extended to provide event functionality in other classes.
		     *
		     * @class EventEmitter Manages event registering and emitting.
		     */
		    function EventEmitter() {}

		    // Shortcuts to improve speed and size
		    var proto = EventEmitter.prototype;
		    var exports = this;
		    var originalGlobalValue = exports.EventEmitter;

		    /**
		     * Finds the index of the listener for the event in its storage array.
		     *
		     * @param {Function[]} listeners Array of listeners to search through.
		     * @param {Function} listener Method to look for.
		     * @return {Number} Index of the specified listener, -1 if not found
		     * @api private
		     */
		    function indexOfListener(listeners, listener) {
		        var i = listeners.length;
		        while (i--) {
		            if (listeners[i].listener === listener) {
		                return i;
		            }
		        }

		        return -1;
		    }

		    /**
		     * Alias a method while keeping the context correct, to allow for overwriting of target method.
		     *
		     * @param {String} name The name of the target method.
		     * @return {Function} The aliased method
		     * @api private
		     */
		    function alias(name) {
		        return function aliasClosure() {
		            return this[name].apply(this, arguments);
		        };
		    }

		    /**
		     * Returns the listener array for the specified event.
		     * Will initialise the event object and listener arrays if required.
		     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
		     * Each property in the object response is an array of listener functions.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Function[]|Object} All listener functions for the event.
		     */
		    proto.getListeners = function getListeners(evt) {
		        var events = this._getEvents();
		        var response;
		        var key;

		        // Return a concatenated array of all matching events if
		        // the selector is a regular expression.
		        if (evt instanceof RegExp) {
		            response = {};
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    response[key] = events[key];
		                }
		            }
		        }
		        else {
		            response = events[evt] || (events[evt] = []);
		        }

		        return response;
		    };

		    /**
		     * Takes a list of listener objects and flattens it into a list of listener functions.
		     *
		     * @param {Object[]} listeners Raw listener objects.
		     * @return {Function[]} Just the listener functions.
		     */
		    proto.flattenListeners = function flattenListeners(listeners) {
		        var flatListeners = [];
		        var i;

		        for (i = 0; i < listeners.length; i += 1) {
		            flatListeners.push(listeners[i].listener);
		        }

		        return flatListeners;
		    };

		    /**
		     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Object} All listener functions for an event in an object.
		     */
		    proto.getListenersAsObject = function getListenersAsObject(evt) {
		        var listeners = this.getListeners(evt);
		        var response;

		        if (listeners instanceof Array) {
		            response = {};
		            response[evt] = listeners;
		        }

		        return response || listeners;
		    };

		    /**
		     * Adds a listener function to the specified event.
		     * The listener will not be added if it is a duplicate.
		     * If the listener returns true then it will be removed after it is called.
		     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListener = function addListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var listenerIsWrapped = typeof listener === 'object';
		        var key;

		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
		                listeners[key].push(listenerIsWrapped ? listener : {
		                    listener: listener,
		                    once: false
		                });
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of addListener
		     */
		    proto.on = alias('addListener');

		    /**
		     * Semi-alias of addListener. It will add a listener that will be
		     * automatically removed after its first execution.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addOnceListener = function addOnceListener(evt, listener) {
		        return this.addListener(evt, {
		            listener: listener,
		            once: true
		        });
		    };

		    /**
		     * Alias of addOnceListener.
		     */
		    proto.once = alias('addOnceListener');

		    /**
		     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
		     * You need to tell it what event names should be matched by a regex.
		     *
		     * @param {String} evt Name of the event to create.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvent = function defineEvent(evt) {
		        this.getListeners(evt);
		        return this;
		    };

		    /**
		     * Uses defineEvent to define multiple events.
		     *
		     * @param {String[]} evts An array of event names to define.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvents = function defineEvents(evts) {
		        for (var i = 0; i < evts.length; i += 1) {
		            this.defineEvent(evts[i]);
		        }
		        return this;
		    };

		    /**
		     * Removes a listener function from the specified event.
		     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to remove the listener from.
		     * @param {Function} listener Method to remove from the event.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListener = function removeListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var index;
		        var key;

		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key)) {
		                index = indexOfListener(listeners[key], listener);

		                if (index !== -1) {
		                    listeners[key].splice(index, 1);
		                }
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of removeListener
		     */
		    proto.off = alias('removeListener');

		    /**
		     * Adds listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
		     * You can also pass it a regular expression to add the array of listeners to all events that match it.
		     * Yeah, this function does quite a bit. That's probably a bad thing.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListeners = function addListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(false, evt, listeners);
		    };

		    /**
		     * Removes listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be removed.
		     * You can also pass it a regular expression to remove the listeners from all events that match it.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListeners = function removeListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(true, evt, listeners);
		    };

		    /**
		     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
		     * The first argument will determine if the listeners are removed (true) or added (false).
		     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be added/removed.
		     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
		     *
		     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		        var i;
		        var value;
		        var single = remove ? this.removeListener : this.addListener;
		        var multiple = remove ? this.removeListeners : this.addListeners;

		        // If evt is an object then pass each of its properties to this method
		        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
		            for (i in evt) {
		                if (evt.hasOwnProperty(i) && (value = evt[i])) {
		                    // Pass the single listener straight through to the singular method
		                    if (typeof value === 'function') {
		                        single.call(this, i, value);
		                    }
		                    else {
		                        // Otherwise pass back to the multiple function
		                        multiple.call(this, i, value);
		                    }
		                }
		            }
		        }
		        else {
		            // So evt must be a string
		            // And listeners must be an array of listeners
		            // Loop over it and pass each one to the multiple method
		            i = listeners.length;
		            while (i--) {
		                single.call(this, evt, listeners[i]);
		            }
		        }

		        return this;
		    };

		    /**
		     * Removes all listeners from a specified event.
		     * If you do not specify an event then all listeners will be removed.
		     * That means every event will be emptied.
		     * You can also pass a regex to remove all events that match it.
		     *
		     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeEvent = function removeEvent(evt) {
		        var type = typeof evt;
		        var events = this._getEvents();
		        var key;

		        // Remove different things depending on the state of evt
		        if (type === 'string') {
		            // Remove all listeners for the specified event
		            delete events[evt];
		        }
		        else if (evt instanceof RegExp) {
		            // Remove all events matching the regex.
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    delete events[key];
		                }
		            }
		        }
		        else {
		            // Remove all listeners in all events
		            delete this._events;
		        }

		        return this;
		    };

		    /**
		     * Alias of removeEvent.
		     *
		     * Added to mirror the node API.
		     */
		    proto.removeAllListeners = alias('removeEvent');

		    /**
		     * Emits an event of your choice.
		     * When emitted, every listener attached to that event will be executed.
		     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
		     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
		     * So they will not arrive within the array on the other side, they will be separate.
		     * You can also pass a regular expression to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {Array} [args] Optional array of arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emitEvent = function emitEvent(evt, args) {
		        var listenersMap = this.getListenersAsObject(evt);
		        var listeners;
		        var listener;
		        var i;
		        var key;
		        var response;

		        for (key in listenersMap) {
		            if (listenersMap.hasOwnProperty(key)) {
		                listeners = listenersMap[key].slice(0);
		                i = listeners.length;

		                while (i--) {
		                    // If the listener returns true then it shall be removed from the event
		                    // The function is executed either with a basic call or an apply if there is an args array
		                    listener = listeners[i];

		                    if (listener.once === true) {
		                        this.removeListener(evt, listener.listener);
		                    }

		                    response = listener.listener.apply(this, args || []);

		                    if (response === this._getOnceReturnValue()) {
		                        this.removeListener(evt, listener.listener);
		                    }
		                }
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of emitEvent
		     */
		    proto.trigger = alias('emitEvent');

		    /**
		     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
		     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {...*} Optional additional arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emit = function emit(evt) {
		        var args = Array.prototype.slice.call(arguments, 1);
		        return this.emitEvent(evt, args);
		    };

		    /**
		     * Sets the current value to check against when executing listeners. If a
		     * listeners return value matches the one set here then it will be removed
		     * after execution. This value defaults to true.
		     *
		     * @param {*} value The new value to check for when executing listeners.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.setOnceReturnValue = function setOnceReturnValue(value) {
		        this._onceReturnValue = value;
		        return this;
		    };

		    /**
		     * Fetches the current value to check against when executing listeners. If
		     * the listeners return value matches this one then it should be removed
		     * automatically. It will return true by default.
		     *
		     * @return {*|Boolean} The current value to check for or the default, true.
		     * @api private
		     */
		    proto._getOnceReturnValue = function _getOnceReturnValue() {
		        if (this.hasOwnProperty('_onceReturnValue')) {
		            return this._onceReturnValue;
		        }
		        else {
		            return true;
		        }
		    };

		    /**
		     * Fetches the events object and creates one if required.
		     *
		     * @return {Object} The events storage object.
		     * @api private
		     */
		    proto._getEvents = function _getEvents() {
		        return this._events || (this._events = {});
		    };

		    /**
		     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
		     *
		     * @return {Function} Non conflicting EventEmitter class.
		     */
		    EventEmitter.noConflict = function noConflict() {
		        exports.EventEmitter = originalGlobalValue;
		        return EventEmitter;
		    };

		    // Expose the class either via AMD, CommonJS or the global object
		    if (true) {
		        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		            return EventEmitter;
		        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    }
		    else if (typeof module === 'object' && module.exports){
		        module.exports = EventEmitter;
		    }
		    else {
		        exports.EventEmitter = EventEmitter;
		    }
		}.call(this));


	/***/ }),
	/* 105 */
	/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * eventie v1.0.6
		 * event binding helper
		 *   eventie.bind( elem, 'click', myFn )
		 *   eventie.unbind( elem, 'click', myFn )
		 * MIT license
		 */

		/*jshint browser: true, undef: true, unused: true */
		/*global define: false, module: false */

		( function( window ) {

		'use strict';

		var docElem = document.documentElement;

		var bind = function() {};

		function getIEEvent( obj ) {
		  var event = window.event;
		  // add event.target
		  event.target = event.target || event.srcElement || obj;
		  return event;
		}

		if ( docElem.addEventListener ) {
		  bind = function( obj, type, fn ) {
		    obj.addEventListener( type, fn, false );
		  };
		} else if ( docElem.attachEvent ) {
		  bind = function( obj, type, fn ) {
		    obj[ type + fn ] = fn.handleEvent ?
		      function() {
		        var event = getIEEvent( obj );
		        fn.handleEvent.call( fn, event );
		      } :
		      function() {
		        var event = getIEEvent( obj );
		        fn.call( obj, event );
		      };
		    obj.attachEvent( "on" + type, obj[ type + fn ] );
		  };
		}

		var unbind = function() {};

		if ( docElem.removeEventListener ) {
		  unbind = function( obj, type, fn ) {
		    obj.removeEventListener( type, fn, false );
		  };
		} else if ( docElem.detachEvent ) {
		  unbind = function( obj, type, fn ) {
		    obj.detachEvent( "on" + type, obj[ type + fn ] );
		    try {
		      delete obj[ type + fn ];
		    } catch ( err ) {
		      // can't delete window object properties
		      obj[ type + fn ] = undefined;
		    }
		  };
		}

		var eventie = {
		  bind: bind,
		  unbind: unbind
		};

		// ----- module definition ----- //

		if ( true ) {
		  // AMD
		  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === 'object' ) {
		  // CommonJS
		  module.exports = eventie;
		} else {
		  // browser global
		  window.eventie = eventie;
		}

		})( window );


	/***/ }),
	/* 106 */
	/***/ (function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(107);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(109)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!../node_modules/postcss-loader/index.js!./react-square-cards.scss", function() {
					var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!../node_modules/postcss-loader/index.js!./react-square-cards.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ }),
	/* 107 */
	/***/ (function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(108)();
		// imports


		// module
		exports.push([module.id, ".react-square-card {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  box-sizing: border-box;\n  line-height: 0;\n  min-width: 100%;\n  max-width: 100%; }\n  .react-square-card .react-square-card-inner {\n    position: relative;\n    width: 100%;\n    height: 0%;\n    padding-top: 100%; }\n    .react-square-card .react-square-card-inner .react-square-card-innerer {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      line-height: 120%;\n      box-sizing: border-box;\n      padding: 5px; }\n      .react-square-card .react-square-card-inner .react-square-card-innerer .react-square-card-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box; }\n  .react-square-card.no-padding .react-square-card-inner .react-square-card-innerer {\n    padding: 0; }\n\n.react-square-cards-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  box-sizing: border-box; }\n  .react-square-cards-wrap .react-square-card {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    box-sizing: border-box;\n    line-height: 0;\n    min-width: 25%;\n    max-width: 25%; }\n    .react-square-cards-wrap .react-square-card .react-square-card-inner {\n      position: relative;\n      width: 100%;\n      height: 0%;\n      padding-top: 100%; }\n      .react-square-cards-wrap .react-square-card .react-square-card-inner .react-square-card-innerer {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        line-height: 120%;\n        box-sizing: border-box;\n        padding: 5px; }\n        .react-square-cards-wrap .react-square-card .react-square-card-inner .react-square-card-innerer .react-square-card-content {\n          position: relative;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box; }\n  .react-square-cards-wrap.padding-20 .react-square-card .react-square-card-inner .react-square-card-innerer {\n    padding: 10px; }\n  @media only screen and (max-width: 1399px) {\n    .react-square-cards-wrap .react-square-card {\n      min-width: 33.33333%;\n      max-width: 33.33333%; } }\n  @media only screen and (max-width: 1055px) {\n    .react-square-cards-wrap .react-square-card {\n      min-width: 50%;\n      max-width: 50%; } }\n  @media only screen and (max-width: 710px) {\n    .react-square-cards-wrap .react-square-card {\n      min-width: 100%;\n      max-width: 100%; }\n      .react-square-cards-wrap .react-square-card .react-square-card-inner {\n        position: static;\n        padding-top: 0;\n        height: auto; }\n        .react-square-cards-wrap .react-square-card .react-square-card-inner .react-square-card-innerer {\n          position: static;\n          bottom: inherit;\n          right: inherit; } }\n", ""]);

		// exports


	/***/ }),
	/* 108 */
	/***/ (function(module, exports) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];

			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};

			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};


	/***/ }),
	/* 109 */
	/***/ (function(module, exports, __webpack_require__) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];

		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}

			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();

			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

			var styles = listToStyles(list);
			addStylesToDom(styles, options);

			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}

		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}

		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}

		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}

		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}

		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}

		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}

		function addStyle(obj, options) {
			var styleElement, update, remove;

			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}

			update(obj);

			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}

		var replaceText = (function () {
			var textStore = [];

			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();

		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}

		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;

			if(media) {
				styleElement.setAttribute("media", media)
			}

			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}

		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;

			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}

			var blob = new Blob([css], { type: "text/css" });

			var oldSrc = linkElement.href;

			linkElement.href = URL.createObjectURL(blob);

			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}


	/***/ })
	/******/ ])))
	});
	;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(114);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(116);

	var ReactChildren = __webpack_require__(117);
	var ReactComponent = __webpack_require__(130);
	var ReactPureComponent = __webpack_require__(133);
	var ReactClass = __webpack_require__(134);
	var ReactDOMFactories = __webpack_require__(136);
	var ReactElement = __webpack_require__(121);
	var ReactPropTypes = __webpack_require__(141);
	var ReactVersion = __webpack_require__(146);

	var onlyChild = __webpack_require__(147);
	var warning = __webpack_require__(123);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var canDefineProperty = __webpack_require__(125);
	  var ReactElementValidator = __webpack_require__(137);
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	// TODO: Fix tests so that this deprecation warning doesn't cause failures.
	if (process.env.NODE_ENV !== 'production') {
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        process.env.NODE_ENV !== 'production' ? warning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.') : void 0;
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });
	  }
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(118);
	var ReactElement = __webpack_require__(121);

	var emptyFunction = __webpack_require__(124);
	var traverseAllChildren = __webpack_require__(127);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var invariant = __webpack_require__(120);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(116);

	var ReactCurrentOwner = __webpack_require__(122);

	var warning = __webpack_require__(123);
	var canDefineProperty = __webpack_require__(125);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(126);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(124);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var ReactCurrentOwner = __webpack_require__(122);
	var REACT_ELEMENT_TYPE = __webpack_require__(126);

	var getIteratorFn = __webpack_require__(128);
	var invariant = __webpack_require__(120);
	var KeyEscapeUtils = __webpack_require__(129);
	var warning = __webpack_require__(123);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var ReactNoopUpdateQueue = __webpack_require__(131);

	var canDefineProperty = __webpack_require__(125);
	var emptyObject = __webpack_require__(132);
	var invariant = __webpack_require__(120);
	var warning = __webpack_require__(123);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(123);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(116);

	var ReactComponent = __webpack_require__(130);
	var ReactNoopUpdateQueue = __webpack_require__(131);

	var emptyObject = __webpack_require__(132);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119),
	    _assign = __webpack_require__(116);

	var ReactComponent = __webpack_require__(130);
	var ReactElement = __webpack_require__(121);
	var ReactPropTypeLocationNames = __webpack_require__(135);
	var ReactNoopUpdateQueue = __webpack_require__(131);

	var emptyObject = __webpack_require__(132);
	var invariant = __webpack_require__(120);
	var warning = __webpack_require__(123);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	var didWarnDeprecated = false;

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component') : void 0;
	      didWarnDeprecated = true;
	    }

	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(121);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(137);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(122);
	var ReactComponentTreeHook = __webpack_require__(138);
	var ReactElement = __webpack_require__(121);

	var checkReactTypeSpec = __webpack_require__(139);

	var canDefineProperty = __webpack_require__(125);
	var getIteratorFn = __webpack_require__(128);
	var warning = __webpack_require__(123);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }

	        var sourceInfo = getSourceInfoErrorAddendum(props);
	        if (sourceInfo) {
	          info += sourceInfo;
	        } else {
	          info += getDeclarationErrorAddendum();
	        }

	        info += ReactComponentTreeHook.getCurrentStackAddendum();

	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var ReactCurrentOwner = __webpack_require__(122);

	var invariant = __webpack_require__(120);
	var warning = __webpack_require__(123);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var ReactPropTypeLocationNames = __webpack_require__(135);
	var ReactPropTypesSecret = __webpack_require__(140);

	var invariant = __webpack_require__(120);
	var warning = __webpack_require__(123);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(138);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(138);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(121),
	    isValidElement = _require.isValidElement;

	var factory = __webpack_require__(142);

	module.exports = factory(isValidElement);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(143);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(124);
	var invariant = __webpack_require__(120);
	var warning = __webpack_require__(123);

	var ReactPropTypesSecret = __webpack_require__(144);
	var checkPropTypes = __webpack_require__(145);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(120);
	  var warning = __webpack_require__(123);
	  var ReactPropTypesSecret = __webpack_require__(144);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.5.4';

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(119);

	var ReactElement = __webpack_require__(121);

	var invariant = __webpack_require__(120);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ })
/******/ ])
});
;