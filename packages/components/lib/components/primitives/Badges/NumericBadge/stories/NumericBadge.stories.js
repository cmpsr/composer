"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Badges/NumericBadge',
  component: _.NumericBadge
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  number: (0, _addonKnobs.number)('number', 3),
  maximumNumber: (0, _addonKnobs.number)('maxiNumber', 9),
  color: (0, _addonKnobs.select)('color', _.BadgeColor, _.BadgeColor.Primary)
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};