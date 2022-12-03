import { FC } from 'react';
import { Flex, Image, Link, Text, TextProps } from '@cmpsr/components';
export { FlexProps as TestimonialProps } from '@cmpsr/components';

export interface TestimonialStaticMembers {
  Image: typeof Image;
  Content: typeof Flex;
  Overline: typeof Text;
  Testimony: typeof Text;
  Author: typeof Text;
  Action: typeof Link;
}
