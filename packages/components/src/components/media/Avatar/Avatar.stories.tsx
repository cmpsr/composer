import React from 'react';
import { Meta } from '@storybook/react';
import { Avatar, AvatarProps, avatarSizes } from '.';
import { Box, Flex } from '@components';

export default {
  component: Avatar,
  title: 'Components/Media/Avatar',
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';

const WithoutImageTemplate = () => (
  <Flex>
    {avatarSizes.map((size) => (
      <Avatar name="Composer Logo" key={size} size={size} marginRight="spacer-4" />
    ))}
  </Flex>
);
export const WithoutImage = WithoutImageTemplate.bind({});

const WithBadgeTemplate = () => (
  <Flex direction="column">
    {avatarSizes.map((size) => (
      <Flex marginBottom="spacer-4" key={size}>
        <Box marginRight="spacer-4">
          <Avatar name="Composer Logo" size={size} showBadge />
        </Box>
        <Box>
          <Avatar name="Composer Logo" src={AVATAR_URL} size={size} showBadge />
        </Box>
      </Flex>
    ))}
  </Flex>
);
export const WithBadge = WithBadgeTemplate.bind({});

const Template = (args: AvatarProps) => <Avatar {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  src: AVATAR_URL,
  name: 'Composer Logo',
  size: 'm',
  showBadge: true,
};
