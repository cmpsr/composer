import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tablist: {
      columnGap: '0.25rem',
    },
    tab: {
      textStyle: 'text-body-medium',
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  variants: {
    line: {
      color: 'text-secondary',
      tab: {
        _selected: {
          borderColor: 'primary-default',
          color: 'text-primary',
        },
      },
    },
    rounded: {
      tab: {
        borderRadius: '1.25rem',
        color: 'text-secondary',
        _selected: {
          backgroundColor: 'ui-element-default',
          color: 'text-link-primary-default',
        },
      },
    },
  },
  defaultProps: {
    variant: 'line',
  },
};
