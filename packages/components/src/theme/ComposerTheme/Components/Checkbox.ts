import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    label: {
      color: 'text-primary',
      _disabled: {
        color: 'text-disabled',
        opacity: 1,
      },
    },
    control: {
      background: 'background-action-default',
      borderColor: 'ui-element-outline-default',
      color: 'text-primary',
      _checked: {
        background: 'primary-default',
        _hover: {
          background: 'primary-hover',
        },
        _disabled: {
          borderColor: 'ui-element-outline-disabled',
          background: 'background-action-disabled',
          color: 'text-disabled',
        },
      },
      _focus: {
        boxShadow: `0 0 0 3px var(--chakra-colors-primary-focus)`,
      },
      _disabled: {
        background: 'background-action-disabled',
        borderColor: 'ui-element-outline-disabled',
      },
      _invalid: {
        borderColor: 'alert-error-default',
      },
    },
  },
  sizes: {
    sm: {
      textStyle: 'text-body-meta-regular',
    },
    md: {
      textStyle: 'text-body-regular',
    },
    lg: {
      textStyle: 'text-body-large-regular',
    },
  },
  variants: {
    prueba: {
      backgroundColor: 'red',
    },
  },
  defaultProps: {
    size: 'md',
  },
};
