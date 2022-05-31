import React from 'react';
import { Meta } from '@storybook/react';
import { Flex, Button, useBreakpointValue, ButtonSize, Text } from '@cmpsr/components';

import { Navigation } from './Navigation';

export default {
  component: Navigation,
  title: 'Blocks/Navigation',
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template = (args) => {
  const buttonSize = useBreakpointValue({ base: 'l', lg: 'm' }) as ButtonSize;
  return (
    <>
      <Navigation
        {...args}
        actions={
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '1.5rem', lg: '0.75rem' }}
            pt={{ base: '7rem', md: '5.75rem', lg: 0 }}
          >
            <Button variant="primary" size={buttonSize}>
              Default
            </Button>
            <Button variant="primary-alt" size={buttonSize}>
              Default
            </Button>
          </Flex>
        }
      />
      {Array(50).fill(
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat velit ut mollis malesuada. Integer
          molestie in dolor cursus tristique. Nullam est tortor, dapibus sed sem eget, pellentesque vehicula felis.
          Vestibulum sit amet dui lorem. Nam enim magna, rutrum et turpis a, sollicitudin vehicula orci. Pellentesque
          dapibus pulvinar sapien, eu mattis lorem eleifend sed. Nullam volutpat ligula vitae bibendum pharetra.
          Phasellus pharetra vel eros vel lacinia.
        </Text>
      )}
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  anchors: Array(5).fill({ label: 'Default Link', href: '#' }),
  logoUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
  sticky: false,
};
