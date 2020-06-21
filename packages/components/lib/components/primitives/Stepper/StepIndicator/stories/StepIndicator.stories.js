"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withActiveStep = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Stepper/StepIndicator',
  component: _.StepIndicator
};
exports.default = _default;

const withActiveStep = () => /*#__PURE__*/_react.default.createElement(_.StepIndicator, {
  numberOfSteps: (0, _addonKnobs.number)('numberOfSteps', 4),
  activeStep: (0, _addonKnobs.number)('activeStep', 2)
});

exports.withActiveStep = withActiveStep;
withActiveStep.story = {
  name: 'With active step'
};