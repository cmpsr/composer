import {
  AccordionProps as ChakraAccordionProps,
  AccordionItemProps,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionPanelProps,
  IconProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export type AccordionProps = Omit<ChakraAccordionProps, 'variant'>;

export interface AccordionButtonProps extends ChakraAccordionButtonProps {
  highlight?: boolean;
}

export interface AccordionStaticMembers {
  Item: FC<AccordionItemProps>;
  Button: FC<AccordionButtonProps>;
  Panel: FC<AccordionPanelProps>;
  Icon: FC<IconProps>;
}
