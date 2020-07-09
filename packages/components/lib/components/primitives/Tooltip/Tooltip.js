"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.TooltipPlace = exports.TOOLTIP_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _colors = _interopRequireDefault(require("../../../../lib/styles/colors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';
exports.TOOLTIP_DEFAULT_TEST_ID = TOOLTIP_DEFAULT_TEST_ID;
const defaultColor = _colors.default['fill-primary'][100];
let TooltipPlace;
exports.TooltipPlace = TooltipPlace;

(function (TooltipPlace) {
  TooltipPlace["Left"] = "left";
  TooltipPlace["Right"] = "right";
  TooltipPlace["Bottom"] = "bottom";
  TooltipPlace["Top"] = "top";
})(TooltipPlace || (exports.TooltipPlace = TooltipPlace = {}));

const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  backgroundColor = defaultColor,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement("a", {
    "data-tip": true,
    "data-for": id
  }, element), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    backgroundColor: backgroundColor,
    id: id,
    place: place,
    effect: 'solid',
    className: className
  }, tooltip));
};

exports.Tooltip = Tooltip;