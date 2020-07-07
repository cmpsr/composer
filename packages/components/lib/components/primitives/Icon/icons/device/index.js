"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DeviceIcons = require("./DeviceIcons");

Object.keys(_DeviceIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DeviceIcons[key];
    }
  });
});