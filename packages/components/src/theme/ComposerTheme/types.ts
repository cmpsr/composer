import { SystemStyleObject } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { Colors } from './Colors';
import { Radius } from './Radius';

export interface Theme {
  colors: Colors;
  radii: Radius;
  components: {
    [key: string]: ComponentStyleConfig;
  };
  textStyles: {
    [key: string]: SystemStyleObject;
  };
}
