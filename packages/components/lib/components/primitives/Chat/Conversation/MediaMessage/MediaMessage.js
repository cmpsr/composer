"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaMessage = exports.MessagePlacement = exports.MediaMessageBorderColor = exports.WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Image = require("../../../Image");

var _Typography = require("../../../Typography");

var _MediaMessage = require("./MediaMessage.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID = 'wrapperMediaMessage';
exports.WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID = WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID;
let MediaMessageBorderColor;
exports.MediaMessageBorderColor = MediaMessageBorderColor;

(function (MediaMessageBorderColor) {
  MediaMessageBorderColor["Black10"] = "border-fill-black-10";
  MediaMessageBorderColor["Primary25"] = "border-fill-primary-25";
  MediaMessageBorderColor["Secondary25"] = "border-fill-secondary-25";
})(MediaMessageBorderColor || (exports.MediaMessageBorderColor = MediaMessageBorderColor = {}));

let MessagePlacement;
exports.MessagePlacement = MessagePlacement;

(function (MessagePlacement) {
  MessagePlacement["Left"] = "left";
  MessagePlacement["Right"] = "right";
})(MessagePlacement || (exports.MessagePlacement = MessagePlacement = {}));

const MediaMessage = ({
  className,
  borderColor = MediaMessageBorderColor.Secondary25,
  time,
  placement = MessagePlacement.Left,
  image,
  onClick,
  testId = WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID
}) => {
  const {
    wrapperClasses,
    messageClasses,
    imageClasses,
    timeClasses
  } = (0, _MediaMessage.getStyles)(placement, borderColor, !!time);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    className: (0, _classnames.default)(className, messageClasses),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    imageClassName: imageClasses,
    image: image
  })), time && /*#__PURE__*/_react.default.createElement("div", {
    className: timeClasses
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark50,
    tag: 'span',
    type: _Typography.TypographyTypes.Eyebrow
  }, time)));
};

exports.MediaMessage = MediaMessage;