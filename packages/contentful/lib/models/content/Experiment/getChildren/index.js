"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildren = void 0;

var _react = require("react");

var _context = require("../../../../context");

const getChildren = ({
  id,
  type
}) => {
  const {
    queryMap
  } = (0, _react.useContext)(_context.ContentfulContext);
  return queryMap[type]({
    id
  });
};

exports.getChildren = getChildren;