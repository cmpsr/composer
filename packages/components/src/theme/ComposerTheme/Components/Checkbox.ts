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
      label: {
        fontSize: '0.88rem',
        lineHeight: '1.25rem',
      },
    },
    md: {
      label: {
        fontSize: '1rem',
        lineHeight: '1.15rem',
      },
    },
    lg: {
      label: {
        fontSize: '1.13rem',
        lineHeight: '1.75rem',
      },
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
