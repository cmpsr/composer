"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDropdownSingleSelectClasses = void 0;

const getDropdownSingleSelectClasses = (disabled = false, invalid = false, itemSelected) => {
  return {
    selectWrapper: 'relative',
    buttonClasses: 'flex items-center justify-between',
    selectClasses: 'appearance-none px-3 h-12 w-full bg-fill-forms-enabled border rounded text-left',
    selectTextClasses: `${itemSelected ? 'text-dark-100' : 'text-dark-50'}`,
    selectFocusClasses: 'focus:border-outline-forms-focus focus:outline-none',
    selectDisabledClasses: disabled ? 'bg-fill-forms-disabled border-outline-forms-disabled !text-dark-50' : 'border-outline-forms-filled hover:border-states-contained-enabled',
    selectErrorClasses: `${invalid ? 'border-fill-system-error' : ''}`,
    iconWrapper: 'pointer-events-none absolute inset-y-0 flex items-center z-10 right-0 pr-3',
    icon: 'fill-current text-fill-black-50',
    selectListClasses: 'border rounded-b border-outline-primary-100',
    itemListClasses: 'p-3 hover:bg-gray-100'
  };
};

exports.getDropdownSingleSelectClasses = getDropdownSingleSelectClasses;