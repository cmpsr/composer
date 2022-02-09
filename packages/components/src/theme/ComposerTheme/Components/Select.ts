import { ComponentStyleConfig } from '@chakra-ui/theme';
import { PartsStyleFunction, PartsStyleInterpolation } from '@chakra-ui/theme-tools';
import { selectAnatomy as parts } from '@chakra-ui/anatomy';

const sizes: Record<string, PartsStyleInterpolation> = {
  l: ({ theme }) => ({
    field: {
      py: '0.75rem',
      px: '1rem',
      height: '3rem',
      ...theme.textStyles['text-body-regular'],
    },
  }),
  m: ({ theme }) => ({
    field: {
      px: '0.75rem',
      py: '0.5rem',
      height: '2.5rem',
      ...theme.textStyles['text-body-regular'],
    },
  }),
  s: ({ theme }) => ({
    field: {
      px: '0.75rem',
      py: '0.375rem',
      height: '2rem',
      ...theme.textStyles['text-body-meta-regular'],
    },
  }),
};

const baseStyle: PartsStyleFunction<typeof parts> = ({ theme, iconSize }) => {
  return {
    icon: {
      '> svg': {
        // Icons are styled with inline style, which has highest priority, so !important is required to be able to override them.
        boxSize: `${theme.components.Icon.sizes[iconSize].boxSize} !important`,
      },
      color: 'text-primary',
      _disabled: {
        color: 'text-disabled',
        opacity: 1,
      },
    },
    field: {
      backgroundColor: 'background-action-default',
      // Using borderColor will not override the border-color set in the theme, as the border property has higher priority
      border: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
      boxShadow: 'none',
      color: 'text-primary',
      placeholderColor: 'text-secondary',
      minW: '8rem',
      borderRadius: 'radii-2',
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
        disabledPlaceHolderColor: 'text-disabled',
      },
      _invalid: {
        borderColor: 'transparent',
        boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
      },
    },
  };
};

export const Select: ComponentStyleConfig = {
  baseStyle,
  defaultProps: {
    size: 'm',
    iconSize: 'm',
    error: false,
  },
  sizes,
  variants: {
    outline: baseStyle,
  },
};
