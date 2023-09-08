import { ButtonProps as ChakraButtonProps, ResponsiveValue } from '@chakra-ui/react';
import { LinkVariant } from '@components';
import { ReactElement } from 'react';

export const buttonVariants = [
  'accent',
  'primary',
  'primary-alt',
  'secondary',
  'secondary-alt',
  'destroy',
  'ghost',
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];
export const buttonSizes = ['xs', 's', 'm', 'l'] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ResponsiveValue<ButtonVariant | LinkVariant>;
  size?: ResponsiveValue<ButtonSize>;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}
