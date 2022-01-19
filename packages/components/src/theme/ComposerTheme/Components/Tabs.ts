import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tablist: {
      columnGap: '0.25rem',
    },
    tab: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  sizes: {
    sm: ({ theme }) => ({
      tab: theme.textStyles['text-body-medium'],
    }),
    md: ({ theme }) => ({
      tab: theme.textStyles['text-body-medium'],
    }),
    lg: ({ theme }) => ({
      tab: theme.textStyles['text-body-medium'],
    }),
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
          backgroundColor: 'background-static',
          color: 'text-link-primary-default',
        },
      },
    },
  },
  defaultProps: {
    variant: 'line',
  },
};
