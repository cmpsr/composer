"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMultiSelect = exports.DROPDOWN_DEFAULT_TEST_ID = void 0;

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

const DropdownMultiSelect = ({
  className,
  options,
  placeHolder = 'Select an item',
  onItemChange,
  testId = DROPDOWN_DEFAULT_TEST_ID,
  disabled = false
}) => {
  const [selectedItems, setSelectedItems] = (0, _react.useState)(new Set());

  const addItem = selectedItem => {
    if (!selectedItems.has(selectedItem)) {
      const newSet = new Set(selectedItems);
      newSet.add(selectedItem);
      setSelectedItems(newSet);
      onItemChange && onItemChange(Array.from(newSet.values()));
    }
  };

  const removeItem = itemToRemove => {
    if (selectedItems.has(itemToRemove)) {
      const newSet = new Set(selectedItems);
      newSet.delete(itemToRemove);
      setSelectedItems(newSet);
      onItemChange(Array.from(newSet.values()));
    }
  };

  const renderItems = () => {
    const items = [];
    selectedItems.forEach(item => {
      const {
        value,
        label
      } = item;
      items.push( /*#__PURE__*/_react.default.createElement("span", {
        key: `${value}`,
        className: "flex mr-1 items-center justify-between bg-gray-900 text-sm text-white rounded-full px-3 h-8"
      }, label, /*#__PURE__*/_react.default.createElement("div", {
        onClick: e => {
          e.stopPropagation();
          removeItem(item);
        }
      }, /*#__PURE__*/_react.default.createElement(_.Icon, {
        width: 18,
        height: 18,
        className: "fill-current ml-3"
      }, /*#__PURE__*/_react.default.createElement(_navigation.cancel, {
        type: "filled"
      })))));
    });
    return items;
  };

  return /*#__PURE__*/_react.default.createElement(_downshift.default, {
    onChange: selectedItem => addItem(selectedItem),
    itemToString: item => item.value
  }, ({
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  }) => {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", _extends({}, getToggleButtonProps(), {
      className: (0, _classnames.default)('flex justify-between items-center h-12 px-3 appearance-none w-full bg-white border rounded focus:outline-none text-left', {
        'bg-gray-200': disabled,
        'border-outline-primary-100 hover:border-fill-primary-100': !disabled
      }, className),
      "data-testid": testId,
      disabled: disabled
    }), selectedItems.size && /*#__PURE__*/_react.default.createElement("div", {
      className: "flex",
      "data-testid": "items-selected"
    }, renderItems()) || /*#__PURE__*/_react.default.createElement("span", {
      className: "text-gray-500"
    }, placeHolder), /*#__PURE__*/_react.default.createElement(_.Icon, {
      width: 24,
      height: 24,
      className: "fill-current"
    }, /*#__PURE__*/_react.default.createElement(_navigation.expand_more, {
      type: "filled"
    }))), /*#__PURE__*/_react.default.createElement("ul", _extends({}, getMenuProps(), {
      className: (0, _classnames.default)('border rounded-b border-outline-primary-100', {
        hidden: !isOpen
      })
    }), isOpen && options.map((item, index) => /*#__PURE__*/_react.default.createElement("li", _extends({
      className: "p-3 hover:bg-gray-100",
      key: `${index}${item.value}`
    }, getItemProps({
      key: item.value,
      index,
      item
    })), item.label))));
  });
};

exports.DropdownMultiSelect = DropdownMultiSelect;