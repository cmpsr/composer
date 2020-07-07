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
  title: 'Composer/Layout/Testimonials/Testimonials4',
  component: _.Testimonials4
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Testimonials4, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I don\u2019t know why people who have not been on rockets continue to ask, \u2018you\u2019re not scared?\u2019 no we were not scared.. until something happens, then it\u2019s time to get scared.",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const withGrid = () => /*#__PURE__*/_react.default.createElement(_2.Grid, {
  gridClassName: "w-full px-5 py-8",
  style: {
    grid: {
      md: {
        'grid-cols': 3
      },
      default: {
        gap: 4,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_.Testimonials4, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I don\u2019t know why people who have not been on rockets continue to ask, \u2018you\u2019re not scared?\u2019 no we were not scared.. until something happens, then it\u2019s time to get scared.",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}), /*#__PURE__*/_react.default.createElement(_.Testimonials4, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I don\u2019t know why people who have not been on rockets continue to ask, \u2018you\u2019re not scared?\u2019 no we were not scared.. until something happens, then it\u2019s time to get scared.",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}), /*#__PURE__*/_react.default.createElement(_.Testimonials4, {
  asset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg'
  },
  testimonial: "I don\u2019t know why people who have not been on rockets continue to ask, \u2018you\u2019re not scared?\u2019 no we were not scared.. until something happens, then it\u2019s time to get scared.",
  author: "Neil Armstrong",
  profession: "Lead Astronaut, NASA."
}));

exports.withGrid = withGrid;
withGrid.story = {
  name: 'With grid'
};