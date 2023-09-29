import { CheckboxProps as ChakraCheckboxProps, ResponsiveValue } from '@chakra-ui/react';

export const CheckboxSizes = ['s', 'm', 'l'] as const;
export type CheckboxSize = (typeof CheckboxSizes)[number];

export interface CheckboxProps extends ChakraCheckboxProps {
  size?: ResponsiveValue<CheckboxSize>;
}
