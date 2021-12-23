import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Tabs: ComponentStyleConfig = {
  variants: {
    line: {
      tab: {
        _selected: {
          color: 'text-primary',
          borderColor: 'primary-default',
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
        _focus: {
          boxShadow: 'elevation-outline',
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
