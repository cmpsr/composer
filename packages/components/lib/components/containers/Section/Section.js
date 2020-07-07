"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = exports.SECTION_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SECTION_DEFAULT_TEST_ID = 'section';
exports.SECTION_DEFAULT_TEST_ID = SECTION_DEFAULT_TEST_ID;

const Section = ({
  children,
  className,
  testId = SECTION_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _classnames.default)('mb-4', className),
    "data-testid": testId
  }, children);
};

exports.Section = Section;