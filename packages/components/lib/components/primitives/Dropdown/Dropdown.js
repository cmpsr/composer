"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("./..");

var _List = require("../List");

var _navigation = require("../Icon/icons/navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dropdown = ({
  title,
  className,
  children,
  listWrapperClassName
}) => {
  const node = (0, _react.useRef)(null);
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const handleClose = e => {
      if (node.current && !node.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [node]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: node,
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)('flex align-middle flex-1', className),
    role: "button",
    onClick: () => setIsOpen(isOpen => !isOpen)
  }, /*#__PURE__*/_react.default.createElement(_.Typography, {
    tag: "span",
    type: _.TypographyTypes.Body
  }, title), /*#__PURE__*/_react.default.createElement(_.Icon, {
    className: "fill-current ml-2 pointer-events-none",
    testId: isOpen ? 'ExpandLess' : 'ExpandMore'
  }, isOpen ? /*#__PURE__*/_react.default.createElement(_navigation.expand_less, {
    type: "filled"
  }) : /*#__PURE__*/_react.default.createElement(_navigation.expand_more, {
    type: "filled"
  }))), isOpen && /*#__PURE__*/_react.default.createElement(_List.List, {
    className: "min-w-10"
  }, children));
};

exports.Dropdown = Dropdown;