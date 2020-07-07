"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SingleCalendar = require("./SingleCalendar");

Object.keys(_SingleCalendar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SingleCalendar[key];
    }
  });
});