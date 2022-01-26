import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Slider: ComponentStyleConfig = {
  baseStyle: {
    bg: 'primary-default',
    sliderBg: 'primary-disabled',
    boxSize: 3,
    _focus: {
      boxShadow: `0px 0px 0px 3px rgba(194, 194, 255, 1)`,
    },
  },
};
