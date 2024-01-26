import { ReactElement } from 'react';
import { LinkProps as ChakraLinkProps, ResponsiveValue } from '@chakra-ui/react';

export const iconLinkVariants = ['link-primary', 'link-accent', 'link-secondary', 'link-destroy'] as const;
export type iconLinkVariant = (typeof iconLinkVariants)[number];

export const iconLinkSizes = ['s', 'm', 'l'] as const;
export type IconLinkSize = (typeof iconLinkSizes)[number];

export interface IconLinkProps extends Omit<ChakraLinkProps, 'children'> {
  icon: ReactElement;
  isInline?: boolean;
  size?: ResponsiveValue<IconLinkSize>;
  testId?: string;
  variant?: ResponsiveValue<iconLinkVariant>;
}
