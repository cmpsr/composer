import { ComponentStyleConfig } from '@chakra-ui/theme';

const sharedSizeStyle = {
  thumb: { w: '1rem', h: '1rem' },
};

export const Slider: ComponentStyleConfig = {
  baseStyle: {
    bg: 'primary-default',
    sliderBg: 'background-action-active',
    thumb: {
      backgroundColor: 'background-action-default',
    },
    _focus: {
      boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
    },
  },
  sizes: {
    sm: sharedSizeStyle,
    md: sharedSizeStyle,
    lg: sharedSizeStyle,
  },
};
