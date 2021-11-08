import React, { FC } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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
  return <ChakraProvider theme={extended}>{children}</ChakraProvider>;
};
