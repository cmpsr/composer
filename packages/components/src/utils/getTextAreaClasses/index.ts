export const getTextAreaClasses = (isInvalid: boolean) => {
  return `form-input ${
    isInvalid ? 'border-fill-system-error' : 'focus:border-outline-forms-focus'
  } resize-none border-outline-forms-filled border placeholder-outline-forms-filled focus:outline-none focus:border-fill-primary-900 disabled:placeholder-dark-50 disabled:bg-fill-forms-disabled disabled:border-outline-forms-disabled`;
};
