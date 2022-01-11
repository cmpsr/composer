import { ComponentStyleConfig } from '@chakra-ui/react';

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    letterSpacing: '0.05em',
  },
  variants: {
    solid: {
      backgroundColor: 'primary-default',
      fontStyle: 'text-body-floating-label-bold',
      color: 'text-badge-solid',
      borderRadius: 'radii-half',
    },
    outline: {
      borderColor: 'primary-default',
      borderWidth: '1px',
      boxShadow: 'none',
      color: 'text-badge-outline',
    },
    subtle: {
      backgroundColor: 'background-action-default',
      color: 'text-badge-subtle',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};
