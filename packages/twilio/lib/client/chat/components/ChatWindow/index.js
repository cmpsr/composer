"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChatWindow = require("./ChatWindow");

Object.keys(_ChatWindow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ChatWindow[key];
    }
  });
});