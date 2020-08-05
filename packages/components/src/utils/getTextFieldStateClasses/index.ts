export const getTextFieldStateClasses = (
  disabled: boolean,
  invalid: boolean
) => {
  if (disabled) {
    return (
      'disabled:placeholder-dark-50 ' +
      'disabled:bg-fill-form-disabled ' +
      'disabled:border-outline-form-disabled '
    );
  }

  return (
    'border-outline-form-filled ' +
    'focus:outline-none ' +
    'placeholder-outline-form-filled ' +
    `${
      invalid ? 'border-fill-system-error' : 'focus:border-outline-form-focus'
    }`
  );
};
