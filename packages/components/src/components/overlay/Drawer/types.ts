import { FC } from 'react';
import {
  ModalOverlayProps,
  DrawerContentProps,
  ModalFooterProps,
  ModalBodyProps,
  CloseButtonProps,
  ModalHeaderProps,
} from '@chakra-ui/react';

export interface DrawerStaticMembers {
  Overlay: FC<ModalOverlayProps>;
  Content: FC<DrawerContentProps>;
  Footer: FC<ModalFooterProps>;
  Body: FC<ModalBodyProps>;
  CloseButton: FC<CloseButtonProps>;
  Header: FC<ModalHeaderProps>;
}
