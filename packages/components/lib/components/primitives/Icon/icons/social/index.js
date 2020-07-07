"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SocialIcons = require("./SocialIcons");

Object.keys(_SocialIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SocialIcons[key];
    }
  });
});