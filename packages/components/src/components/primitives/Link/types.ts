import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { FC } from 'react';
import { buttonVariants } from '../Button/types';
import { IconProps } from '../Icons';

export const linkVariants = buttonVariants;
type LinkVariant = typeof linkVariants[number];

export const linkSizes = ['s', 'm', 'l'] as const;
type LinkSize = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  size?: LinkSize;
  leadingIcon?: FC<IconProps>;
  trailingIcon?: FC<IconProps>;
  variant?: LinkVariant;
}
