import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Sizes } from '../../../theme/types';

export const ButtonVariants = ['primary', 'secondary', 'tertiary'] as const;
export type VariantType = typeof ButtonVariants[number];
export interface ButtonProps extends ChakraButtonProps {
  variant?: VariantType;
  size?: Sizes;
}
