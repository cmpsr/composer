export const getListClasses = () => {
  return {
    wrapper: 'absolute flex flex-col items-left shadow-lg',
  };
};

export const getItemClasses = () => {
  return {
    wrapper:
      'flex items-center justify-left px-6 py-4 hover:bg-state-ui-hover whitespace-no-wrap cursor-pointer focus:outline-none',
    iconClasses: 'fill-current mr-3',
    titleWrapper: 'flex flex-col',
  };
};
