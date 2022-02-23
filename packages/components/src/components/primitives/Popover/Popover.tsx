import React, { FC } from 'react';
import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverAnchor,
  usePopoverContext,
  forwardRef,
} from '@chakra-ui/react';
import { PopoverProps, PopoverStaticMembers } from './types';
import { CloseButton } from '@components';
import { callAllHandlers } from '@chakra-ui/utils';

export const Popover: FC<PopoverProps> & PopoverStaticMembers = (props) => <ChakraPopover {...props} />;

const PopoverCloseButton = forwardRef(({ onClick, ...rest }, ref) => {
  const { onClose } = usePopoverContext();
  return (
    <CloseButton
      position="absolute"
      top="1rem"
      right="1rem"
      size="s"
      ref={ref}
      onClick={callAllHandlers(onClick, onClose)}
      {...rest}
    />
  );
});

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Arrow = PopoverArrow;
Popover.CloseButton = PopoverCloseButton;
Popover.Anchor = PopoverAnchor;
