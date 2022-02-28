import { FC } from 'react';
import {
  PopoverHeaderProps,
  PopoverFooterProps,
  PopoverContentProps,
  PopoverBodyProps,
  PopoverArrowProps,
  PopoverCloseButtonProps,
} from '@chakra-ui/react';

export { PopoverProps } from '@chakra-ui/react'

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
