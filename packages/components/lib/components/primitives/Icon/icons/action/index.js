"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionIcons = require("./ActionIcons");

Object.keys(_ActionIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ActionIcons[key];
    }
  });
});