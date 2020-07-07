"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NumericBadge = require("./NumericBadge");

Object.keys(_NumericBadge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NumericBadge[key];
    }
  });
});