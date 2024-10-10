import React from 'react';
import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { IconAlertCircle } from '@components';
import { tagSizes, tagVariants } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: Tag,
  title: 'Components/Data Display/Tag',
  argTypes: {
    size: {
      options: tagSizes,
      control: { type: 'select' },
    },
    variant: {
      options: tagVariants,
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
        <Th>Variant</Th>
        {tagSizes.map((size) => (
          <Th key={size}>{size.toUpperCase()}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {tagVariants.map((variant) => (
        <Tr key={variant}>
          <Td>{variant.toUpperCase()}</Td>
          {tagSizes.map((size) => (
            <Td key={`${variant}-${size}`}>
              <Tag size={size} variant={variant}>
                <Tag.LeftIcon as={IconAlertCircle} />
                <Tag.Label>Hello</Tag.Label>
              </Tag>
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = ({ showIcon, iconPosition, status, label, ...args }) => (
  <Tag {...args}>
    {showIcon && iconPosition === 'left' && <Tag.LeftIcon as={IconAlertCircle} />}
    <Tag.Label>{label}</Tag.Label>
    {showIcon && iconPosition === 'right' && <Tag.RightIcon as={IconAlertCircle} />}
  </Tag>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  variant: 'subtle',
  label: 'Hello',
  iconPosition: 'left',
  showIcon: true,
  isDisabled: false,
};
