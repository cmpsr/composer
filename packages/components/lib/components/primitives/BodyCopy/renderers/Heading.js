"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../../utils");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Heading = style => props => {
  const {
    children,
    level
  } = props;
  const colorClasses = (0, _utils.getClassesFromStyle)(style[`h${level}`] || {});
  return /*#__PURE__*/_react.default.createElement(_.Typography, {
    tag: `h${level}`,
    type: `typo-headline-${level}`,
    className: (0, _classnames.default)("mb-8", colorClasses)
  }, children);
};

exports.Heading = Heading;