import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export const ButtonVariants = [
  'accent',
  'primary',
  'primary-alt',
  'secondary',
  'secondary-alt',
  'destroy',
] as const;
export type ButtonVariant = typeof ButtonVariants[number];
export const ButtonSizes = ['xs', 'sm', 'md', 'lg'] as const;
export type ButtonSize = typeof ButtonSizes[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
