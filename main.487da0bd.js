parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,t){document.addEventListener("click",function(){n()}),setTimeout(function(){t()},3e3)}),t=new Promise(function(n,t){document.addEventListener("mousedown",function(t){0!==t.button&&2!==t.button||n()})}),e=new Promise(function(n,t){var e=0,o=0;document.addEventListener("mousedown",function(t){0===t.button&&e++,e>0&&o>0&&n()}),document.addEventListener("mousedown",function(t){2===t.button&&o++,e>0&&o>0&&n()})});function o(n,t){var e=document.createElement("div");e.classList.add("".concat(n)),e.textContent="".concat(t),e.setAttribute("data-qa","notification"),document.body.append(e)}n.then(function(){o("success","First promise was resolved")}).catch(function(){o("warning","First promise was rejected")}),t.then(function(){o("success","Second promise was resolved")}),e.then(function(){o("success","Third promise was resolved")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.487da0bd.js.map