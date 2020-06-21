"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSingleSelect = exports.DROPDOWN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _downshift = _interopRequireDefault(require("downshift"));

var _ = require("../../..");

var _navigation = require("../../../Icon/icons/navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';
exports.DROPDOWN_DEFAULT_TEST_ID = DROPDOWN_DEFAULT_TEST_ID;
const DropdownSingleSelect = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  options,
  placeHolder = 'Select an item',
  initialSelectedOption,
  onItemChange,
  testId = DROPDOWN_DEFAULT_TEST_ID,
  disabled = false,
  name = 'dropdown',
  invalid
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(_downshift.default, {
    initialSelectedItem: initialSelectedOption,
    onChange: selectedItem => {
      onItemChange && onItemChange(selectedItem);
    },
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
      className: (0, _classnames.default)('flex items-center justify-between px-3 h-12 appearance-none w-full text-dark-100 bg-fill-forms-enabled border rounded focus:border-outline-forms-focus border-outline-forms-filled text-left focus:outline-none', {
        'bg-gray-200': disabled,
        'border-outline-forms-filled hover:border-fill-primary-100': !disabled
      }, {
        'border-fill-system-error': invalid
      }, className),
      "data-testid": testId,
      disabled: disabled
    }), selectedItem && /*#__PURE__*/_react.default.createElement("span", null, selectedItem.label) || /*#__PURE__*/_react.default.createElement("span", {
      className: "text-outline-forms-filled"
    }, placeHolder), /*#__PURE__*/_react.default.createElement(_.Icon, {
      width: 24,
      height: 24,
      className: "fill-current"
    }, /*#__PURE__*/_react.default.createElement(_navigation.expand_more, {
      type: "filled"
    }))), isOpen && /*#__PURE__*/_react.default.createElement("ul", _extends({}, getMenuProps(), {
      className: "border rounded-b border-outline-primary-100"
    }), options.map((item, index) => /*#__PURE__*/_react.default.createElement("li", _extends({
      className: "p-3 hover:bg-gray-100",
      key: `${index}${item.value}`
    }, getItemProps({
      key: item.value,
      index,
      item
    })), item.label))));
  });
});
exports.DropdownSingleSelect = DropdownSingleSelect;