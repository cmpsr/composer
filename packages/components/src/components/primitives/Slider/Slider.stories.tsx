import React from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { Text } from '@components';
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

const SliderTemplate = (props) => (
  <Slider {...props}>
    <Slider.Track>
      <Slider.FilledTrack />
    </Slider.Track>
    <Slider.Thumb />
  </Slider>
);

const values = [0, 20, 40, 60, 80, 100, 60, 60];
const sliderOrientations = ['horizontal', 'vertical'];

export const All = () => {
  return (
    <HStack divider={<StackDivider />} justify="space-around">
      {sliderOrientations.map((orientation) => {
        const Container = orientation === 'horizontal' ? VStack : HStack;

        return (
          <VStack spacing="1rem">
            <Text>{orientation}</Text>
            <Container key={orientation} spacing="1.5rem">
              {values.map((value) => (
                <SliderTemplate
                  key={value}
                  value={value}
                  orientation={orientation}
                  minH={orientation === 'horizontal' ? 0 : '20rem'}
                  minW={orientation === 'horizontal' ? '25rem' : 0}
                />
              ))}
            </Container>
          </VStack>
        );
      })}
    </HStack>
  );
};

export const Playground = SliderTemplate.bind({});

Playground.args = {
  minH: 200,
  orientation: 'horizontal',
};
