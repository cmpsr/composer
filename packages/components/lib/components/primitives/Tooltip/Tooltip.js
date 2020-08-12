"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.TooltipPlace = exports.BackgroundColor = exports.TOOLTIP_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPopper = require("react-popper");

var _Tooltip = require("./Tooltip.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';
exports.TOOLTIP_DEFAULT_TEST_ID = TOOLTIP_DEFAULT_TEST_ID;
let BackgroundColor;
exports.BackgroundColor = BackgroundColor;

(function (BackgroundColor) {
  BackgroundColor["Primary900"] = "bg-fill-primary-900";
  BackgroundColor["Primary100"] = "bg-fill-primary-100";
})(BackgroundColor || (exports.BackgroundColor = BackgroundColor = {}));

let TooltipPlace;
exports.TooltipPlace = TooltipPlace;

(function (TooltipPlace) {
  TooltipPlace["Left"] = "left";
  TooltipPlace["Right"] = "right";
  TooltipPlace["Bottom"] = "bottom";
  TooltipPlace["Top"] = "top";
})(TooltipPlace || (exports.TooltipPlace = TooltipPlace = {}));

const Tooltip = ({
  place = TooltipPlace.Top,
  element,
  tooltip,
  className,
  backgroundColor = BackgroundColor.Primary900,
  testId = TOOLTIP_DEFAULT_TEST_ID
}) => {
  const [showPopper, setShowPopper] = (0, _react.useState)(false);
  const [referenceElement, setReferenceElement] = (0, _react.useState)(null);
  const [popperElement, setPopperElement] = (0, _react.useState)(null);
  const [arrowElement, setArrowElement] = (0, _react.useState)(null);
  const {
    styles,
    attributes
  } = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    placement: place,
    modifiers: [{
      name: 'flip',
      enabled: false
    }, {
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }]
  });
  const {
    arrowClasses,
    arrowBeforeClasses,
    arrowPlacementClasses,
    tooltipClasses
  } = (0, _Tooltip.getStyles)(place, backgroundColor);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    ref: setReferenceElement,
    onMouseEnter: () => setShowPopper(true),
    onMouseLeave: () => setShowPopper(false)
  }, element), showPopper && /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    className: (0, _classnames.default)(tooltipClasses, className),
    "data-testid": testId
  }), tooltip, /*#__PURE__*/_react.default.createElement("div", {
    ref: setArrowElement,
    style: styles.arrow,
    "data-placement": place,
    className: (0, _classnames.default)(arrowClasses, arrowBeforeClasses, arrowPlacementClasses)
  })));
};

exports.Tooltip = Tooltip;