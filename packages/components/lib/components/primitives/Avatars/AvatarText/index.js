"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AvatarText = require("./AvatarText");

Object.keys(_AvatarText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AvatarText[key];
    }
  });
});