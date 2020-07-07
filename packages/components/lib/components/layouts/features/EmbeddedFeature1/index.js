"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmbeddedFeature = require("./EmbeddedFeature1");

Object.keys(_EmbeddedFeature).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EmbeddedFeature[key];
    }
  });
});