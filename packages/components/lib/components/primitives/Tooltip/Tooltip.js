"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.TooltipPlace = exports.BackgroundColor = exports.TOOLTIP_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';
exports.TOOLTIP_DEFAULT_TEST_ID = TOOLTIP_DEFAULT_TEST_ID;
let BackgroundColor;
exports.BackgroundColor = BackgroundColor;

(function (BackgroundColor) {
  BackgroundColor["Primary100"] = "!bg-fill-primary-100";
  BackgroundColor["Primary75"] = "!bg-fill-primary-75";
})(BackgroundColor || (exports.BackgroundColor = BackgroundColor = {}));

let TooltipPlace;
exports.TooltipPlace = TooltipPlace;

(function (TooltipPlace) {
  TooltipPlace["Left"] = "left";
  TooltipPlace["Right"] = "right";
  TooltipPlace["Bottom"] = "bottom";
  TooltipPlace["Top"] = "top";
})(TooltipPlace || (exports.TooltipPlace = TooltipPlace = {}));

const TooltipWrapper = (0, _styledComponents.default)(_reactTooltip.default)`
  &:after {
    ${({
  background
}) => background && (background === BackgroundColor.Primary100 ? {
  "--border-opacity": "1",
  "borderColor": "rgba(65, 65, 65, var(--border-opacity))"
} : {
  "--border-opacity": "1",
  "borderColor": "rgba(216, 216, 216, var(--border-opacity))"
})}
  }
  &:before {
    ${({
  background
}) => background && (background === BackgroundColor.Primary100 ? {
  "--border-opacity": "1",
  "borderColor": "rgba(65, 65, 65, var(--border-opacity))"
} : {
  "--border-opacity": "1",
  "borderColor": "rgba(216, 216, 216, var(--border-opacity))"
})}
  }
`;

const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  backgroundColor = BackgroundColor.Primary100,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement("a", {
    "data-tip": true,
    "data-for": id
  }, element), /*#__PURE__*/_react.default.createElement(TooltipWrapper, {
    backgroundColor: "none",
    background: backgroundColor,
    id: id,
    place: place,
    effect: 'solid',
    className: (0, _classnames.default)(backgroundColor, className),
    overridePosition: ({
      left,
      top
    }, _e, _t, node) => {
      return {
        top,
        left: typeof node === 'string' ? left : Math.max(left, 0)
      };
    }
  }, tooltip));
};

exports.Tooltip = Tooltip;