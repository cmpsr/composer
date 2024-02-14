import { RefAttributes } from 'react';
import { IconButtonProps as ChakraButtonIconProps, ResponsiveValue } from '@chakra-ui/react';
import { ButtonProps, SpinnerProps } from '@components';

export const buttonIconSizes = ['xs', 's', 'm', 'l'] as const;
export const buttonIconVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'ghost'] as const;

export type ButtonIconSize = (typeof buttonIconSizes)[number];
export type ButtonIconVariant = (typeof buttonIconVariants)[number];

export interface ButtonIconProps extends ChakraButtonIconProps, RefAttributes<HTMLButtonElement> {
  size?: ResponsiveValue<ButtonIconSize>;
  variant?: ResponsiveValue<ButtonIconVariant>;
}

export interface ButtonIconStyle extends ButtonProps {
  loading?: SpinnerProps;
}
