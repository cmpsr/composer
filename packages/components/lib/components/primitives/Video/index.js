"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Video = require("./Video");

Object.keys(_Video).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Video[key];
    }
  });
});