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
// require('./6array-kuozhan.js')
// require('./7function-kuozhan.js')
// require('./8Object-kuozhan.js')
// require('./9Symbol.js')
// require('./10数据结构.js')
// require('./11数据结构对比.js')
// require('./12Proxy-Reflect.js')
// require('./13Class.js')
__webpack_require__(1);
// require('./index.css')

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    // 基本定义
    var ajax = function ajax(callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call();
        }, 1000);
    };

    ajax(function () {
        console.log('timeout1');
    });
}

{

    var _ajax = function _ajax() {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };

    _ajax().then(function () {
        console.log('promise', 'timeout2');
    });
}

{

    var _ajax2 = function _ajax2() {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };

    _ajax2().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 2000);
        });
    }).then(function () {
        console.log('timeout3');
    });
}

// catch
{
    var _ajax3 = function _ajax3(num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw Error('出错了');
            }
        });
    };

    _ajax3(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });

    _ajax3(3).then(function () {
        console.log('log', 3);
    }).catch(function (err) {
        console.log('catch', err);
    });
}

{

    // 所有图片加载完再添加到页面
    var loadImg = function loadImg(src) {
        return new Promise(function (resolve, reject) {
            var img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        });
    };

    var showImgs = function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        });
    };

    // 都加载完成才会执行下一步，无论加载是好还是失败
    // 都执行完了后，all的状态才会改变
    // all是一个promise对象，里面都有3个promise对象


    Promise.all([loadImg('https://img.alicdn.com/tfs/TB1Zb02SXXXXXblaXXXXXXXXXXX-200-402.jpg_100x1000q90.jpg'), loadImg('https://img.alicdn.com/tps/TB1G8HpOFXXXXb.apXXXXXXXXXX-360-280.jpg_180x180q90.jpg'), loadImg('https://img.alicdn.com/tfs/TB1t9v9RFXXXXaCXXXXXXXXXXXX-360-280.jpg_180x180q90.jpg')]).then(showImgs);
}

{
    // 有一个图片添加完就添加到页面上
    var _loadImg = function _loadImg(src) {
        return new Promise(function (resolve, reject) {
            var img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        });
    };

    var _showImgs = function _showImgs(img) {
        var p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    };

    // 只要有一个加载完就可以


    Promise.race([_loadImg('https://img.alicdn.com/tfs/TB1Zb02SXXXXXblaXXXXXXXXXXX-200-402.jpg_100x1000q90.jpg'), _loadImg('https://img.alicdn.com/tps/TB1G8HpOFXXXXb.apXXXXXXXXXX-360-280.jpg_180x180q90.jpg'), _loadImg('https://img.alicdn.com/tfs/TB1t9v9RFXXXXaCXXXXXXXXXXXX-360-280.jpg_180x180q90.jpg')]).then(_showImgs);
}

/***/ })
/******/ ]);