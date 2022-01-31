import React from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { VStack, Divider } from '@chakra-ui/react';
import { linkSizes } from './types';
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

          <>
            <Link
              leftIcon={Icons.IconExternalLink}
              size={size}
              role="link"
              href="#"
            >
              Size {size.toUpperCase()} link with left icon
            </Link>
            <Divider />
            <Link
              rightIcon={Icons.IconExternalLink}
              size={size}
              role="link"
              href="#"
            >
              Size {size.toUpperCase()} link with right icon
            </Link>
            <Divider />
          </>
        </>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const Template = ({ showLeftIcon, showRightIcon, ...args }) => (
  <VStack>
    <Link
      href="#"
      role="link"
      {...(showLeftIcon && { leftIcon: Icons.IconExternalLink })}
      {...(showRightIcon && { rightIcon: Icons.IconExternalLink })}
      {...args}
    >
      Playground
    </Link>
  </VStack>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  showLeftIcon: true,
  showRightIcon: true,
};
