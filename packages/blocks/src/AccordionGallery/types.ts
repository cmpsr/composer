import { FlexProps, ImageProps, Text, TextPairing, Accordion, Link } from '@cmpsr/components';
import { FC, ReactNode } from 'react';
export { ImageProps as AccordionGalleryImageProps } from '@cmpsr/components';

export interface AccordionGalleryProps extends FlexProps {
  children: ReactNode;
  defaultImage?: number | ReactNode;
}

export interface AccordionGalleryStaticMembers {
  Title: typeof TextPairing;
  Accordion: typeof Accordion & { Image: FC<ImageProps> };
  Overline: typeof Text;
  Action?: typeof Link;
}
