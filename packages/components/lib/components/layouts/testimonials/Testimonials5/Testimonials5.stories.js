"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGrid = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _2 = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Testimonials/Testimonials5',
  component: _.Testimonials5
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Testimonials5, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I realized up there that our planet is not infinite. It\u2019s fragile. That may not be obvious to a lot of folks, and it\u2019s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.\u201D",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA.",
  className: "mt-12"
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const withGrid = () => /*#__PURE__*/_react.default.createElement(_2.Grid, {
  gridClassName: "w-full px-5 py-8 mt-16",
  style: {
    grid: {
      md: {
        'grid-cols': 3,
        gap: 4
      },
      default: {
        gap: 20,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_.Testimonials5, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I realized up there that our planet is not infinite. It\u2019s fragile. That may not be obvious to a lot of folks, and it\u2019s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.\u201D",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}), /*#__PURE__*/_react.default.createElement(_.Testimonials5, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I realized up there that our planet is not infinite. It\u2019s fragile. That may not be obvious to a lot of folks, and it\u2019s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.\u201D",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}), /*#__PURE__*/_react.default.createElement(_.Testimonials5, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I realized up there that our planet is not infinite. It\u2019s fragile. That may not be obvious to a lot of folks, and it\u2019s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.\u201D",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}));

exports.withGrid = withGrid;
withGrid.story = {
  name: 'With grid'
};