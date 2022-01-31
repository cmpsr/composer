import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps } from '../Icons';

export const linkSizes = ['s', 'm', 'l'] as const;
type LinkSizes = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  size?: LinkSizes;
  leadingIcon?: FC<IconProps>;
  trailingIcon?: FC<IconProps>;
}
