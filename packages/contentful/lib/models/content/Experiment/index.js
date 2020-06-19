"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../constants");

var _renderFromComponentMap = _interopRequireDefault(require("../../../utils/renderFromComponentMap"));

var _getChildren = require("./getChildren");

var _PageContext = require("../../../context/PageContext");

var _getVariantByQueryParams = require("../../../utils/getVariantByQueryParams");

var _randomTrafficSelector = require("../../../utils/randomTrafficSelector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Experiment = /*#__PURE__*/_react.default.memo(props => {
  const {
    className,
    variants,
    sys: {
      id
    }
  } = props; // Check we have variants available

  if (!variants.variants) return null; // Use session context

  const {
    addVariant,
    getVariantByRef,
    query
  } = (0, _react.useContext)(_PageContext.PageContext); // Get variant by session

  let selectedVariant = getVariantByRef(id); // If no variant selected in session

  if (!selectedVariant) {
    // Choose variant by query params or finally by traffic
    selectedVariant = (0, _getVariantByQueryParams.getVariantByQueryParams)(id, variants.variants, query) || (0, _randomTrafficSelector.randomTrafficSelector)(variants.variants, item => item); // Add selected variant to our session

    addVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
      ref: id
    }));
  }

  const items = (0, _getChildren.getChildren)({
    id: selectedVariant.id,
    type: selectedVariant.type
  });
  if (!items) return null;
  const ExperimentProps = {
    className
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement("div", ExperimentProps, items)
  };
  return (0, _renderFromComponentMap.default)(componentMap, _constants.DEFAULT);
});

var _default = Experiment;
exports.default = _default;