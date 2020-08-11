"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextFieldButton = ({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  onClick,
  buttonLabel = 'Button'
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: (0, _classnames.default)('appearance-none rounded-l-md relative block w-full p-3 border border-outline-primary-900 placeholder-primary-fill-75 text-gray-900 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5', className),
    "aria-label": ariaLabel,
    name: name,
    type: type,
    required: required,
    placeholder: placeholder,
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement(_.Button, {
    type: _.ButtonTypes.Primary,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_.Typography, {
    tag: "span",
    type: _.TypographyTypes.Button
  }, buttonLabel)));
};

exports.TextFieldButton = TextFieldButton;