import { ComponentStyleConfig } from '@chakra-ui/theme';
import { PartsStyleObject } from '@chakra-ui/theme-tools';
import { selectAnatomy as parts } from '@chakra-ui/anatomy';
import { inputStyles } from '../styles';

const iconSpacing = { paddingInlineEnd: '2rem' };

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  l: {
    field: { ...iconSpacing, ...inputStyles.large },
  },
  m: {
    field: { ...iconSpacing, ...inputStyles.medium },
  },
  s: {
    field: { ...iconSpacing, ...inputStyles.small },
  },
};

export const Select: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    icon: {
      '> svg': {
        // Icons are styled with inline style, which has highest priority, so !important is required to be able to override them.
        boxSize: `${theme.components.Icon.sizes.m.boxSize}  !important`,
        width: `${theme.components.Icon.sizes.m.boxSize}  !important`,
        height: `${theme.components.Icon.sizes.m.boxSize}  !important`,
      },
    },
    field: {
      backgroundColor: 'background-action-default',
      // Using borderColor will not override the border-color set in the theme, as the border property has higher priority
      border: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
      boxShadow: 'none',
      color: 'text-primary',
      placeholderColor: 'text-secondary',
      _hover: {
        backgroundColor: 'background-action-hover',
        borderWidth: '0.063rem',
        borderColor: 'ui-element-outline-active',
      },
      _focus: {
        backgroundColor: 'background-action-hover',
        borderColor: 'ui-element-outline-default',
        boxShadow: '0 0 0 0.188rem var(--chakra-colors-primary-focus)',
      },
      _disabled: {
        backgroundColor: 'background-action-disabled',
        borderWidth: '0.063rem',
        borderColor: 'ui-element-outline-disabled',
      },
      _invalid: {
        borderColor: 'transparent',
        boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
      },
    },
  }),
  defaultProps: {
    size: 'm',
    error: false,
  },
  sizes,
};
