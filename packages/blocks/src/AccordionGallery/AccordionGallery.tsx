import React, { FC, useState, isValidElement, Children, ReactElement, useRef, createContext, useEffect } from 'react';
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
  TextProps,
} from '@cmpsr/components';
import { AccordionGalleryProps, AccordionGalleryStaticMembers } from './types';
import {
  AccordionGalleryAccordion as AccordionGalleryAccordionComponent,
  AccordionGalleryImage,
  AccordionGalleryItem,
} from './components';

export const AccordionGalleryContext = createContext({ setActiveItem: null, images: null });

export const AccordionGallery: FC<AccordionGalleryProps> & AccordionGalleryStaticMembers = ({
  children,
  defaultImage = 0,
  ...rest
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [activeItem, setActiveItem] = useState(null);
  const images = useRef({});

  useEffect(() => {
    setActiveItem(defaultImage);
  }, []);

  let textPairing: ReactElement<TextPairingProps> = null;
  let accordion: ReactElement<AccordionProps> = null;
  let legend: ReactElement<TextProps> = null;

  Children.map(children, (child) => {
    if (isValidElement(child)) {
      switch (child.type) {
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
        {!isMobile && images.current?.[activeItem] && <AccordionGalleryImage {...images.current[activeItem]} />}
        <Flex flexDirection="column" gap={{ base: '2rem', md: '1.5rem', lg: '3rem' }}>
          {legend}
          {textPairing}
          {isMobile && images.current?.[activeItem] && <AccordionGalleryImage {...images.current[activeItem]} />}
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
