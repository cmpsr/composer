"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.ModalShapes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("./..");

var _navigation = require("../Icon/icons/navigation");

var _getModalClasses = require("../../../utils/getModalClasses");

var _reactModal = _interopRequireDefault(require("react-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let ModalShapes;
exports.ModalShapes = ModalShapes;

(function (ModalShapes) {
  ModalShapes["Rounded"] = "rounded-modal-rounded";
  ModalShapes["SemiRounded"] = "rounded-modal-semi-rounded";
  ModalShapes["Rectangle"] = "rounded-modal-rectangle";
})(ModalShapes || (exports.ModalShapes = ModalShapes = {}));

const Modal = ({
  children,
  className,
  overlayClassName,
  shape,
  isOpen = false,
  closeButton = false
}) => {
  const [show, setShow] = (0, _react.useState)(isOpen);
  const {
    wrapper,
    overlay
  } = (0, _getModalClasses.getModalClasses)();
  (0, _react.useEffect)(() => {
    setShow(isOpen);
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    className: (0, _classnames.default)(wrapper, className, shape),
    isOpen: show,
    overlayClassName: (0, _classnames.default)(overlay, overlayClassName),
    ariaHideApp: false
  }, closeButton && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "focus:outline-none",
    onClick: () => setShow(false)
  }, /*#__PURE__*/_react.default.createElement(_.Icon, {
    className: "fill-current"
  }, /*#__PURE__*/_react.default.createElement(_navigation.close, {
    type: "filled"
  })))), children);
};

exports.Modal = Modal;