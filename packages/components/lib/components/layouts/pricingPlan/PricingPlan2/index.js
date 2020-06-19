"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PrincingPlan = require("./PrincingPlan2");

Object.keys(_PrincingPlan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PrincingPlan[key];
    }
  });
});