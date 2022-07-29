import React from 'react';
import { Meta } from '@storybook/react';
import { Flex, LinkProps, Text } from '@cmpsr/components';

import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'Blocks/Footer',
} as Meta;

export const NoBottomContent = () => (
  <Footer backgroundColor="background-page">
    <Footer.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="4.25rem" />
    <Footer.Content>
      <Footer.Content.Links>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 1</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 2</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 3</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
      </Footer.Content.Links>
      {/** Copy Group */}
      <Flex flexDirection="column" gap="1.25rem" maxWidth={{ lg: '27.625rem' }}>
        <Text variant="text-body-bold">Title</Text>
        <Text variant="text-body-regular" color="text-secondary">
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </Text>
      </Flex>
    </Footer.Content>
  </Footer>
);

export const NoCopyGroup = () => (
  <Footer backgroundColor="background-page">
    <Footer.Logo src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="4.25rem" />
    <Footer.Content>
      <Footer.Content.Links>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 1</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 2</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
        <Footer.Content.LinkGroup>
          <Footer.Content.LinkGroup.Title>Group 3</Footer.Content.LinkGroup.Title>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
          <Footer.Content.LinkGroup.Link href="#">Default Link</Footer.Content.LinkGroup.Link>
        </Footer.Content.LinkGroup>
      </Footer.Content.Links>
    </Footer.Content>
  </Footer>
);

const Template = ({ backgroundColor, imageProps, bottomContent, linkGroups, copyGroup }) => (
  <Footer backgroundColor={backgroundColor}>
    <Footer.Logo {...imageProps} />
    <Footer.Content>
      <Footer.Content.Links>
        {linkGroups.map(({ title, items }, index: number) => (
          <Footer.Content.LinkGroup key={index}>
            <Footer.Content.LinkGroup.Title>{title}</Footer.Content.LinkGroup.Title>
            {items.map((item: LinkProps) => (
              <Footer.Content.LinkGroup.Link {...item} />
            ))}
          </Footer.Content.LinkGroup>
        ))}
      </Footer.Content.Links>
      {copyGroup}
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
