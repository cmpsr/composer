import { ReactElement } from 'react';
import { LinkProps as ChakraLinkProps, ResponsiveValue } from '@chakra-ui/react';

export const linkIconVariants = ['link-primary', 'link-accent', 'link-secondary', 'link-destroy'] as const;
export type LinkIconVariant = (typeof linkIconVariants)[number];

export const linkIconSizes = ['s', 'm', 'l'] as const;
export type LinkIconSize = (typeof linkIconSizes)[number];

export interface LinkIconProps extends Omit<ChakraLinkProps, 'children'> {
  icon: ReactElement;
  isInline?: boolean;
  size?: ResponsiveValue<LinkIconSize>;
  testId?: string;
  variant?: ResponsiveValue<LinkIconVariant>;
}
