import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ButtonVariant } from '../../form/Button/types';

export const linkVariants = ['link-primary', 'link-accent'] as const;
export type LinkVariant = typeof linkVariants[number];

export const linkSizes = ['s', 'm', 'l'] as const;
export type LinkSize = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  size?: LinkSize;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  variant?: LinkVariant & ButtonVariant;
}
