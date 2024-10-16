import { ComponentStyleConfig } from '@chakra-ui/react';

const defaultStyles = {
  colorSolid: 'text-badge-solid',
  borderColor: (color) => color,
  backgroundColor: (color) => color,
  colorOutlineSubtle: (color) => color,
};

export const statusStyles = {
  custom: {
    ...defaultStyles,
    backgroundColor: 'background-badge-custom',
    borderColor: 'background-badge-custom',
    colorSolid: 'text-badge-custom-solid',
    colorSubtle: 'text-badge-custom-subtle',
    colorOutline: 'text-badge-custom-outline',
  },
  accent: {
    ...defaultStyles,
    backgroundColor: 'accent-default',
    colorOutlineSubtle: 'accent-default',
  },
  primary: {
    ...defaultStyles,
    backgroundColor: 'primary-default',
    colorOutlineSubtle: 'primary-default',
  },
  secondary: {
    ...defaultStyles,
    backgroundColor: 'secondary-default',
    colorOutlineSubtle: 'secondary-default',
  },
  info: {
    ...defaultStyles,
    backgroundColor: 'alert-inform-default',
    colorOutlineSubtle: 'text-inform',
  },
  success: {
    ...defaultStyles,
    backgroundColor: 'alert-success-default',
    colorOutlineSubtle: 'text-success',
  },
  warning: {
    ...defaultStyles,
    backgroundColor: 'alert-warning-default',
    colorOutlineSubtle: 'text-warning',
  },
  error: {
    ...defaultStyles,
    backgroundColor: 'alert-error-default',
    colorOutlineSubtle: 'text-error',
  },
};

export const Badge: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    letterSpacing: '0.05em',
    borderRadius: 'radii-badge',
    ...theme.textStyles['text-body-floating-label-bold'],
  }),
  variants: {
    solid: ({ status }) => ({
      backgroundColor: statusStyles[status].backgroundColor,
      color: statusStyles[status].colorSolid,
    }),
    outline: ({ status }) => ({
      borderColor: status === 'custom' ? statusStyles[status].borderColor : statusStyles[status].backgroundColor,
      borderWidth: '1px',
      boxShadow: 'none',
      color: status === 'custom' ? statusStyles[status].colorOutline : statusStyles[status].backgroundColor,
    }),
    subtle: ({ status }) => ({
      backgroundColor: 'background-action-default',
      color: status === 'custom' ? statusStyles[status].colorSubtle : statusStyles[status].colorOutlineSubtle,
    }),
  },
  defaultProps: {
    variant: 'solid',
    status: 'primary',
  },
};
