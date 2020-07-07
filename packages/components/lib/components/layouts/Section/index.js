"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Section = require("./Section");

Object.keys(_Section).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Section[key];
    }
  });
});