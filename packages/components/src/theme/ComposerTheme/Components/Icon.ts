import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Icon: ComponentStyleConfig = {
  sizes: {
    xs: {
      boxSize: '0.75rem',
    },
    s: {
      boxSize: '1rem',
    },
    m: {
      boxSize: '1.25rem',
    },
    l: {
      boxSize: '1.5rem',
    },
  },
  defaultProps: {
    size: 'm',
  },
};
