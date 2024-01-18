import React, { FC, MouseEvent } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerOverlay as ChakraDrawerOverlay,
  DrawerContent as ChakraDrawerContent,
  DrawerFooter as ChakraDrawerFooter,
  DrawerBody as ChakraDrawerBody,
  DrawerHeader as ChakraDrawerHeader,
  DrawerProps,
  ModalOverlayProps,
  DrawerContentProps,
  ModalFooterProps,
  ModalBodyProps,
  ModalHeaderProps,
  forwardRef,
  useModalContext,
} from '@chakra-ui/react';
import { DrawerStaticMembers } from './types';
import { CloseButton, CloseButtonProps } from '@components';
import { callAllHandlers } from '@chakra-ui/utils';


export const Drawer: FC<DrawerProps> & DrawerStaticMembers = ({ children, ...rest }) => (
  <ChakraDrawer {...rest}>
    {children}
  </ChakraDrawer>
);

const DrawerOverlay: FC<ModalOverlayProps> = (props) => <ChakraDrawerOverlay {...props} />;

const DrawerContent: FC<DrawerContentProps> = ({ children, ...rest }) => (
  <ChakraDrawerContent {...rest}>
    {children}
  </ChakraDrawerContent>
);

const DrawerFooter: FC<ModalFooterProps> = ({ children, ...rest }) => (
  <ChakraDrawerFooter {...rest}>
    {children}
  </ChakraDrawerFooter>

);

const DrawerBody: FC<ModalBodyProps> = ({ children, ...rest }) => (
  <ChakraDrawerBody {...rest}>
    {children}
  </ChakraDrawerBody>
);

const DrawerCloseButton = forwardRef<CloseButtonProps, typeof CloseButton>((props, ref) => {
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

const DrawerHeader: FC<ModalHeaderProps> = ({ children, ...rest }) => (
  <ChakraDrawerHeader {...rest}>
    {children}
  </ChakraDrawerHeader>
);

Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
Drawer.Body = DrawerBody;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Header = DrawerHeader;

