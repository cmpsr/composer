import React from 'react';
import { Meta } from '@storybook/react';
import { Link, textVariants } from '@cmpsr/components';

import { Testimonial } from './Testimonial';

export default {
  component: Testimonial,
  title: 'Blocks/Testimonial',
  argTypes: {
    testimonyTextVariant: {
      options: textVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

export const WithLegend = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Testimonial.Legend>The universe</Testimonial.Legend>
      <Testimonial.Testimony variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Testimonial.Testimony>
      <Testimonial.Author>John Doe</Testimonial.Author>
    </Testimonial.Content>
  </Testimonial>
);

export const WithAssociation = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Testimonial.Testimony variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Testimonial.Testimony>
      <Testimonial.Author>
        John Doe
        <Testimonial.Author.Association>Composer Studio</Testimonial.Author.Association>
      </Testimonial.Author>
    </Testimonial.Content>
  </Testimonial>
);

export const WithLink = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Testimonial.Testimony variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Testimonial.Testimony>
      <Testimonial.Author>John Doe</Testimonial.Author>
      <Link target="_blank" size="s" href="#">
        Read more
      </Link>
    </Testimonial.Content>
  </Testimonial>
);

const Template = ({ backgroundColor, imageUrl, testimony, testimonyTextVariant, name, legend, association, link }) => (
  <Testimonial backgroundColor={backgroundColor}>
    <Testimonial.Image src={imageUrl} />
    <Testimonial.Content>
      {legend && <Testimonial.Legend>{legend}</Testimonial.Legend>}
      <Testimonial.Testimony variant={testimonyTextVariant}>{testimony}</Testimonial.Testimony>
      <Testimonial.Author>
        {name}
        {association && <Testimonial.Author.Association>{association}</Testimonial.Author.Association>}
      </Testimonial.Author>
      {link && <Link target="_blank" size="s" {...link} />}
    </Testimonial.Content>
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
