import React from 'react';
import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { IconAlertCircle } from '@components';
import { tagSizes } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: Tag,
  title: 'Components/Data Display/Tag',
  argTypes: {
    size: {
      options: tagSizes,
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Size</Th>
        <Th>Label only</Th>
        <Th>With left icon</Th>
        <Th>With right Icon</Th>
      </Tr>
    </Thead>
    <Tbody>
      {tagSizes.map((size) => (
        <Tr key="size">
          <Td>{size.toUpperCase()}</Td>
          <Td>
            <Tag size={size}>
              <Tag.Label>Hello</Tag.Label>
            </Tag>
          </Td>
          <Td>
            <Tag size={size}>
              <Tag.LeftIcon as={IconAlertCircle} />
              <Tag.Label>Hello</Tag.Label>
            </Tag>
          </Td>
          <Td>
            <Tag size={size}>
              <Tag.Label>Hello</Tag.Label>
              <Tag.RightIcon as={IconAlertCircle} />
            </Tag>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = ({ showIcon, iconPosition, label, ...args }) => (
  <Tag {...args}>
    {showIcon && iconPosition === 'left' && <Tag.LeftIcon as={IconAlertCircle} />}
    <Tag.Label>{label}</Tag.Label>
    {showIcon && iconPosition === 'right' && <Tag.RightIcon as={IconAlertCircle} />}
  </Tag>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  label: 'Hello',
  iconPosition: 'left',
  showIcon: true,
  isDisabled: false,
};
