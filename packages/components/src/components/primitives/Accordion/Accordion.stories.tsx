import React from 'react';
import { Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { Text, TextPairing, Avatar } from '..';
import { Box, Flex } from '../../layouts';
import { accordionVariants } from './types';

export default {
  component: Accordion,
  title: 'Components/Primitives/Accordion',
  argTypes: {
    variant: {
      options: accordionVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';

const AllTemplate = () => (
  <VStack
    divider={<StackDivider borderColor="gray.200" />}
    spacing={4}
    align="stretch"
  >
    {accordionVariants.map((variant, id) => (
      <Template variant={variant} key={id} />
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const WithImageAndTextPairingTemplate = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Button>
        <Flex flex="1" textAlign="left" alignItems="center">
          <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr={2} />
          <TextPairing
            label="Section 1 title"
            subLabel="Description"
            variant="textpairing-body-medium"
          />
        </Flex>
        <Accordion.Icon />
      </Accordion.Button>
      <Accordion.Panel p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Button>
        <Flex flex="1" textAlign="left" alignItems="center">
          <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr={2} />
          <TextPairing
            label="Section 2 title"
            subLabel="Description"
            variant="textpairing-body-medium"
          />
        </Flex>
        <Accordion.Icon />
      </Accordion.Button>
      <Accordion.Panel p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const WithImageAndTextPairing = WithImageAndTextPairingTemplate.bind({});

const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Button>
        <Box flex="1" textAlign="left">
          <Text variant="text-body-medium">Section 1 title</Text>
        </Box>
        <Accordion.Icon />
      </Accordion.Button>
      <Accordion.Panel p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Button>
        <Box flex="1" textAlign="left">
          <Text variant="text-body-medium">Section 2 title</Text>
        </Box>
        <Accordion.Icon />
      </Accordion.Button>
      <Accordion.Panel p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const Playground = Template.bind({});
