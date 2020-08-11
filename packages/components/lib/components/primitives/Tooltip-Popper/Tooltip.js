"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.TooltipPlace = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPopper = require("react-popper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  className
}) => {
  const [showPopper, setShowPopper] = (0, _react.useState)(true);
  const [referenceElement, setReferenceElement] = (0, _react.useState)(null);
  const [popperElement, setPopperElement] = (0, _react.useState)(null);
  const [arrowElement, setArrowElement] = (0, _react.useState)(null);
  const {
    styles,
    attributes
  } = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    placement: place,
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: "offset",
      options: {
        offset: [0, 10]
      }
    }]
  }); //before:border-t-fill-primary-100 before:border-r-transparent before:border-l-transparent h-1 w-4

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    ref: setReferenceElement,
    onClick: () => setShowPopper(!showPopper)
  }, element), showPopper && /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    className: (0, _classnames.default)("bg-fill-primary-100 px-5 py-1 text-white rounded-sm", className)
  }), tooltip, /*#__PURE__*/_react.default.createElement("div", {
    ref: setArrowElement,
    style: styles.arrow,
    "data-placement": place,
    className: "arrow"
  })));
};

exports.Tooltip = Tooltip;