"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getRoute = require("./getRoute");

Object.keys(_getRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getRoute[key];
    }
  });
});