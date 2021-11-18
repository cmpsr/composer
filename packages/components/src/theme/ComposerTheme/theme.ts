import { Theme } from './types';
import { defaultColors } from './Colors';
import { defaultShadows } from './Shadows';
import { defaultSpacing } from './Spacing';
import { components } from './Components';
import { textStyles } from './styles';

export const theme: Theme = {
  colors: defaultColors,
  shadows: defaultShadows,
  space: defaultSpacing,
  components,
  textStyles,
};
