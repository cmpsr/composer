"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownDownshiftSelect = exports.DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _downshift = _interopRequireDefault(require("downshift"));

var _getDropdownSingleSelectClasses = require("../../../../../utils/getDropdownSingleSelectClasses");

var _ = require("../../..");

var _navigation = require("../../../Icon/icons/navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID = 'dropdown-downshift';
exports.DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID = DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID;
const DropdownDownshiftSelect = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  options,
  placeHolder = 'Select an item',
  initialSelectedOption,
  onItemChange,
  testId = DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID,
  disabled = false,
  name = 'dropdown',
  invalid
}, ref) => {
  const defaultValue = initialSelectedOption === null || initialSelectedOption === void 0 ? void 0 : initialSelectedOption.value;
  const [itemSelected, setItemSelected] = (0, _react.useState)(defaultValue || null);
  const {
    selectClasses,
    buttonClasses,
    selectTextClasses,
    selectDisabledClasses,
    selectListClasses,
    itemListClasses,
    icon
  } = (0, _getDropdownSingleSelectClasses.getDropdownSingleSelectClasses)(disabled, invalid, itemSelected);

  const handleOnChange = selectedItem => {
    if (onItemChange) {
      onItemChange(selectedItem);
    }

    setItemSelected(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value);
  };

  return /*#__PURE__*/_react.default.createElement(_downshift.default, {
    initialSelectedItem: initialSelectedOption,
    onChange: selectedItem => handleOnChange(selectedItem),
    itemToString: item => item ? item.value : ''
  }, ({
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  }) => {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", _extends({}, getToggleButtonProps(), {
      name: name,
      ref: ref,
      className: (0, _classnames.default)(buttonClasses, selectClasses, selectTextClasses, selectDisabledClasses, className),
      "data-testid": testId,
      disabled: disabled
    }), /*#__PURE__*/_react.default.createElement("span", null, selectedItem ? selectedItem.label : placeHolder), /*#__PURE__*/_react.default.createElement(_.Icon, {
      className: icon
    }, !isOpen ? /*#__PURE__*/_react.default.createElement(_navigation.expand_more, {
      type: "filled"
    }) : /*#__PURE__*/_react.default.createElement(_navigation.expand_less, {
      type: "filled"
    }))), isOpen && /*#__PURE__*/_react.default.createElement("ul", _extends({}, getMenuProps(), {
      className: selectListClasses
    }), options.map((item, index) => /*#__PURE__*/_react.default.createElement("li", _extends({
      className: itemListClasses,
      key: index
    }, getItemProps({
      key: item.value,
      index,
      item
    })), item.label))));
  });
});
exports.DropdownDownshiftSelect = DropdownDownshiftSelect;