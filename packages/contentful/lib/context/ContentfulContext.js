"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentfulContext = void 0;

var _react = require("react");

var _config = require("../config");

const ContentfulContext = /*#__PURE__*/(0, _react.createContext)({
  locale: 'en-US',
  componentMap: _config.componentMap,
  queryMap: _config.queryMap
});
exports.ContentfulContext = ContentfulContext;