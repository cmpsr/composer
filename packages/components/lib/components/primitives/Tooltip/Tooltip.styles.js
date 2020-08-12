"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;

const getStyles = (place, backgroundColor) => {
  const placeClasses = {
    top: `-bottom-0-25 `,
    bottom: `-top-0-25 `,
    right: `-left-0-25`,
    left: `-right-0-25`
  };
  return {
    defaultColor: `${backgroundColor} px-5 py-1 text-white rounded-sm`,
    arrowClasses: 'absolute w-2 h-2 z-10',
    arrowBeforeClasses: `before:absolute before:w-2 before:h-2 before:z-10 before:empty-content before:${backgroundColor} before:transform before:rotate-45`,
    arrowPlacementClasses: placeClasses[place]
  };
};

exports.getStyles = getStyles;