import React from 'react';
import { Meta } from '@storybook/react';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { THREE_DIMENSIONAL_BACKGROUND_COLORS } from './types';
import { ThreeDimensionalScene } from './ThreeDimensionalScene';

export default {
  component: ThreeDimensionalScene,
  title: 'Components/Threedimensional/ThreeDimensionalScene',
  argTypes: {
    backgroundColor: {
      options: THREE_DIMENSIONAL_BACKGROUND_COLORS,
      control: { type: 'select' },
    },
    width: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    height: {
      type: { name: 'string' },
      control: { type: "text" },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {THREE_DIMENSIONAL_BACKGROUND_COLORS.map((backgroundColor, index) => (
      <ThreeDimensionalScene backgroundColor={backgroundColor} width="700px" height="600px" key={`${backgroundColor}-${index}`} />
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => {
  console.log('Args changing', args)
  return <ThreeDimensionalScene {...args}></ThreeDimensionalScene>;
};
export const Playground = Template.bind({});
Playground.args = {
  backgroundColor: "blue",
  width: "700px",
  height: "600px",
};
