"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AvIcons = require("./AvIcons");

Object.keys(_AvIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AvIcons[key];
    }
  });
});