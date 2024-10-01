import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { PartsStyleInterpolation } from '@chakra-ui/theme-tools';

const sizes: Record<string, PartsStyleInterpolation<typeof parts>> = {
  s: ({ theme }) => ({
    control: { h: 3, w: 3 },
    label: {
      ...theme.textStyles['text-body-meta-regular'],
    },
    icon: { fontSize: '0.45rem' },
  }),
  m: ({ theme }) => ({
    control: { h: 4, w: 4 },
    label: {
      ...theme.textStyles['text-body-regular'],
    },
    icon: { fontSize: '0.625rem' },
  }),
  l: ({ theme }) => ({
    control: { h: 5, w: 5 },
    label: {
      ...theme.textStyles['text-body-large-regular'],
    },
    icon: { fontSize: '0.625rem' },
  }),
};

export const Radio: ComponentStyleConfig = {
  parts: parts.keys,
  baseStyle: {
    control: {
      color: 'text-light',
      background: 'background-checkbox-default',
      borderColor: 'ui-element-outline-checkbox-default',
      _focus: {
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
        _invalid: {
          borderColor: 'alert-error-default',
        },
        _hover: {
          bg: 'primary-hover',
          borderColor: 'primary-hover',
          _invalid: {
            bg: 'alert-error-default',
          },
        },
      },
      _checked: {
        borderColor: 'ui-element-outline-checkbox-selected',
        background: 'background-checkbox-selected',
        color: 'text-light',
        _focus: {
          borderColor: 'primary-default',
          bg: 'primary-default',
        },
        _invalid: {
          bg: 'alert-error-default',
        },
        _hover: {
          bg: 'primary-hover',
          borderColor: 'primary-hover',
        },
        _disabled: {
          borderColor: 'ui-element-outline-disabled',
          background: 'background-checkbox-disabled',
          color: 'text-disabled',
        },
      },
      _disabled: {
        borderColor: 'ui-element-outline-checkbox-disabled',
        background: 'background-checkbox-disabled',
      },

      _invalid: {
        borderColor: 'alert-error-default',
        _hover: {
          borderColor: 'alert-error-default',
        },
      },
    },
  },
  sizes,
  defaultProps: {
    size: 'l',
  },
};
