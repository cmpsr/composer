"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChatMessage = require("./ChatMessage");

Object.keys(_ChatMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ChatMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ChatMessage[key];
    }
  });
});