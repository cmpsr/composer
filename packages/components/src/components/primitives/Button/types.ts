import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export const buttonVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'destroy'] as const;
export type ButtonVariant = typeof buttonVariants[number];
export const ButtonSizes = ['xs', 's', 'm', 'l'] as const;
export type ButtonSize = typeof ButtonSizes[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
