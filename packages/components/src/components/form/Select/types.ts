import { SelectProps as ChakraSelectProps, ResponsiveValue } from '@chakra-ui/react';

export const selectSizes = ['s', 'm', 'l'] as const;
export const selectVariants = ['outline', 'flushed'] as const;

export type SelectSize = (typeof selectSizes)[number];
export type SelectVariant = (typeof selectVariants)[number];

export interface SelectProps extends ChakraSelectProps {
  size?: ResponsiveValue<SelectSize>;
  variant?: ResponsiveValue<SelectVariant>;
}
