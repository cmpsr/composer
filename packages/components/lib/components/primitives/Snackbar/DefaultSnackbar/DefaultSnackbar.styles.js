"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;

var _DefaultSnackbar = require("./DefaultSnackbar");

const getStyle = (isTextRightPosition, type) => ({
  snackbarWrapper: `${isTextRightPosition ? 'justify-start' : 'justify-between'} flex items-center`,
  informationWrapper: `${isTextRightPosition ? 'order-2' : 'order-1'}`,
  ctaWrapper: `${isTextRightPosition ? 'order-1 pr-4' : 'order-2'}`,
  toastContainer: `!shadow-12% !rounded !px-4 !py-1.125 ${snackbarTypeStyle(type)}`
});

exports.getStyle = getStyle;

const snackbarTypeStyle = type => {
  switch (type) {
    case _DefaultSnackbar.SnackbarType.Default:
      return '!bg-fill-black-75';

    case _DefaultSnackbar.SnackbarType.Success:
      return '!bg-fill-system-success';

    case _DefaultSnackbar.SnackbarType.Warning:
      return '!bg-fill-system-warning';

    case _DefaultSnackbar.SnackbarType.Error:
      return '!bg-fill-system-error';
  }
};