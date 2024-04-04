import { ComponentStyleConfig } from '@chakra-ui/theme';
import { orient } from '@chakra-ui/theme-tools';

const sharedSizeStyle = (props) => ({
  thumb: {
    w: '1rem',
    h: '1rem',
  },
  track: orient({
    orientation: props.orientation,
    horizontal: { h: '0.375rem' },
    vertical: { w: '0.375rem' },
  }),
});

export const Slider: ComponentStyleConfig = {
  baseStyle: ({ isDisabled }) => ({
    track: {
      bg: 'background-action-active',
      borderRadius: 'radii-half',
      _disabled: {
        bg: 'background-container-disabled',
      },
    },
    filledTrack: {
      bg: isDisabled ? 'primary-disabled' : 'primary-default',
    },
    thumb: {
      bg: 'background-action-default',
      _focus: {
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
      },
      _disabled: {
        bg: 'background-action-disabled',
      },
    },
  }),
  sizes: {
    sm: sharedSizeStyle,
    md: sharedSizeStyle,
    lg: sharedSizeStyle,
  },
};
