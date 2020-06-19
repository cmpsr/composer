"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldWithLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = require("../TextField");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextFieldWithLabel = /*#__PURE__*/(0, _react.forwardRef)(({
  textFieldClassName,
  labelClassName,
  shape,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  disabled,
  invalid,
  maxLength,
  label
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.Typography, {
    className: (0, _classnames.default)(labelClassName),
    mode: _.TypographyMode.Dark100,
    tag: 'label',
    htmlFor: name,
    type: _.TypographyTypes.FormLabel
  }, label), /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    ref: ref,
    className: (0, _classnames.default)(textFieldClassName),
    ariaLabel: ariaLabel,
    name: name,
    type: type,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    required: required,
    maxLength: maxLength,
    invalid: invalid,
    shape: shape
  }));
});
exports.TextFieldWithLabel = TextFieldWithLabel;