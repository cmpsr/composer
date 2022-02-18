import { ComponentStyleConfig } from '@chakra-ui/theme';
import { transparentize } from '@chakra-ui/theme-tools';

export const Modal: ComponentStyleConfig = {
  baseStyle: {
    overlay: {
      backgroundColor: transparentize('background-overlay', 0.75),
    },
    dialog: {
      boxShadow: 'elevation-modals',
      backgroundColor: 'background-card',
    },
    header: {
      padding: '1.25rem',
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      backgroundColor: 'background-card',
      borderRadius: '0.5rem',
    },
    body: {
      padding: '1.25rem',
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      backgroundColor: 'background-card',
      borderRadius: '0.5rem',
    },
    footer: {
      padding: '1.25rem',
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      backgroundColor: 'background-card',
      borderRadius: '0.5rem',
    },
  },
  sizes: {
    auto: {
      dialog: {
        maxW: 'none',
        width: 'auto',
      },
    },
  },
  defaultProps: {
    size: 'auto',
  },
};
