import React, { FC } from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
} from '@chakra-ui/react';
import { TagProps } from './types';
import { TagStaticMembers } from '.';

export const Tag: FC<TagProps> & TagStaticMembers = (props) => (
  <ChakraTag {...props} />
);

Tag.LeftIcon = TagLeftIcon;
Tag.RightIcon = TagRightIcon;
Tag.Label = TagLabel;
