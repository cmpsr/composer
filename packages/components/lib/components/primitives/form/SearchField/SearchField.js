"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = exports.IconPosition = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

var _action = require("../../Icon/icons/action");

var _TextField = require("../TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let IconPosition;
exports.IconPosition = IconPosition;

(function (IconPosition) {
  IconPosition["Left"] = "left-0 pl-3";
  IconPosition["Right"] = "right-0 pr-3";
})(IconPosition || (exports.IconPosition = IconPosition = {}));

const SearchField = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  shape = _TextField.InputShapes.SemiRounded,
  iconPosition = IconPosition.Left,
  ariaLabel,
  name,
  placeholder,
  onChange,
  type = 'search',
  disabled = false,
  required = false
}, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    ariaLabel: ariaLabel,
    className: (0, _classnames.default)(className, {
      'pl-10': iconPosition === IconPosition.Left
    }),
    name: name,
    placeholder: placeholder,
    shape: shape,
    onChange: onChange,
    type: type,
    disabled: disabled,
    required: required,
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('absolute inset-y-0 flex items-center z-10', iconPosition)
  }, /*#__PURE__*/_react.default.createElement(_.Icon, {
    className: "fill-current text-fill-black-25"
  }, /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  }))));
});
exports.SearchField = SearchField;