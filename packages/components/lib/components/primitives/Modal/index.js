"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require("./Modal");

Object.keys(_Modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Modal[key];
    }
  });
});