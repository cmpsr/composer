import { ComponentStyleConfig } from '@chakra-ui/react';

export const AutocompleteMultiSelect: ComponentStyleConfig = {
  parts: ['list', 'item', 'noResults'],
  baseStyle: {
    list: {
      zIndex: 1,
      width: '100%',
      marginTop: '0.25rem',
      position: 'absolute',
      borderRadius: 'radii-card',
      paddingX: '0',
      paddingY: 'spacer-2',
      boxShadow: 'elevation-interactive',
      backgroundColor: 'background-card',
      listStyleType: 'none',
    },
    item: {
      color: 'text-primary',
      textStyle: 'text-body-regular',
      paddingX: 'spacer-4',
      paddingY: 'spacer-2',
      _active: {
        backgroundColor: 'background-action-pressed',
      },
      _hover: {
        backgroundColor: 'background-action-hover',
      },
      active: {
        backgroundColor: 'background-action-active',
        textStyle: 'text-body-medium',
      },
      highlighted: {
        backgroundColor: 'background-action-hover',
      },
    },
    noResults: {
      color: 'text-secondary',
      paddingX: '1rem',
      paddingY: '0.5rem',
    },
  },
};
