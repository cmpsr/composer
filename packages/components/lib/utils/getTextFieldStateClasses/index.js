"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextFieldStateClasses = void 0;

const getTextFieldStateClasses = (disabled, invalid) => {
  if (disabled) {
    return 'disabled:placeholder-dark-50 ' + 'disabled:bg-fill-forms-disabled ' + 'disabled:border-outline-forms-disabled ';
  }

  return 'border-outline-forms-filled ' + 'focus:outline-none ' + 'placeholder-outline-forms-filled ' + `${invalid ? 'border-fill-system-error' : 'focus:border-outline-forms-focus'}`;
};

exports.getTextFieldStateClasses = getTextFieldStateClasses;