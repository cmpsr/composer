import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { buttonVariants } from '../../primitives/Button/types';

export const linkVariants = buttonVariants.filter((v) => v !== 'link');
type LinkVariant = typeof linkVariants[number];

export const linkSizes = ['s', 'm', 'l'] as const;
export type LinkSize = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  size?: LinkSize;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  variant?: LinkVariant;
}
