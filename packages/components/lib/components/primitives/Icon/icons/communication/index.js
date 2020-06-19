"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CommunicationIcons = require("./CommunicationIcons");

Object.keys(_CommunicationIcons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CommunicationIcons[key];
    }
  });
});