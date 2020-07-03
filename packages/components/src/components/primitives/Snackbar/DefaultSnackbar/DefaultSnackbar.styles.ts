export const getStyle = (textPosition = false) => ({
  snackbarWrapper: `${
    textPosition ? 'justify-between' : 'justify-start'
  } flex items-center`,
  informationWrapper: `${textPosition ? 'order-1' : 'order-2'}`,
  ctaWrapper: `${textPosition ? 'order-2' : 'order-1 pr-4'}`,
  icon: 'fill-current text-fill-white',
  toastContainer: '!rounded !bg-fill-black-75 !px-4 !py-1.125',
});
