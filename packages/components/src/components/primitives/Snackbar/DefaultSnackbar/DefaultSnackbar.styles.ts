import { SnackbarType } from './DefaultSnackbar';

export const getStyle = ({
  isTextRightPosition = false,
  type = SnackbarType.Default,
}) => ({
  snackbarWrapper: `${
    isTextRightPosition ? 'justify-start' : 'justify-between'
  } flex items-center`,
  informationWrapper: `${isTextRightPosition ? 'order-2' : 'order-1'}`,
  ctaWrapper: `${isTextRightPosition ? 'order-1 pr-4' : 'order-2'}`,
  toastContainer: `!shadow-12% !rounded !px-4 !py-1.125 ${snackbarTypeStyle(
    type
  )}`,
});

const snackbarTypeStyle = (type: SnackbarType) => {
  switch (type) {
    case SnackbarType.Default:
      return '!bg-fill-black-75';
    case SnackbarType.Success:
      return '!bg-fill-system-success';
    case SnackbarType.Warning:
      return '!bg-fill-system-warning';
    case SnackbarType.Error:
      return '!bg-fill-system-error';
  }
};
