import React, { FC } from 'react';
import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  PopoverProps,
} from '@chakra-ui/react';
import { PopoverStaticMembers } from './types';

export const Popover: FC<PopoverProps> & PopoverStaticMembers = (props) => <ChakraPopover {...props} />;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Arrow = PopoverArrow;
Popover.CloseButton = PopoverCloseButton;
Popover.Anchor = PopoverAnchor;
