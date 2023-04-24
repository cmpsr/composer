import React from 'react';
import { Meta } from '@storybook/react';
import { Carousel } from './Carousel';
import { CarouselProps } from './types';

export default {
  component: Carousel,
  title: 'Components/Other/Carousel',
} as Meta;

const Template = (args: CarouselProps) => <Carousel {...args}></Carousel>;

export const Default = Template.bind({});
Default.args = {};
