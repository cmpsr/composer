import { FC } from 'react';
import { FlexProps, ImageProps } from '@cmpsr/components';
export { FlexProps as TestimonialProps } from '@cmpsr/components';

export interface TestimonialStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<FlexProps>;
}
