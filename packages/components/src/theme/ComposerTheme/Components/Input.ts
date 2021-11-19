import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentMultiStyleConfig } from '@chakra-ui/theme';

export const Input: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle: {
    field: {
      color: 'text-primary',
      _placeholder: {
        color: 'text-secondary',
      },
    },
  },
  sizes: {
    sm: {
      field: {
        textStyle: 'font-body-meta-regular',
      },
    },
    md: {
      field: {
        textStyle: 'font-body-regular',
      },
    },
    lg: {
      field: {
        textStyle: 'font-body-large-regular',
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'ui-element-outline-default',
        bgColor: 'background-container-primary',
        borderRadius: 'radii-2',
        _invalid: {
          borderWidth: 2,
          borderColor: 'alert-error-default',
          borderStyle: 'solid',
          boxShadow: 'none',
        },
        _focus: {
          borderWidth: 2,
          borderColor: 'primary-ui-focus',
          borderStyle: 'solid',
          boxShadow: 'none',
        },
        _hover: {
          borderWidth: 1,
          borderColor: 'ui-element-outline-active',
          borderStyle: 'solid',
          boxShadow: 'none',
        },
      },
    },
    filled: {
      field: {
        bgColor: 'background-container-primary',
        borderRadius: 'radii-2',
        _invalid: {
          borderWidth: 2,
          borderColor: 'alert-error-default',
          borderStyle: 'solid',
          boxShadow: 'none',
        },
        _focus: {
          borderWidth: 2,
          borderColor: 'primary-ui-focus',
          borderStyle: 'solid',
          bgColor: 'background-light',
        },
        _hover: {
          bgColor: 'background-container-hover',
        },
      },
    },
    flushed: {
      field: {
        borderBottom: '1px solid',
        borderColor: 'ui-element-outline-default',
        _focus: {
          borderColor: 'primary-ui-focus',
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
