import { FC } from 'react';
import { FlexProps, ImageProps, TextProps } from '@cmpsr/components';
export { FlexProps as TestimonialProps } from '@cmpsr/components';

export interface TestimonialAuthorStaticMembers {
  Association: FC<TextProps>;
}

export interface TestimonialStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<FlexProps>;
  Legend: FC<TextProps>;
  Author: FC<TextProps> & TestimonialAuthorStaticMembers;
}
