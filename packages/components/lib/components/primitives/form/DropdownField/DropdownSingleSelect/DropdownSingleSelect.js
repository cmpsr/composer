"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSingleSelect = exports.DROPDOWN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _DropdownNativeSelect = require("../DropdownNativeSelect");

var _DropdownDownshiftSelect = require("../DropdownDownshiftSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';
exports.DROPDOWN_DEFAULT_TEST_ID = DROPDOWN_DEFAULT_TEST_ID;

const DropdownSingleSelect = props => {
  return _reactDeviceDetect.isMobile ? /*#__PURE__*/_react.default.createElement(_DropdownNativeSelect.DropdownNativeSelect, props) : /*#__PURE__*/_react.default.createElement(_DropdownDownshiftSelect.DropdownDownshiftSelect, props);
};

exports.DropdownSingleSelect = DropdownSingleSelect;