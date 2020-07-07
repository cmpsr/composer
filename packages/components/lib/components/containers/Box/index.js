"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require("./Box");

Object.keys(_Box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Box[key];
    }
  });
});