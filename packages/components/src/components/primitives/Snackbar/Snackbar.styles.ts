import { SnackbarType } from './Snackbar';

export const getStyle = ({
  textPosition = false,
  type = SnackbarType.Default,
}) => ({
  snackbarWrapper: `${
    textPosition ? 'justify-between' : 'justify-start'
  } flex items-center`,
  informationWrapper: `${textPosition ? 'order-1' : 'order-2'}`,
  ctaWrapper: `${textPosition ? 'order-2' : 'order-1 pr-4'}`,
  icon: 'fill-current text-fill-white',
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
    default:
      break;
  }
};
