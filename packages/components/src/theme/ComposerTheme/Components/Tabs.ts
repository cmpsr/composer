import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tab: {
      _focus: {
        boxShadow: 'elevation-outline',
      },
      marginRight: '0.25rem',
      _last: {
        marginRight: 0,
      },
    },
  },
  variants: {
    line: {
      tab: {
        _selected: {
          color: 'text-primary',
          borderColor: 'primary-default',
        },
        _focus: {
          boxShadow: 'none',
        },
        color: 'text-secondary',
      },
    },
    rounded: {
      tab: {
        _selected: {
          color: 'text-link-primary-default',
          backgroundColor: 'ui-element-default',
        },
        borderRadius: '1.25rem',
        color: 'text-secondary',
      },
    },
  },
  defaultProps: {
    variant: 'line',
  },
};
