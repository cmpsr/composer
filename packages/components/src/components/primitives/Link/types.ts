import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';

export const linkIconPositions = ['leading', 'trailing'] as const;
export const linkSizes = ['s', 'm', 'l'] as const;

type LinkIconPositions = typeof linkIconPositions[number];
type LinkSizes = typeof linkSizes[number];

export interface LinkProps extends ChakraLinkProps {
  icon?: JSX.Element;
  iconPosition?: LinkIconPositions;
<<<<<<< HEAD
  size?: LinkSizes | string;
=======
  size?: LinkSizes;
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
}
