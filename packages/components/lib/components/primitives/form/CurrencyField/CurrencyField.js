"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

var _editor = require("../../Icon/icons/editor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CurrencyField = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'number',
  disabled = false,
  invalid,
  inputMode
}, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: " flex items-center px-5 rounded-l-md bg-gray-400 text-gray-100"
  }, /*#__PURE__*/_react.default.createElement(_.Icon, {
    width: 24,
    height: 24,
    className: "fill-current"
  }, /*#__PURE__*/_react.default.createElement(_editor.attach_money, {
    type: "filled"
  }))), /*#__PURE__*/_react.default.createElement("input", {
    className: (0, _classnames.default)('appearance-none rounded-r-md relative block w-full p-3 border placeholder-primary-fill-75 text-dark-100 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5', {
      'disabled:bg-fill-form-disabled': disabled
    }, {
      'border-outline-form-filled': !disabled && !invalid
    }, {
      'border-fill-system-error': invalid
    }, className),
    "aria-label": ariaLabel,
    name: name,
    type: type,
    required: required,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    ref: ref,
    inputMode: inputMode
  }));
});
exports.CurrencyField = CurrencyField;