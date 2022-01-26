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
) => <ChakraAccordion {...props} />;

const AccordionButton: FC<AccordionButtonProps> = ({ highlight, ...props }) => (
  <ChakraAccordionButton
    _expanded={highlight && { bg: 'background-action-active' }}
    {...props}
  />
);

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Icon = AccordionIcon;
