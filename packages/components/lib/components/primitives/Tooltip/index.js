"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = require("./Tooltip");

Object.keys(_Tooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tooltip[key];
    }
  });
});