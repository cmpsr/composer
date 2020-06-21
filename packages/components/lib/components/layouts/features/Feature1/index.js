"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Feature = require("./Feature1");

Object.keys(_Feature).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Feature[key];
    }
  });
});