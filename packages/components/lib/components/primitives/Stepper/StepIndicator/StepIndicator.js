"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepIndicator = exports.LINE_DEFAULT_TEST_ID = exports.STEP_INDICATOR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STEP_INDICATOR_DEFAULT_TEST_ID = 'stepIndicator';
exports.STEP_INDICATOR_DEFAULT_TEST_ID = STEP_INDICATOR_DEFAULT_TEST_ID;
const LINE_DEFAULT_TEST_ID = 'line';
exports.LINE_DEFAULT_TEST_ID = LINE_DEFAULT_TEST_ID;

const StepIndicator = ({
  className,
  numberOfSteps,
  activeStep,
  testId = STEP_INDICATOR_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("ol", {
    "data-testid": testId,
    className: (0, _classnames.default)(className, 'inline-flex justify-center space-x-1')
  }, /*#__PURE__*/_react.default.createElement(Indicators, {
    numberOfSteps: numberOfSteps,
    activeStep: activeStep
  }));
};

exports.StepIndicator = StepIndicator;

const Indicators = ({
  numberOfSteps,
  activeStep
}) => {
  const arrOfIndicators = [];

  for (let index = 0; index < numberOfSteps; index++) {
    arrOfIndicators.push( /*#__PURE__*/_react.default.createElement("li", {
      "data-testid": LINE_DEFAULT_TEST_ID,
      key: index
    }, /*#__PURE__*/_react.default.createElement("hr", {
      className: (0, _classnames.default)('border-b-4 border-t-2 rounded w-10', {
        'border-fill-black-25': index > activeStep
      }, {
        'border-fill-primary-100': index <= activeStep
      })
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, arrOfIndicators);
};