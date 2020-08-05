"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextAreaClasses = void 0;

const getTextAreaClasses = isInvalid => {
  return `form-input ${isInvalid ? 'border-fill-system-error' : 'focus:border-outline-form-focus'} resize-none border-outline-form-filled border placeholder-outline-form-filled focus:outline-none focus:border-fill-primary-900 disabled:placeholder-dark-50 disabled:bg-fill-form-disabled disabled:border-outline-form-disabled`;
};

exports.getTextAreaClasses = getTextAreaClasses;