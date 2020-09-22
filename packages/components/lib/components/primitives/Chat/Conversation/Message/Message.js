"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.MessagePlacement = exports.MessageBackgroundColor = exports.WRAPPER_MESSAGE_DEFAULT_TEST_ID = exports.MESSAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../../Typography");

var _Circular = require("../../../Progress/Circular");

var _Image = require("../../../Image");

var _getMessageClasses = require("../../../../../utils/getMessageClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  onMediaClick,
  onLoadMedia
}) => {
  var _mediaFiles$;

  const [isMediaLoaded, setMediaLoaded] = (0, _react.useState)(false);

  const onClickMediaFiles = () => {
    onMediaClick && onMediaClick(mediaFiles);
  };

  const handleMediaLoad = () => {
    setMediaLoaded(true);
    onLoadMedia && onLoadMedia();
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
    mediaWrapper,
    mediaLoader
  } = (0, _getMessageClasses.getStyles)(placement, backgroundColor, !!time, !!text, hasMedia, isMediaLoaded);
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
  }, !isMediaLoaded && /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "mediaLoader",
    className: mediaLoader
  }, /*#__PURE__*/_react.default.createElement(_Circular.Circular, null)), /*#__PURE__*/_react.default.createElement(_Image.Image, {
    onLoad: handleMediaLoad,
    imageClassName: mediaPreview,
    image: {
      title: 'Media Asset',
      url: thumbnail
    }
  }), hasMultipleMedia && isMediaLoaded && /*#__PURE__*/_react.default.createElement("div", {
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