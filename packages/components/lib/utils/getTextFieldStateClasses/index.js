"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextFieldStateClasses = void 0;

const getTextFieldStateClasses = (disabled, invalid) => {
  if (disabled) {
    return 'disabled:placeholder-dark-50 ' + 'disabled:bg-fill-form-disabled ' + 'disabled:border-outline-form-disabled ';
  }

  return 'border-outline-form-filled ' + 'focus:outline-none ' + 'placeholder-outline-form-filled ' + `${invalid ? 'border-fill-system-error' : 'focus:border-outline-form-focus'}`;
};

exports.getTextFieldStateClasses = getTextFieldStateClasses;