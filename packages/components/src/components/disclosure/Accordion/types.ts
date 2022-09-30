import {
  AccordionItemProps,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionPanelProps,
} from '@chakra-ui/react';
import { IconProps } from '@components';
import { FC } from 'react';
export { AccordionProps, AccordionItemProps, AccordionPanelProps } from '@chakra-ui/react';

export interface AccordionButtonProps extends ChakraAccordionButtonProps {
  highlight?: boolean;
}

export interface AccordionStaticMembers {
  Item: FC<AccordionItemProps>;
  Button: FC<AccordionButtonProps>;
  Panel: FC<AccordionPanelProps>;
  Icon: FC<IconProps>;
}
