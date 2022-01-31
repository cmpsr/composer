import React from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, HStack, Divider } from '@chakra-ui/layout';
import { Slider } from './Slider';

export default {
  component: Slider,
  title: 'Components/Primitives/Slider',
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = () => {
  const values = [0, 20, 40, 60, 80, 100];
  return (
    <>
      <VStack>
        {values.map((value) => (
          <>
            <Slider value={value} />
            <StackDivider />
          </>
        ))}
        <StackDivider />
      </VStack>
      <Divider mb={25} />
      <HStack justify={'space-between'}>
        {values.map((value) => (
          <>
            <Slider value={value} orientation="vertical" minH={200} />
            <StackDivider />
          </>
        ))}
      </HStack>
    </>
  );
};

export const All = Template.bind({});

const PlaygroundTemplate = (args) => <Slider {...args} />;

export const Playground = PlaygroundTemplate.bind({});

Playground.args = {
  minH: 200,
  orientation: 'horizontal',
};
