import { Box } from '@chakra-ui/layout';
import React, { FC } from 'react';
import { SectionProps } from '.';

export const Section: FC<SectionProps> = (props) => (
  <Box {...props} as="section" />
);
