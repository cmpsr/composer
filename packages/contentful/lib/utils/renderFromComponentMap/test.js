"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FAKE_ITEM1 = 'Fake Item 1 Text';
const FAKE_ITEM2 = 'Fake Item 2 Text';
const DEFAULT_ITEM = 'Default Item Text';
describe('renderFromComponentMap', () => {
  const componentMap = {
    type1: () => /*#__PURE__*/_react.default.createElement("div", null, FAKE_ITEM1),
    type2: () => /*#__PURE__*/_react.default.createElement("div", null, FAKE_ITEM2),
    default: () => /*#__PURE__*/_react.default.createElement("div", null, DEFAULT_ITEM)
  };
  it('returns the correct entry type, type1', () => {
    const {
      getByText
    } = (0, _react2.render)((0, _.default)(componentMap, 'type1'));
    getByText(FAKE_ITEM1);
  });
  it('returns the correct entry type, type2', () => {
    const {
      getByText
    } = (0, _react2.render)((0, _.default)(componentMap, 'type2'));
    getByText(FAKE_ITEM2);
  });
  it('returns the default type if type cannot be found', () => {
    const {
      getByText
    } = (0, _react2.render)((0, _.default)(componentMap, 'type3'));
    getByText(DEFAULT_ITEM);
  });
  it('returns the default type if type is null', () => {
    const {
      getByText
    } = (0, _react2.render)((0, _.default)(componentMap, null));
    getByText(DEFAULT_ITEM);
  });
});