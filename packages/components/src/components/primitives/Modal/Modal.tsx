import React, { FC, MouseEvent } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  forwardRef,
  useModalContext,
} from '@chakra-ui/react';
import { ModalProps, ModalStaticMembers } from './types';
import { CloseButton, CloseButtonProps } from '@components';
import { callAllHandlers } from '@chakra-ui/utils';

export const Modal: FC<ModalProps> & ModalStaticMembers = (props) => <ChakraModal {...props} />;

const ModalCloseButton = forwardRef<CloseButtonProps, typeof CloseButton>((props, ref) => {
  const { onClick, ...rest } = props;
  const { onClose } = useModalContext();
  return (
    <CloseButton
      position="absolute"
      top="1.25rem"
      right="1.25rem"
      size="m"
      ref={ref}
      onClick={callAllHandlers(onClick, (event: MouseEvent) => {
        event.stopPropagation();
        onClose();
      })}
      {...rest}
    />
  );
});

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.CloseButton = ModalCloseButton;
