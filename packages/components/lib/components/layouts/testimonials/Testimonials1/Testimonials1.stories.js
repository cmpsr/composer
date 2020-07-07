"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Testimonials/Testimonials1',
  component: _.Testimonials1
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Testimonials1, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  },
  testimonial: "We spend so much time focused on our own lives down here on earth that we often fail to notice the beautiful and wondrous things not on this planet.Our seemingly limitless universe is filled with truly astonishing things",
  author: "Neil Armstrong,",
  profession: "Lead Astronaut, NASA."
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};