"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MessageError = require("./MessageError");

Object.keys(_MessageError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MessageError[key];
    }
  });
});