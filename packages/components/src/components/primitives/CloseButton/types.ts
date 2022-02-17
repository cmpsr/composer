import { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';

export const CloseButtonSizes = ['s', 'm', 'l'] as const;

export type CloseButtonSize = typeof CloseButtonSizes[number];

export interface CloseButtonProps extends Omit<ChakraIconButtonProps, 'aria-label'> {
  size?: CloseButtonSize;
  "aria-label"?: string;
}
