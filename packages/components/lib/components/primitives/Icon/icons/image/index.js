"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageIcons = require("./ImageIcons");

Object.keys(_ImageIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ImageIcons[key];
    }
  });
});