"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = exports.TypographyMode = exports.TypographyTypes = exports.TYPOGRAPHY_DEFAULT_TEST_ID = void 0;

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TYPOGRAPHY_DEFAULT_TEST_ID = 'typography';
exports.TYPOGRAPHY_DEFAULT_TEST_ID = TYPOGRAPHY_DEFAULT_TEST_ID;
let TypographyTypes;
exports.TypographyTypes = TypographyTypes;

(function (TypographyTypes) {
  TypographyTypes["Headline1"] = "typo-headline-1";
  TypographyTypes["Headline2"] = "typo-headline-2";
  TypographyTypes["Headline3"] = "typo-headline-3";
  TypographyTypes["Headline4"] = "typo-headline-4";
  TypographyTypes["Headline5"] = "typo-headline-5";
  TypographyTypes["Headline6"] = "typo-headline-6";
  TypographyTypes["Body"] = "typo-body";
  TypographyTypes["Detail"] = "typo-detail";
  TypographyTypes["Eyebrow"] = "typo-eyebrow";
  TypographyTypes["Form"] = "typo-form";
  TypographyTypes["FormError"] = "typo-form-error";
  TypographyTypes["FormLabel"] = "typo-form-label";
  TypographyTypes["Button"] = "typo-button";
  TypographyTypes["Link"] = "typo-link";
})(TypographyTypes || (exports.TypographyTypes = TypographyTypes = {}));

let TypographyMode;
exports.TypographyMode = TypographyMode;

(function (TypographyMode) {
  TypographyMode["Dark100"] = "dark-100";
  TypographyMode["Dark50"] = "dark-50";
  TypographyMode["Dark25"] = "dark-25";
  TypographyMode["Light100"] = "light-100";
  TypographyMode["Light50"] = "light-50";
  TypographyMode["Light25"] = "light-25";
  TypographyMode["Accent100"] = "accent-100";
  TypographyMode["Accent50"] = "accent-50";
  TypographyMode["Accent25"] = "accent-25";
})(TypographyMode || (exports.TypographyMode = TypographyMode = {}));

const Typography = ({
  className,
  children,
  style = {},
  type,
  tag,
  mode,
  htmlFor,
  testId = TYPOGRAPHY_DEFAULT_TEST_ID
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style);
  return /*#__PURE__*/(0, _react.createElement)(tag, {
    className: (0, _classnames.default)(type, colorClasses, className, mode),
    'data-testid': testId,
    htmlFor
  }, children);
};

exports.Typography = Typography;