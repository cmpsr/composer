"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _action = require("../../../Icon/icons/action");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Badges/IconicBadge',
  component: _.IconicBadge
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.IconicBadge, {
  icon: /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  }),
  color: (0, _addonKnobs.select)('color', _.BadgeColor, _.BadgeColor.Primary)
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};