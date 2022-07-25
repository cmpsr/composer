import React from 'react';
import { Meta } from '@storybook/react';

import { Testimonial } from './Testimonial';

export default {
  component: Testimonial,
  title: 'Blocks/Testimonial',
} as Meta;

export const WithLegend = () => (
  <Testimonial
    legend="The universe"
    backgroundColor="background-page"
    testimony="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    testimonyTextVariant="text-body-display-M"
    name="John Doe"
  >
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
  </Testimonial>
);

export const WithAssociation = () => (
  <Testimonial
    backgroundColor="background-page"
    testimony="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    testimonyTextVariant="text-body-display-M"
    name="John Doe"
    association="Composer Studio"
  >
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
  </Testimonial>
);

export const WithLink = () => (
  <Testimonial
    backgroundColor="background-page"
    testimony="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    testimonyTextVariant="text-body-display-M"
    name="John Doe"
    link={{ children: 'Read more', href: '#' }}
  >
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
  </Testimonial>
);

const Template = ({ backgroundColor, imageUrl, testimony, testimonyTextVariant, name, legend, association, link }) => (
  <Testimonial
    backgroundColor={backgroundColor}
    testimony={testimony}
    testimonyTextVariant={testimonyTextVariant}
    name={name}
    legend={legend}
    association={association}
    link={link}
  >
    <Testimonial.Image src={imageUrl} />
  </Testimonial>
);

export const Playground = Template.bind({});
Playground.args = {
  backgroundColor: 'background-page',
  imageUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
  testimony:
    'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
  testimonyTextVariant: 'text-body-display-M',
  name: 'John Doe',
  legend: 'The universe',
  association: 'Composer Studio',
  link: { children: 'Read more', href: '#' },
};
