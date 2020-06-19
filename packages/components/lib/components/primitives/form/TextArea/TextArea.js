"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = require("../TextField");

var _getTextAreaClasses = require("../../../../utils/getTextAreaClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextArea = ({
  className,
  value = 'Placeholder',
  name,
  disabled = false,
  isInvalid = false,
  required,
  placeholder,
  onChange,
  shape = _TextField.InputShapes.SemiRounded
}) => {
  const textarea = (0, _getTextAreaClasses.getTextAreaClasses)(isInvalid);
  return /*#__PURE__*/_react.default.createElement("textarea", {
    className: (0, _classnames.default)(textarea, className, shape),
    disabled: disabled,
    defaultValue: value,
    placeholder: placeholder,
    name: name,
    required: required,
    onChange: onChange
  });
};

exports.TextArea = TextArea;