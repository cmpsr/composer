import React from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { VStack, Divider } from '@chakra-ui/react';
import * as Icons from '../Icons';

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
      <Link size="l" href="#" role="link">
        Large link
      </Link>
      <Divider />

      <Link
        size="s"
        icon={<Icons.IconExternalLink />}
        href="#"
        isExternal
        role="link"
      >
        Link with icon
      </Link>
      <Divider />

      <Link
        size="m"
        iconPosition={'right'}
        icon={<Icons.IconExternalLink />}
        href="#"
        isExternal
        role="link"
      >
        Link with icon
      </Link>
      <Divider />

      <Link size="l" icon={<Icons.IconLink />} href="#" isExternal role="link">
        Link with icon
      </Link>
    </VStack>
  );
};

export const All = AllTemplate.bind({});
