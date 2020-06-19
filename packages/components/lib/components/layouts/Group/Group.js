"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Group = ({
  children,
  className,
  style = {}
}) => {
  const groupStyle = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('max-w-content', groupStyle, className)
  }, children);
};

exports.Group = Group;