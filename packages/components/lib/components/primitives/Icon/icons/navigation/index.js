"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationIcons = require("./NavigationIcons");

Object.keys(_NavigationIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NavigationIcons[key];
    }
  });
});