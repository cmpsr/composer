"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnalyticsContext = require("./AnalyticsContext");

Object.keys(_AnalyticsContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AnalyticsContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AnalyticsContext[key];
    }
  });
});

var _AnalyticsProvider = require("./AnalyticsProvider");

Object.keys(_AnalyticsProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AnalyticsProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AnalyticsProvider[key];
    }
  });
});

var _useAnalytics = require("./useAnalytics");

Object.keys(_useAnalytics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useAnalytics[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useAnalytics[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _types2 = require("./integrations/types");

Object.keys(_types2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types2[key];
    }
  });
});