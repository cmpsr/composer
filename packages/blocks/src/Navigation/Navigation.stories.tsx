import React from 'react';
import { Meta } from '@storybook/react';
import { Flex, Text } from '@cmpsr/components';

import { Navigation } from './Navigation';

export default {
  component: Navigation,
  title: 'Blocks/Navigation',
  parameters: { layout: 'fullscreen' },
} as Meta;

export const Sticky = () => (
  <>
    <Navigation sticky>
      <Navigation.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" href="#" />
      <Navigation.Links>
        <Navigation.Link href="#" showDivider>
          Default Link
        </Navigation.Link>
        <Navigation.Link href="#" showDivider>
          Default Link
        </Navigation.Link>
        <Navigation.Link href="#" showDivider>
          Default Link
        </Navigation.Link>
        <Navigation.Link href="#" showDivider>
          Default Link
        </Navigation.Link>
        <Navigation.Link href="#">Default Link</Navigation.Link>
      </Navigation.Links>
      <Navigation.Actions>
        <Navigation.Action variant="primary">Default</Navigation.Action>
        <Navigation.Action variant="primary-alt">Default</Navigation.Action>
      </Navigation.Actions>
    </Navigation>
    <Flex maxWidth="48rem" flexDirection="column" margin="0 auto" gap="1rem" p="spacer-12">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <Text key={index} variant="text-body-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat velit ut mollis malesuada. Integer
            molestie in dolor cursus tristique. Nullam est tortor, dapibus sed sem eget, pellentesque vehicula felis.
            Vestibulum sit amet dui lorem. Nam enim magna, rutrum et turpis a, sollicitudin vehicula orci. Pellentesque
            dapibus pulvinar sapien, eu mattis lorem eleifend sed. Nullam volutpat ligula vitae bibendum pharetra.
            Phasellus pharetra vel eros vel lacinia.
          </Text>
        ))}
    </Flex>
  </>
);

const Template = ({ anchors, logoUrl, logoHref, sticky }) => (
  <>
    <Navigation sticky={sticky}>
      <Navigation.Logo src={logoUrl} href={logoHref} />
      <Navigation.Links>
        {anchors.map(({ label, href }, index: number) => (
          <Navigation.Link key={index} href={href}>
            {label}
          </Navigation.Link>
        ))}
      </Navigation.Links>
      <Navigation.Actions>
        <Navigation.Action variant="primary">Default</Navigation.Action>
        <Navigation.Action variant="primary-alt">Default</Navigation.Action>
      </Navigation.Actions>
    </Navigation>
    <Flex maxWidth="48rem" flexDirection="column" margin="0 auto" gap="1rem" p="spacer-12">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <Text key={index} variant="text-body-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat velit ut mollis malesuada. Integer
            molestie in dolor cursus tristique. Nullam est tortor, dapibus sed sem eget, pellentesque vehicula felis.
            Vestibulum sit amet dui lorem. Nam enim magna, rutrum et turpis a, sollicitudin vehicula orci. Pellentesque
            dapibus pulvinar sapien, eu mattis lorem eleifend sed. Nullam volutpat ligula vitae bibendum pharetra.
            Phasellus pharetra vel eros vel lacinia.
          </Text>
        ))}
    </Flex>
  </>
);

export const Playground = Template.bind({});
Playground.args = {
  anchors: Array(5).fill({ label: 'Default Link', href: '#' }),
  logoUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
  logoHref: '#',
  sticky: false,
};
