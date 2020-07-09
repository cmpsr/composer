"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getVariantByQueryParams = require("./getVariantByQueryParams");

Object.keys(_getVariantByQueryParams).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getVariantByQueryParams[key];
    }
  });
});