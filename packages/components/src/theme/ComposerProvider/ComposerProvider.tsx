import React, { FC } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { ComposerProviderProps } from '.';
import { theme as defaultTheme } from '../';

export const ComposerProvider: FC<ComposerProviderProps> = ({ children, theme = {}, resetCSS = true }) => {
  let extended = extendTheme(defaultTheme, theme);
  if (theme.breakpoints) {
    extended = { ...extended, breakpoints: theme.breakpoints };
  }
  return (
    <ChakraProvider theme={extended} resetCSS={resetCSS}>
      {children}
    </ChakraProvider>
  );
};
