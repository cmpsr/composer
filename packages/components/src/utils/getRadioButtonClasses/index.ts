export const getRadioButtonClasses = (isDisabled) => {
  return {
    radio: 'rounded-full border-2 h-5 w-5 focus:outline-none',
    labelClass: 'ml-0-625',
    radioBorder: `${
      isDisabled
        ? 'border-state-primary-disabled'
        : 'border-state-primary-enabled'
    }`,
  };
};
