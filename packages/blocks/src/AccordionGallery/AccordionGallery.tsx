import React, {
  FC,
  useState,
  isValidElement,
  Children,
  ReactElement,
  useRef,
  createContext,
  useEffect,
  cloneElement,
} from 'react';
import {
  Accordion,
  AccordionProps,
  Flex,
  TextPairing,
  TextPairingProps,
  useBreakpointValue,
  Text,
  TextProps,
  Link,
  LinkProps,
} from '@cmpsr/components';
import { AccordionGalleryProps, AccordionGalleryStaticMembers } from './types';
import {
  AccordionGalleryAccordion as AccordionGalleryAccordionComponent,
  AccordionGalleryImage,
  AccordionGalleryItem,
} from './components';

export const AccordionGalleryContext = createContext({ images: null });

export const AccordionGallery: FC<AccordionGalleryProps> & AccordionGalleryStaticMembers = ({
  children,
  defaultImage = 0,
  ...rest
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [activeItem, setActiveItem] = useState(null);
  const images = useRef({});

  useEffect(() => {
    if (typeof defaultImage !== 'number') {
      images.current['default'] = defaultImage;
      setActiveItem('default');
    } else {
      setActiveItem(defaultImage);
    }
  }, []);

  let textPairing: ReactElement<TextPairingProps> = null;
  let accordion: ReactElement<AccordionProps> = null;
  let legend: ReactElement<TextProps> = null;
  let action: ReactElement<LinkProps> = null;

  const handleAccordionChange = (index: number) => {
    const selectedImageIndex = index !== -1 ? index : typeof defaultImage === 'number' ? defaultImage : 'default';
    accordion.props?.onChange?.(index);
    setActiveItem(selectedImageIndex);
  };

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
        case Link:
          action = child;
          break;
      }
    }
  });

  return (
    <AccordionGalleryContext.Provider value={{ images }}>
      <Flex
        gap={{ md: '2rem', lg: '3rem', xxl: '5.75rem' }}
        alignItems={{ md: 'center' }}
        justifyContent="center"
        {...rest}
      >
        {!isMobile && images.current?.[activeItem] ? images.current[activeItem] : null}
        <Flex flexDirection="column" gap={{ base: '2rem', md: '1.5rem', lg: '3rem' }}>
          {legend}
          {textPairing}
          {isMobile && images.current?.[activeItem] ? images.current[activeItem] : null}
          {accordion && cloneElement(accordion, { onChange: handleAccordionChange })}
          {action}
        </Flex>
      </Flex>
    </AccordionGalleryContext.Provider>
  );
};

const AccordionGalleryAccordion: typeof Accordion & { Image: typeof AccordionGalleryImage } = Object.assign(
  AccordionGalleryAccordionComponent,
  {
    Image: AccordionGalleryImage,
    Item: AccordionGalleryItem,
    Button: Accordion.Button,
    Panel: Accordion.Panel,
    Icon: Accordion.Icon,
  }
);

AccordionGallery.Title = TextPairing;
AccordionGallery.Accordion = AccordionGalleryAccordion;
AccordionGallery.Overline = Text;
AccordionGallery.Action = Link;
