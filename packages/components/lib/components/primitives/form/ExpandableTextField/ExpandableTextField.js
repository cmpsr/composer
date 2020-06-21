"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandableTextField = exports.EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = require("../TextField");

var _getExpandableTextFieldClasses = require("../../../../utils/getExpandableTextFieldClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID = 'expandableTextField';
exports.EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID = EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID;
const ExpandableTextField = /*#__PURE__*/(0, _react.forwardRef)(({
  testId = EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID,
  className,
  placeholder,
  onChange,
  shape = _TextField.InputShapes.Rounded
}, ref) => {
  const expandableTextFieldRef = ref ? ref : (0, _react.useRef)(null);
  const placeholderRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const {
      current: currentExpandableTextField
    } = expandableTextFieldRef;
    const {
      current: currentPlaceholder
    } = placeholderRef;

    const onInput = () => {
      currentExpandableTextField.style.height = 'auto';
      currentExpandableTextField.style.height = `${currentExpandableTextField.scrollHeight}px`;
      currentExpandableTextField.style.overflowY = 'hidden';
      const hasContent = currentExpandableTextField.textContent.length > 0;
      currentPlaceholder.classList.add(`${hasContent ? 'invisible' : 'visible'}`);
      currentPlaceholder.classList.remove(`${hasContent ? 'visible' : 'invisible'}`);
    };

    currentExpandableTextField.addEventListener('input', onInput, false);
    return () => currentExpandableTextField.removeEventListener('input', onInput, false);
  }, []);
  const {
    wrapperClasses,
    placeholderClasses,
    expandableTextFieldClasses
  } = (0, _getExpandableTextFieldClasses.getExpandableTextFieldClasses)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, wrapperClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: placeholderRef,
    className: placeholderClasses
  }, placeholder), /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)(expandableTextFieldClasses, shape),
    contentEditable: true,
    ref: expandableTextFieldRef,
    onInput: e => onChange(e.currentTarget.textContent)
  }));
});
exports.ExpandableTextField = ExpandableTextField;