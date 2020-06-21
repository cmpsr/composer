"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../../utils");

var _Typography = require("../../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Paragraph = style => props => {
  const {
    children
  } = props;
  const colorClasses = (0, _utils.getClassesFromStyle)(style.p);
  return /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    tag: "p",
    type: _Typography.TypographyTypes.Body,
    className: (0, _classnames.default)("mb-8", colorClasses)
  }, children);
};

exports.Paragraph = Paragraph;