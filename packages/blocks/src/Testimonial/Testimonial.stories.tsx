import React from 'react';
import { Meta } from '@storybook/react';
import { Divider, Flex, Link, Text } from '@cmpsr/components';

import { Testimonial } from './Testimonial';

export default {
  component: Testimonial,
  title: 'Blocks/Testimonial',
} as Meta;

export const WithLegend = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
        <Text as="h3" variant={{ base: 'text-header-S', lg: 'text-header-XS' }}>
          The universe
        </Text>
        <Divider />
      </Flex>
      <Text variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Text>
      <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
        <Text variant="text-body-medium">John Doe</Text>
      </Flex>
    </Testimonial.Content>
  </Testimonial>
);

export const WithAssociation = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Text variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Text>
      <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
        <Text variant="text-body-medium">John Doe</Text>
        <Flex gap={{ base: '0.5rem' }}>
          <Divider orientation="vertical" />
          <Text variant="text-body-regular" color="text-secondary">
            Composer Studio
          </Text>
        </Flex>
      </Flex>
    </Testimonial.Content>
  </Testimonial>
);

export const WithLink = () => (
  <Testimonial>
    <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
    <Testimonial.Content>
      <Text variant="text-body-display-M">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Text>
      <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
        <Text variant="text-body-medium">John Doe</Text>
      </Flex>
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
      {legend && (
        <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
          <Text as="h3" variant={{ base: 'text-header-S', lg: 'text-header-XS' }}>
            {legend}
          </Text>
          <Divider />
        </Flex>
      )}
      <Text variant={testimonyTextVariant ?? { base: 'text-body-display-M', lg: 'text-body-display-L' }}>
        {testimony}
      </Text>
      <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
        <Text variant="text-body-medium">{name}</Text>
        {association && (
          <Flex gap={{ base: '0.5rem' }}>
            <Divider orientation="vertical" />
            <Text variant="text-body-regular" color="text-secondary">
              {association}
            </Text>
          </Flex>
        )}
      </Flex>
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
