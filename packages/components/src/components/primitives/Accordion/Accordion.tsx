import React, { FC } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton as ChakraAccordionButton,
  AccordionPanel as ChakraAccordionPanel,
  AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react';

import {
  AccordionProps,
  AccordionStaticMembers,
  AccordionItemProps,
  AccordionButtonProps,
  AccordionPanelProps,
} from './types';

export const Accordion: FC<AccordionProps> & AccordionStaticMembers = (
  props
) => {
  return <ChakraAccordion {...props} />;
};

const AccordionItem: FC<AccordionItemProps> = (props) => (
  <ChakraAccordionItem {...props} />
);
const AccordionButton: FC<AccordionButtonProps> = (props) => (
  <ChakraAccordionButton {...props} />
);
const AccordionPanel: FC<AccordionPanelProps> = (props) => (
  <ChakraAccordionPanel {...props} />
);

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Icon = ChakraAccordionIcon;
