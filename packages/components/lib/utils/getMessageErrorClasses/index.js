"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageErrorClasses = void 0;

var _Message = require("../../components/primitives/Chat/Conversation/Message");

const getMessageErrorClasses = placement => {
  const errorClasses = getErrorClasses(placement);
  return errorClasses;
};

exports.getMessageErrorClasses = getMessageErrorClasses;

const getErrorClasses = placement => {
  const isLeftPlacement = placement === _Message.MessagePlacement.Left;
  return {
    messageWrapper: 'flex items-center w-full',
    message: `${isLeftPlacement ? 'order-2' : 'order-1'} w-full`,
    wrapper: `flex flex-col ${isLeftPlacement ? 'items-start' : 'items-end'}`,
    icon: 'text-fill-system-error fill-current cursor-pointer',
    iconWrapper: `mb-2 ${isLeftPlacement ? 'order-1 mr-1' : 'order-2 ml-1'}`,
    description: 'mb-2 select-none cursor-pointer'
  };
};