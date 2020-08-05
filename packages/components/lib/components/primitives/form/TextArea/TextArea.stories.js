"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withError = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _ErrorField = require("../ErrorField");

var _TextField = require("../TextField");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/TextArea',
  component: _.TextArea
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.TextArea, {
  name: "default",
  placeholder: (0, _addonKnobs.text)('placeholder', 'Placeholder'),
  value: (0, _addonKnobs.text)('value', 'Type in here!'),
  disabled: (0, _addonKnobs.boolean)('disabled', false),
  shape: (0, _addonKnobs.select)('shape', _TextField.InputShapes, _TextField.InputShapes.SemiRounded)
});

exports.basic = basic;
basic.story = {
  name: 'Default'
};

const withError = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-col"
}, /*#__PURE__*/_react.default.createElement(_.TextArea, {
  name: "default",
  placeholder: "Placeholder",
  isInvalid: true
}), /*#__PURE__*/_react.default.createElement(_ErrorField.ErrorField, {
  error: "Error"
}));

exports.withError = withError;
withError.story = {
  name: 'With error'
};