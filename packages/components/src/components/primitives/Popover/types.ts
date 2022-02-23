import { FC } from 'react';
import {
  PopoverProps as ChakraPopoverProps,
  PopoverHeaderProps,
  PopoverFooterProps,
  PopoverContentProps,
  PopoverBodyProps,
  PopoverArrowProps,
  PopoverCloseButtonProps,
} from '@chakra-ui/react';

export const popoverPositionings = ['bottom', 'top', 'left', 'right'] as const;

export type PopoverPositioning = typeof popoverPositionings[number];

export interface PopoverProps extends Omit<ChakraPopoverProps, 'headerProps' | 'footerProps'> {
  positioning?: PopoverPositioning;
}

export interface PopoverStaticMembers {
  Trigger: FC;
  Content: FC<PopoverContentProps>;
  Header: FC<PopoverHeaderProps>;
  Body: FC<PopoverBodyProps>;
  Footer: FC<PopoverFooterProps>;
  Arrow: FC<PopoverArrowProps>;
  CloseButton: FC<PopoverCloseButtonProps>;
  Anchor: FC;
}
