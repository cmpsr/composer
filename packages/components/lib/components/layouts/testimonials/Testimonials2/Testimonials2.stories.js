"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Testimonials/Testimonials2',
  component: _.Testimonials2
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Testimonials2, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "\u201CWe spend so much time focused on our own lives down here on earth that we often fail to notice the beautiful and wondrous things not on this planet. Our seemingly limitless universe is filled with truly astonishing things, and he on this site you can learn all about them!\u201D",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};