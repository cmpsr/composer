"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hero = require("./Hero4");

Object.keys(_Hero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Hero[key];
    }
  });
});