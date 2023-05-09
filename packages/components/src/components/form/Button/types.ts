import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { LinkVariant } from '@components';
import { ReactElement } from 'react';

export const buttonVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'destroy'] as const;
export type ButtonVariant = typeof buttonVariants[number];
export const buttonSizes = ['xs', 's', 'm', 'l'] as const;
export type ButtonSize = typeof buttonSizes[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariant | LinkVariant;
  size?: ButtonSize;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}
