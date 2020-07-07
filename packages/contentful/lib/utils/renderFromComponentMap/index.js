"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const renderFromComponentMap = (componentMap, type) => {
  if (!Object.keys(componentMap).includes(type)) return componentMap[_constants.DEFAULT]();
  return componentMap[type]();
};

var _default = renderFromComponentMap;
exports.default = _default;