export const getRadioButtonClasses = (isDisabled) => {
  return {
    radio: 'border-2 h-5 w-5',
    labelClass: 'ml-0-625',
    radioBorder: `${
      isDisabled
        ? 'border-states-contained-disabled'
        : 'border-states-contained-enabled'
    }`,
  };
};
