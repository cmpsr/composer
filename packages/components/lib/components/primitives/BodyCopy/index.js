"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BodyCopy = require("./BodyCopy");

Object.keys(_BodyCopy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BodyCopy[key];
    }
  });
});