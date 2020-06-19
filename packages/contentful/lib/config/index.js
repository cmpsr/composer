"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentMap = require("./componentMap");

Object.keys(_componentMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _componentMap[key];
    }
  });
});

var _queryMap = require("./queryMap");

Object.keys(_queryMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryMap[key];
    }
  });
});