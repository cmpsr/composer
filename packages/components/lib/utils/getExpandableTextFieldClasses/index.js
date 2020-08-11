"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandableTextFieldClasses = void 0;

const getExpandableTextFieldClasses = () => {
  return {
    wrapperClasses: 'relative w-full',
    placeholderClasses: 'pointer-events-none text-outline-form-filled absolute top-0 z-20 transform -translate-y-1/2 top-1/2 left-1',
    expandableTextFieldClasses: 'md:min-h-3 min-h-2-625 h-2-625 md:h-12 relative left-0 top-0 form-input py-0-625 px-4 focus:border-outline-form-focus resize-none border-outline-form-filled border focus:outline-none focus:border-fill-primary-900'
  };
};

exports.getExpandableTextFieldClasses = getExpandableTextFieldClasses;