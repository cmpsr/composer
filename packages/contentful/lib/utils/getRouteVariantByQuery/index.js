"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getRouteVariantByQuery = require("./getRouteVariantByQuery");

Object.keys(_getRouteVariantByQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getRouteVariantByQuery[key];
    }
  });
});