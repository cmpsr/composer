"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Message = require("./Message");

Object.keys(_Message).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Message[key];
    }
  });
});