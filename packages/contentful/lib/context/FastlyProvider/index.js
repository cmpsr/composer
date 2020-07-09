"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FastlyProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _PageContext = require("../PageContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FastlyProvider = props => {
  const {
    abAllocations,
    query
  } = props;

  const addVariant = variant => {};

  const getVariantByRef = ref => {
    const exp = abAllocations.experiments.find(experiment => experiment.eId === ref);
    return {
      id: exp.vId,
      type: exp.vType
    };
  };

  return /*#__PURE__*/_react.default.createElement(_PageContext.PageContext.Provider, _extends({
    value: {
      abAllocations,
      addVariant,
      getVariantByRef,
      query
    }
  }, props));
};

exports.FastlyProvider = FastlyProvider;