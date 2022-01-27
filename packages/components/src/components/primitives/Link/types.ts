import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps } from '../Icons';

export const linkIconPositions = ['leading', 'trailing'] as const;
export const linkSizes = ['s', 'm', 'l'] as const;

type LinkIconPositions = typeof linkIconPositions[number];
type LinkSizes = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  icon?: FC<IconProps>;
  iconPosition?: LinkIconPositions;
  size?: LinkSizes;
}
