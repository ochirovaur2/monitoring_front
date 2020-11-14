/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('lastIndexOf');

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = (NEGATIVE_ZERO || SLOPPY_METHOD) ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0)) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, { REPLACE_KEEPS_$0: REPLACE_KEEPS_$0 });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/parse-float.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/parse-float.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-version.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/v8-version.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-precision.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-precision.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");

var nativeToPrecision = 1.0.toPrecision;

var FORCED = fails(function () {
  // IE7-
  return nativeToPrecision.call(1, undefined) !== '1';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToPrecision.call({});
});

// `Number.prototype.toPrecision` method
// https://tc39.github.io/ecma262/#sec-number.prototype.toprecision
$({ target: 'Number', proto: true, forced: FORCED }, {
  toPrecision: function toPrecision(precision) {
    return precision === undefined
      ? nativeToPrecision.call(thisNumberValue(this))
      : nativeToPrecision.call(thisNumberValue(this), precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/parse-float */ "./node_modules/core-js/internals/parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (reason.REPLACE_KEEPS_$0 || (typeof replaceValue === 'string' && replaceValue.indexOf('$0') === -1)) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagcanvas.js */ "./src/js/tagcanvas.js");

// import jQuery from "jquery";


window.onload = function () {
  var flag = true;
  var timerId = null;

  function sendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'get_data', true);
    xhr.send(); // (1)

    xhr.onreadystatechange = function () {
      // (3)
      if (xhr.readyState != 4) return;
      console.log(1);

      if (xhr.status == 200) {
        var sphereTags = document.getElementById('tagsUl');
        sphereTags.innerHTML = "";
        var response = JSON.parse(xhr.responseText);

        for (var component in response) {
          var markup = '<li><a href="http://www.google.com" target="_blank" class="a-little-big-size color-yellow">' + component + ': ' + response[component] + '</a></li>';
          sphereTags.insertAdjacentHTML('afterbegin', markup);
        }
      } else {
        console.log(xhr.status + ': ' + xhr.statusText);
      }
    };

    TagCanvas.Reload("myCanvas");
  }

  setInterval(sendRequest, 6000);
  TagCanvas.Start('myCanvas', 'tags', {
    textColour: null,
    outlineColour: 'white',
    reverse: true,
    depth: 0.7,
    maxSpeed: 0.0015,
    dragControl: true,
    initial: [0.5, -0.9],
    weight: true,
    decel: 1,
    outlineRadius: 10,
    offsetY: -90 // stretchY: 0.5

  });
};

/***/ }),

/***/ "./src/js/tagcanvas.js":
/*!*****************************!*\
  !*** ./src/js/tagcanvas.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_to_precision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.to-precision */ "./node_modules/core-js/modules/es.number.to-precision.js");
/* harmony import */ var core_js_modules_es_number_to_precision__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_precision__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23__);

























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (C) 2010-2015 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TagCanvas 2.9
 * For more information, please contact <graham@goat1000.com>
 */
