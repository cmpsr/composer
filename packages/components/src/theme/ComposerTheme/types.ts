import { SystemStyleObject } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { Colors } from './Colors';

export interface Theme {
  colors: Colors;
  components: {
    [key: string]: ComponentStyleConfig;
  };
  textStyles: {
    [key: string]: SystemStyleObject;
  };
}
