import React, { FC, useState, isValidElement, Children, ReactElement, useRef, createContext } from 'react';
import {
  Accordion,
  AccordionProps,
  AccordionStaticMembers,
  Flex,
  ImageProps,
  TextPairing,
  TextPairingProps,
  useBreakpointValue,
  Text,
} from '@cmpsr/components';
import { AccordionGalleryProps, AccordionGalleryStaticMembers } from './types';
import {
  AccordionGalleryAccordion as AccordionGalleryAccordionComponent,
  AccordionGalleryImage,
  AccordionGalleryItem,
} from './components';

export const AccordionGalleryContext = createContext({ setActiveItem: null, images: null });

// Add support for legend, icon etc...
export const AccordionGallery: FC<AccordionGalleryProps> & AccordionGalleryStaticMembers = ({
  children,
  defaultImage = null,
  ...rest
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [activeItem, setActiveItem] = useState(0);
  const images = useRef({});

  let textPairing: ReactElement<TextPairingProps> = null;
  let accordion: ReactElement<AccordionProps> = null;
  let legend: ReactElement<TextPairingProps> = null;

  Children.map(children, (child) => {
    if (isValidElement(child)) {
      switch (child.type) {
        // Create custom component AccordionGalleryLegend with default stylings (?)
        case Text:
          legend = child;
          break;
        case TextPairing:
          textPairing = child;
          break;
        case AccordionGalleryAccordion:
          accordion = child;
          break;
      }
    }
  });

  return (
    <AccordionGalleryContext.Provider value={{ setActiveItem, images }}>
      <Flex
        gap={{ md: '2rem', lg: '3rem', xxl: '5.75rem' }}
        alignItems={{ md: 'center' }}
        justifyContent="center"
        {...rest}
      >
        {!isMobile && images.current[activeItem] && <AccordionGalleryImage {...images.current[activeItem]} />}
        <Flex flexDirection="column" gap={{ base: '2rem', md: '1.5rem', lg: '3rem' }}>
          {legend}
          {textPairing}
          {isMobile && images.current[activeItem] && <AccordionGalleryImage {...images.current[activeItem]} />}
          {accordion}
        </Flex>
      </Flex>
    </AccordionGalleryContext.Provider>
  );
};

const AccordionGalleryAccordion: FC<AccordionProps> &
  AccordionStaticMembers & { Image: FC<ImageProps> } = Object.assign(AccordionGalleryAccordionComponent, {
  Image: AccordionGalleryImage,
  Item: AccordionGalleryItem,
  Button: Accordion.Button,
  Panel: Accordion.Panel,
  Icon: Accordion.Icon,
});

AccordionGallery.TextPairing = TextPairing;
AccordionGallery.Accordion = AccordionGalleryAccordion;
AccordionGallery.Legend = Text;
