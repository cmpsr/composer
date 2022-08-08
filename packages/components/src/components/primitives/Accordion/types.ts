import {
  AccordionProps as ChakraAccordionProps,
  AccordionItemProps,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionPanelProps,
} from '@chakra-ui/react';
import { IconProps } from '@components';
import { FC } from 'react';

export type AccordionProps = ChakraAccordionProps;

export interface AccordionButtonProps extends ChakraAccordionButtonProps {
  highlight?: boolean;
}

export interface AccordionStaticMembers {
  Item: FC<AccordionItemProps>;
  Button: FC<AccordionButtonProps>;
  Panel: FC<AccordionPanelProps>;
  Icon: FC<IconProps>;
}
