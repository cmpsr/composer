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
  return (
    <ChakraAccordionButton
      {...(highlight && { bg: 'background-action-active' })}
      {...props}
    />
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Icon = AccordionIcon;
