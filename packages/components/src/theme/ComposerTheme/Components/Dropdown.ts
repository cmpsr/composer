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
    item: {
      color: 'text-primary',
      textStyle: 'text-body-regular',
      paddingX: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      marginX: 'spacer-dropdown-item-x',
      marginY: 'spacer-dropdown-item-y',
      borderRadius: 'radii-dropdown',
    },
  },
};
