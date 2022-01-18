import React, { FC } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { ComposerProviderProps } from '.';
import { theme as defaultTheme } from '../';

export const ComposerProvider: FC<ComposerProviderProps> = ({
  children,
  theme,
}) => {
  const extended = extendTheme({
    ...defaultTheme,
    ...(theme || {}),
  });
  console.log('extended', extended);
  return <ChakraProvider theme={extended}>{children}</ChakraProvider>;
};
