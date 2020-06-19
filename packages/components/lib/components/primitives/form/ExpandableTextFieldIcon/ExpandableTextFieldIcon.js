"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandableTextFieldIcon = exports.ExpandableTextFieldIconPosition = exports.EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = require("../TextField");

var _ExpandableTextField = require("../ExpandableTextField");

var _getExpandableTextFieldIconClasses = require("../../../../utils/getExpandableTextFieldIconClasses");

var _Icon = require("../../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID = 'expandableTextFieldIcon';
exports.EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID = EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID;
let ExpandableTextFieldIconPosition;
exports.ExpandableTextFieldIconPosition = ExpandableTextFieldIconPosition;

(function (ExpandableTextFieldIconPosition) {
  ExpandableTextFieldIconPosition["Left"] = "left";
  ExpandableTextFieldIconPosition["Right"] = "right";
})(ExpandableTextFieldIconPosition || (exports.ExpandableTextFieldIconPosition = ExpandableTextFieldIconPosition = {}));

const ExpandableTextFieldIcon = ({
  testId = EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID,
  className,
  expandableTextFieldClassName,
  placeholder,
  onChange,
  onClickIcon,
  shape = _TextField.InputShapes.Rounded,
  iconPosition,
  icon
}) => {
  const textFieldRef = (0, _react.useRef)(null);
  const [isIconEnabled, setIconEnabled] = (0, _react.useState)(false);
  const {
    wrapperClasses,
    iconWrapperClasses,
    iconClasses,
    expandableTextFieldClasses
  } = (0, _getExpandableTextFieldIconClasses.getExpandableTextFieldIconClasses)(iconPosition, isIconEnabled);

  const handleChange = value => {
    setIconEnabled(!!value);
    onChange(value);
  };

  const handleOnClickIcon = () => {
    onClickIcon();
    textFieldRef.current.textContent = '';
    const inputEvent = new Event('input', {
      bubbles: true
    });
    textFieldRef.current.dispatchEvent(inputEvent);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(className, wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleOnClickIcon,
    className: iconWrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: iconClasses
  }, icon)), /*#__PURE__*/_react.default.createElement(_ExpandableTextField.ExpandableTextField, {
    className: (0, _classnames.default)(expandableTextFieldClassName, expandableTextFieldClasses),
    placeholder: placeholder,
    onChange: handleChange,
    shape: shape,
    ref: textFieldRef
  }));
};

exports.ExpandableTextFieldIcon = ExpandableTextFieldIcon;