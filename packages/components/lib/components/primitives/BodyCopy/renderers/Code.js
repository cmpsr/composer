"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = exports.CODE_RENDERER_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _prism = require("react-syntax-highlighter/dist/cjs/styles/prism");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CODE_RENDERER_DEFAULT_TEST_ID = "code";
exports.CODE_RENDERER_DEFAULT_TEST_ID = CODE_RENDERER_DEFAULT_TEST_ID;

const Code = (style, testId = CODE_RENDERER_DEFAULT_TEST_ID) => props => {
  const {
    language,
    value
  } = props;
  const colorClasses = (0, _utils.getClassesFromStyle)(style.code);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("mb-8", colorClasses),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_reactSyntaxHighlighter.Prism, {
    language: language || "javascript",
    style: _prism.okaidia
  }, value));
};

exports.Code = Code;