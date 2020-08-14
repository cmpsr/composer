module.exports = (theme) => ({
  default: {
    radio: {
      '&:checked': {
        backgroundColor: undefined,
        borderColor: undefined,
      },
      '&:focus': {
        boxShadow: undefined,
        borderColor: undefined,
      },
      icon: (iconColor) =>
        `<svg fill="${iconColor}" viewBox="2 2 12 12" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      iconColor: theme('colors.fill-state-primary-enabled'),
      '&:disabled': {
        iconColor: theme('colors.fill-state-primary-disabled'),
      },
    },
  },
});
