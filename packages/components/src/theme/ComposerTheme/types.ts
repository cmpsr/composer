import { defaultColors } from './colors';

type Colors = typeof defaultColors;

export interface Theme {
  colors: Colors;
}
