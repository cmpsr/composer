import { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/react';

export const closeButtonSizes = ['s', 'm', 'l'] as const;
export type CloseButtonSize = typeof closeButtonSizes[number];

export interface CloseButtonProps extends ChakraCloseButtonProps {
  size?: CloseButtonSize;
}
