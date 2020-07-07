"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlertIcons = require("./AlertIcons");

Object.keys(_AlertIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AlertIcons[key];
    }
  });
});