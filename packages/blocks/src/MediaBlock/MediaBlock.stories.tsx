import React from 'react';
import { Meta } from '@storybook/react';
import { MediaBlock, mediaBlockVariants } from '.';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { IconChevronRight } from '@cmpsr/components';

const alignments = ['start', 'center', 'end'] as const;

export default {
  component: MediaBlock,
  title: 'Blocks/MediaBlock',
  argTypes: {
    variant: {
      options: mediaBlockVariants,
      control: { type: 'select' },
    },
    contentAlignment: {
      options: alignments,
      control: { type: 'select' },
    },
  },
} as Meta;

export const AllVertical = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Content alignment</Th>
      </Tr>
    </Thead>
    <Tbody>
      {alignments.map((alignment) => (
        <Tr key={'vertical' + alignment}>
          <Td>
            <MediaBlock variant="vertical" alignItems={alignment}>
              <MediaBlock.Title variant="textpairing-header-M">
                <MediaBlock.Title.Label textTransform="capitalize">{alignment}</MediaBlock.Title.Label>
                <MediaBlock.Title.SubLabel children={`vertical - ${alignment}`} />
              </MediaBlock.Title>
              <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width="100px" />
              <MediaBlock.Tag size="s">
                <MediaBlock.Tag.Label>Tag</MediaBlock.Tag.Label>
              </MediaBlock.Tag>
              <MediaBlock.Action href="#" size="s">
                Link
              </MediaBlock.Action>
            </MediaBlock>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export const Horizontal = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Content alignment</Th>
      </Tr>
    </Thead>
    <Tbody>
      {alignments.map((alignment) => (
        <Tr key={'horizontal' + alignment}>
          <Td>
            <MediaBlock variant="horizontal" alignItems={alignment} justifyContent="space-between">
              <MediaBlock.Title variant="textpairing-header-M">
                <MediaBlock.Title.Label textTransform="capitalize">{alignment}</MediaBlock.Title.Label>
                <MediaBlock.Title.SubLabel children={`horizontal - ${alignment}`} />
              </MediaBlock.Title>
              <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width="100px" />
            </MediaBlock>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export const ColumnLayout = () => (
  <MediaBlock variant="vertical" alignItems="start" maxWidth="240px">
    <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width="100px" />
    <MediaBlock.Tag size="s">
      <MediaBlock.Tag.Label>News</MediaBlock.Tag.Label>
    </MediaBlock.Tag>
    <MediaBlock.Overline>Breaking news</MediaBlock.Overline>
    <MediaBlock.Title variant="textpairing-header-M">
      <MediaBlock.Title.Label>There is life elsewhere in the universe</MediaBlock.Title.Label>
      <MediaBlock.Title.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </MediaBlock.Title.SubLabel>
    </MediaBlock.Title>
    <MediaBlock.Action href="#" size="s" trailingIcon={<IconChevronRight />}>
      Find a spaceship
    </MediaBlock.Action>
  </MediaBlock>
);

const Template = ({ variant, label, subLabel, imageWidth, contentAlignment, spaceBetween }) => (
  <MediaBlock
    variant={variant}
    alignItems={contentAlignment}
    justifyContent={spaceBetween ? 'space-between' : undefined}
  >
    <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width={imageWidth} />
    <MediaBlock.Title variant="textpairing-header-M">
      <MediaBlock.Title.Label>{label}</MediaBlock.Title.Label>
      <MediaBlock.Title.SubLabel>{subLabel}</MediaBlock.Title.SubLabel>
    </MediaBlock.Title>
  </MediaBlock>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'horizontal',
  label: 'Introducing Composer',
  subLabel:
    'The most advanced web and landing page builder for non-programmers that helps you to speed up your digital production processes',
  imageWidth: '60px',
  contentAlignment: 'start',
  spaceBetween: false,
};
