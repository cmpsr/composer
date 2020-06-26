"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSingleSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _DropdownNativeSelect = require("../DropdownNativeSelect");

var _DropdownDownshiftSelect = require("../DropdownDownshiftSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownSingleSelect = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return _reactDeviceDetect.isMobile ? /*#__PURE__*/_react.default.createElement(_DropdownNativeSelect.DropdownNativeSelect, _extends({}, props, {
    ref: ref
  })) : /*#__PURE__*/_react.default.createElement(_DropdownDownshiftSelect.DropdownDownshiftSelect, _extends({}, props, {
    ref: ref
  }));
});
exports.DropdownSingleSelect = DropdownSingleSelect;