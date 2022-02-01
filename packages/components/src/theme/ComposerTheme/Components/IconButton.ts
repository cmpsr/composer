import { ComponentStyleConfig } from '@chakra-ui/react';

const sizes = {
  xs: {
    width: '1.5rem',
    height: '1.5rem',
    icon: {
      size: 'xs',
    },
  },
  s: {
    width: '2.25rem',
    height: '2.25rem',
    icon: {
      size: 's',
    },
  },
  m: {
    width: '2.5rem',
    height: '2.5rem',
    icon: {
      size: 'm',
    },
  },
  l: {
    width: '3.25rem',
    height: '3.25rem',
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
};
