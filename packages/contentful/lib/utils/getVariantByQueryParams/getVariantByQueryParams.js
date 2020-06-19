"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariantByQueryParams = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getVariantByQueryParams = (ref, variants, params) => {
  if (!variants) return;
  const paramKeys = Object.keys(params);
  const foundVariants = variants.filter(variant => {
    if (!variant.match) return false;
    return variant.match.reduce((prevMatch, match) => {
      if (prevMatch) return prevMatch;
      return paramKeys.reduce((prevParm, param) => {
        if (prevParm) return prevParm;
        return match[param] === params[param];
      }, false);
    }, false);
  });

  if (foundVariants.length > 0) {
    console.log('Matched variant by query', foundVariants[0]);
    return _objectSpread(_objectSpread({}, foundVariants[0]), {}, {
      ref
    });
  }
};

exports.getVariantByQueryParams = getVariantByQueryParams;