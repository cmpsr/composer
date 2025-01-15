import { ComponentStyleConfig } from '@chakra-ui/theme';
import { transparentize } from '@chakra-ui/theme-tools';

const commonStyle = {
  padding: '1.25rem',
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  backgroundColor: 'background-card',
  borderRadius: '0.5rem',
};

export const Modal: ComponentStyleConfig = {
  parts: ['overlay', 'dialog', 'header', 'body', 'footer'],
  baseStyle: {
    overlay: {
      backgroundColor: transparentize('background-overlay', 0.75),
    },
    dialog: {
      boxShadow: 'elevation-modals',
      backgroundColor: 'background-card',
    },
    header: commonStyle,
    body: commonStyle,
    footer: commonStyle,
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
