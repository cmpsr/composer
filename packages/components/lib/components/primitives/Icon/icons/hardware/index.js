"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HardwareIcons = require("./HardwareIcons");

Object.keys(_HardwareIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HardwareIcons[key];
    }
  });
});