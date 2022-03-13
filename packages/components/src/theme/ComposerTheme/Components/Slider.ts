import { ComponentStyleConfig } from '@chakra-ui/theme';
import { orient } from '@chakra-ui/theme-tools';

const sharedSizeStyle = (props) => ({
  thumb: {
    w: '1rem',
    h: '1rem',
    _active: {
      w: '1.125rem',
      h: '1.125rem',
    },
    _focus: {
      w: '1rem',
      h: '1rem',
    }
  },
  track: orient({
    orientation: props.orientation,
    horizontal: { h: '0.375rem' },
    vertical: { w: '0.375rem' },
  }),
});

export const Slider: ComponentStyleConfig = {
  baseStyle: {
    track: {
      bg: 'background-action-active',
      borderRadius: 'radii-half',
    },
    filledTrack: {
      bg: 'primary-default',
    },
    thumb: {
      bg: 'background-action-default',
      _focus: {
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
      },
    },
  },
  sizes: {
    sm: sharedSizeStyle,
    md: sharedSizeStyle,
    lg: sharedSizeStyle,
  },
};
