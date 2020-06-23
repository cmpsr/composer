"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIconTooltip = exports.withIcon = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _2 = require("../../..");

var _social = require("../../../Icon/icons/social");

var _Tooltip = require("../../../Tooltip");

var _addonKnobs = require("@storybook/addon-knobs");

var _TextField = require("../../TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/CurrencyFieldIcon',
  component: _.CurrencyFieldIcon
};
exports.default = _default;

const withIcon = () => /*#__PURE__*/_react.default.createElement(_.CurrencyFieldIcon, {
  icon: /*#__PURE__*/_react.default.createElement(_2.Icon, {
    className: "fill-current"
  }, /*#__PURE__*/_react.default.createElement(_social.person, {
    type: "filled"
  })),
  name: "default",
  placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
  invalid: (0, _addonKnobs.boolean)('Invalid', false),
  disabled: (0, _addonKnobs.boolean)('Disabled', false),
  inputMode: (0, _addonKnobs.select)('Input mode', _TextField.InputMode, _TextField.InputMode.Numeric)
});

exports.withIcon = withIcon;
withIcon.story = {
  name: 'With icon'
};

const withIconTooltip = () => /*#__PURE__*/_react.default.createElement(_.CurrencyFieldIcon, {
  icon: /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    id: "currencyFieldIcon",
    tooltip: "This is the tooltip message",
    element: /*#__PURE__*/_react.default.createElement(_2.Icon, {
      className: "fill-current"
    }, /*#__PURE__*/_react.default.createElement(_social.person, {
      type: "filled"
    }))
  }),
  name: "default",
  placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
  invalid: (0, _addonKnobs.boolean)('Invalid', false),
  disabled: (0, _addonKnobs.boolean)('Disabled', false),
  inputMode: (0, _addonKnobs.select)('Input mode', _TextField.InputMode, _TextField.InputMode.Numeric)
});

exports.withIconTooltip = withIconTooltip;
withIconTooltip.story = {
  name: 'With icon tooltip'
};