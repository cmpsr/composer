"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.MessagePlacement = exports.MessageBackgroundColor = exports.WRAPPER_MESSAGE_DEFAULT_TEST_ID = exports.MESSAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../../Typography");

var _Image = require("../../../Image");

var _getMessageClasses = require("../../../../../utils/getMessageClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MESSAGE_DEFAULT_TEST_ID = 'message';
exports.MESSAGE_DEFAULT_TEST_ID = MESSAGE_DEFAULT_TEST_ID;
const WRAPPER_MESSAGE_DEFAULT_TEST_ID = 'wrapperMessage';
exports.WRAPPER_MESSAGE_DEFAULT_TEST_ID = WRAPPER_MESSAGE_DEFAULT_TEST_ID;
let MessageBackgroundColor;
exports.MessageBackgroundColor = MessageBackgroundColor;

(function (MessageBackgroundColor) {
  MessageBackgroundColor["Black100"] = "bg-fill-black-100";
  MessageBackgroundColor["Secondary600"] = "bg-fill-secondary-600";
  MessageBackgroundColor["Primary600"] = "bg-fill-primary-600";
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
  backgroundColor = MessageBackgroundColor.Primary600,
  placement = MessagePlacement.Right,
  time,
  mediaFiles = [],
  onMediaClick
}) => {
  var _mediaFiles$;

  const onClickMediaFiles = () => {
    onMediaClick && onMediaClick(mediaFiles);
  };

  const {
    hasMedia,
    hasMultipleMedia,
    thumbnail
  } = {
    hasMedia: mediaFiles.length > 0,
    hasMultipleMedia: mediaFiles.length > 1,
    thumbnail: mediaFiles && ((_mediaFiles$ = mediaFiles[0]) === null || _mediaFiles$ === void 0 ? void 0 : _mediaFiles$.url)
  };
  const {
    wrapperClasses,
    messageClasses,
    timeClasses,
    textWrapper,
    mediaPreview,
    numberOfMediaFiles,
    mediaWrapper
  } = (0, _getMessageClasses.getStyles)(placement, backgroundColor, !!time, !!text, hasMedia);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": WRAPPER_MESSAGE_DEFAULT_TEST_ID,
    className: (0, _classnames.default)(className, wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(messageClasses)
  }, hasMedia && /*#__PURE__*/_react.default.createElement("div", {
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

exports.Message = Message;