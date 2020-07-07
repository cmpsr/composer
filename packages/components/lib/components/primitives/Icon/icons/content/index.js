"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentIcons = require("./contentIcons");

Object.keys(_contentIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _contentIcons[key];
    }
  });
});