import {
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';

export interface PopoverStaticMembers {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  Header: typeof PopoverHeader;
  Body: typeof PopoverBody;
  Footer: typeof PopoverFooter;
  Arrow: typeof PopoverArrow;
  CloseButton: typeof PopoverCloseButton;
  Anchor: typeof PopoverAnchor;
}
