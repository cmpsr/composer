"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pill = require("./Pill");

Object.keys(_Pill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Pill[key];
    }
  });
});