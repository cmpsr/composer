import { ComponentStyleConfig } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

const baseStyle = {
  backgroundColor: 'transparent',
  borderRadius: 'radii-2',
  color: 'text-primary',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  _hover: {
    backgroundColor: transparentize('background-action-hover', 0.15),
  },
  _active: {
    backgroundColor: transparentize('background-action-pressed', 0.2),
  },
  _focus: {
    boxShadow: 'none',
  },
};

export const CloseButton: ComponentStyleConfig = {
  baseStyle,
  sizes: {
    s: {
      height: '1.5rem',
      minWidth: '1.5rem',
    },
    m: {
      height: '2rem',
      minWidth: '2rem',
    },
    l: {
      height: '2.5rem',
      minWidth: '2.5rem',
    },
  },
  defaultProps: {
    size: 'm',
  },
};
