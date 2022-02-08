import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { IconProps } from '@components';

export const iconButtonSizes = ['xs', 's', 'm', 'l'] as const;
export const iconButtonVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'ghost'] as const;

export type IconButtonSize = typeof iconButtonSizes[number];
export type IconButtonVariant = typeof iconButtonVariants[number];

export interface IconButtonProps extends Omit<ChakraIconButtonProps, 'rounded' | 'iconProps'> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  rounded?: boolean;
  iconProps?: IconProps;
}
