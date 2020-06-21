"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _LinkShortener = require("./integration/LinkShortener");

Object.keys(_LinkShortener).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LinkShortener[key];
    }
  });
});

var _types = require("./integration/types");

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

const getLinkShortener = (domainUriPrefix, apiKey = process.env.FIREBASE_API_KEY) => {
  return new _LinkShortener.LinkShortener({
    domainUriPrefix,
    apiKey
  });
};

var _default = getLinkShortener;
exports.default = _default;