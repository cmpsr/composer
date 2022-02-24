import React from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, Stack, HStack } from '@chakra-ui/layout';
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

export const All = () => {
  const values = [0, 20, 40, 60, 80, 100];
  const sliderOrientations = ['horizontal', 'vertical'];

  return (
    <Stack divider={<StackDivider />} spacing="2rem">
      {sliderOrientations.map((orientation) => {
        const Container = orientation === 'horizontal' ? VStack : HStack;

        return (
          <Container key={orientation} justify="space-between" spacing="1.5rem">
            {values.map((value) => (
              <SliderTemplate
                key={value}
                value={value}
                orientation={orientation}
                minH={orientation === 'horizontal' ? 0 : 200}
              />
            ))}
          </Container>
        );
      })}
    </Stack>
  );
};

export const Playground = SliderTemplate.bind({});

Playground.args = {
  minH: 200,
  orientation: 'horizontal',
};
