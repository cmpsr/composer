import React, { FC } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ModalProps, ModalStaticMembers } from './types';

export const Modal: FC<ModalProps> & ModalStaticMembers = (props) => <ChakraModal {...props} />;

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.CloseButton = ModalCloseButton;
