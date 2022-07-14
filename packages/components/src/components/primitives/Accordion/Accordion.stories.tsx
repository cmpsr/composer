import React from 'react';
import { Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import { Text, TextPairing, Avatar } from '..';
import { Box, Flex } from '../../layouts';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: Accordion,
  title: 'Components/Primitives/Accordion',
  parameters: getFigmaDesignLink('accordion'),
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';

const AccordionPanel = () =>
  (
    <Accordion.Panel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </Accordion.Panel>
  ) as JSX.Element;

export const WithImageAndTextPairing = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Button>
        <Flex flex="1" textAlign="left" alignItems="center">
          <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr={2} />
          <TextPairing variant="textpairing-body-medium">
            <TextPairing.Label children="Section 1 title" />
            <TextPairing.SubLabel children="Description" />
          </TextPairing>
        </Flex>
        <Accordion.Icon />
      </Accordion.Button>
      <AccordionPanel />
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Button>
        <Flex flex="1" textAlign="left" alignItems="center">
          <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr={2} />
          <TextPairing variant="textpairing-body-medium">
            <TextPairing.Label children="Section 2 title" />
            <TextPairing.SubLabel children="Description" />
          </TextPairing>
        </Flex>
        <Accordion.Icon />
      </Accordion.Button>
      <AccordionPanel />
    </Accordion.Item>
  </Accordion>
);

export const BackgroundHighlight = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Button highlight>
        <Box flex="1" textAlign="left">
          <Text variant="text-body-medium">Section 1 title</Text>
        </Box>
        <Accordion.Icon />
      </Accordion.Button>
      <AccordionPanel />
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Button highlight>
        <Box flex="1" textAlign="left">
          <Text variant="text-body-medium">Section 2 title</Text>
        </Box>
        <Accordion.Icon />
      </Accordion.Button>
      <AccordionPanel />
    </Accordion.Item>
  </Accordion>
);

const Template = (args) => (
  <Accordion>
    {Array(args.numberOfItems)
      .fill('')
      .map((_, i) => (
        <Accordion.Item key={i}>
          <Accordion.Button highlight={args.highlight}>
            <Flex flex="1" textAlign="left" alignItems="center">
              {args.showMediaItem && <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr={2} />}
              {args.showTextPairing ? (
                <TextPairing variant="textpairing-body-medium">
                  <TextPairing.Label children={`Section ${i} title`} />
                  <TextPairing.SubLabel children="Description" />
                </TextPairing>
              ) : (
                <Box flex="1" textAlign="left">
                  <Text variant="text-body-medium">Section {i} title</Text>
                </Box>
              )}
            </Flex>
            <Accordion.Icon />
          </Accordion.Button>
          <AccordionPanel />
        </Accordion.Item>
      ))}
  </Accordion>
);

export const Playground = Template.bind({});
Playground.args = {
  highlight: true,
  showMediaItem: true,
  showTextPairing: true,
  numberOfItems: 5,
};
