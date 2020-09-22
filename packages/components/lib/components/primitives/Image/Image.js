"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.IMAGE_DEFAULT_TEST_ID = exports.IMAGE_CONTENT_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IMAGE_CONTENT_DEFAULT_TEST_ID = 'imageContent';
exports.IMAGE_CONTENT_DEFAULT_TEST_ID = IMAGE_CONTENT_DEFAULT_TEST_ID;
const IMAGE_DEFAULT_TEST_ID = 'image';
exports.IMAGE_DEFAULT_TEST_ID = IMAGE_DEFAULT_TEST_ID;

const Image = ({
  className,
  imageClassName,
  image: {
    title,
    url
  },
  testId = IMAGE_DEFAULT_TEST_ID,
  onLoad
}) => {
  return /*#__PURE__*/_react.default.createElement("picture", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("source", {
    className: (0, _classnames.default)('select-none', imageClassName),
    "data-testid": testId,
    type: "image/webp",
    srcSet: `${url}?fm=webp`
  }), /*#__PURE__*/_react.default.createElement("img", {
    "data-testid": IMAGE_CONTENT_DEFAULT_TEST_ID,
    onLoad: onLoad,
    className: (0, _classnames.default)('select-none', imageClassName),
    alt: title,
    src: url
  }));
};

exports.Image = Image;