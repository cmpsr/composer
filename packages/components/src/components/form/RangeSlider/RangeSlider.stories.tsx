import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { IconChevronLeft, IconChevronRight, Text } from '@components';
import { RangeSlider } from '.';
import { RangeSliderProps } from './types';

const orientations = ['horizontal', 'vertical'];

export default {
  component: RangeSlider,
  title: 'Components/Form/RangeSlider',
  argTypes: {
    orientation: {
      options: orientations,
      control: { type: 'select' },
    },
  },
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
                <RangeSlider
                  key={`${orientation}-${value}`}
                  defaultValue={[10, 30]}
                  orientation={orientation}
                  {...size[orientation]}
                >
                  <RangeSlider.Track>
                    <RangeSlider.FilledTrack />
                  </RangeSlider.Track>
                  <RangeSlider.Thumb index={0} />
                  <RangeSlider.Thumb index={1} />
                </RangeSlider>
              ))}
            </Container>
          </VStack>
        );
      })}
    </HStack>
  );
};

export const WithCustomThumb = () => {
  return (
    <RangeSlider defaultValue={[10, 30]}>
      <RangeSlider.Track>
        <RangeSlider.FilledTrack />
      </RangeSlider.Track>
      <RangeSlider.Thumb index={0}>
        <IconChevronLeft size="m" color="primary-default" />
      </RangeSlider.Thumb>
      <RangeSlider.Thumb index={1}>
        <IconChevronRight size="m" color="primary-default" />
      </RangeSlider.Thumb>
    </RangeSlider>
  );
};

const Template = (props: RangeSliderProps) => {
  const [sliderValue, setSliderValue] = useState([10, 30]);
  return (
    <>
      <Text mb="1rem">Current value: {sliderValue.join('-')}</Text>
      <RangeSlider value={sliderValue} onChange={setSliderValue} {...props}>
        <RangeSlider.Track>
          <RangeSlider.FilledTrack />
        </RangeSlider.Track>
        <RangeSlider.Thumb index={0} />
        <RangeSlider.Thumb index={1} />
      </RangeSlider>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  minH: 200,
  orientation: 'horizontal',
  max: 100,
  min: 1,
  step: 1,
};
