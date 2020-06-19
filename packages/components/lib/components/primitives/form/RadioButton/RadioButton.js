"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = exports.RADIO_BUTTON_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../Typography");

var _getRadioButtonClasses = require("../../../../utils/getRadioButtonClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RADIO_BUTTON_DEFAULT_TEST_ID = 'radio';
exports.RADIO_BUTTON_DEFAULT_TEST_ID = RADIO_BUTTON_DEFAULT_TEST_ID;
const RadioButton = /*#__PURE__*/(0, _react.forwardRef)(({
  name,
  value,
  checked,
  ariaLabel,
  label,
  disabled = false,
  onChange,
  testId = RADIO_BUTTON_DEFAULT_TEST_ID,
  className
}, ref) => {
  const {
    radio,
    radioBorder,
    labelClass
  } = (0, _getRadioButtonClasses.getRadioButtonClasses)(disabled);
  const typographyMode = disabled ? _Typography.TypographyMode.Dark50 : _Typography.TypographyMode.Dark100;
  return /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: "inline-flex items-center",
    tag: "label",
    type: _Typography.TypographyTypes.Form,
    mode: typographyMode
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    name: name,
    className: (0, _classnames.default)('form-radio ', radio, radioBorder, className),
    "aria-label": ariaLabel,
    type: "radio",
    value: value,
    disabled: disabled,
    onChange: onChange,
    checked: checked,
    "data-testid": testId
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: labelClass
  }, label));
});
exports.RadioButton = RadioButton;