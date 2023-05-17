import React, { isValidElement, Children, useContext, FC } from 'react';
import { Accordion, AccordionItemProps } from '@cmpsr/components';
import { AccordionGalleryContext } from '../';
import { AccordionGalleryImage } from './';

export interface AccordionGalleryItemProps extends AccordionItemProps {
  index: string | number;
}

export const AccordionGalleryItem: FC<AccordionGalleryItemProps> = ({ children, index, ...rest }) => {
  const { images } = useContext(AccordionGalleryContext);

  return (
    <Accordion.Item {...rest}>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === AccordionGalleryImage) {
          images.current[index] = child;
        } else {
          return child;
        }
      })}
    </Accordion.Item>
  );
};
