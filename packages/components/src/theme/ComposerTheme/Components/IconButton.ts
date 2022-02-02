import { ComponentStyleConfig } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

const sizes = {
  xs: {
    width: '1.5rem',
    height: '1.5rem',
    loading: {
      width: '0.75rem',
      height: '0.75rem',
      padding: 0,
    },
    icon: {
      size: 'xs',
    },
  },
  s: {
    width: '2.25rem',
    height: '2.25rem',
    loading: {
      width: '0.75rem',
      height: '0.75rem',
      padding: 0,
    },
    icon: {
      size: 's',
    },
  },
  m: {
    width: '2.5rem',
    height: '2.5rem',
    loading: {
      width: '1rem',
      height: '1rem',
      padding: 0,
    },
    icon: {
      size: 'm',
    },
  },
  l: {
    width: '3.25rem',
    height: '3.25rem',
    loading: {
      width: '1rem',
      height: '1rem',
      padding: 0,
    },
    icon: {
      size: 'l',
    },
  },
};

export const IconButton: ComponentStyleConfig = {
  baseStyle: ({ rounded }) => {
    return {
      borderRadius: rounded ? 'full' : 'radii-2',
    };
  },
  sizes,
  defaultProps: {
    size: 'm',
  },
  variants: {
    ghost: ({ isLoading }) => {
      return {
        loading: {
          borderColor: 'text-link-secondary-default',
          borderBottomColor: transparentize('text-link-secondary-default', 0.3),
          borderLeftColor: transparentize('text-link-secondary-default', 0.3),
        },
        _disabled: {
          opacity: isLoading ? 1 : 0.4,
        },
      };
    },
  },
};
