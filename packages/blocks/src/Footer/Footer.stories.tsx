import React from 'react';
import { Meta } from '@storybook/react';
import { LinkProps, Text } from '@cmpsr/components';

import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'Blocks/Footer',
} as Meta;

export const NoBottomContent = () => (
  <Footer backgroundColor="background-page">
    <Footer.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="4.25rem" />
    <Footer.Content>
      <Footer.ActionsContainer>
        <Footer.Actions title="Group 1">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
        <Footer.Actions title="Group 2">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
        <Footer.Actions title="Group 3">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
      </Footer.ActionsContainer>
      <Footer.CopyGroup flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
        <Text variant="text-body-bold">Title</Text>
        <Text variant="text-body-regular" color="text-secondary">
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </Text>
      </Footer.CopyGroup>
    </Footer.Content>
  </Footer>
);

export const NoCopyGroup = () => (
  <Footer backgroundColor="background-page">
    <Footer.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="4.25rem" />
    <Footer.Content>
      <Footer.ActionsContainer>
        <Footer.Actions title="Group 1">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
        <Footer.Actions title="Group 2">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
        <Footer.Actions title="Group 3">
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
          <Footer.Action href="#">Default Link</Footer.Action>
        </Footer.Actions>
      </Footer.ActionsContainer>
    </Footer.Content>
  </Footer>
);

const Template = ({ backgroundColor, imageProps, bottomContent, linkGroups, showCopyGroup }) => (
  <Footer backgroundColor={backgroundColor}>
    <Footer.Logo {...imageProps} />
    <Footer.Content>
      <Footer.ActionsContainer>
        {linkGroups.map(({ title, items }, index: number) => (
          <Footer.Actions key={index} title={title}>
            {items.map((item: LinkProps, index: number) => (
              <Footer.Action key={index} {...item} />
            ))}
          </Footer.Actions>
        ))}
      </Footer.ActionsContainer>
      {showCopyGroup && (
        <Footer.CopyGroup flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
          <Text variant="text-body-bold">Title</Text>
          <Text variant="text-body-regular" color="text-secondary">
            We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
            three ways we could find it.
          </Text>
        </Footer.CopyGroup>
      )}
    </Footer.Content>
    <Footer.Bottom>{bottomContent}</Footer.Bottom>
  </Footer>
);

export const Playground = Template.bind({});
Playground.args = {
  backgroundColor: 'background-page',
  imageProps: { src: 'https://avatars0.githubusercontent.com/u/67131017?s=200', maxWidth: '4.25rem' },
  bottomContent: 'Bottom content',
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
  showCopyGroup: true,
};
