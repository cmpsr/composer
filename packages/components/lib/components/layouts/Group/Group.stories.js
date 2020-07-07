"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.with2ColumnsDesktop1Mobile = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Group',
  component: _.Group
};
exports.default = _default;

const with2ColumnsDesktop1Mobile = () => /*#__PURE__*/_react.default.createElement(_.Group, null, /*#__PURE__*/_react.default.createElement("p", null, "Item 1"), /*#__PURE__*/_react.default.createElement("p", null, "Item 2"));

exports.with2ColumnsDesktop1Mobile = with2ColumnsDesktop1Mobile;
with2ColumnsDesktop1Mobile.story = {
  name: 'With 2 items'
};