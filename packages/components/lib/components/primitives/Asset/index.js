"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Asset = require("./Asset");

Object.keys(_Asset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Asset[key];
    }
  });
});