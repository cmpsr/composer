import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ProgressBar: ComponentStyleConfig = {
  baseStyle: ({ isRound }) => {
    const borderRadius = isRound ? 'radii-progress-bar' : '0px';

    return {
      filledTrack: {
        bgColor: 'primary-default',
        borderRadius,
      },
      track: {
        backgroundColor: 'background-static',
        borderRadius,
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
    isRound: false,
  },
};
