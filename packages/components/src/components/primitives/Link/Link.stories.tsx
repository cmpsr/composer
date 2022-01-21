import React from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { VStack, Divider } from '@chakra-ui/react';
import { linkSizes, linkIconPositions } from './types';
import * as Icons from '../Icons';

export default {
  component: Link,
  title: 'Components/Primitives/Link',
} as Meta;

const AllTemplate = () => {
  return (
    <VStack>
      {linkSizes.map((size, key) => (
        <>
          <Link size={size} key={key} role="link" href="#">
            Size {size.toUpperCase()} link
          </Link>
          <Divider />
          {linkIconPositions.map((position) => (
            <>
              <Link
                iconPosition={position}
                icon={<Icons.IconExternalLink />}
                size={size}
                key={key}
                role="link"
                href="#"
              >
                Size {size.toUpperCase()} link with {position} icon
              </Link>
              <Divider />
            </>
          ))}
        </>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});
