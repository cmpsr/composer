"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../../Button");

var _getDropdownClasses = require("../../../../utils/getDropdownClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonItem = ({
  className,
  children,
  onClick,
  disabled
}) => {
  const {
    wrapper
  } = (0, _getDropdownClasses.getItemClasses)();
  return /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: (0, _classnames.default)(wrapper, className),
    onClick: onClick,
    disabled: disabled
  }, children);
};

exports.ButtonItem = ButtonItem;