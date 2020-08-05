"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageError = exports.MESSAGE_ERROR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../../Typography");

var _Icon = require("../../../Icon");

var _alert = require("../../../Icon/icons/alert");

var _getMessageErrorClasses = require("../../../../../utils/getMessageErrorClasses");

var _Message = require("../Message");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MESSAGE_ERROR_DEFAULT_TEST_ID = 'messageError';
exports.MESSAGE_ERROR_DEFAULT_TEST_ID = MESSAGE_ERROR_DEFAULT_TEST_ID;

const MessageError = ({
  text,
  className,
  testId = MESSAGE_ERROR_DEFAULT_TEST_ID,
  placement = _Message.MessagePlacement.Right,
  errorText,
  onErrorClick
}) => {
  const {
    wrapper,
    message,
    messageWrapper,
    iconWrapper,
    icon,
    description
  } = (0, _getMessageErrorClasses.getMessageErrorClasses)(placement);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(className, wrapper)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: messageWrapper
  }, /*#__PURE__*/_react.default.createElement(_Message.Message, {
    text: text,
    className: (0, _classnames.default)(message),
    backgroundColor: _Message.MessageBackgroundColor.Black100,
    placement: placement
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: iconWrapper,
    "data-testid": "errorIcon",
    onClick: onErrorClick
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: icon
  }, /*#__PURE__*/_react.default.createElement(_alert.error, {
    type: "rounded"
  })))), errorText && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onErrorClick,
    className: description
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: "text-fill-system-error",
    tag: 'p',
    type: _Typography.TypographyTypes.Detail
  }, errorText)));
};

exports.MessageError = MessageError;