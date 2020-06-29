"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownNativeSelect = exports.DROPDOWN_NATIVE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../../..");

var _navigation = require("../../../Icon/icons/navigation");

var _getDropdownSingleSelectClasses = require("../../../../../utils/getDropdownSingleSelectClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DROPDOWN_NATIVE_DEFAULT_TEST_ID = 'dropdown-native';
exports.DROPDOWN_NATIVE_DEFAULT_TEST_ID = DROPDOWN_NATIVE_DEFAULT_TEST_ID;
const DropdownNativeSelect = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  options,
  placeHolder = 'Select an item',
  initialSelectedOption,
  onItemChange,
  testId = DROPDOWN_NATIVE_DEFAULT_TEST_ID,
  disabled = false,
  name = 'dropdown',
  invalid
}, ref) => {
  const defaultValue = initialSelectedOption === null || initialSelectedOption === void 0 ? void 0 : initialSelectedOption.value;
  const [itemSelected, setItemSelected] = (0, _react.useState)(defaultValue || '');
  const {
    selectWrapper,
    selectClasses,
    selectTextClasses,
    selectDisabledClasses,
    iconWrapper,
    icon
  } = (0, _getDropdownSingleSelectClasses.getDropdownSingleSelectClasses)(disabled, invalid, itemSelected);

  const handleOnChange = event => {
    const index = event.target.selectedIndex;
    const value = event.target.value;
    setItemSelected(value);
    return onItemChange(options[index - 1]);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: selectWrapper
  }, /*#__PURE__*/_react.default.createElement("select", {
    value: itemSelected,
    className: (0, _classnames.default)(selectClasses, selectTextClasses, selectDisabledClasses, className),
    onChange: handleOnChange,
    name: name,
    disabled: disabled,
    "data-testid": testId,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, placeHolder), options.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: item.value
  }, item.label))), /*#__PURE__*/_react.default.createElement("div", {
    className: iconWrapper
  }, /*#__PURE__*/_react.default.createElement(_.Icon, {
    className: icon
  }, /*#__PURE__*/_react.default.createElement(_navigation.expand_more, {
    type: "filled"
  }))));
});
exports.DropdownNativeSelect = DropdownNativeSelect;