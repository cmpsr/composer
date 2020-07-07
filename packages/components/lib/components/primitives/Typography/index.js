"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Typography = require("./Typography");

Object.keys(_Typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Typography[key];
    }
  });
});