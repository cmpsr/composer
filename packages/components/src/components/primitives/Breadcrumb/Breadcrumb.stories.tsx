import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { IconCheck, IconWorld } from '..';
import { VStack } from '@chakra-ui/react';

export default {
  component: Breadcrumb,
  title: 'Components/Primitives/Breadcrumb',
  argTypes: {
    separator: {
      options: ['default', '|', '/'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = ({ showLeadingIcon = false, showTrailingIcon = false, separator = null, numOfItems, ...rest }) => {
  const items = Array.from(Array(numOfItems).keys());
  return (
    <Breadcrumb separator={separator !== 'default' ? separator : null} {...rest}>
      {items.map((item) => (
        <Breadcrumb.Item
          key={item}
          href="#"
          leadingIcon={showLeadingIcon && IconWorld}
          trailingIcon={showTrailingIcon && IconCheck}
        >
          {item === items.length - 1 ? 'Active Breadcrumb' : 'Default link'}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export const All = () => {
  const totalBreadcrumbs = Array.from(Array(4).keys());
  return (
    <VStack>
      <VStack alignItems="flex-start" spacing="3rem">
        {totalBreadcrumbs.map((item) => (
          <Template key={item} numOfItems={item + 2} showLeadingIcon={item === 0} showTrailingIcon={item === 0} />
        ))}
      </VStack>
    </VStack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  separator: 'default',
  showLeadingIcon: false,
  showTrailingIcon: false,
  numOfItems: 3,
};
