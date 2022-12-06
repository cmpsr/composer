import React from 'react';
import { Meta } from '@storybook/react';
// import { StackDivider, VStack } from '@chakra-ui/layout';
import { ThreeDimensionalScene } from './ThreeDimensionalScene';

export default {
  component: ThreeDimensionalScene,
  title: 'Components/Threedimensional/ThreeDimensionalScene',
  argTypes: {
    backgroundColor: {
      control: { type: 'color', presetColors: ['blue', 'black'] },
    },
    width: {
      type: { name: 'string' },
      control: { type: "text" },
    },
    height: {
      type: { name: 'string' },
      control: { type: "text" },
    },
    threeDimensionalObjectOrScene: {
      control: { type: "file", accept: [".gltf", ".glb"] },
    },
  },
} as Meta;

const Template = (args) => <ThreeDimensionalScene {...args}></ThreeDimensionalScene>;
export const Playground = Template.bind({});
Playground.args = {
  backgroundColor: "blue",
  width: "100%",
  height: "600px",
  threeDimensionalObjectOrScene: [""],
};
