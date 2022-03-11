import { ComponentStyleConfig } from '@chakra-ui/react';

export const Dropdown: ComponentStyleConfig = {
  baseStyle: {
    list: {
      borderRadius: 'radii-card',
      paddingX: '0',
      paddingY: '1rem',
      boxShadow: 'elevation-interactive',
      border: 'none',
      backgroundColor: 'background-card',
    },
    item: { color: 'text-primary', textStyle: 'text-body-regular', paddingX: '1rem' },
  },
};
