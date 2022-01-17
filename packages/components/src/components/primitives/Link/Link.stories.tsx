import React from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { VStack, Divider } from '@chakra-ui/react';

export default {
  component: Link,
  title: 'Components/Primitives/Link',
} as Meta;

const AllTemplate = () => {
  return (
    <VStack>
      <Link />
      <Divider />
      <Link />
      <Divider />
    </VStack>
  );
};

export const All = AllTemplate.bind({});
