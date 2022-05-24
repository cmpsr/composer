import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { buttonVariants } from '../Button/types';

export const linkVariants = buttonVariants;
type LinkVariant = typeof linkVariants[number];

export const linkSizes = ['s', 'm', 'l'] as const;
type LinkSize = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  size?: LinkSize;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  variant?: LinkVariant;
}
