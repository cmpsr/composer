"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = require("./Login");

Object.keys(_Login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Login[key];
    }
  });
});