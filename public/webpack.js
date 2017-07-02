/*! 饶驹出品 */
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require('./1work.js')
// require('./2jiegou.js')
// require('./3RegExp-kuozhan.js')
// require('./4String-kuozhan.js')
// require('./5shuzhi-kuozhan.js')
// require('./9Symbol.js')
// require('./10数据结构.js')
__webpack_require__(1);
// require('./index.css')

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//  set---array   map--object

{
    // 数据结构横向对比，增，删，查，改
    var map = new Map();
    var array = [];

    // 增
    map.set('t', 1);
    array.push({ 't': 1 });

    console.info('map-array', map, array);

    // 查

    var map_exist = map.has('t');
    var array_exist = array.find(function (item) {
        return item.t;
    });

    console.info('map-array', map_exist, map_exist);

    // 改
    map.set('t', 2);
    array.forEach(function (item) {
        return item.t ? item = 2 : "";
    });
    console.info('map-array-modify', map, array);

    //删除
    map.delete('t');
    var index = array.findIndex(function (item) {
        return item.t;
    }); //返回要删除的序号
    array.splice(index, 1);
    console.log('map-array-delete', map, array);
}

// set -array
{
    var set = new Set();
    var _array = [];

    // 增
    set.add({ 't': 1 });
    _array.push({ 't': 1 });

    // 查
    var set_exsit = set.has({ 't': 1 }); //false ,因为has中是要传入引用地址，，如果吧{'t':1}保存变量，再给出这个变量的地址，has就能查到，这里仅说明，set查询用has方法

    //改
    set.forEach(function (item) {
        return item.t ? item = 2 : "";
    });
    _array.forEach(function (item) {
        return item.t ? item = 2 : "";
    });

    //删除
    set.forEach(function (item) {
        return item.t ? set.delete(item) : "";
    });
}

// object  map set
{
    var item = { 't': 1 };
    var _map = new Map();
    var _set = new Set();
    var obj = {};

    // 增
    _map.set('t', 1);
    _set.add(item);
    obj['t'] = 1;

    console.log('map-set-obj', _map, _set, obj);

    //查
    _map.has('t');
    _set.has(item);
    console.log('t' in obj);
}

/***/ })
/******/ ]);