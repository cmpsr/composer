import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  container: {
    bg: 'transparent',
    borderRadius: 'radii-2',
    _hover: {
      bg: 'background-action-hover',
    },
    _active: {
      bg: 'background-action-pressed',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  icon: {
    color: 'text-primary',
  },
};

export const CloseButton: ComponentStyleConfig = {
  baseStyle,
  sizes: {
    s: {
      container: {
        height: '1.5rem',
        minWidth: '1.5rem',
      },
      icon: {
        boxSize: '1rem',
      },
    },
    m: {
      container: {
        height: '2rem',
        minWidth: '2rem',
      },
      icon: {
        boxSize: '1.5rem',
      },
    },
    l: {
      container: {
        height: '2.5rem',
        minWidth: '2.5rem',
      },
      icon: {
        boxSize: '1.5rem',
      },
    },
  },
  defaultProps: {
    size: 'l',
  },
};
