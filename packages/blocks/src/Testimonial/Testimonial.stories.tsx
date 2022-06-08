import React from 'react';
import { Meta } from '@storybook/react';

import { Testimonial } from './Testimonial';

export default {
  component: Testimonial,
  title: 'Blocks/Testimonial',
} as Meta;

const Template = (args) => <Testimonial {...args} />;

const defaultArgs = {
  backgroundColor: 'background-page',
  imageUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
  testimony:
    'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
  testimonyTextVariant: 'text-body-display-M',
  name: 'John Doe',
};

export const WithLegend = Template.bind({});
WithLegend.args = {
  ...defaultArgs,
  legend: 'The universe',
};

export const WithAssociation = Template.bind({});
WithAssociation.args = {
  ...defaultArgs,
  association: 'Composer Studio',
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...defaultArgs,
  link: { children: 'Read more', href: '#' },
};

export const Playground = Template.bind({});
Playground.args = {
  ...defaultArgs,
  legend: 'The universe',
  association: 'Composer Studio',
  link: { children: 'Read more', href: '#' },
};
