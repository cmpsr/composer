import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  color: 'text-primary',
  bg: 'background-light',
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
}

export const CloseButton: ComponentStyleConfig = {
  baseStyle,
  variants: {
    solid: baseStyle,
  },
  sizes: {
    s: {
      height: "1.5rem",
      minWidth: "1.5rem",
      fontSize: "1rem",
    },
    m: {
      height: "2rem",
      minWidth: '2rem',
      fontSize: "1.5rem",
    },
    l: {
      height: '2.5rem',
      width: '2.5rem',
      fontSize: '1.5rem',
    },
  },
  defaultProps: {
    size: 'l',
  },
};
