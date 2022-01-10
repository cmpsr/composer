import React from 'react';
import { Meta } from '@storybook/react';
import { Slider } from './Slider';
import { VStack, StackDivider } from '@chakra-ui/layout';

export default {
  component: Slider,
  title: 'Components/Primitives/Slider',
} as Meta;

const Template = () => {
  return (
    <VStack>
      <Slider variant="default" />
      <StackDivider />
      <Slider variant="primary" />
    </VStack>
  );
};

export const All = Template.bind({});
