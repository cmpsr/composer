import { Theme } from './types';
import { breakpoints } from './breakpoints';
import { components } from './Components';
import { defaultColors } from './Colors';
import { defaultShadows } from './Shadows';
import { defaultRadius } from './Radius';
import { defaultSpacing } from './Spacing';
import { textStyles } from './styles';
import { pureReactCarouselStyles } from './Components/Carousel';

export const theme: Theme = {
  breakpoints,
  colors: defaultColors,
  shadows: defaultShadows,
  radii: defaultRadius,
  space: defaultSpacing,
  components,
  textStyles,
  styles: {
    global: {
      ...pureReactCarouselStyles,
    },
  },
};
