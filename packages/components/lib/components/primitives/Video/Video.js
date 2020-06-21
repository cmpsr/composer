"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = exports.VIDEO_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VIDEO_DEFAULT_TEST_ID = "video";
exports.VIDEO_DEFAULT_TEST_ID = VIDEO_DEFAULT_TEST_ID;

const Video = ({
  autoPlay,
  controls,
  className,
  video: {
    url
  },
  testId = VIDEO_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("video", {
    className: (0, _classnames.default)("select-none", className),
    src: url,
    autoPlay: autoPlay,
    controls: controls,
    "data-testid": testId
  });
};

exports.Video = Video;