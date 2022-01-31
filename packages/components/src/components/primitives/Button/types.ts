import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps } from 'components/primitives/Icons/types';

export const buttonVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'destroy'] as const;
export type ButtonVariant = typeof buttonVariants[number];
export const ButtonSizes = ['xs', 's', 'm', 'l'] as const;
export const iconSizes = ['xs', 's', 'm', 'l'] as const;

export type ButtonIconSize = typeof iconSizes[number];
export type ButtonSize = typeof ButtonSizes[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  trailingIcon?: FC<IconProps>;
  leadingIcon?: FC<IconProps>;
  iconSize?: ButtonIconSize;
}
