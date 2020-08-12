"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Tooltip',
  component: _Tooltip.Tooltip
};
exports.default = _default;

const base = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
  place: (0, _addonKnobs.select)('Place', _Tooltip.TooltipPlace, _Tooltip.TooltipPlace.Left),
  element: /*#__PURE__*/_react.default.createElement("span", null, (0, _addonKnobs.text)('Trigger', 'Trigger')),
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, (0, _addonKnobs.text)('Tooltip', 'Tooltip')),
  backgroundColor: (0, _addonKnobs.select)('backgroundColor', _Tooltip.BackgroundColor, _Tooltip.BackgroundColor.Primary900)
}));

exports.base = base;
base.story = {
  name: 'Base'
};