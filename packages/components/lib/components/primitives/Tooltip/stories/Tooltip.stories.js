"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Tooltip',
  component: _.Tooltip
};
exports.default = _default;
var idOptions;

(function (idOptions) {
  idOptions["top"] = "top";
  idOptions["bottom"] = "bottom";
  idOptions["left"] = "left";
  idOptions["right"] = "right";
})(idOptions || (idOptions = {}));

var colorOptions;

(function (colorOptions) {
  colorOptions["red"] = "red";
  colorOptions["gray"] = "gray";
})(colorOptions || (colorOptions = {}));

const base = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: (0, _addonKnobs.select)('id', idOptions, idOptions.top),
  place: (0, _addonKnobs.select)('place', _.TooltipPlace, _.TooltipPlace.Top),
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger"),
  backgroundColor: (0, _addonKnobs.select)('backgroundColor', colorOptions, colorOptions.gray)
}));

exports.base = base;
base.story = {
  name: 'Base'
};