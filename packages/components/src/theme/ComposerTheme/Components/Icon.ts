import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Icon: ComponentStyleConfig = {
  sizes: {
    xs: {
      w: '0.75rem',
      h: '0.75rem',
    },
    s: {
      w: '1rem',
      h: '1rem',
    },
    m: {
      w: '1.25rem',
      h: '1.25rem',
    },
    l: {
      w: '1.5rem',
      h: '1.5rem',
    },
  },
  defaultProps: {
    size: 'm',
  },
};
