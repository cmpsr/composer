import React, { FC } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  forwardRef,
} from '@chakra-ui/react';
import { ModalProps, ModalStaticMembers } from './types';
import { CloseButton, CloseButtonProps } from '@components';

export const Modal: FC<ModalProps> & ModalStaticMembers = (props) => <ChakraModal {...props} />;

const ModalCloseButton = forwardRef<CloseButtonProps, typeof CloseButton>((props, ref) => {
  return <CloseButton position="absolute" top="1.25rem" right="1.25rem" size="m" ref={ref} {...props} />;
});

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.CloseButton = ModalCloseButton;
