"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextArea = require("./TextArea");

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextArea[key];
    }
  });
});