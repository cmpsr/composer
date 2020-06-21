"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

var _alert = require("../../Icon/icons/alert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorField = ({
  error,
  className
}) => /*#__PURE__*/_react.default.createElement("span", {
  className: (0, _classnames.default)('flex items-center my-2 ml-3', className)
}, /*#__PURE__*/_react.default.createElement(_.Icon, {
  width: 18,
  height: 18,
  className: "fill-current text-fill-system-error mr-1"
}, /*#__PURE__*/_react.default.createElement(_alert.error, {
  type: "filled"
})), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _.TypographyTypes.FormError
}, error));

exports.ErrorField = ErrorField;