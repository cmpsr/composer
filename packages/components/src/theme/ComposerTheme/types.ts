import { SystemStyleObject } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { Colors } from './Colors';
import { Shadows } from './Shadows';
import { Spacing } from './Spacing';

export interface Theme {
  colors: Colors;
  shadows: Shadows;
  space: Spacing;
  components: {
    [key: string]: ComponentStyleConfig;
  };
  textStyles: {
    [key: string]: SystemStyleObject;
  };
}
