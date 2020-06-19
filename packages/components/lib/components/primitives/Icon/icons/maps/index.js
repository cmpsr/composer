"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MapsIcons = require("./MapsIcons");

Object.keys(_MapsIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MapsIcons[key];
    }
  });
});