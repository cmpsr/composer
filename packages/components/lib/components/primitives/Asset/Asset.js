"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Asset = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Video = require("../Video");

var _Image = require("../Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Asset = ({
  autoPlay,
  controls,
  className,
  imageClassName,
  asset: {
    contentType,
    title,
    url
  }
}) => {
  return contentType.indexOf("video") >= 0 ? /*#__PURE__*/_react.default.createElement(_Video.Video, {
    className: (0, _classnames.default)("select-none", className),
    video: {
      url
    },
    autoPlay: autoPlay,
    controls: controls
  }) : /*#__PURE__*/_react.default.createElement(_Image.Image, {
    className: (0, _classnames.default)("select-none", className),
    imageClassName: imageClassName,
    image: {
      title,
      url
    }
  });
};

exports.Asset = Asset;