"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FirestoreDb = require("./FirestoreDb");

Object.keys(_FirestoreDb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FirestoreDb[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FirestoreDb[key];
    }
  });
});