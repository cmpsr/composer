"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixed = exports.headings = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/BodyCopy',
  component: _.BodyCopy
};
exports.default = _default;
const headingsCopy = `${_constants.HEADING_1}\n\n${_constants.HEADING_2}\n\n${_constants.HEADING_3}\n\n${_constants.HEADING_4}\n\n${_constants.HEADING_5}\n\n${_constants.HEADING_6}`;

const headings = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.BodyCopy, {
  copy: headingsCopy,
  style: {}
}));

exports.headings = headings;
headings.story = {};
const paragraph1Copy = `${_constants.HEADING_1}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;
const paragraph2Copy = `${_constants.HEADING_2}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;
const paragraph3Copy = `${_constants.HEADING_3}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;
const paragraph4Copy = `${_constants.HEADING_4}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;
const paragraph5Copy = `${_constants.HEADING_5}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;
const paragraph6Copy = `${_constants.HEADING_6}\n\n${_constants.PARAGRAPH}\n\n${_constants.PARAGRAPH}\n\n${_constants.LIST}\n\n${_constants.LINK}\n\n${_constants.CODE}\n\n`;

const mixed = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.BodyCopy, {
  copy: `${paragraph1Copy}${paragraph2Copy}${paragraph3Copy}${paragraph4Copy}${paragraph5Copy}${paragraph6Copy}`,
  style: {}
}));

exports.mixed = mixed;
mixed.story = {
  name: 'Mixed types'
};