(function () {
  "use strict";

  var i,
      j,
      abs = Math.abs,
      sin = Math.sin,
      cos = Math.cos,
      max = Math.max,
      min = Math.min,
      ceil = Math.ceil,
      sqrt = Math.sqrt,
      pow = Math.pow,
      hexlookup3 = {},
      hexlookup2 = {},
      hexlookup1 = {
    0: "0,",
    1: "17,",
    2: "34,",
    3: "51,",
    4: "68,",
    5: "85,",
    6: "102,",
    7: "119,",
    8: "136,",
    9: "153,",
    a: "170,",
    A: "170,",
    b: "187,",
    B: "187,",
    c: "204,",
    C: "204,",
    d: "221,",
    D: "221,",
    e: "238,",
    E: "238,",
    f: "255,",
    F: "255,"
  },
      Oproto,
      Tproto,
      TCproto,
      Mproto,
      Vproto,
      TSproto,
      TCVproto,
      doc = document,
      ocanvas,
      handlers = {};

  for (i = 0; i < 256; ++i) {
    j = i.toString(16);
    if (i < 16) j = '0' + j;
    hexlookup2[j] = hexlookup2[j.toUpperCase()] = i.toString() + ',';
  }

  function Defined(d) {
    return typeof d != 'undefined';
  }

  function IsObject(o) {
    return _typeof(o) == 'object' && o != null;
  }

  function Clamp(v, mn, mx) {
    return isNaN(v) ? mx : min(mx, max(mn, v));
  }

  function Nop() {
    return false;
  }

  function TimeNow() {
    return new Date().valueOf();
  }

  function SortList(l, f) {
    var nl = [],
        tl = l.length,
        i;

    for (i = 0; i < tl; ++i) {
      nl.push(l[i]);
    }

    nl.sort(f);
    return nl;
  }

  function Shuffle(a) {
    var i = a.length - 1,
        t,
        p;

    while (i) {
      p = ~~(Math.random() * i);
      t = a[i];
      a[i] = a[p];
      a[p] = t;
      --i;
    }
  }

  function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  Vproto = Vector.prototype;

  Vproto.length = function () {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };

  Vproto.dot = function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  };

  Vproto.cross = function (v) {
    var x = this.y * v.z - this.z * v.y,
        y = this.z * v.x - this.x * v.z,
        z = this.x * v.y - this.y * v.x;
    return new Vector(x, y, z);
  };

  Vproto.angle = function (v) {
    var dot = this.dot(v),
        ac;
    if (dot == 0) return Math.PI / 2.0;
    ac = dot / (this.length() * v.length());
    if (ac >= 1) return 0;
    if (ac <= -1) return Math.PI;
    return Math.acos(ac);
  };

  Vproto.unit = function () {
    var l = this.length();
    return new Vector(this.x / l, this.y / l, this.z / l);
  };

  function MakeVector(lg, lt) {
    lt = lt * Math.PI / 180;
    lg = lg * Math.PI / 180;
    var x = sin(lg) * cos(lt),
        y = -sin(lt),
        z = -cos(lg) * cos(lt);
    return new Vector(x, y, z);
  }

  function Matrix(a) {
    this[1] = {
      1: a[0],
      2: a[1],
      3: a[2]
    };
    this[2] = {
      1: a[3],
      2: a[4],
      3: a[5]
    };
    this[3] = {
      1: a[6],
      2: a[7],
      3: a[8]
    };
  }

  Mproto = Matrix.prototype;

  Matrix.Identity = function () {
    return new Matrix([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  };

  Matrix.Rotation = function (angle, u) {
    var sina = sin(angle),
        cosa = cos(angle),
        mcos = 1 - cosa;
    return new Matrix([cosa + pow(u.x, 2) * mcos, u.x * u.y * mcos - u.z * sina, u.x * u.z * mcos + u.y * sina, u.y * u.x * mcos + u.z * sina, cosa + pow(u.y, 2) * mcos, u.y * u.z * mcos - u.x * sina, u.z * u.x * mcos - u.y * sina, u.z * u.y * mcos + u.x * sina, cosa + pow(u.z, 2) * mcos]);
  };

  Mproto.mul = function (m) {
    var a = [],
        i,
        j,
        mmatrix = m.xform ? 1 : 0;

    for (i = 1; i <= 3; ++i) {
      for (j = 1; j <= 3; ++j) {
        if (mmatrix) a.push(this[i][1] * m[1][j] + this[i][2] * m[2][j] + this[i][3] * m[3][j]);else a.push(this[i][j] * m);
      }
    }

    return new Matrix(a);
  };

  Mproto.xform = function (p) {
    var a = {},
        x = p.x,
        y = p.y,
        z = p.z;
    a.x = x * this[1][1] + y * this[2][1] + z * this[3][1];
    a.y = x * this[1][2] + y * this[2][2] + z * this[3][2];
    a.z = x * this[1][3] + y * this[2][3] + z * this[3][3];
    return a;
  };

  function PointsOnSphere(n, xr, yr, zr, magic) {
    var i,
        y,
        r,
        phi,
        pts = [],
        off = 2 / n,
        inc;
    inc = Math.PI * (3 - sqrt(5) + (parseFloat(magic) ? parseFloat(magic) : 0));

    for (i = 0; i < n; ++i) {
      y = i * off - 1 + off / 2;
      r = sqrt(1 - y * y);
      phi = i * inc;
      pts.push([cos(phi) * r * xr, y * yr, sin(phi) * r * zr]);
    }

    return pts;
  }

  function Cylinder(n, o, xr, yr, zr, magic) {
    var phi,
        pts = [],
        off = 2 / n,
        inc,
        i,
        j,
        k,
        l;
    inc = Math.PI * (3 - sqrt(5) + (parseFloat(magic) ? parseFloat(magic) : 0));

    for (i = 0; i < n; ++i) {
      j = i * off - 1 + off / 2;
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }

    return pts;
  }

  function Ring(o, n, xr, yr, zr, j) {
    var phi,
        pts = [],
        inc = Math.PI * 2 / n,
        i,
        k,
        l;

    for (i = 0; i < n; ++i) {
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }

    return pts;
  }

  function PointsOnCylinderV(n, xr, yr, zr, m) {
    return Cylinder(n, 0, xr, yr, zr, m);
  }

  function PointsOnCylinderH(n, xr, yr, zr, m) {
    return Cylinder(n, 1, xr, yr, zr, m);
  }

  function PointsOnRingV(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(0, n, xr, yr, zr, offset);
  }

  function PointsOnRingH(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(1, n, xr, yr, zr, offset);
  }

  function CentreImage(t) {
    var i = new Image();

    i.onload = function () {
      var dx = i.width / 2,
          dy = i.height / 2;

      t.centreFunc = function (c, w, h, cx, cy) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.globalAlpha = 1;
        c.drawImage(i, cx - dx, cy - dy);
      };
    };

    i.src = t.centreImage;
  }

  function SetAlpha(c, a) {
    var d = c,
        p1,
        p2,
        ae = (a * 1).toPrecision(3) + ')';

    if (c[0] === '#') {
      if (!hexlookup3[c]) if (c.length === 4) hexlookup3[c] = 'rgba(' + hexlookup1[c[1]] + hexlookup1[c[2]] + hexlookup1[c[3]];else hexlookup3[c] = 'rgba(' + hexlookup2[c.substr(1, 2)] + hexlookup2[c.substr(3, 2)] + hexlookup2[c.substr(5, 2)];
      d = hexlookup3[c] + ae;
    } else if (c.substr(0, 4) === 'rgb(' || c.substr(0, 4) === 'hsl(') {
      d = c.replace('(', 'a(').replace(')', ',' + ae);
    } else if (c.substr(0, 5) === 'rgba(' || c.substr(0, 5) === 'hsla(') {
      p1 = c.lastIndexOf(',') + 1, p2 = c.indexOf(')');
      a *= parseFloat(c.substring(p1, p2));
      d = c.substr(0, p1) + a.toPrecision(3) + ')';
    }

    return d;
  }

  function NewCanvas(w, h) {
    // if using excanvas, give up now
    if (window.G_vmlCanvasManager) return null;
    var c = doc.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  } // I think all browsers pass this test now...


  function ShadowAlphaBroken() {
    var cv = NewCanvas(3, 3),
        c,
        i;
    if (!cv) return false;
    c = cv.getContext('2d');
    c.strokeStyle = '#000';
    c.shadowColor = '#fff';
    c.shadowBlur = 3;
    c.globalAlpha = 0;
    c.strokeRect(2, 2, 2, 2);
    c.globalAlpha = 1;
    i = c.getImageData(2, 2, 1, 1);
    cv = null;
    return i.data[0] > 0;
  }

  function SetGradient(c, l, o, g) {
    var gd = c.createLinearGradient(0, 0, l, 0),
        i;

    for (i in g) {
      gd.addColorStop(1 - i, g[i]);
    }

    c.fillStyle = gd;
    c.fillRect(0, o, l, 1);
  }

  function FindGradientColour(tc, p, r) {
    var l = 1024,
        h = 1,
        gl = tc.weightGradient,
        cv,
        c,
        i,
        d;

    if (tc.gCanvas) {
      c = tc.gCanvas.getContext('2d');
      h = tc.gCanvas.height;
    } else {
      if (IsObject(gl[0])) h = gl.length;else gl = [gl];
      tc.gCanvas = cv = NewCanvas(l, h);
      if (!cv) return null;
      c = cv.getContext('2d');

      for (i = 0; i < h; ++i) {
        SetGradient(c, l, i, gl[i]);
      }
    }

    r = max(min(r || 0, h - 1), 0);
    d = c.getImageData(~~((l - 1) * p), r, 1, 1).data;
    return 'rgba(' + d[0] + ',' + d[1] + ',' + d[2] + ',' + d[3] / 255 + ')';
  }

  function TextSet(ctxt, font, colour, strings, padx, pady, shadowColour, shadowBlur, shadowOffsets, maxWidth, widths, align) {
    var xo = padx + (shadowBlur || 0) + (shadowOffsets.length && shadowOffsets[0] < 0 ? abs(shadowOffsets[0]) : 0),
        yo = pady + (shadowBlur || 0) + (shadowOffsets.length && shadowOffsets[1] < 0 ? abs(shadowOffsets[1]) : 0),
        i,
        xc;
    ctxt.font = font;
    ctxt.textBaseline = 'top';
    ctxt.fillStyle = colour;
    shadowColour && (ctxt.shadowColor = shadowColour);
    shadowBlur && (ctxt.shadowBlur = shadowBlur);
    shadowOffsets.length && (ctxt.shadowOffsetX = shadowOffsets[0], ctxt.shadowOffsetY = shadowOffsets[1]);

    for (i = 0; i < strings.length; ++i) {
      xc = 0;

      if (widths) {
        if ('right' == align) {
          xc = maxWidth - widths[i];
        } else if ('centre' == align) {
          xc = (maxWidth - widths[i]) / 2;
        }
      }

      ctxt.fillText(strings[i], xo + xc, yo);
      yo += parseInt(font);
    }
  }

  function RRect(c, x, y, w, h, r, s) {
    if (r) {
      c.beginPath();
      c.moveTo(x, y + h - r);
      c.arcTo(x, y, x + r, y, r);
      c.arcTo(x + w, y, x + w, y + r, r);
      c.arcTo(x + w, y + h, x + w - r, y + h, r);
      c.arcTo(x, y + h, x, y + h - r, r);
      c.closePath();
      c[s ? 'stroke' : 'fill']();
    } else {
      c[s ? 'strokeRect' : 'fillRect'](x, y, w, h);
    }
  }

  function TextCanvas(strings, font, w, h, maxWidth, stringWidths, align, valign, scale) {
    this.strings = strings;
    this.font = font;
    this.width = w;
    this.height = h;
    this.maxWidth = maxWidth;
    this.stringWidths = stringWidths;
    this.align = align;
    this.valign = valign;
    this.scale = scale;
  }

  TCVproto = TextCanvas.prototype;

  TCVproto.SetImage = function (image, w, h, position, padding, align, valign, scale) {
    this.image = image;
    this.iwidth = w * this.scale;
    this.iheight = h * this.scale;
    this.ipos = position;
    this.ipad = padding * this.scale;
    this.iscale = scale;
    this.ialign = align;
    this.ivalign = valign;
  };

  TCVproto.Align = function (size, space, a) {
    var pos = 0;
    if (a == 'right' || a == 'bottom') pos = space - size;else if (a != 'left' && a != 'top') pos = (space - size) / 2;
    return pos;
  };

  TCVproto.Create = function (colour, bgColour, bgOutline, bgOutlineThickness, shadowColour, shadowBlur, shadowOffsets, padding, radius) {
    var cv,
        cw,
        ch,
        c,
        x1,
        x2,
        y1,
        y2,
        offx,
        offy,
        ix,
        iy,
        iw,
        ih,
        rr,
        sox = abs(shadowOffsets[0]),
        soy = abs(shadowOffsets[1]),
        shadowcv,
        shadowc;
    padding = max(padding, sox + shadowBlur, soy + shadowBlur);
    x1 = 2 * (padding + bgOutlineThickness);
    y1 = 2 * (padding + bgOutlineThickness);
    cw = this.width + x1;
    ch = this.height + y1;
    offx = offy = padding + bgOutlineThickness;

    if (this.image) {
      ix = iy = padding + bgOutlineThickness;
      iw = this.iwidth;
      ih = this.iheight;

      if (this.ipos == 'top' || this.ipos == 'bottom') {
        if (iw < this.width) ix += this.Align(iw, this.width, this.ialign);else offx += this.Align(this.width, iw, this.align);
        if (this.ipos == 'top') offy += ih + this.ipad;else iy += this.height + this.ipad;
        cw = max(cw, iw + x1);
        ch += ih + this.ipad;
      } else {
        if (ih < this.height) iy += this.Align(ih, this.height, this.ivalign);else offy += this.Align(this.height, ih, this.valign);
        if (this.ipos == 'right') ix += this.width + this.ipad;else offx += iw + this.ipad;
        cw += iw + this.ipad;
        ch = max(ch, ih + y1);
      }
    }

    cv = NewCanvas(cw, ch);
    if (!cv) return null;
    x1 = y1 = bgOutlineThickness / 2;
    x2 = cw - bgOutlineThickness;
    y2 = ch - bgOutlineThickness;
    rr = min(radius, x2 / 2, y2 / 2);
    c = cv.getContext('2d');

    if (bgColour) {
      c.fillStyle = bgColour;
      RRect(c, x1, y1, x2, y2, rr);
    }

    if (bgOutlineThickness) {
      c.strokeStyle = bgOutline;
      c.lineWidth = bgOutlineThickness;
      RRect(c, x1, y1, x2, y2, rr, true);
    }

    if (shadowBlur || sox || soy) {
      // use a transparent canvas to draw on
      shadowcv = NewCanvas(cw, ch);

      if (shadowcv) {
        shadowc = c;
        c = shadowcv.getContext('2d');
      }
    } // don't use TextSet shadow support because it adds space for shadow


    TextSet(c, this.font, colour, this.strings, offx, offy, 0, 0, [], this.maxWidth, this.stringWidths, this.align);
    if (this.image) c.drawImage(this.image, ix, iy, iw, ih);

    if (shadowc) {
      // draw the text and image with the added shadow
      c = shadowc;
      shadowColour && (c.shadowColor = shadowColour);
      shadowBlur && (c.shadowBlur = shadowBlur);
      c.shadowOffsetX = shadowOffsets[0];
      c.shadowOffsetY = shadowOffsets[1];
      c.drawImage(shadowcv, 0, 0);
    }

    return cv;
  };

  function ExpandImage(i, w, h) {
    var cv = NewCanvas(w, h),
        c;
    if (!cv) return null;
    c = cv.getContext('2d');
    c.drawImage(i, (w - i.width) / 2, (h - i.height) / 2);
    return cv;
  }

  function ScaleImage(i, w, h) {
    var cv = NewCanvas(w, h),
        c;
    if (!cv) return null;
    c = cv.getContext('2d');
    c.drawImage(i, 0, 0, w, h);
    return cv;
  }

  function AddBackgroundToImage(i, w, h, scale, colour, othickness, ocolour, padding, radius, ofill) {
    var cw = w + (2 * padding + othickness) * scale,
        ch = h + (2 * padding + othickness) * scale,
        cv = NewCanvas(cw, ch),
        c,
        x1,
        y1,
        x2,
        y2,
        ocanvas,
        cc,
        rr;
    if (!cv) return null;
    othickness *= scale;
    radius *= scale;
    x1 = y1 = othickness / 2;
    x2 = cw - othickness;
    y2 = ch - othickness;
    padding = padding * scale + x1; // add space for outline

    c = cv.getContext('2d');
    rr = min(radius, x2 / 2, y2 / 2);

    if (colour) {
      c.fillStyle = colour;
      RRect(c, x1, y1, x2, y2, rr);
    }

    if (othickness) {
      c.strokeStyle = ocolour;
      c.lineWidth = othickness;
      RRect(c, x1, y1, x2, y2, rr, true);
    }

    if (ofill) {
      // use compositing to colour in the image and border
      ocanvas = NewCanvas(cw, ch);
      cc = ocanvas.getContext('2d');
      cc.drawImage(i, padding, padding, w, h);
      cc.globalCompositeOperation = 'source-in';
      cc.fillStyle = ocolour;
      cc.fillRect(0, 0, cw, ch);
      cc.globalCompositeOperation = 'destination-over';
      cc.drawImage(cv, 0, 0);
      cc.globalCompositeOperation = 'source-over';
      c.drawImage(ocanvas, 0, 0);
    } else {
      c.drawImage(i, padding, padding, i.width, i.height);
    }

    return {
      image: cv,
      width: cw / scale,
      height: ch / scale
    };
  }
  /**
   * Rounds off the corners of an image
   */


  function RoundImage(i, r, iw, ih, s) {
    var cv,
        c,
        r1 = parseFloat(r),
        l = max(iw, ih);
    cv = NewCanvas(iw, ih);
    if (!cv) return null;
    if (r.indexOf('%') > 0) r1 = l * r1 / 100;else r1 = r1 * s;
    c = cv.getContext('2d');
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = '#fff';

    if (r1 >= l / 2) {
      r1 = min(iw, ih) / 2;
      c.beginPath();
      c.moveTo(iw / 2, ih / 2);
      c.arc(iw / 2, ih / 2, r1, 0, 2 * Math.PI, false);
      c.fill();
      c.closePath();
    } else {
      r1 = min(iw / 2, ih / 2, r1);
      RRect(c, 0, 0, iw, ih, r1, true);
      c.fill();
    }

    c.globalCompositeOperation = 'source-in';
    c.drawImage(i, 0, 0, iw, ih);
    return cv;
  }
  /**
   * Creates a new canvas containing the image and its shadow
   * Returns an object containing the image and its dimensions at z=0
   */


  function AddShadowToImage(i, w, h, scale, sc, sb, so) {
    var sw = abs(so[0]),
        sh = abs(so[1]),
        cw = w + (sw > sb ? sw + sb : sb * 2) * scale,
        ch = h + (sh > sb ? sh + sb : sb * 2) * scale,
        xo = scale * ((sb || 0) + (so[0] < 0 ? sw : 0)),
        yo = scale * ((sb || 0) + (so[1] < 0 ? sh : 0)),
        cv,
        c;
    cv = NewCanvas(cw, ch);
    if (!cv) return null;
    c = cv.getContext('2d');
    sc && (c.shadowColor = sc);
    sb && (c.shadowBlur = sb * scale);
    so && (c.shadowOffsetX = so[0] * scale, c.shadowOffsetY = so[1] * scale);
    c.drawImage(i, xo, yo, w, h);
    return {
      image: cv,
      width: cw / scale,
      height: ch / scale
    };
  }

  function FindTextBoundingBox(s, f, ht) {
    var w = parseInt(s.toString().length * ht),
        h = parseInt(ht * 2 * s.length),
        cv = NewCanvas(w, h),
        c,
        idata,
        w1,
        h1,
        x,
        y,
        i,
        ex;
    if (!cv) return null;
    c = cv.getContext('2d');
    c.fillStyle = '#000';
    c.fillRect(0, 0, w, h);
    TextSet(c, ht + 'px ' + f, '#fff', s, 0, 0, 0, 0, [], 'centre');
    idata = c.getImageData(0, 0, w, h);
    w1 = idata.width;
    h1 = idata.height;
    ex = {
      min: {
        x: w1,
        y: h1
      },
      max: {
        x: -1,
        y: -1
      }
    };

    for (y = 0; y < h1; ++y) {
      for (x = 0; x < w1; ++x) {
        i = (y * w1 + x) * 4;

        if (idata.data[i + 1] > 0) {
          if (x < ex.min.x) ex.min.x = x;
          if (x > ex.max.x) ex.max.x = x;
          if (y < ex.min.y) ex.min.y = y;
          if (y > ex.max.y) ex.max.y = y;
        }
      }
    } // device pixels might not be css pixels


    if (w1 != w) {
      ex.min.x *= w / w1;
      ex.max.x *= w / w1;
    }

    if (h1 != h) {
      ex.min.y *= w / h1;
      ex.max.y *= w / h1;
    }

    cv = null;
    return ex;
  }

  function FixFont(f) {
    return "'" + f.replace(/(\'|\")/g, '').replace(/\s*,\s*/g, "', '") + "'";
  }

  function AddHandler(h, f, e) {
    e = e || doc;
    if (e.addEventListener) e.addEventListener(h, f, false);else e.attachEvent('on' + h, f);
  }

  function RemoveHandler(h, f, e) {
    e = e || doc;
    if (e.removeEventListener) e.removeEventListener(h, f);else e.detachEvent('on' + h, f);
  }

  function AddImage(i, o, t, tc) {
    var s = tc.imageScale,
        mscale,
        ic,
        bc,
        oc,
        iw,
        ih; // image not loaded, wait for image onload

    if (!o.complete) return AddHandler('load', function () {
      AddImage(i, o, t, tc);
    }, o);
    if (!i.complete) return AddHandler('load', function () {
      AddImage(i, o, t, tc);
    }, i); // Yes, this does look like nonsense, but it makes sure that both the
    // width and height are actually set and not just calculated. This is
    // required to keep proportional sizes when the images are hidden, so
    // the images can be used again for another cloud.

    o.width = o.width;
    o.height = o.height;

    if (s) {
      i.width = o.width * s;
      i.height = o.height * s;
    } // the standard width of the image, with imageScale applied


    t.iw = i.width;
    t.ih = i.height;

    if (tc.txtOpt) {
      ic = i;
      mscale = tc.zoomMax * tc.txtScale;
      iw = t.iw * mscale;
      ih = t.ih * mscale;

      if (iw < o.naturalWidth || ih < o.naturalHeight) {
        ic = ScaleImage(i, iw, ih);
        if (ic) t.fimage = ic;
      } else {
        iw = t.iw;
        ih = t.ih;
        mscale = 1;
      }

      if (parseFloat(tc.imageRadius)) t.image = t.fimage = i = RoundImage(t.image, tc.imageRadius, iw, ih, mscale);

      if (!t.HasText()) {
        if (tc.shadow) {
          ic = AddShadowToImage(t.image, iw, ih, mscale, tc.shadow, tc.shadowBlur, tc.shadowOffset);

          if (ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }

        if (tc.bgColour || tc.bgOutlineThickness) {
          bc = tc.bgColour == 'tag' ? GetProperty(t.a, 'background-color') : tc.bgColour;
          oc = tc.bgOutline == 'tag' ? GetProperty(t.a, 'color') : tc.bgOutline || tc.textColour;
          iw = t.fimage.width;
          ih = t.fimage.height;

          if (tc.outlineMethod == 'colour') {
            // create the outline version first, using the current image state
            ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc, tc.bgOutlineThickness, t.outline.colour, tc.padding, tc.bgRadius, 1);
            if (ic) t.oimage = ic.image;
          }

          ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc, tc.bgOutlineThickness, oc, tc.padding, tc.bgRadius);

          if (ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }

        if (tc.outlineMethod == 'size') {
          if (tc.outlineIncrease > 0) {
            t.iw += 2 * tc.outlineIncrease;
            t.ih += 2 * tc.outlineIncrease;
            iw = mscale * t.iw;
            ih = mscale * t.ih;
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ic;
            t.fimage = ExpandImage(t.fimage, t.oimage.width, t.oimage.height);
          } else {
            iw = mscale * (t.iw + 2 * tc.outlineIncrease);
            ih = mscale * (t.ih + 2 * tc.outlineIncrease);
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ExpandImage(ic, t.fimage.width, t.fimage.height);
          }
        }
      }
    }

    t.Init();
  }

  function GetProperty(e, p) {
    var dv = doc.defaultView,
        pc = p.replace(/\-([a-z])/g, function (a) {
      return a.charAt(1).toUpperCase();
    });
    return dv && dv.getComputedStyle && dv.getComputedStyle(e, null).getPropertyValue(p) || e.currentStyle && e.currentStyle[pc];
  }

  function FindWeight(a, wFrom, tHeight) {
    var w = 1,
        p;

    if (wFrom) {
      w = 1 * (a.getAttribute(wFrom) || tHeight);
    } else if (p = GetProperty(a, 'font-size')) {
      w = p.indexOf('px') > -1 && p.replace('px', '') * 1 || p.indexOf('pt') > -1 && p.replace('pt', '') * 1.25 || p * 3.3;
    }

    return w;
  }

  function EventToCanvasId(e) {
    return e.target && Defined(e.target.id) ? e.target.id : e.srcElement.parentNode.id;
  }

  function EventXY(e, c) {
    var xy,
        p,
        xmul = parseInt(GetProperty(c, 'width')) / c.width,
        ymul = parseInt(GetProperty(c, 'height')) / c.height;

    if (Defined(e.offsetX)) {
      xy = {
        x: e.offsetX,
        y: e.offsetY
      };
    } else {
      p = AbsPos(c.id);
      if (Defined(e.changedTouches)) e = e.changedTouches[0];
      if (e.pageX) xy = {
        x: e.pageX - p.x,
        y: e.pageY - p.y
      };
    }

    if (xy && xmul && ymul) {
      xy.x /= xmul;
      xy.y /= ymul;
    }

    return xy;
  }

  function MouseOut(e) {
    var cv = e.target || e.fromElement.parentNode,
        tc = TagCanvas.tc[cv.id];

    if (tc) {
      tc.mx = tc.my = -1;
      tc.UnFreeze();
      tc.EndDrag();
    }
  }

  function MouseMove(e) {
    var i,
        t = TagCanvas,
        tc,
        p,
        tg = EventToCanvasId(e);

    for (i in t.tc) {
      tc = t.tc[i];

      if (tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }

    if (tg && t.tc[tg]) {
      tc = t.tc[tg];

      if (p = EventXY(e, tc.canvas)) {
        tc.mx = p.x;
        tc.my = p.y;
        tc.Drag(e, p);
      }

      tc.drawn = 0;
    }
  }

  function MouseDown(e) {
    var t = TagCanvas,
        cb = doc.addEventListener ? 0 : 1,
        tg = EventToCanvasId(e);

    if (tg && e.button == cb && t.tc[tg]) {
      t.tc[tg].BeginDrag(e);
    }
  }

  function MouseUp(e) {
    var t = TagCanvas,
        cb = doc.addEventListener ? 0 : 1,
        tg = EventToCanvasId(e),
        tc;

    if (tg && e.button == cb && t.tc[tg]) {
      tc = t.tc[tg];
      MouseMove(e);
      if (!tc.EndDrag() && !tc.touchState) tc.Clicked(e);
    }
  }

  function TouchDown(e) {
    var tg = EventToCanvasId(e),
        tc = tg && TagCanvas.tc[tg],
        p;

    if (tc && e.changedTouches) {
      if (e.touches.length == 1 && tc.touchState == 0) {
        tc.touchState = 1;
        tc.BeginDrag(e);

        if (p = EventXY(e, tc.canvas)) {
          tc.mx = p.x;
          tc.my = p.y;
          tc.drawn = 0;
        }
      } else if (e.targetTouches.length == 2 && tc.pinchZoom) {
        tc.touchState = 3;
        tc.EndDrag();
        tc.BeginPinch(e);
      } else {
        tc.EndDrag();
        tc.EndPinch();
        tc.touchState = 0;
      }
    }
  }

  function TouchUp(e) {
    var tg = EventToCanvasId(e),
        tc = tg && TagCanvas.tc[tg];

    if (tc && e.changedTouches) {
      switch (tc.touchState) {
        case 1:
          tc.Draw();
          tc.Clicked();
          break;

        case 2:
          tc.EndDrag();
          break;

        case 3:
          tc.EndPinch();
      }

      tc.touchState = 0;
    }
  }

  function TouchMove(e) {
    var i,
        t = TagCanvas,
        tc,
        p,
        tg = EventToCanvasId(e);

    for (i in t.tc) {
      tc = t.tc[i];

      if (tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }

    tc = tg && t.tc[tg];

    if (tc && e.changedTouches && tc.touchState) {
      switch (tc.touchState) {
        case 1:
        case 2:
          if (p = EventXY(e, tc.canvas)) {
            tc.mx = p.x;
            tc.my = p.y;
            if (tc.Drag(e, p)) tc.touchState = 2;
          }

          break;

        case 3:
          tc.Pinch(e);
      }

      tc.drawn = 0;
    }
  }

  function MouseWheel(e) {
    var t = TagCanvas,
        tg = EventToCanvasId(e);

    if (tg && t.tc[tg]) {
      e.cancelBubble = true;
      e.returnValue = false;
      e.preventDefault && e.preventDefault();
      t.tc[tg].Wheel((e.wheelDelta || e.detail) > 0);
    }
  }

  function Scroll(e) {
    var i,
        t = TagCanvas;
    clearTimeout(t.scrollTimer);

    for (i in t.tc) {
      t.tc[i].Pause();
    }

    t.scrollTimer = setTimeout(function () {
      var i,
          t = TagCanvas;

      for (i in t.tc) {
        t.tc[i].Resume();
      }
    }, t.scrollPause);
  }

  function DrawCanvas() {
    DrawCanvasRAF(TimeNow());
  }

  function DrawCanvasRAF(t) {
    var tc = TagCanvas.tc,
        i;
    TagCanvas.NextFrame(TagCanvas.interval);
    t = t || TimeNow();

    for (i in tc) {
      tc[i].Draw(t);
    }
  }

  function AbsPos(id) {
    var e = doc.getElementById(id),
        r = e.getBoundingClientRect(),
        dd = doc.documentElement,
        b = doc.body,
        w = window,
        xs = w.pageXOffset || dd.scrollLeft,
        ys = w.pageYOffset || dd.scrollTop,
        xo = dd.clientLeft || b.clientLeft,
        yo = dd.clientTop || b.clientTop;
    return {
      x: r.left + xs - xo,
      y: r.top + ys - yo
    };
  }

  function Project(tc, p1, sx, sy) {
    var m = tc.radius * tc.z1 / (tc.z1 + tc.z2 + p1.z);
    return {
      x: p1.x * m * sx,
      y: p1.y * m * sy,
      z: p1.z,
      w: (tc.z1 - p1.z) / tc.z2
    };
  }
  /**
   * @constructor
   * for recursively splitting tag contents on <br> tags
   */


  function TextSplitter(e) {
    this.e = e;
    this.br = 0;
    this.line = [];
    this.text = [];
    this.original = e.innerText || e.textContent;
  }

  TSproto = TextSplitter.prototype;

  TSproto.Empty = function () {
    for (var i = 0; i < this.text.length; ++i) {
      if (this.text[i].length) return false;
    }

    return true;
  };

  TSproto.Lines = function (e) {
    var r = e ? 1 : 0,
        cn,
        cl,
        i;
    e = e || this.e;
    cn = e.childNodes;
    cl = cn.length;

    for (i = 0; i < cl; ++i) {
      if (cn[i].nodeName == 'BR') {
        this.text.push(this.line.join(' '));
        this.br = 1;
      } else if (cn[i].nodeType == 3) {
        if (this.br) {
          this.line = [cn[i].nodeValue];
          this.br = 0;
        } else {
          this.line.push(cn[i].nodeValue);
        }
      } else {
        this.Lines(cn[i]);
      }
    }

    r || this.br || this.text.push(this.line.join(' '));
    return this.text;
  };

  TSproto.SplitWidth = function (w, c, f, h) {
    var i,
        j,
        words,
        text = [];
    c.font = h + 'px ' + f;

    for (i = 0; i < this.text.length; ++i) {
      words = this.text[i].split(/\s+/);
      this.line = [words[0]];

      for (j = 1; j < words.length; ++j) {
        if (c.measureText(this.line.join(' ') + ' ' + words[j]).width > w) {
          text.push(this.line.join(' '));
          this.line = [words[j]];
        } else {
          this.line.push(words[j]);
        }
      }

      text.push(this.line.join(' '));
    }

    return this.text = text;
  };
  /**
   * @constructor
   */


  function Outline(tc, t) {
    this.ts = null;
    this.tc = tc;
    this.tag = t;
    this.x = this.y = this.w = this.h = this.sc = 1;
    this.z = 0;
    this.pulse = 1;
    this.pulsate = tc.pulsateTo < 1;
    this.colour = tc.outlineColour;
    this.adash = ~~tc.outlineDash;
    this.agap = ~~tc.outlineDashSpace || this.adash;
    this.aspeed = tc.outlineDashSpeed * 1;
    if (this.colour == 'tag') this.colour = GetProperty(t.a, 'color');else if (this.colour == 'tagbg') this.colour = GetProperty(t.a, 'background-color');
    this.Draw = this.pulsate ? this.DrawPulsate : this.DrawSimple;
    this.radius = tc.outlineRadius | 0;
    this.SetMethod(tc.outlineMethod);
  }

  Oproto = Outline.prototype;

  Oproto.SetMethod = function (om) {
    var methods = {
      block: ['PreDraw', 'DrawBlock'],
      colour: ['PreDraw', 'DrawColour'],
      outline: ['PostDraw', 'DrawOutline'],
      classic: ['LastDraw', 'DrawOutline'],
      size: ['PreDraw', 'DrawSize'],
      none: ['LastDraw']
    },
        funcs = methods[om] || methods.outline;

    if (om == 'none') {
      this.Draw = function () {
        return 1;
      };
    } else {
      this.drawFunc = this[funcs[1]];
    }

    this[funcs[0]] = this.Draw;
  };

  Oproto.Update = function (x, y, w, h, sc, z, xo, yo) {
    var o = this.tc.outlineOffset,
        o2 = 2 * o;
    this.x = sc * x + xo - o;
    this.y = sc * y + yo - o;
    this.w = sc * w + o2;
    this.h = sc * h + o2;
    this.sc = sc; // used to determine frontmost

    this.z = z;
  };

  Oproto.Ants = function (c) {
    if (!this.adash) return;
    var l = this.adash,
        g = this.agap,
        s = this.aspeed,
        length = l + g,
        l1 = 0,
        l2 = l,
        g1 = g,
        g2 = 0,
        seq = 0,
        ants;

    if (s) {
      seq = abs(s) * (TimeNow() - this.ts) / 50;
      if (s < 0) seq = 8.64e6 - seq;
      s = ~~seq % length;
    }

    if (s) {
      if (l >= s) {
        l1 = l - s;
        l2 = s;
      } else {
        g1 = length - s;
        g2 = g - g1;
      }

      ants = [l1, g1, l2, g2];
    } else {
      ants = [l, g];
    }

    c.setLineDash(ants);
  };

  Oproto.DrawOutline = function (c, x, y, w, h, colour) {
    var r = min(this.radius, h / 2, w / 2);
    c.strokeStyle = colour;
    this.Ants(c);
    RRect(c, x, y, w, h, r, true);
  };

  Oproto.DrawSize = function (c, x, y, w, h, colour, tag, x1, y1) {
    var tw = tag.w,
        th = tag.h,
        m,
        i,
        sc;

    if (this.pulsate) {
      if (tag.image) sc = (tag.image.height + this.tc.outlineIncrease) / tag.image.height;else sc = tag.oscale;
      i = tag.fimage || tag.image;
      m = 1 + (sc - 1) * (1 - this.pulse);
      tag.h *= m;
      tag.w *= m;
    } else {
      i = tag.oimage;
    }

    tag.alpha = 1;
    tag.Draw(c, x1, y1, i);
    tag.h = th;
    tag.w = tw;
    return 1;
  };

  Oproto.DrawColour = function (c, x, y, w, h, colour, tag, x1, y1) {
    if (tag.oimage) {
      if (this.pulse < 1) {
        tag.alpha = 1 - pow(this.pulse, 2);
        tag.Draw(c, x1, y1, tag.fimage);
        tag.alpha = this.pulse;
      } else {
        tag.alpha = 1;
      }

      tag.Draw(c, x1, y1, tag.oimage);
      return 1;
    }

    return this[tag.image ? 'DrawColourImage' : 'DrawColourText'](c, x, y, w, h, colour, tag, x1, y1);
  };

  Oproto.DrawColourText = function (c, x, y, w, h, colour, tag, x1, y1) {
    var normal = tag.colour;
    tag.colour = colour;
    tag.alpha = 1;
    tag.Draw(c, x1, y1);
    tag.colour = normal;
    return 1;
  };

  Oproto.DrawColourImage = function (c, x, y, w, h, colour, tag, x1, y1) {
    var ccanvas = c.canvas,
        fx = ~~max(x, 0),
        fy = ~~max(y, 0),
        fw = min(ccanvas.width - fx, w) + .5 | 0,
        fh = min(ccanvas.height - fy, h) + .5 | 0,
        cc;
    if (ocanvas) ocanvas.width = fw, ocanvas.height = fh;else ocanvas = NewCanvas(fw, fh);
    if (!ocanvas) return this.SetMethod('outline'); // if using IE and images, give up!

    cc = ocanvas.getContext('2d');
    cc.drawImage(ccanvas, fx, fy, fw, fh, 0, 0, fw, fh);
    c.clearRect(fx, fy, fw, fh);

    if (this.pulsate) {
      tag.alpha = 1 - pow(this.pulse, 2);
    } else {
      tag.alpha = 1;
    }

    tag.Draw(c, x1, y1);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.save();
    c.beginPath();
    c.rect(fx, fy, fw, fh);
    c.clip();
    c.globalCompositeOperation = 'source-in';
    c.fillStyle = colour;
    c.fillRect(fx, fy, fw, fh);
    c.restore();
    c.globalAlpha = 1;
    c.globalCompositeOperation = 'destination-over';
    c.drawImage(ocanvas, 0, 0, fw, fh, fx, fy, fw, fh);
    c.globalCompositeOperation = 'source-over';
    return 1;
  };

  Oproto.DrawBlock = function (c, x, y, w, h, colour) {
    var r = min(this.radius, h / 2, w / 2);
    c.fillStyle = colour;
    RRect(c, x, y, w, h, r);
  };

  Oproto.DrawSimple = function (c, tag, x1, y1, ga, useGa) {
    var t = this.tc;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.strokeStyle = this.colour;
    c.lineWidth = t.outlineThickness;
    c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
    c.globalAlpha = useGa ? ga : 1;
    return this.drawFunc(c, this.x, this.y, this.w, this.h, this.colour, tag, x1, y1);
  };

  Oproto.DrawPulsate = function (c, tag, x1, y1) {
    var diff = TimeNow() - this.ts,
        t = this.tc,
        ga = t.pulsateTo + (1 - t.pulsateTo) * (0.5 + cos(2 * Math.PI * diff / (1000 * t.pulsateTime)) / 2);
    this.pulse = ga = TagCanvas.Smooth(1, ga);
    return this.DrawSimple(c, tag, x1, y1, ga, 1);
  };

  Oproto.Active = function (c, x, y) {
    var a = x >= this.x && y >= this.y && x <= this.x + this.w && y <= this.y + this.h;

    if (a) {
      this.ts = this.ts || TimeNow();
    } else {
      this.ts = null;
    }

    return a;
  };

  Oproto.PreDraw = Oproto.PostDraw = Oproto.LastDraw = Nop;
  /**
   * @constructor
   */

  function Tag(tc, text, a, v, w, h, col, bcol, bradius, boutline, bothickness, font, padding, original) {
    this.tc = tc;
    this.image = null;
    this.text = text;
    this.text_original = original;
    this.line_widths = [];
    this.title = a.title || null;
    this.a = a;
    this.position = new Vector(v[0], v[1], v[2]);
    this.x = this.y = this.z = 0;
    this.w = w;
    this.h = h;
    this.colour = col || tc.textColour;
    this.bgColour = bcol || tc.bgColour;
    this.bgRadius = bradius | 0;
    this.bgOutline = boutline || this.colour;
    this.bgOutlineThickness = bothickness | 0;
    this.textFont = font || tc.textFont;
    this.padding = padding | 0;
    this.sc = this.alpha = 1;
    this.weighted = !tc.weight;
    this.outline = new Outline(tc, this);
  }

  Tproto = Tag.prototype;

  Tproto.Init = function (e) {
    var tc = this.tc;
    this.textHeight = tc.textHeight;

    if (this.HasText()) {
      this.Measure(tc.ctxt, tc);
    } else {
      this.w = this.iw;
      this.h = this.ih;
    }

    this.SetShadowColour = tc.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
    this.SetDraw(tc);
  };

  Tproto.Draw = Nop;

  Tproto.HasText = function () {
    return this.text && this.text[0].length > 0;
  };

  Tproto.EqualTo = function (e) {
    var i = e.getElementsByTagName('img');
    if (this.a.href != e.href) return 0;
    if (i.length) return this.image.src == i[0].src;
    return (e.innerText || e.textContent) == this.text_original;
  };

  Tproto.SetImage = function (i) {
    this.image = this.fimage = i;
  };

  Tproto.SetDraw = function (t) {
    this.Draw = this.fimage ? t.ie > 7 ? this.DrawImageIE : this.DrawImage : this.DrawText;
    t.noSelect && (this.CheckActive = Nop);
  };

  Tproto.MeasureText = function (c) {
    var i,
        l = this.text.length,
        w = 0,
        wl;

    for (i = 0; i < l; ++i) {
      this.line_widths[i] = wl = c.measureText(this.text[i]).width;
      w = max(w, wl);
    }

    return w;
  };

  Tproto.Measure = function (c, t) {
    var extents = FindTextBoundingBox(this.text, this.textFont, this.textHeight),
        s,
        th,
        f,
        soff,
        cw,
        twidth,
        theight,
        img,
        tcv; // add the gap at the top to the height to make equal gap at bottom

    theight = extents ? extents.max.y + extents.min.y : this.textHeight;
    c.font = this.font = this.textHeight + 'px ' + this.textFont;
    twidth = this.MeasureText(c);

    if (t.txtOpt) {
      s = t.txtScale;
      th = s * this.textHeight;
      f = th + 'px ' + this.textFont;
      soff = [s * t.shadowOffset[0], s * t.shadowOffset[1]];
      c.font = f;
      cw = this.MeasureText(c);
      tcv = new TextCanvas(this.text, f, cw + s, s * theight + s, cw, this.line_widths, t.textAlign, t.textVAlign, s);
      if (this.image) tcv.SetImage(this.image, this.iw, this.ih, t.imagePosition, t.imagePadding, t.imageAlign, t.imageVAlign, t.imageScale);
      img = tcv.Create(this.colour, this.bgColour, this.bgOutline, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius); // add outline image using highlight colour

      if (t.outlineMethod == 'colour') {
        this.oimage = tcv.Create(this.outline.colour, this.bgColour, this.outline.colour, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius);
      } else if (t.outlineMethod == 'size') {
        extents = FindTextBoundingBox(this.text, this.textFont, this.textHeight + t.outlineIncrease);
        th = extents.max.y + extents.min.y;
        f = s * (this.textHeight + t.outlineIncrease) + 'px ' + this.textFont;
        c.font = f;
        cw = this.MeasureText(c);
        tcv = new TextCanvas(this.text, f, cw + s, s * th + s, cw, this.line_widths, t.textAlign, t.textVAlign, s);
        if (this.image) tcv.SetImage(this.image, this.iw + t.outlineIncrease, this.ih + t.outlineIncrease, t.imagePosition, t.imagePadding, t.imageAlign, t.imageVAlign, t.imageScale);
        this.oimage = tcv.Create(this.colour, this.bgColour, this.bgOutline, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius);
        this.oscale = this.oimage.width / img.width;
        if (t.outlineIncrease > 0) img = ExpandImage(img, this.oimage.width, this.oimage.height);else this.oimage = ExpandImage(this.oimage, img.width, img.height);
      }

      if (img) {
        this.fimage = img;
        twidth = this.fimage.width / s;
        theight = this.fimage.height / s;
      }

      this.SetDraw(t);
      t.txtOpt = !!this.fimage;
    }

    this.h = theight;
    this.w = twidth;
  };

  Tproto.SetFont = function (f, c, bc, boc) {
    this.textFont = f;
    this.colour = c;
    this.bgColour = bc;
    this.bgOutline = boc;
    this.Measure(this.tc.ctxt, this.tc);
  };

  Tproto.SetWeight = function (w) {
    var tc = this.tc,
        modes = tc.weightMode.split(/[, ]/),
        m,
        s,
        wl = w.length;
    if (!this.HasText()) return;
    this.weighted = true;

    for (s = 0; s < wl; ++s) {
      m = modes[s] || 'size';

      if ('both' == m) {
        this.Weight(w[s], tc.ctxt, tc, 'size', tc.min_weight[s], tc.max_weight[s], s);
        this.Weight(w[s], tc.ctxt, tc, 'colour', tc.min_weight[s], tc.max_weight[s], s);
      } else {
        this.Weight(w[s], tc.ctxt, tc, m, tc.min_weight[s], tc.max_weight[s], s);
      }
    }

    this.Measure(tc.ctxt, tc);
  };

  Tproto.Weight = function (w, c, t, m, wmin, wmax, wnum) {
    w = isNaN(w) ? 1 : w;
    var nweight = (w - wmin) / (wmax - wmin);
    if ('colour' == m) this.colour = FindGradientColour(t, nweight, wnum);else if ('bgcolour' == m) this.bgColour = FindGradientColour(t, nweight, wnum);else if ('bgoutline' == m) this.bgOutline = FindGradientColour(t, nweight, wnum);else if ('outline' == m) this.outline.colour = FindGradientColour(t, nweight, wnum);else if ('size' == m) {
      if (t.weightSizeMin > 0 && t.weightSizeMax > t.weightSizeMin) {
        this.textHeight = t.weightSize * (t.weightSizeMin + (t.weightSizeMax - t.weightSizeMin) * nweight);
      } else {
        // min textHeight of 1
        this.textHeight = max(1, w * t.weightSize);
      }
    }
  };

  Tproto.SetShadowColourFixed = function (c, s, a) {
    c.shadowColor = s;
  };

  Tproto.SetShadowColourAlpha = function (c, s, a) {
    c.shadowColor = SetAlpha(s, a);
  };

  Tproto.DrawText = function (c, xoff, yoff) {
    var t = this.tc,
        x = this.x,
        y = this.y,
        s = this.sc,
        i,
        xl;
    c.globalAlpha = this.alpha;
    c.fillStyle = this.colour;
    t.shadow && this.SetShadowColour(c, t.shadow, this.alpha);
    c.font = this.font;
    x += xoff / s;
    y += yoff / s - this.h / 2;

    for (i = 0; i < this.text.length; ++i) {
      xl = x;

      if ('right' == t.textAlign) {
        xl += this.w / 2 - this.line_widths[i];
      } else if ('centre' == t.textAlign) {
        xl -= this.line_widths[i] / 2;
      } else {
        xl -= this.w / 2;
      }

      c.setTransform(s, 0, 0, s, s * xl, s * y);
      c.fillText(this.text[i], 0, 0);
      y += this.textHeight;
    }
  };

  Tproto.DrawImage = function (c, xoff, yoff, im) {
    var x = this.x,
        y = this.y,
        s = this.sc,
        i = im || this.fimage,
        w = this.w,
        h = this.h,
        a = this.alpha,
        shadow = this.shadow;
    c.globalAlpha = a;
    shadow && this.SetShadowColour(c, shadow, a);
    x += xoff / s - w / 2;
    y += yoff / s - h / 2;
    c.setTransform(s, 0, 0, s, s * x, s * y);
    c.drawImage(i, 0, 0, w, h);
  };

  Tproto.DrawImageIE = function (c, xoff, yoff) {
    var i = this.fimage,
        s = this.sc,
        w = i.width = this.w * s,
        h = i.height = this.h * s,
        x = this.x * s + xoff - w / 2,
        y = this.y * s + yoff - h / 2;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.globalAlpha = this.alpha;
    c.drawImage(i, x, y);
  };

  Tproto.Calc = function (m, a) {
    var pp,
        t = this.tc,
        mnb = t.minBrightness,
        mxb = t.maxBrightness,
        r = t.max_radius;
    pp = m.xform(this.position);
    this.xformed = pp;
    pp = Project(t, pp, t.stretchX, t.stretchY);
    this.x = pp.x;
    this.y = pp.y;
    this.z = pp.z;
    this.sc = pp.w;
    this.alpha = a * Clamp(mnb + (mxb - mnb) * (r - this.z) / (2 * r), 0, 1);
    return this.xformed;
  };

  Tproto.UpdateActive = function (c, xoff, yoff) {
    var o = this.outline,
        w = this.w,
        h = this.h,
        x = this.x - w / 2,
        y = this.y - h / 2;
    o.Update(x, y, w, h, this.sc, this.z, xoff, yoff);
    return o;
  };

  Tproto.CheckActive = function (c, xoff, yoff) {
    var t = this.tc,
        o = this.UpdateActive(c, xoff, yoff);
    return o.Active(c, t.mx, t.my) ? o : null;
  };

  Tproto.Clicked = function (e) {
    var a = this.a,
        t = a.target,
        h = a.href,
        evt;

    if (t != '' && t != '_self') {
      if (self.frames[t]) {
        self.frames[t].document.location = h;
      } else {
        try {
          if (top.frames[t]) {
            top.frames[t].document.location = h;
            return;
          }
        } catch (err) {// different domain/port/protocol?
        }

        window.open(h, t);
      }

      return;
    }

    if (doc.createEvent) {
      evt = doc.createEvent('MouseEvents');
      evt.initMouseEvent('click', 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
      if (!a.dispatchEvent(evt)) return;
    } else if (a.fireEvent) {
      if (!a.fireEvent('onclick')) return;
    }

    doc.location = h;
  };
  /**
   * @constructor
   */


  function TagCanvas(cid, lctr, opt) {
    var i,
        p,
        c = doc.getElementById(cid),
        cp = ['id', 'class', 'innerHTML'],
        raf;
    if (!c) throw 0;

    if (Defined(window.G_vmlCanvasManager)) {
      c = window.G_vmlCanvasManager.initElement(c);
      this.ie = parseFloat(navigator.appVersion.split('MSIE')[1]);
    }

    if (c && (!c.getContext || !c.getContext('2d').fillText)) {
      p = doc.createElement('DIV');

      for (i = 0; i < cp.length; ++i) {
        p[cp[i]] = c[cp[i]];
      }

      c.parentNode.insertBefore(p, c);
      c.parentNode.removeChild(c);
      throw 0;
    }

    for (i in TagCanvas.options) {
      this[i] = opt && Defined(opt[i]) ? opt[i] : Defined(TagCanvas[i]) ? TagCanvas[i] : TagCanvas.options[i];
    }

    this.canvas = c;
    this.ctxt = c.getContext('2d');
    this.z1 = 250 / max(this.depth, 0.001);
    this.z2 = this.z1 / this.zoom;
    this.radius = min(c.height, c.width) * 0.0075; // fits radius of 100 in canvas

    this.max_radius = 100;
    this.max_weight = [];
    this.min_weight = [];
    this.textFont = this.textFont && FixFont(this.textFont);
    this.textHeight *= 1;
    this.imageRadius = this.imageRadius.toString();
    this.pulsateTo = Clamp(this.pulsateTo, 0, 1);
    this.minBrightness = Clamp(this.minBrightness, 0, 1);
    this.maxBrightness = Clamp(this.maxBrightness, this.minBrightness, 1);
    this.ctxt.textBaseline = 'top';
    this.lx = (this.lock + '').indexOf('x') + 1;
    this.ly = (this.lock + '').indexOf('y') + 1;
    this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0;
    this.fixedAlpha = 1;
    this.source = lctr || cid;
    this.repeatTags = min(64, ~~this.repeatTags);
    this.minTags = min(200, ~~this.minTags);
    if (~~this.scrollPause > 0) TagCanvas.scrollPause = ~~this.scrollPause;else this.scrollPause = 0;
    if (this.minTags > 0 && this.repeatTags < 1 && (i = this.GetTags().length)) this.repeatTags = ceil(this.minTags / i) - 1;
    this.transform = Matrix.Identity();
    this.startTime = this.time = TimeNow();
    this.mx = this.my = -1;
    this.centreImage && CentreImage(this);
    this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
    this.animTiming = typeof TagCanvas[this.animTiming] == 'function' ? TagCanvas[this.animTiming] : TagCanvas.Smooth;

    if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
      // let the browser translate "red" into "#ff0000"
      this.ctxt.shadowColor = this.shadow;
      this.shadow = this.ctxt.shadowColor;
      this.shadowAlpha = ShadowAlphaBroken();
    } else {
      delete this.shadow;
    }

    this.Load();

    if (lctr && this.hideTags) {
      (function (t) {
        if (TagCanvas.loaded) t.HideTags();else AddHandler('load', function () {
          t.HideTags();
        }, window);
      })(this);
    }

    this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
    this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;

    if (this.tooltip) {
      this.ctitle = c.title;
      c.title = '';

      if (this.tooltip == 'native') {
        this.Tooltip = this.TooltipNative;
      } else {
        this.Tooltip = this.TooltipDiv;

        if (!this.ttdiv) {
          this.ttdiv = doc.createElement('div');
          this.ttdiv.className = this.tooltipClass;
          this.ttdiv.style.position = 'absolute';
          this.ttdiv.style.zIndex = c.style.zIndex + 1;
          AddHandler('mouseover', function (e) {
            e.target.style.display = 'none';
          }, this.ttdiv);
          doc.body.appendChild(this.ttdiv);
        }
      }
    } else {
      this.Tooltip = this.TooltipNone;
    }

    if (!this.noMouse && !handlers[cid]) {
      handlers[cid] = [['mousemove', MouseMove], ['mouseout', MouseOut], ['mouseup', MouseUp], ['touchstart', TouchDown], ['touchend', TouchUp], ['touchcancel', TouchUp], ['touchmove', TouchMove]];

      if (this.dragControl) {
        handlers[cid].push(['mousedown', MouseDown]);
        handlers[cid].push(['selectstart', Nop]);
      }

      if (this.wheelZoom) {
        handlers[cid].push(['mousewheel', MouseWheel]);
        handlers[cid].push(['DOMMouseScroll', MouseWheel]);
      }

      if (this.scrollPause) {
        handlers[cid].push(['scroll', Scroll, window]);
      }

      for (i = 0; i < handlers[cid].length; ++i) {
        p = handlers[cid][i];
        AddHandler(p[0], p[1], p[2] ? p[2] : c);
      }
    }

    if (!TagCanvas.started) {
      raf = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      TagCanvas.NextFrame = raf ? TagCanvas.NextFrameRAF : TagCanvas.NextFrameTimeout;
      TagCanvas.interval = this.interval;
      TagCanvas.NextFrame(this.interval);
      TagCanvas.started = 1;
    }
  }

  TCproto = TagCanvas.prototype;

  TCproto.SourceElements = function () {
    if (doc.querySelectorAll) return doc.querySelectorAll('#' + this.source);
    return [doc.getElementById(this.source)];
  };

  TCproto.HideTags = function () {
    var el = this.SourceElements(),
        i;

    for (i = 0; i < el.length; ++i) {
      el[i].style.display = 'none';
    }
  };

  TCproto.GetTags = function () {
    var el = this.SourceElements(),
        etl,
        tl = [],
        i,
        j,
        k;

    for (k = 0; k <= this.repeatTags; ++k) {
      for (i = 0; i < el.length; ++i) {
        etl = el[i].getElementsByTagName('a');

        for (j = 0; j < etl.length; ++j) {
          tl.push(etl[j]);
        }
      }
    }

    return tl;
  };

  TCproto.Message = function (text) {
    var tl = [],
        i,
        p,
        tc = text.split(''),
        a,
        t,
        x,
        z;

    for (i = 0; i < tc.length; ++i) {
      if (tc[i] != ' ') {
        p = i - tc.length / 2;
        a = doc.createElement('A');
        a.href = '#';
        a.innerText = tc[i];
        x = 100 * sin(p / 9);
        z = -100 * cos(p / 9);
        t = new Tag(this, tc[i], a, [x, 0, z], 2, 18, '#000', '#fff', 0, 0, 0, 'monospace', 2, tc[i]);
        t.Init();
        tl.push(t);
      }
    }

    return tl;
  };

  TCproto.CreateTag = function (e) {
    var im,
        i,
        t,
        txt,
        ts,
        font,
        bc,
        boc,
        p = [0, 0, 0];

    if ('text' != this.imageMode) {
      im = e.getElementsByTagName('img');

      if (im.length) {
        i = new Image();
        i.src = im[0].src;

        if (!this.imageMode) {
          t = new Tag(this, "", e, p, 0, 0);
          t.SetImage(i); //t.Init();

          AddImage(i, im[0], t, this);
          return t;
        }
      }
    }

    if ('image' != this.imageMode) {
      ts = new TextSplitter(e);
      txt = ts.Lines();

      if (!ts.Empty()) {
        font = this.textFont || FixFont(GetProperty(e, 'font-family'));
        if (this.splitWidth) txt = ts.SplitWidth(this.splitWidth, this.ctxt, font, this.textHeight);
        bc = this.bgColour == 'tag' ? GetProperty(e, 'background-color') : this.bgColour;
        boc = this.bgOutline == 'tag' ? GetProperty(e, 'color') : this.bgOutline;
      } else {
        ts = null;
      }
    }

    if (ts || i) {
      t = new Tag(this, txt, e, p, 2, this.textHeight + 2, this.textColour || GetProperty(e, 'color'), bc, this.bgRadius, boc, this.bgOutlineThickness, font, this.padding, ts && ts.original);

      if (i) {
        t.SetImage(i);
        AddImage(i, im[0], t, this);
      } else {
        t.Init();
      }

      return t;
    }
  };

  TCproto.UpdateTag = function (t, a) {
    var colour = this.textColour || GetProperty(a, 'color'),
        font = this.textFont || FixFont(GetProperty(a, 'font-family')),
        bc = this.bgColour == 'tag' ? GetProperty(a, 'background-color') : this.bgColour,
        boc = this.bgOutline == 'tag' ? GetProperty(a, 'color') : this.bgOutline;
    t.a = a;
    t.title = a.title;
    if (t.colour != colour || t.textFont != font || t.bgColour != bc || t.bgOutline != boc) t.SetFont(font, colour, bc, boc);
  };

  TCproto.Weight = function (tl) {
    var ll = tl.length,
        w,
        i,
        s,
        weights = [],
        valid,
        wfrom = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
        wl = wfrom.length;

    for (i = 0; i < ll; ++i) {
      weights[i] = [];

      for (s = 0; s < wl; ++s) {
        w = FindWeight(tl[i].a, wfrom[s], this.textHeight);
        if (!this.max_weight[s] || w > this.max_weight[s]) this.max_weight[s] = w;
        if (!this.min_weight[s] || w < this.min_weight[s]) this.min_weight[s] = w;
        weights[i][s] = w;
      }
    }

    for (s = 0; s < wl; ++s) {
      if (this.max_weight[s] > this.min_weight[s]) valid = 1;
    }

    if (valid) {
      for (i = 0; i < ll; ++i) {
        tl[i].SetWeight(weights[i]);
      }
    }
  };

  TCproto.Load = function () {
    var tl = this.GetTags(),
        taglist = [],
        shape,
        t,
        shapeArgs,
        rx,
        ry,
        rz,
        vl,
        i,
        tagmap = [],
        pfuncs = {
      sphere: PointsOnSphere,
      vcylinder: PointsOnCylinderV,
      hcylinder: PointsOnCylinderH,
      vring: PointsOnRingV,
      hring: PointsOnRingH
    };

    if (tl.length) {
      tagmap.length = tl.length;

      for (i = 0; i < tl.length; ++i) {
        tagmap[i] = i;
      }

      this.shuffleTags && Shuffle(tagmap);
      rx = 100 * this.radiusX;
      ry = 100 * this.radiusY;
      rz = 100 * this.radiusZ;
      this.max_radius = max(rx, max(ry, rz));

      for (i = 0; i < tl.length; ++i) {
        t = this.CreateTag(tl[tagmap[i]]);
        if (t) taglist.push(t);
      }

      this.weight && this.Weight(taglist, true);

      if (this.shapeArgs) {
        this.shapeArgs[0] = taglist.length;
      } else {
        shapeArgs = this.shape.toString().split(/[(),]/);
        shape = shapeArgs.shift();
        if (typeof window[shape] === 'function') this.shape = window[shape];else this.shape = pfuncs[shape] || pfuncs.sphere;
        this.shapeArgs = [taglist.length, rx, ry, rz].concat(shapeArgs);
      }

      vl = this.shape.apply(this, this.shapeArgs);
      this.listLength = taglist.length;

      for (i = 0; i < taglist.length; ++i) {
        taglist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]);
      }
    }

    if (this.noTagsMessage && !taglist.length) {
      i = this.imageMode && this.imageMode != 'both' ? this.imageMode + ' ' : '';
      taglist = this.Message('No ' + i + 'tags');
    }

    this.taglist = taglist;
  };

  TCproto.Update = function () {
    var tl = this.GetTags(),
        newlist = [],
        taglist = this.taglist,
        found,
        added = [],
        removed = [],
        vl,
        ol,
        nl,
        i,
        j;
    if (!this.shapeArgs) return this.Load();

    if (tl.length) {
      nl = this.listLength = tl.length;
      ol = taglist.length; // copy existing list, populate "removed"

      for (i = 0; i < ol; ++i) {
        newlist.push(taglist[i]);
        removed.push(i);
      } // find added and removed tags


      for (i = 0; i < nl; ++i) {
        for (j = 0, found = 0; j < ol; ++j) {
          if (taglist[j].EqualTo(tl[i])) {
            this.UpdateTag(newlist[j], tl[i]);
            found = removed[j] = -1;
          }
        }

        if (!found) added.push(i);
      } // clean out found tags from removed list


      for (i = 0, j = 0; i < ol; ++i) {
        if (removed[j] == -1) removed.splice(j, 1);else ++j;
      } // insert new tags in gaps where old tags removed


      if (removed.length) {
        Shuffle(removed);

        while (removed.length && added.length) {
          i = removed.shift();
          j = added.shift();
          newlist[i] = this.CreateTag(tl[j]);
        } // remove any more (in reverse order)


        removed.sort(function (a, b) {
          return a - b;
        });

        while (removed.length) {
          newlist.splice(removed.pop(), 1);
        }
      } // add any extra tags


      j = newlist.length / (added.length + 1);
      i = 0;

      while (added.length) {
        newlist.splice(ceil(++i * j), 0, this.CreateTag(tl[added.shift()]));
      } // assign correct positions to tags


      this.shapeArgs[0] = nl = newlist.length;
      vl = this.shape.apply(this, this.shapeArgs);

      for (i = 0; i < nl; ++i) {
        newlist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]);
      } // reweight tags


      this.weight && this.Weight(newlist);
    }

    this.taglist = newlist;
  };

  TCproto.SetShadow = function (c) {
    c.shadowBlur = this.shadowBlur;
    c.shadowOffsetX = this.shadowOffset[0];
    c.shadowOffsetY = this.shadowOffset[1];
  };

  TCproto.Draw = function (t) {
    if (this.paused) return;
    var cv = this.canvas,
        cw = cv.width,
        ch = cv.height,
        max_sc = 0,
        tdelta = (t - this.time) * TagCanvas.interval / 1000,
        x = cw / 2 + this.offsetX,
        y = ch / 2 + this.offsetY,
        c = this.ctxt,
        active,
        a,
        i,
        aindex = -1,
        tl = this.taglist,
        l = tl.length,
        frontsel = this.frontSelect,
        centreDrawn = this.centreFunc == Nop,
        fixed;
    this.time = t;
    if (this.frozen && this.drawn) return this.Animate(cw, ch, tdelta);
    fixed = this.AnimateFixed();
    c.setTransform(1, 0, 0, 1, 0, 0);

    for (i = 0; i < l; ++i) {
      tl[i].Calc(this.transform, this.fixedAlpha);
    }

    tl = SortList(tl, function (a, b) {
      return b.z - a.z;
    });

    if (fixed && this.fixedAnim.active) {
      active = this.fixedAnim.tag.UpdateActive(c, x, y);
    } else {
      this.active = null;

      for (i = 0; i < l; ++i) {
        a = this.mx >= 0 && this.my >= 0 && this.taglist[i].CheckActive(c, x, y);

        if (a && a.sc > max_sc && (!frontsel || a.z <= 0)) {
          active = a;
          aindex = i;
          active.tag = this.taglist[i];
          max_sc = a.sc;
        }
      }

      this.active = active;
    }

    this.txtOpt || this.shadow && this.SetShadow(c);
    c.clearRect(0, 0, cw, ch);

    for (i = 0; i < l; ++i) {
      if (!centreDrawn && tl[i].z <= 0) {
        // run the centreFunc if the next tag is at the front
        try {
          this.centreFunc(c, cw, ch, x, y);
        } catch (e) {
          alert(e); // don't run it again

          this.centreFunc = Nop;
        }

        centreDrawn = true;
      }

      if (!(active && active.tag == tl[i] && active.PreDraw(c, tl[i], x, y))) tl[i].Draw(c, x, y);
      active && active.tag == tl[i] && active.PostDraw(c);
    }

    if (this.freezeActive && active) {
      this.Freeze();
    } else {
      this.UnFreeze();
      this.drawn = l == this.listLength;
    }

    if (this.fixedCallback) {
      this.fixedCallback(this, this.fixedCallbackTag);
      this.fixedCallback = null;
    }

    fixed || this.Animate(cw, ch, tdelta);
    active && active.LastDraw(c);
    cv.style.cursor = active ? this.activeCursor : '';
    this.Tooltip(active, this.taglist[aindex]);
  };

  TCproto.TooltipNone = function () {};

  TCproto.TooltipNative = function (active, tag) {
    if (active) this.canvas.title = tag && tag.title ? tag.title : '';else this.canvas.title = this.ctitle;
  };

  TCproto.SetTTDiv = function (title, tag) {
    var tc = this,
        s = tc.ttdiv.style;
    if (title != tc.ttdiv.innerHTML) s.display = 'none';
    tc.ttdiv.innerHTML = title;
    tag && (tag.title = tc.ttdiv.innerHTML);

    if (s.display == 'none' && !tc.tttimer) {
      tc.tttimer = setTimeout(function () {
        var p = AbsPos(tc.canvas.id);
        s.display = 'block';
        s.left = p.x + tc.mx + 'px';
        s.top = p.y + tc.my + 24 + 'px';
        tc.tttimer = null;
      }, tc.tooltipDelay);
    }
  };

  TCproto.TooltipDiv = function (active, tag) {
    if (active && tag && tag.title) {
      this.SetTTDiv(tag.title, tag);
    } else if (!active && this.mx != -1 && this.my != -1 && this.ctitle.length) {
      this.SetTTDiv(this.ctitle);
    } else {
      this.ttdiv.style.display = 'none';
    }
  };

  TCproto.Transform = function (tc, p, y) {
    if (p || y) {
      var sp = sin(p),
          cp = cos(p),
          sy = sin(y),
          cy = cos(y),
          ym = new Matrix([cy, 0, sy, 0, 1, 0, -sy, 0, cy]),
          pm = new Matrix([1, 0, 0, 0, cp, -sp, 0, sp, cp]);
      tc.transform = tc.transform.mul(ym.mul(pm));
    }
  };

  TCproto.AnimateFixed = function () {
    var fa, t1, angle, m, d;

    if (this.fadeIn) {
      t1 = TimeNow() - this.startTime;

      if (t1 >= this.fadeIn) {
        this.fadeIn = 0;
        this.fixedAlpha = 1;
      } else {
        this.fixedAlpha = t1 / this.fadeIn;
      }
    }

    if (this.fixedAnim) {
      if (!this.fixedAnim.transform) this.fixedAnim.transform = this.transform;
      fa = this.fixedAnim, t1 = TimeNow() - fa.t0, angle = fa.angle, m, d = this.animTiming(fa.t, t1);
      this.transform = fa.transform;

      if (t1 >= fa.t) {
        this.fixedCallbackTag = fa.tag;
        this.fixedCallback = fa.cb;
        this.fixedAnim = this.yaw = this.pitch = 0;
      } else {
        angle *= d;
      }

      m = Matrix.Rotation(angle, fa.axis);
      this.transform = this.transform.mul(m);
      return this.fixedAnim != 0;
    }

    return false;
  };

  TCproto.AnimatePosition = function (w, h, t) {
    var tc = this,
        x = tc.mx,
        y = tc.my,
        s,
        r;

    if (!tc.frozen && x >= 0 && y >= 0 && x < w && y < h) {
      s = tc.maxSpeed, r = tc.reverse ? -1 : 1;
      tc.lx || (tc.yaw = (x * 2 * s / w - s) * r * t);
      tc.ly || (tc.pitch = (y * 2 * s / h - s) * -r * t);
      tc.initial = null;
    } else if (!tc.initial) {
      if (tc.frozen && !tc.freezeDecel) tc.yaw = tc.pitch = 0;else tc.Decel(tc);
    }

    this.Transform(tc, tc.pitch, tc.yaw);
  };

  TCproto.AnimateDrag = function (w, h, t) {
    var tc = this,
        rs = 100 * t * tc.maxSpeed / tc.max_radius / tc.zoom;

    if (tc.dx || tc.dy) {
      tc.lx || (tc.yaw = tc.dx * rs / tc.stretchX);
      tc.ly || (tc.pitch = tc.dy * -rs / tc.stretchY);
      tc.dx = tc.dy = 0;
      tc.initial = null;
    } else if (!tc.initial) {
      tc.Decel(tc);
    }

    this.Transform(tc, tc.pitch, tc.yaw);
  };

  TCproto.Freeze = function () {
    if (!this.frozen) {
      this.preFreeze = [this.yaw, this.pitch];
      this.frozen = 1;
      this.drawn = 0;
    }
  };

  TCproto.UnFreeze = function () {
    if (this.frozen) {
      this.yaw = this.preFreeze[0];
      this.pitch = this.preFreeze[1];
      this.frozen = 0;
    }
  };

  TCproto.Decel = function (tc) {
    var s = tc.minSpeed,
        ay = abs(tc.yaw),
        ap = abs(tc.pitch);
    if (!tc.lx && ay > s) tc.yaw = ay > tc.z0 ? tc.yaw * tc.decel : 0;
    if (!tc.ly && ap > s) tc.pitch = ap > tc.z0 ? tc.pitch * tc.decel : 0;
  };

  TCproto.Zoom = function (r) {
    this.z2 = this.z1 * (1 / r);
    this.drawn = 0;
  };

  TCproto.Clicked = function (e) {
    var a = this.active;

    try {
      if (a && a.tag) if (this.clickToFront === false || this.clickToFront === null) a.tag.Clicked(e);else this.TagToFront(a.tag, this.clickToFront, function () {
        a.tag.Clicked(e);
      }, true);
    } catch (ex) {}
  };

  TCproto.Wheel = function (i) {
    var z = this.zoom + this.zoomStep * (i ? 1 : -1);
    this.zoom = min(this.zoomMax, max(this.zoomMin, z));
    this.Zoom(this.zoom);
  };

  TCproto.BeginDrag = function (e) {
    this.down = EventXY(e, this.canvas);
    e.cancelBubble = true;
    e.returnValue = false;
    e.preventDefault && e.preventDefault();
  };

  TCproto.Drag = function (e, p) {
    if (this.dragControl && this.down) {
      var t2 = this.dragThreshold * this.dragThreshold,
          dx = p.x - this.down.x,
          dy = p.y - this.down.y;

      if (this.dragging || dx * dx + dy * dy > t2) {
        this.dx = dx;
        this.dy = dy;
        this.dragging = 1;
        this.down = p;
      }
    }

    return this.dragging;
  };

  TCproto.EndDrag = function () {
    var res = this.dragging;
    this.dragging = this.down = null;
    return res;
  };

  function PinchDistance(e) {
    var t1 = e.targetTouches[0],
        t2 = e.targetTouches[1];
    return sqrt(pow(t2.pageX - t1.pageX, 2) + pow(t2.pageY - t1.pageY, 2));
  }

  TCproto.BeginPinch = function (e) {
    this.pinched = [PinchDistance(e), this.zoom];
    e.preventDefault && e.preventDefault();
  };

  TCproto.Pinch = function (e) {
    var z,
        d,
        p = this.pinched;
    if (!p) return;
    d = PinchDistance(e);
    z = p[1] * d / p[0];
    this.zoom = min(this.zoomMax, max(this.zoomMin, z));
    this.Zoom(this.zoom);
  };

  TCproto.EndPinch = function (e) {
    this.pinched = null;
  };

  TCproto.Pause = function () {
    this.paused = true;
  };

  TCproto.Resume = function () {
    this.paused = false;
  };

  TCproto.SetSpeed = function (i) {
    this.initial = i;
    this.yaw = i[0] * this.maxSpeed;
    this.pitch = i[1] * this.maxSpeed;
  };

  TCproto.FindTag = function (t) {
    if (!Defined(t)) return null;
    Defined(t.index) && (t = t.index);
    if (!IsObject(t)) return this.taglist[t];
    var srch, tgt, i;
    if (Defined(t.id)) srch = 'id', tgt = t.id;else if (Defined(t.text)) srch = 'innerText', tgt = t.text;

    for (i = 0; i < this.taglist.length; ++i) {
      if (this.taglist[i].a[srch] == tgt) return this.taglist[i];
    }
  };

  TCproto.RotateTag = function (tag, lt, lg, time, callback, active) {
    var t = tag.Calc(this.transform, 1),
        v1 = new Vector(t.x, t.y, t.z),
        v2 = MakeVector(lg, lt),
        angle = v1.angle(v2),
        u = v1.cross(v2).unit();

    if (angle == 0) {
      this.fixedCallbackTag = tag;
      this.fixedCallback = callback;
    } else {
      this.fixedAnim = {
        angle: -angle,
        axis: u,
        t: time,
        t0: TimeNow(),
        cb: callback,
        tag: tag,
        active: active
      };
    }
  };

  TCproto.TagToFront = function (tag, time, callback, active) {
    this.RotateTag(tag, 0, 0, time, callback, active);
  };

  TagCanvas.Start = function (id, l, o) {
    TagCanvas.Delete(id);
    TagCanvas.tc[id] = new TagCanvas(id, l, o);
  };

  function tccall(f, id) {
    TagCanvas.tc[id] && TagCanvas.tc[id][f]();
  }

  TagCanvas.Linear = function (t, t0) {
    return t0 / t;
  };

  TagCanvas.Smooth = function (t, t0) {
    return 0.5 - cos(t0 * Math.PI / t) / 2;
  };

  TagCanvas.Pause = function (id) {
    tccall('Pause', id);
  };

  TagCanvas.Resume = function (id) {
    tccall('Resume', id);
  };

  TagCanvas.Reload = function (id) {
    tccall('Load', id);
  };

  TagCanvas.Update = function (id) {
    tccall('Update', id);
  };

  TagCanvas.SetSpeed = function (id, speed) {
    if (IsObject(speed) && TagCanvas.tc[id] && !isNaN(speed[0]) && !isNaN(speed[1])) {
      TagCanvas.tc[id].SetSpeed(speed);
      return true;
    }

    return false;
  };

  TagCanvas.TagToFront = function (id, options) {
    if (!IsObject(options)) return false;
    options.lat = options.lng = 0;
    return TagCanvas.RotateTag(id, options);
  };

  TagCanvas.RotateTag = function (id, options) {
    if (IsObject(options) && TagCanvas.tc[id]) {
      if (isNaN(options.time)) options.time = 500;
      var tt = TagCanvas.tc[id].FindTag(options);

      if (tt) {
        TagCanvas.tc[id].RotateTag(tt, options.lat, options.lng, options.time, options.callback, options.active);
        return true;
      }
    }

    return false;
  };

  TagCanvas.Delete = function (id) {
    var i, c;

    if (handlers[id]) {
      c = doc.getElementById(id);

      if (c) {
        for (i = 0; i < handlers[id].length; ++i) {
          RemoveHandler(handlers[id][i][0], handlers[id][i][1], c);
        }
      }
    }

    delete handlers[id];
    delete TagCanvas.tc[id];
  };

  TagCanvas.NextFrameRAF = function () {
    requestAnimationFrame(DrawCanvasRAF);
  };

  TagCanvas.NextFrameTimeout = function (iv) {
    setTimeout(DrawCanvas, iv);
  };

  TagCanvas.tc = {};
  TagCanvas.options = {
    z1: 20000,
    z2: 20000,
    z0: 0.0002,
    freezeActive: false,
    freezeDecel: false,
    activeCursor: 'pointer',
    pulsateTo: 1,
    pulsateTime: 3,
    reverse: false,
    depth: 0.5,
    maxSpeed: 0.05,
    minSpeed: 0,
    decel: 0.95,
    interval: 20,
    minBrightness: 0.1,
    maxBrightness: 1,
    outlineColour: '#ffff99',
    outlineThickness: 2,
    outlineOffset: 5,
    outlineMethod: 'outline',
    outlineRadius: 0,
    textColour: '#ff99ff',
    textHeight: 15,
    textFont: 'Helvetica, Arial, sans-serif',
    shadow: '#000',
    shadowBlur: 0,
    shadowOffset: [0, 0],
    initial: null,
    hideTags: true,
    zoom: 1,
    weight: false,
    weightMode: 'size',
    weightFrom: null,
    weightSize: 1,
    weightSizeMin: null,
    weightSizeMax: null,
    weightGradient: {
      0: '#f00',
      0.33: '#ff0',
      0.66: '#0f0',
      1: '#00f'
    },
    txtOpt: true,
    txtScale: 2,
    frontSelect: false,
    wheelZoom: true,
    zoomMin: 0.3,
    zoomMax: 3,
    zoomStep: 0.05,
    shape: 'sphere',
    lock: null,
    tooltip: null,
    tooltipDelay: 300,
    tooltipClass: 'tctooltip',
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shuffleTags: false,
    noSelect: false,
    noMouse: false,
    imageScale: 1,
    paused: false,
    dragControl: false,
    dragThreshold: 4,
    centreFunc: Nop,
    splitWidth: 0,
    animTiming: 'Smooth',
    clickToFront: false,
    fadeIn: 0,
    padding: 0,
    bgColour: null,
    bgRadius: 0,
    bgOutline: null,
    bgOutlineThickness: 0,
    outlineIncrease: 4,
    textAlign: 'centre',
    textVAlign: 'middle',
    imageMode: null,
    imagePosition: null,
    imagePadding: 2,
    imageAlign: 'centre',
    imageVAlign: 'middle',
    noTagsMessage: true,
    centreImage: null,
    pinchZoom: false,
    repeatTags: 0,
    minTags: 0,
    imageRadius: 0,
    scrollPause: false,
    outlineDash: 0,
    outlineDashSpace: 0,
    outlineDashSpeed: 1
  };

  for (i in TagCanvas.options) {
    TagCanvas[i] = TagCanvas.options[i];
  }

  window.TagCanvas = TagCanvas; // set a flag for when the window has loaded

  AddHandler('load', function () {
    TagCanvas.loaded = 1;
  }, window);
})();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map