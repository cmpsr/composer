import React, { isValidElement, cloneElement, Children, useContext, FC } from 'react';
import { Accordion } from '@cmpsr/components';
import { AccordionGallery, AccordionGalleryContext, AccordionGalleryItemProps } from '../';
import { AccordionGalleryImage } from './';

export const AccordionGalleryItem: FC<AccordionGalleryItemProps> = ({ children, index }) => {
  const { setActiveItem, images } = useContext(AccordionGalleryContext);

  return (
    <Accordion.Item>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          switch (child.type) {
            case AccordionGallery.Accordion.Button:
              // if prev onclick exists, preserve it and inject new functionality, check chakra ui
              return cloneElement(child, { onClick: () => setActiveItem(index) });
            case AccordionGalleryImage:
              images.current[index] = child.props;
              break;
            default:
              return child;
          }
        }
      })}
    </Accordion.Item>
  );
};
