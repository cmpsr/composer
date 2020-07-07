"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlacesIcons = require("./PlacesIcons");

Object.keys(_PlacesIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlacesIcons[key];
    }
  });
});