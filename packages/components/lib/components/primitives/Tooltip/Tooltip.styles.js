"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;

const getStyles = (place, backgroundColor) => {
  const color = backgroundColor.substring(2);
  const borderPlace = place[0];
  return {
    defaultColor: `!${backgroundColor}`,
    arrowColor: `after:border-${borderPlace}${color}`
  };
};

exports.getStyles = getStyles;