import React from 'react';
import { Meta } from '@storybook/react';
import { Flex, Text } from '@cmpsr/components';

import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'Blocks/Footer',
} as Meta;

export const NoBottomContent = () => (
  <Footer
    backgroundColor="background-page"
    imageProps={{ src: 'https://avatars0.githubusercontent.com/u/67131017?s=200', maxWidth: '4.25rem' }}
    copyGroup={
      <Flex flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
        <Text variant="text-body-bold">Title</Text>
        <Text variant="text-body-regular" color="text-secondary">
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </Text>
      </Flex>
    }
    linkGroups={[
      {
        title: 'Group 1',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 2',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 3',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
    ]}
  />
);

export const NoCopyGroup = () => (
  <Footer
    backgroundColor="background-page"
    imageProps={{ src: 'https://avatars0.githubusercontent.com/u/67131017?s=200', maxWidth: '4.25rem' }}
    linkGroups={[
      {
        title: 'Group 1',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 2',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 3',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
    ]}
  />
);

const Template = ({ backgroundColor, imageProps, bottomContent, linkGroups, copyGroup }) => (
  <Footer
    backgroundColor={backgroundColor}
    imageProps={imageProps}
    bottomContent={bottomContent}
    linkGroups={linkGroups}
    copyGroup={copyGroup}
  />
);

export const Playground = Template.bind({});
Playground.args = {
  backgroundColor: 'background-page',
  imageProps: { src: 'https://avatars0.githubusercontent.com/u/67131017?s=200', maxWidth: '4.25rem' },
  bottomContent: <span>Bottom content</span>,
  linkGroups: [
    {
      title: 'Group 1',
      items: [
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
      ],
    },
    {
      title: 'Group 2',
      items: [
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
      ],
    },
    {
      title: 'Group 3',
      items: [
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
        { children: 'Default Link', href: '#' },
      ],
    },
  ],
  copyGroup: (
    <Flex flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
      <Text variant="text-body-bold">Title</Text>
      <Text variant="text-body-regular" color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </Text>
    </Flex>
  ),
};
