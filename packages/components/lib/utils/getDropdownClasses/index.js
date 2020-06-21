"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemClasses = exports.getListClasses = void 0;

const getListClasses = () => {
  return {
    wrapper: 'absolute flex flex-col items-left shadow-lg'
  };
};

exports.getListClasses = getListClasses;

const getItemClasses = () => {
  return {
    wrapper: 'flex items-center justify-left px-6 py-4 hover:bg-states-general-hover whitespace-no-wrap cursor-pointer focus:outline-none',
    iconClasses: 'fill-current mr-3',
    titleWrapper: 'flex flex-col'
  };
};

exports.getItemClasses = getItemClasses;