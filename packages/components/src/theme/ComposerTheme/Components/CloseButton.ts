import { ComponentStyleConfig } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

const baseStyle = {
  backgroundColor: 'transparent',
  borderRadius: '0.375rem',
  color: 'text-primary',
  _hover: {
    backgroundColor: transparentize('background-action-hover', 0.15),
  },
  _active: {
    backgroundColor: transparentize('background-action-pressed', 0.2),
  },
  _focus: {
    boxShadow: '0 0 0 3px var(--chakra-colors-primary-focus)',
  },
};

export const CloseButton: ComponentStyleConfig = {
  baseStyle,
  sizes: {
    s: {
      height: '1.5rem',
      width: '1.5rem',
    },
    m: {
      height: '2rem',
      width: '2rem',
    },
    l: {
      height: '2.5rem',
      width: '2.5rem',
    },
  },
  defaultProps: {
    size: 'l',
  },
};
