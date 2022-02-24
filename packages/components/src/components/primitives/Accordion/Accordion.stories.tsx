import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Flex, Text, TextPairing, Avatar, Accordion } from '@components';

export default {
  component: Accordion,
  title: 'Components/Primitives/Accordion',
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

const AcordionItem = ({ highlight = false, showMediaItem = true, showTextPairing = true, index }) => (
  <Accordion.Item>
    <Accordion.Button highlight={highlight}>
      <Flex flex="1" textAlign="left" alignItems="center" mr="1.063rem">
        {showMediaItem && <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr="1.25rem" />}
        {showTextPairing ? (
          <TextPairing
            label={`Section ${index} title`}
            labelColor="text-primary"
            subLabel="Description"
            subLabelColor="text-secondary"
            variant="textpairing-body-medium-meta"
          />
        ) : (
          <Box flex="1" textAlign="left">
            <Text variant="text-body-medium">Section {index} title</Text>
          </Box>
        )}
      </Flex>
      <Accordion.Icon />
    </Accordion.Button>
    <AccordionPanel />
  </Accordion.Item>
);

const generateAcordionItems = ({ numOfItems = 2, ...rest }) => {
  return Array.from(Array(numOfItems)).map((_, index) => <AcordionItem key={index} index={index + 1} {...rest} />);
};

export const WithImageAndTextPairing = () => <Accordion>{generateAcordionItems({})}</Accordion>;

export const BackgroundHighlight = () => (
  <Accordion>{generateAcordionItems({ highlight: true, showMediaItem: false, showTextPairing: false })}</Accordion>
);

const Template = ({ indexberOfItems, ...rest }) => (
  <Accordion>{generateAcordionItems({ numOfItems: indexberOfItems, ...rest })}</Accordion>
);

export const Playground = Template.bind({});
Playground.args = {
  highlight: true,
  showMediaItem: true,
  showTextPairing: true,
  indexberOfItems: 5,
};
