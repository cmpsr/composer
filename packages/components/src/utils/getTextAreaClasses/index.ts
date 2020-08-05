export const getTextAreaClasses = (isInvalid: boolean) => {
  return `form-input ${
    isInvalid ? 'border-fill-system-error' : 'focus:border-outline-form-focus'
  } resize-none border-outline-form-filled border placeholder-outline-form-filled focus:outline-none focus:border-fill-primary-900 disabled:placeholder-dark-50 disabled:bg-fill-form-disabled disabled:border-outline-form-disabled`;
};
