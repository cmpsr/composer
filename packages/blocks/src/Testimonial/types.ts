import { FC } from 'react';
import { ImageProps, LinkProps, TextVariant, Theme } from '@cmpsr/components';

export interface TestimonialProps {
  backgroundColor?: ThisType<Theme['colors']>;
  legend?: string;
  link?: LinkProps;
  association?: string;
  name: string;
  testimony: string;
  testimonyTextVariant?: TextVariant;
}

export interface TestimonialStaticMembers {
  Image: FC<ImageProps>;
}
