import {
  AccordionProps as ChakraAccordionProps,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionPanelProps as ChakraAccordionPanelProps,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export const accordionVariants = ['highlight'] as const;
export type AccordionVariant = typeof accordionVariants[number];

export interface AccordionProps extends ChakraAccordionProps {
  variant?: AccordionVariant;
}

export type AccordionItemProps = ChakraAccordionItemProps;
export type AccordionButtonProps = ChakraAccordionButtonProps;
export type AccordionPanelProps = ChakraAccordionPanelProps;
export type AccordionIconProps = ChakraIconProps;

export interface AccordionStaticMembers {
  Item: FC<AccordionItemProps>;
  Button: FC<AccordionButtonProps>;
  Panel: FC<AccordionPanelProps>;
  Icon: FC<AccordionIconProps>;
}
