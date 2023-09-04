import { RefAttributes } from 'react';
import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { ButtonProps, SpinnerProps } from '@components';

export const iconButtonSizes = ['xs', 's', 'm', 'l'] as const;
export const iconButtonVariants = ['accent', 'primary', 'primary-alt', 'secondary', 'secondary-alt', 'ghost'] as const;

export type IconButtonSize = (typeof iconButtonSizes)[number];
export type IconButtonVariant = (typeof iconButtonVariants)[number];

export interface IconButtonProps extends ChakraIconButtonProps, RefAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

export interface IconButtonStyle extends ButtonProps {
  loading?: SpinnerProps;
}
