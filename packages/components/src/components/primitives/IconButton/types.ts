import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';

export const iconButtonSizes = ['xs', 's', 'm', 'l'] as const;
export const iconButtonVariants = [
  'accent',
  'primary',
  'primary-alt',
  'secondary',
  'secondary-alt',
  'accent',
  'ghost',
] as const;

export type IconButtonSize = typeof iconButtonSizes[number];
export type IconButtonVariant = typeof iconButtonVariants[number];

export interface IconButtonProps extends ChakraIconButtonProps {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  round?: boolean;
}
