import { ReactElement } from 'react';
import { LinkProps as ChakraLinkProps, ResponsiveValue } from '@chakra-ui/react';
import { ButtonVariant } from '../../form/Button/types';

export const linkVariants = [
  'link',
  'link-primary',
  'link-accent',
  'link-secondary',
  'link-destroy',
  'link-light',
] as const;
export type LinkVariant = (typeof linkVariants)[number];

export const linkSizes = ['s', 'm', 'l'] as const;
export type LinkSize = (typeof linkSizes)[number];

export interface LinkProps extends ChakraLinkProps {
  testId?: string;
  size?: ResponsiveValue<LinkSize>;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  variant?: ResponsiveValue<LinkVariant | ButtonVariant>;
  isInline?: boolean;
  isDisabled?: boolean;
}
