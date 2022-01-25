import React, { FC } from 'react';
import {
  Tag as ChakraTag,
  TagLabel as ChakraTabLabel,
  TagLabelProps,
} from '@chakra-ui/react';
import { TagProps } from './types';

export const Tag: FC<TagProps> = (props) => <ChakraTag {...props} />;

export const TagLabel: FC<TagLabelProps> = (props) => (
  <ChakraTabLabel {...props} />
);

export { TagLeftIcon, TagRightIcon } from '@chakra-ui/react';
