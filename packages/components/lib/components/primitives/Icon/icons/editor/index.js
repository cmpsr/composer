"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditorIcons = require("./EditorIcons");

Object.keys(_EditorIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EditorIcons[key];
    }
  });
});