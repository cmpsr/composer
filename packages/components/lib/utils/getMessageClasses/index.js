"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageClasses = void 0;

var _Message = require("../../components/primitives/Chat/Conversation/Message");

const getMessageClasses = (placement, backgroundColor, hasTime) => {
  const {
    wrapperClasses,
    messageClasses
  } = getMessagePlacementClasses(placement, backgroundColor, hasTime);
  const timeClasses = hasTime && getMessageTimeClasses();
  return {
    wrapperClasses,
    messageClasses,
    timeClasses
  };
};

exports.getMessageClasses = getMessageClasses;

const getMessagePlacementClasses = (placement, backgroundColor, hasTime) => {
  const baseWrapper = `flex flex-col ${hasTime ? 'mb-0' : 'mb-2'}`;
  const baseMessage = `${backgroundColor} px-4 py-3 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left`;

  if (placement === _Message.MessagePlacement.Left) {
    return {
      wrapperClasses: `${baseWrapper} items-start justify-start`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-bl-message-semirounded`
    };
  } else {
    return {
      wrapperClasses: `${baseWrapper} items-end justify-end`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-br-message-semirounded`
    };
  }
};

const getMessageTimeClasses = () => {
  return 'mt-1 mb-2';
};