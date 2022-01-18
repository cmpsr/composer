import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentMultiStyleConfig } from '@chakra-ui/theme';
import { PartsStyleInterpolation } from '@chakra-ui/theme-tools';

const sizes: Record<string, PartsStyleInterpolation<typeof parts>> = {
  sm: ({ theme }) => ({
    ...theme.textStyles['text-body-meta-regular'],
  }),
  md: ({ theme }) => ({
    ...theme.textStyles['text-body-regular'],
  }),
  lg: ({ theme }) => ({
    ...theme.textStyles['text-body-large-regular'],
  }),
};

export const Radio: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle: {
    control: {
      color: 'text-light',
      borderColor: 'ui-element-outline-default',
      _focus: {
        boxShadow: 'none',
        bg: 'ui-element-outline-default',
        borderColor: 'primary-focus',
        color: 'text-light',
        _before: {
          content: `""`,
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
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
        borderColor: 'primary-default',
        bg: 'primary-default',
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
          bg: 'background-action-disabled',
          color: 'text-disabled',
        },
      },
      _disabled: {
        borderColor: 'ui-element-outline-disabled',
        bg: 'background-action-disabled',
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
};
