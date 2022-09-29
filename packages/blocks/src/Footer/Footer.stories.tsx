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
      <Footer.Content.ColumnsContainer>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 1</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 2</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 3</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
      </Footer.Content.ColumnsContainer>
      <Footer.Content.CopyGroup flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
        <Text variant="text-body-bold">Title</Text>
        <Text variant="text-body-regular" color="text-secondary">
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </Text>
      </Footer.Content.CopyGroup>
    </Footer.Content>
  </Footer>
);

export const NoCopyGroup = () => (
  <Footer backgroundColor="background-page">
    <Footer.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="4.25rem" />
    <Footer.Content>
      <Footer.Content.ColumnsContainer>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 1</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 2</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
        <Footer.Content.Column>
          <Footer.Content.Column.Title>Group 3</Footer.Content.Column.Title>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
          <Footer.Content.Column.Action href="#">Default Link</Footer.Content.Column.Action>
        </Footer.Content.Column>
      </Footer.Content.ColumnsContainer>
    </Footer.Content>
  </Footer>
);

const Template = ({ backgroundColor, imageProps, bottomContent, linkGroups, showCopyGroup }) => (
  <Footer backgroundColor={backgroundColor}>
    <Footer.Logo {...imageProps} />
    <Footer.Content>
      <Footer.Content.ColumnsContainer>
        {linkGroups.map(({ title, items }, index: number) => (
          <Footer.Content.Column key={index}>
            <Footer.Content.Column.Title>{title}</Footer.Content.Column.Title>
            {items.map((item: LinkProps, index: number) => (
              <Footer.Content.Column.Action key={index} {...item} />
            ))}
          </Footer.Content.Column>
        ))}
      </Footer.Content.ColumnsContainer>
      {showCopyGroup && (
        <Footer.Content.CopyGroup flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
          <Text variant="text-body-bold">Title</Text>
          <Text variant="text-body-regular" color="text-secondary">
            We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
            three ways we could find it.
          </Text>
        </Footer.Content.CopyGroup>
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
