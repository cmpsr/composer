"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContentfulContext = require("./ContentfulContext");

Object.keys(_ContentfulContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ContentfulContext[key];
    }
  });
});

var _ContentfulProvider = require("./ContentfulProvider");

Object.keys(_ContentfulProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ContentfulProvider[key];
    }
  });
});