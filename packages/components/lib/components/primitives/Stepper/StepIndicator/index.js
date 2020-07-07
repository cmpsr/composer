"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StepIndicator = require("./StepIndicator");

Object.keys(_StepIndicator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StepIndicator[key];
    }
  });
});