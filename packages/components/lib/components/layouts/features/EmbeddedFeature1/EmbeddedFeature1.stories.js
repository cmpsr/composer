"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Feature/EmbeddedFeature1',
  component: _.EmbeddedFeature1
};
exports.default = _default;

const withText = () => /*#__PURE__*/_react.default.createElement(_.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
});

exports.withText = withText;
withText.story = {
  name: 'With text'
};