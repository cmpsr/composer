"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaMessage = exports.MEDIA_MESSAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MediaMessage = require("./MediaMessage.styles");

var _Message = require("../Message");

var _Typography = require("../../../Typography");

var _Image = require("../../../Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MEDIA_MESSAGE_DEFAULT_TEST_ID = 'mediaMessage';
exports.MEDIA_MESSAGE_DEFAULT_TEST_ID = MEDIA_MESSAGE_DEFAULT_TEST_ID;

const MediaMessage = ({
  text,
  className,
  testId = MEDIA_MESSAGE_DEFAULT_TEST_ID,
  placement = _Message.MessagePlacement.Right,
  backgroundColor = _Message.MessageBackgroundColor.Primary600,
  time,
  mediaFiles,
  onClick
}) => {
  const onClickMediaFiles = () => {
    onClick && onClick(mediaFiles);
  };

  const {
    wrapperClasses,
    messageClasses,
    timeClasses,
    textWrapper,
    mediaPreview,
    numberOfMediaFiles,
    mediaWrapper
  } = (0, _MediaMessage.getStyles)(placement, backgroundColor, !!time, !!text);
  const hasMultipleMedia = mediaFiles.length > 1;
  const thumbnail = mediaFiles[0].url;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(className, wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: messageClasses,
    "data-testid": "message"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: mediaWrapper,
    "data-testid": "mediaWrapper",
    onClick: onClickMediaFiles
  }, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    imageClassName: mediaPreview,
    image: {
      title: 'Media Asset',
      url: thumbnail
    }
  }), hasMultipleMedia && /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "mediaFilesIndicator",
    className: numberOfMediaFiles
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Light100,
    tag: 'h6',
    type: _Typography.TypographyTypes.Headline6
  }, "+", mediaFiles.length))), !!text && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(textWrapper),
    "data-testid": "textMessage"
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark100,
    tag: 'span',
    type: _Typography.TypographyTypes.Form
  }, text))), time && /*#__PURE__*/_react.default.createElement("div", {
    className: timeClasses
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark50,
    tag: 'span',
    type: _Typography.TypographyTypes.Eyebrow
  }, time)));
};

exports.MediaMessage = MediaMessage;