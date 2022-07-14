import React from 'react';
import { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
import { tabsVariants } from './types';
import { StackDivider, VStack } from '@chakra-ui/react';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: Tabs,
  title: 'Components/Primitives/Tabs',
  argTypes: {
    variant: {
      options: tabsVariants,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('tabs'),
} as Meta;

export const All = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {tabsVariants.map((variant, id) => (
      <Template variant={variant} key={id} />
    ))}
  </VStack>
);

const Template = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Item>Tab 1</Tabs.Item>
      <Tabs.Item>Tab 2</Tabs.Item>
      <Tabs.Item>Tab 3</Tabs.Item>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>one!</Tabs.Panel>
      <Tabs.Panel>two!</Tabs.Panel>
      <Tabs.Panel>three!</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);
export const Playground = Template.bind({});
Playground.args = {
  variant: 'rounded',
};
