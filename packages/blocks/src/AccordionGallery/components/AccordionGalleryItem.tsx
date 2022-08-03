import React, { isValidElement, cloneElement, Children, useContext, FC } from 'react';
import { Accordion } from '@cmpsr/components';
import { AccordionGallery, AccordionGalleryContext, AccordionGalleryItemProps } from '../';
import { AccordionGalleryImage } from './';

export const AccordionGalleryItem: FC<AccordionGalleryItemProps> = ({ children, index, ...rest }) => {
  const { setActiveItem, images } = useContext(AccordionGalleryContext);

  return (
    <Accordion.Item {...rest}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          switch (child.type) {
            case AccordionGallery.Accordion.Button:
              return cloneElement(child, {
                onClick: () => {
                  child.props?.onClick?.();
                  setActiveItem(index);
                },
              });
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
