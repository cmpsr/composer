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
      <Link size="s" href="#" role="link">
        Small link
      </Link>
      <Divider />
      <Link size="m" href="#" role="link">
        Medium link
      </Link>
      <Divider />
      <Link href="#" role="link">
        Default size
      </Link>
      <Divider />
    </VStack>
  );
};

export const All = AllTemplate.bind({});
