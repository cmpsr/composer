"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Testimonials = require("./Testimonials1");

Object.keys(_Testimonials).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Testimonials[key];
    }
  });
});