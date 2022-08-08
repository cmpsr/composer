import React, { FC } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton as ChakraAccordionButton,
  AccordionPanel,
  useAccordionContext,
  useAccordionItemState,
  useAccordionStyles,
} from '@chakra-ui/react';

import { AccordionProps, AccordionButtonProps, AccordionStaticMembers } from './types';
import { IconChevronDown, IconProps } from '../Icons';

export const Accordion: FC<AccordionProps> & AccordionStaticMembers = (props) => <ChakraAccordion {...props} />;

const AccordionButton: FC<AccordionButtonProps> = ({ highlight, ...props }) => (
  <ChakraAccordionButton _expanded={highlight && { bg: 'background-action-active' }} {...props} />
);

const AccordionIcon: FC<IconProps> = (props) => {
  const { isOpen, isDisabled } = useAccordionItemState();
  const { reduceMotion } = useAccordionContext();
  const styles = useAccordionStyles() as { icon: IconProps };

  const iconStyles: IconProps = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? 'rotate(-180deg)' : undefined,
    transition: reduceMotion ? undefined : 'transform 0.2s',
    transformOrigin: 'center',
    ...styles.icon,
  };

  return <IconChevronDown {...iconStyles} {...props} />;
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Icon = AccordionIcon;
