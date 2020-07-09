"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentMap = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyCopy = _interopRequireDefault(require("../models/content/BodyCopy"));

var _Experiment = _interopRequireDefault(require("../models/content/Experiment"));

var _Feature = _interopRequireDefault(require("../models/content/Feature"));

var _Footer = _interopRequireDefault(require("../models/content/Footer"));

var _Grid = _interopRequireDefault(require("../models/content/Grid"));

var _Group = _interopRequireDefault(require("../models/content/Group"));

var _Header = _interopRequireDefault(require("../models/content/Header"));

var _Hero = _interopRequireDefault(require("../models/content/Hero"));

var _Link = _interopRequireDefault(require("../models/content/Link"));

var _Section = _interopRequireDefault(require("../models/content/Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const componentMap = {
  BodyCopy: item => /*#__PURE__*/_react.default.createElement(_BodyCopy.default, item),
  Experiment: item => /*#__PURE__*/_react.default.createElement(_Experiment.default, item),
  Feature: item => /*#__PURE__*/_react.default.createElement(_Feature.default, item),
  Footer: item => /*#__PURE__*/_react.default.createElement(_Footer.default, item),
  Grid: item => /*#__PURE__*/_react.default.createElement(_Grid.default, item),
  Group: item => /*#__PURE__*/_react.default.createElement(_Group.default, item),
  Header: item => /*#__PURE__*/_react.default.createElement(_Header.default, item),
  Hero: item => /*#__PURE__*/_react.default.createElement(_Hero.default, item),
  Link: item => /*#__PURE__*/_react.default.createElement(_Link.default, item),
  Section: item => /*#__PURE__*/_react.default.createElement(_Section.default, item)
};
exports.componentMap = componentMap;