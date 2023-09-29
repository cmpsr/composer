import { CloseButtonProps as ChakraCloseButtonProps, ResponsiveValue } from '@chakra-ui/react';

export const closeButtonSizes = ['s', 'm', 'l'] as const;
export type CloseButtonSize = (typeof closeButtonSizes)[number];

export interface CloseButtonProps extends ChakraCloseButtonProps {
  size?: ResponsiveValue<CloseButtonSize>;
}
