"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

var _social = require("../../Icon/icons/social");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextFieldIcon = ({
  className,
  iconPosition = 'left',
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  disabled = false,
  type = 'text',
  value
}) => {
  const [focused, setFocus] = (0, _react.useState)(false);
  const ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const {
      current
    } = ref;

    const handleFocus = () => {
      setFocus(true);
    };

    const handleBlur = () => {
      if (!current.value) {
        setFocus(false);
      }
    };

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);
    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    };
  }, [ref]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: (0, _classnames.default)(className, 'appearance-none rounded-md relative block w-full p-3 border placeholder-primary-fill-75 text-gray-900 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5', {
      'pl-10': iconPosition === 'left'
    }, {
      'bg-gray-200': disabled,
      'border-outline-primary-900': !disabled
    }),
    "aria-label": ariaLabel,
    name: name,
    type: type,
    required: required,
    placeholder: placeholder,
    onChange: onChange,
    ref: ref,
    value: value,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('absolute inset-y-0 flex items-center', {
      'left-0 pl-3': iconPosition === 'left',
      'right-0 pr-3': iconPosition === 'right'
    })
  }, /*#__PURE__*/_react.default.createElement(_.Icon, {
    width: 24,
    height: 24,
    className: (0, _classnames.default)('fill-current', {
      'text-gray-500': !focused
    })
  }, /*#__PURE__*/_react.default.createElement(_social.person, {
    type: "filled"
  }))));
};

exports.TextFieldIcon = TextFieldIcon;