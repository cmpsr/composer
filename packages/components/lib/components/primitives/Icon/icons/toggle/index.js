"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ToggleIcons = require("./ToggleIcons");

Object.keys(_ToggleIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ToggleIcons[key];
    }
  });
});