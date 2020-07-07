"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SectionChild = require("./SectionChild");

Object.keys(_SectionChild).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SectionChild[key];
    }
  });
});