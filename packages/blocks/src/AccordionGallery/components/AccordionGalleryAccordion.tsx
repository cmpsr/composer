import React, { FC, cloneElement, Children, isValidElement } from 'react';
import { Accordion, AccordionProps } from '@cmpsr/components';
import { AccordionGalleryItem } from './';

export const AccordionGalleryAccordion: FC<AccordionProps> = ({ children, ...rest }) => (
  <Accordion {...rest}>
    {Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        switch (child.type) {
          case AccordionGalleryItem:
            return cloneElement(child, { index });
          default:
            return child;
        }
      }
    })}
  </Accordion>
);
