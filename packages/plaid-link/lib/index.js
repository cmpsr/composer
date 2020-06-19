"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  usePlaidLink: true
};
exports.usePlaidLink = void 0;

var _link = require("./link");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
const usePlaidLink = _link.usePlaid;
exports.usePlaidLink = usePlaidLink;