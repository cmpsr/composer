import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ProgressBar: ComponentStyleConfig = {
  baseStyle: {
    filledTrack: {
      bgColor: 'primary-default',
    },
    track: {
      backgroundColor: 'background-static',
    },
  },
  sizes: {
    xs: {
      track: { h: '0.25rem' },
    },
    s: {
      track: { h: '0.5rem' },
    },
    m: {
      track: { h: '0.75rem' },
    },
    l: {
      track: { h: '1rem' },
    },
    xl: {
      track: { h: '2rem' },
    },
  },
};
