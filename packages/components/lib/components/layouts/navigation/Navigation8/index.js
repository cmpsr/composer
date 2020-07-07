"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = require("./Navigation8");

Object.keys(_Navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Navigation[key];
    }
  });
});