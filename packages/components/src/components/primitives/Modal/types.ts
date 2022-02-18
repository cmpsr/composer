import {
  ModalProps as ChakraModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
  CloseButtonProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export {
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
  CloseButtonProps,
} from '@chakra-ui/react';

export const modalSizes = ['auto', 'full'] as const;
export type ModalSize = typeof modalSizes[number];
export interface ModalProps extends Omit<ChakraModalProps, 'size'> {
  size?: ModalSize;
}

export interface ModalStaticMembers {
  Overlay: FC<ModalOverlayProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalHeaderProps>;
  Footer: FC<ModalFooterProps>;
  Body: FC<ModalBodyProps>;
  CloseButton: FC<CloseButtonProps>;
}
