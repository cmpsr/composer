"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.IMAGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IMAGE_DEFAULT_TEST_ID = "image";
exports.IMAGE_DEFAULT_TEST_ID = IMAGE_DEFAULT_TEST_ID;

const Image = ({
  className,
  imageClassName,
  image: {
    title,
    url
  },
  testId = IMAGE_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("picture", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("source", {
    className: (0, _classnames.default)("select-none", imageClassName),
    type: "image/webp",
    srcSet: `${url}?fm=webp`,
    "data-testid": testId
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)("select-none", imageClassName),
    alt: title,
    src: url
  }));
};

exports.Image = Image;