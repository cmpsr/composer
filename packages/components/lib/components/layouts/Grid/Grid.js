"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../containers");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Grid = ({
  children,
  className,
  gridClassName,
  style = {}
}) => {
  const gridStyle = (0, _utils.getClassesFromStyle)(style.grid);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: (0, _classnames.default)("flex items-stretch", className)
  }, /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("max-w-content", gridStyle, gridClassName)
  }, children));
};

exports.Grid = Grid;