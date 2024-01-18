import React, { FC } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerOverlay as ChakraDrawerOverlay,
  DrawerContent as ChakraDrawerContent,
  DrawerFooter as ChakraDrawerFooter,
  DrawerBody as ChakraDrawerBody,
  DrawerCloseButton as ChakraDrawerCloseButton,
  DrawerHeader as ChakraDrawerHeader,
  DrawerProps,
  ModalOverlayProps,
  DrawerContentProps,
  ModalFooterProps,
  ModalBodyProps,
  CloseButtonProps,
  ModalHeaderProps,
} from '@chakra-ui/react';
import { DrawerStaticMembers } from './types';


export const Drawer: FC<DrawerProps> & DrawerStaticMembers = ({ children, ...rest }) => (
  <ChakraDrawer {...rest}>
    {children}
  </ChakraDrawer>
)

const DrawerOverlay: FC<ModalOverlayProps> = (props) => <ChakraDrawerOverlay {...props} />;

const DrawerContent: FC<DrawerContentProps> = ({ children, ...rest }) => (
  <ChakraDrawerContent {...rest}>
    {children}
  </ChakraDrawerContent>
)

const DrawerFooter: FC<ModalFooterProps> = ({ children, ...rest }) => (
  <ChakraDrawerFooter {...rest}>
    {children}
  </ChakraDrawerFooter>

)

const DrawerBody: FC<ModalBodyProps> = ({ children, ...rest }) => (
  <ChakraDrawerBody {...rest}>
    {children}
  </ChakraDrawerBody>
)

const DrawerCloseButton: FC<CloseButtonProps> = (props) => (
  <ChakraDrawerCloseButton {...props} />
)

const DrawerHeader: FC<ModalHeaderProps> = ({ children, ...rest }) => (
  <ChakraDrawerHeader {...rest}>
    {children}
  </ChakraDrawerHeader>
)

Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
Drawer.Body = DrawerBody;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Header = DrawerHeader;

