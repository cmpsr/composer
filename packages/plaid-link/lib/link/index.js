"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usePlaid = require("./usePlaid");

Object.keys(_usePlaid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _usePlaid[key];
    }
  });
});