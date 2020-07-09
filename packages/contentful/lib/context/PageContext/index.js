"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PageContext = require("./PageContext");

Object.keys(_PageContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PageContext[key];
    }
  });
});