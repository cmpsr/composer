import { Theme } from './types';
import { defaultColors } from './Colors';
import { defaultShadows } from './Shadows';
import { defaultRadius } from './Radius';
import { defaultSpacing } from './Spacing';
import { components } from './Components';
import { textStyles } from './styles';

export const theme: Theme = {
  colors: defaultColors,
  shadows: defaultShadows,
  radii: defaultRadius,
  space: defaultSpacing,
  components,
  textStyles,
};
