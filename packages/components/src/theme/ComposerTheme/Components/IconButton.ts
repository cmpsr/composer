import { ComponentStyleConfig } from '@chakra-ui/react';

const sizes = {
  xs: {
    width: '1.5rem',
    height: '1.5rem',
    icon: {
      width: '0.75rem',
      height: '0.75rem',
    },
  },
  s: {
    width: '2.25rem',
    height: '2.25rem',
    icon: {
      width: '1rem',
      height: '1rem',
    },
  },
  m: {
    width: '2.5rem',
    height: '2.5rem',
    icon: {
      width: '1.25rem',
      height: '1.25rem',
    },
  },
  l: {
    width: '3.25rem',
    height: '3.25rem',
    icon: {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
};

export const IconButton: ComponentStyleConfig = {
  baseStyle: ({ round }) => {
    return {
      borderRadius: round ? 'full' : undefined,
    };
  },
  sizes,
};
