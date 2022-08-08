import {
  AccordionProps,
  AccordionStaticMembers,
  FlexProps,
  ImageProps,
  TextPairingProps,
  TextPairingStaticMembers,
  TextProps,
} from '@cmpsr/components';
import { FC, ReactNode } from 'react';
export { ImageProps as AccordionGalleryImageProps } from '@cmpsr/components';

export interface AccordionGalleryProps extends FlexProps {
  children: ReactNode;
  defaultImage?: number | ReactNode;
}

export interface AccordionGalleryStaticMembers {
  Title: FC<TextPairingProps> & TextPairingStaticMembers;
  Accordion: FC<AccordionProps> & AccordionStaticMembers & { Image: FC<ImageProps> };
  Legend: FC<TextProps>;
}
