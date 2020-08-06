"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circular = exports.CircularColor = exports.CircularSize = exports.CIRCULAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CIRCULAR_DEFAULT_TEST_ID = 'circular';
exports.CIRCULAR_DEFAULT_TEST_ID = CIRCULAR_DEFAULT_TEST_ID;
let CircularSize;
exports.CircularSize = CircularSize;

(function (CircularSize) {
  CircularSize["Small"] = "small";
  CircularSize["Large"] = "large";
})(CircularSize || (exports.CircularSize = CircularSize = {}));

let CircularColor;
exports.CircularColor = CircularColor;

(function (CircularColor) {
  CircularColor["Primary"] = "stroke-fill-primary-900";
  CircularColor["White"] = "white";
})(CircularColor || (exports.CircularColor = CircularColor = {}));

const Circular = ({
  className,
  strokeWidth = 2,
  testId = CIRCULAR_DEFAULT_TEST_ID,
  size = CircularSize.Small,
  color = CircularColor.Primary
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _classnames.default)(className, size, 'circular'),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement("circle", {
    stroke: color,
    className: (0, _classnames.default)(color, 'path'),
    cx: size === CircularSize.Small ? 10 : 50,
    cy: size === CircularSize.Small ? 10 : 50,
    r: size === CircularSize.Small ? 9 : 20,
    fill: "none",
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

exports.Circular = Circular;