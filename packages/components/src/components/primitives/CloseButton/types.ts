import { IconButtonProps as ChakraIconButtonProps, StyleProps } from '@chakra-ui/react';
import { IconProps } from '..';

export const CloseButtonSizes = ['s', 'm', 'l'] as const;

export type CloseButtonSize = typeof CloseButtonSizes[number];

export interface CloseButtonProps extends Omit<ChakraIconButtonProps, 'aria-label'> {
  size?: CloseButtonSize;
}
