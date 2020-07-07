"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyCopy = exports.BODYCOPY_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _renderers = require("./renderers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BODYCOPY_DEFAULT_TEST_ID = "bodycopy";
exports.BODYCOPY_DEFAULT_TEST_ID = BODYCOPY_DEFAULT_TEST_ID;

const BodyCopy = ({
  className,
  copy,
  style,
  testId = BODYCOPY_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
    renderers: {
      code: (0, _renderers.Code)(style),
      paragraph: (0, _renderers.Paragraph)(style),
      link: (0, _renderers.Link)(style),
      list: (0, _renderers.List)(style),
      heading: (0, _renderers.Heading)(style)
    },
    className: className,
    source: copy,
    "data-testid": testId
  });
};

exports.BodyCopy = BodyCopy;