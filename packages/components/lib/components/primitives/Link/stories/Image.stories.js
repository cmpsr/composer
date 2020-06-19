"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withoutURL = exports.withURL = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Asset = require("../../Asset");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Link/Image',
  component: _.Link
};
exports.default = _default;

const withURL = () => /*#__PURE__*/_react.default.createElement(_.Link, {
  url: "https://www.google.com"
}, /*#__PURE__*/_react.default.createElement(_Asset.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
}));

exports.withURL = withURL;
withURL.story = {
  name: 'With URL'
};

const withoutURL = () => /*#__PURE__*/_react.default.createElement(_.Link, null, /*#__PURE__*/_react.default.createElement(_Asset.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
}));

exports.withoutURL = withoutURL;
withoutURL.story = {
  name: 'Without URL'
};