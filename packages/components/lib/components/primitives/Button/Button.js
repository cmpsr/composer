"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ButtonShapes = exports.ButtonTypes = exports.BUTTON_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BUTTON_DEFAULT_TEST_ID = 'button';
exports.BUTTON_DEFAULT_TEST_ID = BUTTON_DEFAULT_TEST_ID;
let ButtonTypes;
exports.ButtonTypes = ButtonTypes;

(function (ButtonTypes) {
  ButtonTypes["Primary"] = "primary-btn";
  ButtonTypes["Secondary"] = "secondary-btn";
})(ButtonTypes || (exports.ButtonTypes = ButtonTypes = {}));

let ButtonShapes;
exports.ButtonShapes = ButtonShapes;

(function (ButtonShapes) {
  ButtonShapes["Rounded"] = "rounded-btn-rounded";
  ButtonShapes["SemiRounded"] = "rounded-btn-semi-rounded";
  ButtonShapes["Rectangle"] = "rounded-btn-rectangle";
})(ButtonShapes || (exports.ButtonShapes = ButtonShapes = {}));

const Button = ({
  children,
  className,
  onClick,
  type,
  htmlType = 'button',
  testId = BUTTON_DEFAULT_TEST_ID,
  disabled,
  shape
}) => {
  const typeStateClasses = (0, _utils.getButtonStateClassesFromType)(type);
  return /*#__PURE__*/_react.default.createElement("button", {
    type: htmlType,
    className: (0, _classnames.default)(className, 'flex focus:outline-none', type, typeStateClasses, shape),
    onClick: onClick,
    "data-testid": testId,
    disabled: disabled
  }, children);
};

exports.Button = Button;