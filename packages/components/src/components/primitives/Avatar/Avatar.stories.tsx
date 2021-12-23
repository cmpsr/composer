import React from 'react';
import { Meta } from '@storybook/react';
import { Avatar } from './Avatar';
import { Box, Flex, Text } from 'components';

export default {
  component: Avatar,
  title: 'Components/Primitives/Avatar',
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';

const WithoutImageTemplate = (args) => <Avatar {...args} />;
export const WithoutImage = WithoutImageTemplate.bind({});
WithoutImage.args = {
  name: 'Composer Logo',
  backgroundColor: 'accent-default',
  textColor: 'text-primary',
};

const WithBadgeTemplate = (args) => (
  <Flex>
    <Box marginRight="spacer-4">
      <Avatar {...args}>
        <Avatar.Badge boxSize="1.25em" bg="accent-default">
          <Text variant="text-body-floating-label-regular">1</Text>
        </Avatar.Badge>
      </Avatar>
    </Box>
    <Box>
      <Avatar {...args} src={AVATAR_URL}>
        <Avatar.Badge boxSize="1.25em" bg="accent-default">
          <Text variant="text-body-floating-label-regular">1</Text>
        </Avatar.Badge>
      </Avatar>
    </Box>
  </Flex>
);
export const WithBadge = WithBadgeTemplate.bind({});
WithBadge.args = {
  name: 'Composer Logo',
  backgroundColor: 'accent-focus',
  textColor: 'text-primary',
};

const Template = (args) => <Avatar {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  src: AVATAR_URL,
  name: 'Composer Logo',
  backgroundColor: 'accent-default',
  textColor: 'text-primary',
};
