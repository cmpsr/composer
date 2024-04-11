import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { Flex, SegmentedButton } from '@components';
import { Meta } from '@storybook/react';
import React, { Fragment } from 'react';
import * as Icons from '../../media/Icons';
import { segmentedButtonSizes, segmentedButtonVariants } from './types';

export default {
  component: SegmentedButton,
  title: 'Components/Form/SegmentedButton',
  argTypes: {
    size: {
      options: segmentedButtonSizes,
      control: { type: 'select' },
    },
    variant: {
      options: segmentedButtonVariants,
      control: { type: 'select' },
    },
    defaultOption: {
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
  },
} as Meta;

const optionsButton = [
  {
    value: '1',
    segment: <SegmentedButton.Button leadingIcon={<Icons.IconExternalLink />}>Text</SegmentedButton.Button>,
  },
  { value: '2', segment: <SegmentedButton.Button>Text</SegmentedButton.Button> },
  {
    value: '3',
    segment: (
      <SegmentedButton.Button leadingIcon={<Icons.IconAlertTriangle />} trailingIcon={<Icons.IconAlertTriangle />}>
        Text
      </SegmentedButton.Button>
    ),
  },
  { value: '4', segment: <SegmentedButton.Button trailingIcon={<Icons.IconFilter />}>Text</SegmentedButton.Button> },
];

const optionsIcon = [
  {
    value: 'facebook',
    segment: <SegmentedButton.Icon icon={<Icons.IconBrandFacebook />} />,
  },
  { value: 'instagram', segment: <SegmentedButton.Icon icon={<Icons.IconBrandInstagram />} /> },
  { value: 'linkedin', segment: <SegmentedButton.Icon icon={<Icons.IconBrandLinkedin />} /> },
  { value: 'twitter', segment: <SegmentedButton.Icon icon={<Icons.IconBrandTwitter />} /> },
  { value: 'brandX', segment: <SegmentedButton.Icon icon={<Icons.IconBrandX />} /> },
];

const AllTemplate = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variants</Th>
        <Th>State</Th>
        <Th>XS</Th>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {segmentedButtonVariants.map((variant, i) => (
        <Fragment key={i}>
          {['Default', 'Disabled'].map((state, i) => (
            <Tr key={`${state}-${i}`}>
              <Td>{variant}</Td>
              <Td>{state}</Td>
              {segmentedButtonSizes.map((size, i) => (
                <Td key={`${variant}-${state}-${size}-${i}-icon`}>
                  <Flex flexDirection="column" alignItems="start" gap="5">
                    <SegmentedButton
                      size={size}
                      variant={variant}
                      options={optionsIcon}
                      defaultOption={'facebook'}
                      onChange={(value) => console.log(value)}
                      {...(state === 'Disabled' && { isDisabled: true })}
                    />

                    <SegmentedButton
                      size={size}
                      variant={variant}
                      options={optionsButton}
                      defaultOption={'1'}
                      onChange={(value) => console.log(value)}
                      {...(state === 'Disabled' && { isDisabled: true })}
                    />
                  </Flex>
                </Td>
              ))}
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);
export const All = AllTemplate.bind({});

const Template = (props) => <SegmentedButton {...props} key={props.defaultOption} options={optionsButton} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 's',
  isDisabled: false,
  defaultOption: '1',
};
