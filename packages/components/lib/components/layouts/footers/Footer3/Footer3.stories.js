"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCopyContent = exports.withContent = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Footer/Footer3',
  component: _.Footer3
};
exports.default = _default;

const withContent = () => /*#__PURE__*/_react.default.createElement(_.Footer3, {
  copy: "\xA9 2020 Composer",
  style: {}
}, {
  logo: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.google.com"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
      contentType: 'image'
    }
  })),
  content: [/*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "2"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "3"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link"))]
});

exports.withContent = withContent;
withContent.story = {
  name: 'With content'
};

const withCopyContent = () => /*#__PURE__*/_react.default.createElement(_.Footer3, {
  copy: "\xA9 2020 Composer",
  style: {}
}, {
  logo: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.google.com"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
      contentType: 'image'
    }
  })),
  content: [/*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "2"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "3"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link"))],
  secondaryContent: [/*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.twitter.com",
    className: "flex justify-center",
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/30oPHVNxaL4dRKZhkUUfa6/dc91f4aa39a1b8d7acf5a7c5f46c204e/Twitter.svg',
      contentType: 'image'
    }
  })), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.facebook.com",
    className: "flex justify-center",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/1kLv0p0bXeOCHyX36hH1Y1/d74901403dc4c7e39cdd3a6dc91d4a9e/Facebook.svg',
      contentType: 'image'
    }
  })), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.instagram.com",
    className: "flex justify-center",
    key: "2"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6JKQec3bWkfYls3D2tqHE0/ee29c366ddc051664cd378b9371b82c8/Instagram.svg',
      contentType: 'image'
    }
  }))]
});

exports.withCopyContent = withCopyContent;
withCopyContent.story = {
  name: 'With copy and social content'
};