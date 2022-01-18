import { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';

export const CheckboxSizes = ['sm', 'md', 'lg'] as const;
export type CheckboxSize = typeof CheckboxSizes[number];

export interface CheckboxProps extends ChakraCheckboxProps {
  size?: CheckboxSize;
}
