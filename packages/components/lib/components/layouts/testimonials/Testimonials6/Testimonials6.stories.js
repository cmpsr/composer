"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Testimonials/Testimonials6',
  component: _.Testimonials6
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Testimonials6, {
  testimonial: "I realized up there that our planet is not infinite. It\u2019s fragile.",
  author: "Neil Armstrong,",
  profession: "Lead Astronaut, NASA."
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};