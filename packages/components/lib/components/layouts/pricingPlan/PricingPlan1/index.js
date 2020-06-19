"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PricingPlan = require("./PricingPlan1");

Object.keys(_PricingPlan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PricingPlan[key];
    }
  });
});