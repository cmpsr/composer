import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';

export const closeButtonSizes = ['s', 'm', 'l'] as const;
export type CloseButtonSize = typeof closeButtonSizes[number];

export interface CloseButtonProps extends Omit<ChakraIconButtonProps, 'aria-label'> {
  size?: CloseButtonSize;
  "aria-label"?: string;
}
