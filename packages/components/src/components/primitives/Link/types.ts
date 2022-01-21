import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';

export const linkIconPositions = ['leading', 'trailing'] as const;
export const linkSizes = ['s', 'm', 'l'] as const;

type LinkIconPositions = typeof linkIconPositions[number];
type LinkSizes = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  icon?: JSX.Element;
  iconPosition?: LinkIconPositions;
  size?: LinkSizes | string;
}
