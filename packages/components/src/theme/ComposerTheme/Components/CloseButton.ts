import { ComponentStyleConfig } from '@chakra-ui/react';

export const CloseButton: ComponentStyleConfig = {
  baseStyle: {
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
    // s: {
    //   fontSize: "10px",
    // },
    // m: {
    //   fontSize: "12px",
    // },
    // l: {
    //   fontSize: "16px",
    // },
  },
  defaultProps: {
    // size: 'l',
  },
};
