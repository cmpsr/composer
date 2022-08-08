import { SystemStyleObject } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { Colors } from './Colors';
import { Shadows } from './Shadows';
import { Radius } from './Radius';
import { Spacing } from './Spacing';
import { BaseBreakpointConfig, GlobalStyles } from '@chakra-ui/theme-tools';

export interface FontFamilies {
  heading?: string;
  body?: string;
  mono?: string;
}

export interface Theme {
  colors: Partial<Colors>;
  radii: Partial<Radius>;
  shadows: Partial<Shadows>;
  space: Partial<Spacing>;
  components: {
    [key: string]: ComponentStyleConfig;
  };
  textStyles: {
    [key: string]: SystemStyleObject;
  };
  fonts?: Partial<FontFamilies>;
  breakpoints?: BaseBreakpointConfig;
  styles?: GlobalStyles;
}
