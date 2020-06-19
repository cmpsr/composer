"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../utils");

var _ = require("../..");

var _Typography = require("../../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Link = style => props => {
  const {
    children,
    href
  } = props;
  const colorClasses = (0, _utils.getClassesFromStyle)(style.a);
  return /*#__PURE__*/_react.default.createElement(_.Link, {
    url: href,
    className: colorClasses
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    tag: "span",
    type: _Typography.TypographyTypes.Link
  }, children));
};

exports.Link = Link;