import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'radii-2',
    color: 'text-light',
  },
  sizes: {
    xs: {
      textStyle: 'font-body-floating-label-medium',
      px: 2,
      py: 2.5,
    },
    sm: {
      textStyle: 'font-body-meta-medium',
      px: 3,
      py: 2.5,
    },
    md: {
      textStyle: 'font-body-medium',
      px: 4,
      py: 2.5,
    },
    lg: {
      textStyle: 'font-body-large-medium',
      px: 6,
      py: 2.5,
    },
  },
  variants: {
    primary: {
      backgroundColor: 'primary-ui-default',
      _disabled: {
        backgroundColor: 'primary-ui-disabled',
      },
      _hover: {
        backgroundColor: 'primary-ui-hover',
        _disabled: {
          backgroundColor: 'primary-ui-disabled',
        },
      },
      _pressed: {
        backgroundColor: 'primary-ui-pressed',
      },
      _active: {
        backgroundColor: 'primary-ui-pressed',
      },
    },
    secondary: {
      backgroundColor: 'secondary-ui-default',
      _disabled: {
        backgroundColor: 'secondary-ui-disabled',
      },
      _hover: {
        backgroundColor: 'secondary-ui-hover',
        _disabled: {
          backgroundColor: 'secondary-ui-disabled',
        },
      },
      _pressed: {
        backgroundColor: 'secondary-ui-pressed',
      },
      _active: {
        backgroundColor: 'secondary-ui-pressed',
      },
    },
    tertiary: {
      backgroundColor: 'tertiary-ui-default',
      color: 'text-primary',
      _disabled: {
        backgroundColor: 'tertiary-ui-disabled',
      },
      _hover: {
        backgroundColor: 'tertiary-ui-hover',
        _disabled: {
          backgroundColor: 'tertiary-ui-disabled',
        },
      },
      _pressed: {
        backgroundColor: 'tertiary-ui-pressed',
      },
      _active: {
        backgroundColor: 'tertiary-ui-pressed',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
