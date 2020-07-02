"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBackgroundColor = exports.withRightPlace = exports.withLeftPlace = exports.withBottomPlace = exports.withTopPlace = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Tooltip',
  component: _.Tooltip
};
exports.default = _default;

const withTopPlace = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: "top",
  place: _.TooltipPlace.Top,
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger")
}));

exports.withTopPlace = withTopPlace;
withTopPlace.story = {
  name: 'With top place'
};

const withBottomPlace = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: "bottom",
  place: _.TooltipPlace.Bottom,
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger")
}));

exports.withBottomPlace = withBottomPlace;
withBottomPlace.story = {
  name: 'With bot place'
};

const withLeftPlace = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: "left",
  place: _.TooltipPlace.Left,
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger")
}));

exports.withLeftPlace = withLeftPlace;
withLeftPlace.story = {
  name: 'With left place'
};

const withRightPlace = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: "right",
  place: _.TooltipPlace.Right,
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger")
}));

exports.withRightPlace = withRightPlace;
withRightPlace.story = {
  name: 'With right place'
};

const withBackgroundColor = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-48"
}, /*#__PURE__*/_react.default.createElement(_.Tooltip, {
  id: "background",
  backgroundColor: _.BackgroundColor.Primary75,
  tooltip: /*#__PURE__*/_react.default.createElement("span", null, "Tooltip"),
  element: /*#__PURE__*/_react.default.createElement("span", null, "Trigger")
}));

exports.withBackgroundColor = withBackgroundColor;
withBackgroundColor.story = {
  name: 'With background color'
};