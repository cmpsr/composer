"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getRouteVariant = require("./getRouteVariant");

Object.keys(_getRouteVariant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getRouteVariant[key];
    }
  });
});