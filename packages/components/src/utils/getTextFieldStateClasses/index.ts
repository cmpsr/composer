export const getTextFieldStateClasses = (
  disabled: boolean,
  invalid: boolean
) => {
  if (disabled) {
    return (
      'disabled:placeholder-dark-50 ' +
      'disabled:bg-fill-forms-disabled ' +
      'disabled:border-outline-forms-disabled '
    );
  }

  return (
    'border-outline-forms-filled ' +
    'focus:outline-none ' +
    'placeholder-outline-forms-filled ' +
    `${
      invalid ? 'border-fill-system-error' : 'focus:border-outline-forms-focus'
    }`
  );
};
