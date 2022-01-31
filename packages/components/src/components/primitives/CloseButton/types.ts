import { CloseButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";

export const CloseButtonSizes = ['s', 'm', 'l'] as const;

export type CloseButtonSize = typeof CloseButtonSizes[number];

export interface CloseButtonProps extends ChakraCloseButtonProps {
  size?: CloseButtonSize;
}
