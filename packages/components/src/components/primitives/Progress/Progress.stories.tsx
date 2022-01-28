import React from 'react';
import { Meta } from '@storybook/react';
import { Progress } from './Progress';
import { Divider } from '@chakra-ui/react';
import { progressSizes } from './types';

export default {
  component: Progress,
  title: 'Components/Primitives/Progress',
} as Meta;

const AllTemplate = () =>
  progressSizes.map((size, key) => (
    <>
      <Progress value={20} size={size} key={key} />
      <Divider my={3} />
    </>
  ));

export const All = AllTemplate.bind({});

const Template = ({ ...args }) => <Progress {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  value: 60,
};
