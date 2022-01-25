import React, { FC } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton as ChakraAccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import {
  AccordionProps,
  AccordionButtonProps,
  AccordionStaticMembers,
} from './types';

export const Accordion: FC<AccordionProps> & AccordionStaticMembers = (
  props
) => {
  return <ChakraAccordion _expanded={{ bg: '#]]]' }} {...props} />;
};

const AccordionButton: FC<AccordionButtonProps> = ({ highlight, ...props }) => {
  let expanded = null;
  if (highlight) {
    expanded = { bg: 'background-action-active' };
  }
  return <ChakraAccordionButton _expanded={expanded} {...props} />;
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Icon = AccordionIcon;
