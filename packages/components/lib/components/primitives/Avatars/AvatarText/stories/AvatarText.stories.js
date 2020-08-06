"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBase = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Avatars/AvatarText',
  component: _.AvatarText
};
exports.default = _default;

const withBase = () => /*#__PURE__*/_react.default.createElement(_.AvatarText, {
  size: (0, _addonKnobs.select)('Size', _.AvatarSize, _.AvatarSize.Large),
  text: (0, _addonKnobs.text)('Text', 'OK'),
  backgroundColor: (0, _addonKnobs.select)('Background Color', _.AvatarBackgroundColor, _.AvatarBackgroundColor.Primary900),
  isHighlighted: (0, _addonKnobs.boolean)('Highlighted', false)
});

exports.withBase = withBase;
withBase.story = {
  name: 'With base'
};