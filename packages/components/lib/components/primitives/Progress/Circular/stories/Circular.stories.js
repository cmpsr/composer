"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSmallSize = exports.withLargeSize = exports.withPrimaryColor = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Progress/Circular',
  component: _.Circular
};
exports.default = _default;

const withPrimaryColor = () => /*#__PURE__*/_react.default.createElement(_.Circular, {
  color: _.CircularColor.Primary
});

exports.withPrimaryColor = withPrimaryColor;
withPrimaryColor.story = {
  name: 'With primary color'
};

const withLargeSize = () => /*#__PURE__*/_react.default.createElement(_.Circular, {
  size: _.CircularSize.Large
});

exports.withLargeSize = withLargeSize;
withLargeSize.story = {
  name: 'With large size'
};

const withSmallSize = () => /*#__PURE__*/_react.default.createElement(_.Circular, {
  size: _.CircularSize.Small
});

exports.withSmallSize = withSmallSize;
withSmallSize.story = {
  name: 'With small size'
};