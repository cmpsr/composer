"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;

var _Snackbar = require("./Snackbar");

const getStyle = (isTextRightPosition, type) => ({
  snackbarWrapper: `${isTextRightPosition ? 'justify-start' : 'justify-between'} flex items-center`,
  informationWrapper: `${isTextRightPosition ? 'order-2' : 'order-1'}`,
  ctaWrapper: `${isTextRightPosition ? 'order-1 pr-4' : 'order-2'}`,
  toastContainer: `!shadow-12% !rounded !px-4 !py-1.125 ${snackbarTypeStyle(type)}`
});

exports.getStyle = getStyle;

const snackbarTypeStyle = type => {
  switch (type) {
    case _Snackbar.SnackbarType.Default:
      return '!bg-fill-black-400';

    case _Snackbar.SnackbarType.Success:
      return '!bg-fill-system-success';

    case _Snackbar.SnackbarType.Warning:
      return '!bg-fill-system-warning';

    case _Snackbar.SnackbarType.Error:
      return '!bg-fill-system-error';
  }
};