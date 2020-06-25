"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.InputMode = exports.InputShapes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let InputShapes;
exports.InputShapes = InputShapes;

(function (InputShapes) {
  InputShapes["Rounded"] = "rounded-input-rounded";
  InputShapes["SemiRounded"] = "rounded-input-semi-rounded";
  InputShapes["Rectangle"] = "rounded-input-rectangle";
})(InputShapes || (exports.InputShapes = InputShapes = {}));

let InputMode;
exports.InputMode = InputMode;

(function (InputMode) {
  InputMode["Text"] = "text";
  InputMode["Decimal"] = "decimal";
  InputMode["Numeric"] = "numeric";
  InputMode["Tel"] = "tel";
  InputMode["Search"] = "search";
  InputMode["Email"] = "email";
  InputMode["Url"] = "url";
})(InputMode || (exports.InputMode = InputMode = {}));

const TextField = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  shape = InputShapes.SemiRounded,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  disabled = false,
  invalid = false,
  maxLength,
  inputMode
}, ref) => {
  const textFieldStateClasses = (0, _utils.getTextFieldStateClasses)(disabled, invalid);
  return /*#__PURE__*/_react.default.createElement("input", {
    className: (0, _classnames.default)(className, 'form-input', textFieldStateClasses, shape),
    "aria-label": ariaLabel,
    name: name,
    type: type,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    required: required,
    ref: ref,
    maxLength: maxLength,
    inputMode: inputMode
  });
});
exports.TextField = TextField;