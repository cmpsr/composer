"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileIcons = require("./FileIcons");

Object.keys(_FileIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FileIcons[key];
    }
  });
});