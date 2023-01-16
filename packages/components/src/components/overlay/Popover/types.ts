import {
  PopoverContentProps,
  PopoverBodyProps,
  PopoverFooterProps,
  PopoverArrowProps,
  PopoverCloseButtonProps,
  PopoverHeaderProps,
  PopoverProps as ChakraPopoverProps,
} from '@chakra-ui/react';


export interface PopoverProps extends ChakraPopoverProps {
  PopoverTrigger?: React.ReactNode;
  PopoverContent?: PopoverContentProps;
  PopoverHeader?: PopoverHeaderProps;
  PopoverBody?: PopoverBodyProps;
  PopoverFooter?: PopoverFooterProps;
  PopoverArrow?: PopoverArrowProps;
  PopoverCloseButton?: PopoverCloseButtonProps;
}

