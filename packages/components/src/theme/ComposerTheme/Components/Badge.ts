import { ComponentStyleConfig } from '@chakra-ui/react';

export const statusStyles = {
  custom: { backgroundColor: 'primary-default', borderColor: 'primary-default', color: 'text-badge-outline' },
  accent: { backgroundColor: 'accent-default', borderColor: 'accent-default', color: 'accent-default' },
  primary: { backgroundColor: 'primary-default', borderColor: 'primary-default', color: 'primary-default' },
  secondary: { backgroundColor: 'secondary-default', borderColor: 'secondary-default', color: 'secondary-default' },
  info: { backgroundColor: 'alert-inform-default', borderColor: 'alert-inform-default', color: 'alert-inform-default' },
  success: { backgroundColor: 'alert-success-default', borderColor: 'alert-success-default', color: 'text-success' },
  warning: { backgroundColor: 'alert-warning-default', borderColor: 'alert-warning-default', color: 'text-warning' },
  error: { backgroundColor: 'alert-error-default', borderColor: 'alert-error-default', color: 'text-error' },
};

export const Badge: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    letterSpacing: '0.05em',
    borderRadius: 'radii-half',
    ...theme.textStyles['text-body-floating-label-bold'],
  }),
  variants: {
    solid: ({ status }) => ({
      backgroundColor: statusStyles[status].backgroundColor,
      color: 'text-badge-solid',
    }),
    outline: ({ status }) => ({
      borderColor: statusStyles[status].borderColor,
      borderWidth: '1px',
      boxShadow: 'none',
      color: statusStyles[status].color,
    }),
    subtle: ({ status }) => ({
      backgroundColor: 'background-action-default',
      color: statusStyles[status].color,
    }),
  },
  defaultProps: {
    variant: 'solid',
    status: 'primary',
  },
};
