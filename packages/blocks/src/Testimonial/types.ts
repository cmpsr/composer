import { FC } from 'react';
import { FlexProps, ImageProps, LinkProps, TextProps } from '@cmpsr/components';
export { FlexProps as TestimonialProps } from '@cmpsr/components';

export interface TestimonialAuthorStaticMembers {
  Association: FC<TextProps>;
}

export interface TestimonialStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<FlexProps>;
  Legend: FC<TextProps>;
  Testimony: FC<TextProps>;
  Author: FC<TextProps> & TestimonialAuthorStaticMembers;
  Link: FC<LinkProps>;
}
