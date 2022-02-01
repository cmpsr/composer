import { ComponentStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/theme-tools';

const $size = cssVar('close-button-size');
console.log('>>', $size.reference)
export const CloseButton: ComponentStyleConfig = {
  baseStyle: {
    w: [$size.reference],
    h: [$size.reference],
    color: 'text-primary',
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
  sizes: {
    s: {
      [$size.variable]: "1.5rem",
      fontSize: "0.625rem", //10px
      // fontSize: "1rem", //16px
    },
    m: {
      [$size.variable]: "2rem",
      fontSize: "1rem", // 16px
      // fontSize: "1.5rem",  // 24px
    },
    l: {
      [$size.variable]: '2.5rem',
      fontSize: '1rem', // 16px
      // fontSize: '1.5rem', // 24px
    },
  },
  defaultProps: {
    size: 'l',
  },
};
