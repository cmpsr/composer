"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTextDesktopAndMobileImage = exports.withTextAndDesktopImage = exports.withPrimarySecondaryButtonLinkContent = exports.withSecondaryButtonLinkContent = exports.withPrimaryButtonLinkContent = exports.withText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Hero/Hero7',
  component: _.Hero7
};
exports.default = _default;

const withText = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  style: {}
});

exports.withText = withText;
withText.story = {
  name: 'With text'
};

const withPrimaryButtonLinkContent = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  style: {}
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Primary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Primary Link")));

exports.withPrimaryButtonLinkContent = withPrimaryButtonLinkContent;
withPrimaryButtonLinkContent.story = {
  name: 'With primary button link content'
};

const withSecondaryButtonLinkContent = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  style: {}
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Secondary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Secondary Link")));

exports.withSecondaryButtonLinkContent = withSecondaryButtonLinkContent;
withSecondaryButtonLinkContent.story = {
  name: 'With secondary button link content'
};

const withPrimarySecondaryButtonLinkContent = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  style: {}
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "grid grid-cols-2 gap-2"
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Primary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Primary Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Secondary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Secondary Link"))));

exports.withPrimarySecondaryButtonLinkContent = withPrimarySecondaryButtonLinkContent;
withPrimarySecondaryButtonLinkContent.story = {
  name: 'With primary and secondary button link content'
};

const withTextAndDesktopImage = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  desktopAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  },
  style: {}
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "grid grid-cols-2 gap-2"
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Primary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Primary Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Secondary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Secondary Link"))));

exports.withTextAndDesktopImage = withTextAndDesktopImage;
withTextAndDesktopImage.story = {
  name: 'With text and desktop image'
};

const withTextDesktopAndMobileImage = () => /*#__PURE__*/_react.default.createElement(_.Hero7, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  eyebrow: "Space headline",
  desktopAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  },
  mobileAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  },
  style: {}
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "grid grid-cols-2 gap-2"
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Primary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Primary Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "#",
  type: _primitives.LinkTypes.Secondary
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Button
}, "Secondary Link"))));

exports.withTextDesktopAndMobileImage = withTextDesktopAndMobileImage;
withTextDesktopAndMobileImage.story = {
  name: 'With text, desktop and mobile image'
};