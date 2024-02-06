import { ButtonIconSize, ButtonIconVariant, buttonIconSizes, buttonIconVariants } from '@components';

import { RefAttributes } from 'react';
import { IconButtonProps as ChakraButtonIconProps, ResponsiveValue } from '@chakra-ui/react';
import { ButtonProps, SpinnerProps } from '@components';

export const iconButtonSizes = buttonIconSizes;
export const iconButtonVariants = buttonIconVariants;

export type IconButtonSize = ButtonIconSize;
export type IconButtonVariant = ButtonIconVariant;
export interface IconButtonProps extends ChakraButtonIconProps, RefAttributes<HTMLButtonElement> {
  size?: ResponsiveValue<IconButtonSize>;
  variant?: ResponsiveValue<IconButtonVariant>;
}

export interface IconButtonStyle extends ButtonProps {
  loading?: SpinnerProps;
}
