"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorColor = exports.withSecondaryColor = exports.withPrimaryColor = exports.withMaximumNumber = exports.withNumber = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Badges/NumericBadge',
  component: _.NumericBadge
};
exports.default = _default;

const withNumber = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  number: (0, _addonKnobs.number)('Number', 3)
});

exports.withNumber = withNumber;
withNumber.story = {
  name: 'With number'
};

const withMaximumNumber = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  number: (0, _addonKnobs.number)('Number', 12),
  maximumNumber: (0, _addonKnobs.number)('Maximum number', 9)
});

exports.withMaximumNumber = withMaximumNumber;
withMaximumNumber.story = {
  name: 'With maximum number'
};

const withPrimaryColor = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  color: (0, _addonKnobs.select)('color', _.BadgeColor, _.BadgeColor.Primary),
  number: (0, _addonKnobs.number)('Number', 5)
});

exports.withPrimaryColor = withPrimaryColor;
withPrimaryColor.story = {
  name: 'With primary color'
};

const withSecondaryColor = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  color: (0, _addonKnobs.select)('Color', _.BadgeColor, _.BadgeColor.Secondary),
  number: (0, _addonKnobs.number)('Number', 5)
});

exports.withSecondaryColor = withSecondaryColor;
withSecondaryColor.story = {
  name: 'With secondary color'
};

const withErrorColor = () => /*#__PURE__*/_react.default.createElement(_.NumericBadge, {
  color: (0, _addonKnobs.select)('Color', _.BadgeColor, _.BadgeColor.Error),
  number: (0, _addonKnobs.number)('Number', 5)
});

exports.withErrorColor = withErrorColor;
withErrorColor.story = {
  name: 'With error color'
};