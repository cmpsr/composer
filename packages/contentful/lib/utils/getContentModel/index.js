"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContentModel = void 0;

var _react = require("react");

var _context = require("../../context");

const getContentModel = ({
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

exports.getContentModel = getContentModel;