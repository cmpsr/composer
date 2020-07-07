"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CurrencyFieldIcon = require("./CurrencyFieldIcon");

Object.keys(_CurrencyFieldIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CurrencyFieldIcon[key];
    }
  });
});