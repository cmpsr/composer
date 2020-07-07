"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NotificationIcons = require("./NotificationIcons");

Object.keys(_NotificationIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NotificationIcons[key];
    }
  });
});