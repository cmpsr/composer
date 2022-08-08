import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { MediaBlock, mediaBlockVariants } from '.';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';

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

export const AllTemplate = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
        <Th>Content alignment</Th>
      </Tr>
    </Thead>
    <Tbody>
      {mediaBlockVariants.map((variant, index) => (
        <Fragment key={index}>
          {alignments.map((alignment) => (
            <Tr key={variant + alignment}>
              <Td>{variant}</Td>
              <Td>
                <MediaBlock variant={variant} alignItems={alignment}>
                  <MediaBlock.TextPairing variant="textpairing-header-M">
                    <MediaBlock.TextPairing.Label textTransform="capitalize">{alignment}</MediaBlock.TextPairing.Label>
                    <MediaBlock.TextPairing.SubLabel children={`${variant} - ${alignment}`} />
                  </MediaBlock.TextPairing>
                  <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width="100px" />
                </MediaBlock>
              </Td>
            </Tr>
          ))}
        </Fragment>
      ))}
      {alignments.map((alignment) => (
        <Tr key={'horizontal' + alignment}>
          <Td>{'horizontal space between'}</Td>
          <Td>
            <MediaBlock variant={'horizontal'} alignItems={alignment} justifyContent="space-between">
              <MediaBlock.TextPairing variant="textpairing-header-M">
                <MediaBlock.TextPairing.Label textTransform="capitalize">{alignment}</MediaBlock.TextPairing.Label>
                <MediaBlock.TextPairing.SubLabel children={`horizontal - ${alignment}`} />
              </MediaBlock.TextPairing>
              <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width="100px" />
            </MediaBlock>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = ({ variant, label, subLabel, imageWidth, contentAlignment, spaceBetween }) => (
  <MediaBlock
    variant={variant}
    alignItems={contentAlignment}
    justifyContent={spaceBetween ? 'space-between' : undefined}
  >
    <MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" width={imageWidth} />
    <MediaBlock.TextPairing variant="textpairing-header-M">
      <MediaBlock.TextPairing.Label>{label}</MediaBlock.TextPairing.Label>
      <MediaBlock.TextPairing.SubLabel>{subLabel}</MediaBlock.TextPairing.SubLabel>
    </MediaBlock.TextPairing>
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
