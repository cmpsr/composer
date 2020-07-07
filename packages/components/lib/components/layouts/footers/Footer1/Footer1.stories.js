"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCopyContent = exports.withContent = exports.withCopy = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Footer/Footer1',
  component: _.Footer1
};
exports.default = _default;

const withCopy = () => /*#__PURE__*/_react.default.createElement(_.Footer1, {
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
  }))
});

exports.withCopy = withCopy;
withCopy.story = {
  name: 'With copy'
};

const withContent = () => /*#__PURE__*/_react.default.createElement(_.Footer1, {
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

const withCopyContent = () => /*#__PURE__*/_react.default.createElement(_.Footer1, {
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

exports.withCopyContent = withCopyContent;
withCopyContent.story = {
  name: 'With copy and content'
};