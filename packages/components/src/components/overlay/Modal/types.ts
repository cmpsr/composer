import {
  ModalProps as ChakraModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
  ResponsiveValue,
} from '@chakra-ui/react';
import { CloseButtonProps } from '@components';
import { FC } from 'react';

export {
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
} from '@chakra-ui/react';

export const modalSizes = ['auto', 'full'] as const;
export type ModalSize = (typeof modalSizes)[number];
export interface ModalProps extends ChakraModalProps {
  size?: ResponsiveValue<ModalSize>;
}

export interface ModalStaticMembers {
  Overlay: FC<ModalOverlayProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalHeaderProps>;
  Footer: FC<ModalFooterProps>;
  Body: FC<ModalBodyProps>;
  CloseButton: FC<CloseButtonProps>;
}
