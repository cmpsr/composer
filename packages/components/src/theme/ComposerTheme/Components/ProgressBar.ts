import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ProgressBar: ComponentStyleConfig = {
  baseStyle: ({ isRound }) => {
    return {
      filledTrack: {
        bgColor: 'primary-default',
        ...(isRound && { borderRadius: 'radii-progress-bar' }),
      },
      track: {
        backgroundColor: 'background-static',
        ...(isRound && { borderRadius: 'radii-progress-bar' }),
      },
    };
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
  defaultProps: {
    size: 'm',
  },
};
