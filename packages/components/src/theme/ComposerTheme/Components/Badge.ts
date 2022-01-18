import { ComponentStyleConfig } from '@chakra-ui/react';

export const Badge: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    letterSpacing: '0.05em',
    borderRadius: 'radii-half',
    ...theme.textStyles['text-body-floating-label-bold'],
  }),
  variants: {
    solid: {
      backgroundColor: 'primary-default',
      color: 'text-badge-solid',
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
