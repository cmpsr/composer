import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';

export interface LinkIconPositions {
  left: 'left';
  right: 'right';
}

export interface LinkSizes {
  s: 's';
  m: 'm';
  l: 'l';
}

export interface LinkProps extends ChakraLinkProps {
  icon?: JSX.Element;
  iconPosition?: keyof LinkIconPositions;
  size?: keyof LinkSizes;
}

export const marginSizes = {
  s: 'spacer-1',
  m: 'spacer-2',
  l: 'spacer-3',
} as const;

export const linkIconSizes = {
  s: '1rem',
  m: '1.5rem',
  l: '2rem',
} as const;
