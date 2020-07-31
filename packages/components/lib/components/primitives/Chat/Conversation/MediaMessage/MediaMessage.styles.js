"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;

var _MediaMessage = require("./MediaMessage");

const getStyles = (placement, borderColor, hasTime) => {
  const {
    wrapperClasses,
    messageClasses
  } = getMessagePlacementClasses(placement, borderColor, hasTime);
  const timeClasses = hasTime && 'mt-1 mb-2';
  const imageClasses = 'h-full w-full object-cover';
  return {
    wrapperClasses,
    messageClasses,
    timeClasses,
    imageClasses
  };
};

exports.getStyles = getStyles;

const getMessagePlacementClasses = (placement, borderColor, hasTime) => {
  const baseWrapper = `flex flex-col ${hasTime ? 'mb-0' : 'mb-2'}`;
  const baseMessage = `${borderColor} cursor-pointer rounded-1-375 overflow-hidden h-13-438 w-13-438 border-4 md:h-19-625 md:w-19-625`;
  return {
    wrapperClasses: `${baseWrapper} ${placement === _MediaMessage.MessagePlacement.Left ? 'items-start justify-start' : 'items-end justify-end'}`,
    messageClasses: baseMessage
  };
};