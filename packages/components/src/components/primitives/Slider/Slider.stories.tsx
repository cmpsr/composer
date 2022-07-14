import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { Slider, SliderProps, Text } from '@components';
import { getFigmaDesignLink } from '@components/figmaLinks';

const orientations = ['horizontal', 'vertical'];

export default {
  component: Slider,
  title: 'Components/Primitives/Slider',
  argTypes: {
    orientation: {
      options: orientations,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('slider'),
} as Meta;

const values = [0, 20, 40, 60, 80, 100];
const size = {
  horizontal: { minW: '25rem' },
  vertical: { minH: '20rem' },
};

export const All = () => {
  return (
    <HStack divider={<StackDivider />} justify="space-around">
      {orientations.map((orientation) => {
        const Container = orientation === 'horizontal' ? VStack : HStack;

        return (
          <VStack key={orientation} spacing="1rem">
            <Text>{orientation}</Text>
            <Container spacing="1.5rem">
              {values.map((value) => (
                <Slider key={`${orientation}-${value}`} value={value} orientation={orientation} {...size[orientation]}>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
                </Slider>
              ))}
            </Container>
          </VStack>
        );
      })}
    </HStack>
  );
};

export const WithMarks = () => {
  const [sliderValue, setSliderValue] = useState(10);
  return (
    <>
      <Text>Current value: {sliderValue}</Text>
      <Slider value={sliderValue} onChange={setSliderValue} orientation="horizontal" h="5rem">
        <Slider.Mark value={25}>
          <Text variant="text-body-meta-regular">25%</Text>
        </Slider.Mark>
        <Slider.Mark value={50}>
          <Text variant="text-body-meta-regular">50%</Text>
        </Slider.Mark>
        <Slider.Mark value={75}>
          <Text variant="text-body-meta-regular">75%</Text>
        </Slider.Mark>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </>
  );
};

export const WithCustomThumb = ({ boxSize }) => {
  return (
    <Slider defaultValue={50} orientation="horizontal">
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb bg="accent-default" boxSize={boxSize} />
    </Slider>
  );
};

WithCustomThumb.args = {
  boxSize: '3rem',
};

const Template = (props: SliderProps) => (
  <Slider {...props}>
    <Slider.Track>
      <Slider.FilledTrack />
    </Slider.Track>
    <Slider.Thumb />
  </Slider>
);
export const Playground = Template.bind({});
Playground.args = {
  minH: 200,
  orientation: 'horizontal',
};
