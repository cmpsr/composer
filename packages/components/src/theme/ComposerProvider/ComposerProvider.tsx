import React, { FC } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { ComposerProviderProps } from '.';
import { theme as defaultTheme } from '../';

export const ComposerProvider: FC<ComposerProviderProps> = ({
  children,
  theme = {},
  resetCSS = true,
}) => {
  const extended = extendTheme(defaultTheme, theme);
  console.log(extended);
  return (
    <ChakraProvider theme={extended} resetCSS={resetCSS}>
      {children}
    </ChakraProvider>
  );
};
