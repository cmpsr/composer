import React, { FC } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <ChakraLink {...props}>{children}</ChakraLink>;
};
