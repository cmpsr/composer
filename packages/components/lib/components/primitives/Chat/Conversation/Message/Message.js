"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.MessagePlacement = exports.MessageBackgroundColor = exports.WRAPPER_MESSAGE_DEFAULT_TEST_ID = exports.MESSAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../../Typography");

var _getMessageClasses = require("../../../../../utils/getMessageClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MESSAGE_DEFAULT_TEST_ID = 'message';
exports.MESSAGE_DEFAULT_TEST_ID = MESSAGE_DEFAULT_TEST_ID;
const WRAPPER_MESSAGE_DEFAULT_TEST_ID = 'wrapperMessage';
exports.WRAPPER_MESSAGE_DEFAULT_TEST_ID = WRAPPER_MESSAGE_DEFAULT_TEST_ID;
let MessageBackgroundColor;
exports.MessageBackgroundColor = MessageBackgroundColor;

(function (MessageBackgroundColor) {
  MessageBackgroundColor["Black10"] = "bg-fill-black-10";
  MessageBackgroundColor["Secondary25"] = "bg-fill-secondary-25";
  MessageBackgroundColor["Primary25"] = "bg-fill-primary-25";
})(MessageBackgroundColor || (exports.MessageBackgroundColor = MessageBackgroundColor = {}));

let MessagePlacement;
exports.MessagePlacement = MessagePlacement;

(function (MessagePlacement) {
  MessagePlacement["Left"] = "left";
  MessagePlacement["Right"] = "right";
})(MessagePlacement || (exports.MessagePlacement = MessagePlacement = {}));

const Message = ({
  text,
  className,
  testId = MESSAGE_DEFAULT_TEST_ID,
  backgroundColor = MessageBackgroundColor.Primary25,
  placement = MessagePlacement.Right,
  time
}) => {
  const {
    wrapperClasses,
    messageClasses,
    timeClasses
  } = (0, _getMessageClasses.getMessageClasses)(placement, backgroundColor, !!time);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": WRAPPER_MESSAGE_DEFAULT_TEST_ID,
    className: (0, _classnames.default)(className, wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(messageClasses)
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark100,
    tag: 'span',
    type: _Typography.TypographyTypes.Form
  }, text)), time && /*#__PURE__*/_react.default.createElement("div", {
    className: timeClasses
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark50,
    tag: 'span',
    type: _Typography.TypographyTypes.Eyebrow
  }, time)));
};

exports.Message = Message;