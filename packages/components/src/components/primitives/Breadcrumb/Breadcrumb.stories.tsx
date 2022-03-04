import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Flex, IconCheck, IconWorld } from '@components';

export default {
  component: Breadcrumb,
  title: 'Components/Primitives/Breadcrumb',
  argTypes: {
    separator: {
      options: ['default', '/'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => {
  const totalBreadcrumbs = Array.from(Array(4).keys());
  return (
    <Flex direction="column" alignItems="flex-start" rowGap="1rem">
      {totalBreadcrumbs.map((item) => (
        <Template key={item} numOfItems={item + 2} showLeadingIcon={item === 0} showTrailingIcon={item === 0} />
      ))}
    </Flex>
  );
};

const Template = ({ showLeadingIcon, showTrailingIcon, separator = 'default', numOfItems, ...rest }) => {
  const items = Array.from(Array(numOfItems).keys());
  return (
    <Breadcrumb separator={separator !== 'default' ? separator : undefined} {...rest}>
      {items.map((item) => (
        <Breadcrumb.Item
          key={item}
          leadingIcon={showLeadingIcon && IconWorld}
          trailingIcon={showTrailingIcon && IconCheck}
          href="#"
        >
          {item === items.length - 1 ? 'Active Breadcrumb' : 'Default link'}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  separator: 'default',
  showLeadingIcon: false,
  showTrailingIcon: false,
  numOfItems: 3,
  spacing: '0.5rem',
};
