import React, { FC, MouseEvent } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerOverlay as ChakraDrawerOverlay,
  DrawerContent as ChakraDrawerContent,
  DrawerFooter as ChakraDrawerFooter,
  DrawerBody as ChakraDrawerBody,
  DrawerHeader as ChakraDrawerHeader,
  DrawerProps,
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

Drawer.Overlay = ChakraDrawerOverlay;
Drawer.Content = ChakraDrawerContent;
Drawer.Footer = ChakraDrawerFooter;
Drawer.Body = ChakraDrawerBody;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Header = ChakraDrawerHeader;

