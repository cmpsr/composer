import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
    defaultValue: {
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
  },
} as Meta;

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
                      defaultValue="facebook"
                      onChange={console.log}
                      {...(state === 'Disabled' && { isDisabled: true })}
                    >
                      <SegmentedButton.Icon value="facebook" icon={<Icons.IconBrandFacebook />} />
                      <SegmentedButton.Icon value="instagram" icon={<Icons.IconBrandInstagram />} />
                      <SegmentedButton.Icon value="linkedin" icon={<Icons.IconBrandLinkedin />} />
                      <SegmentedButton.Icon value="twitter" icon={<Icons.IconBrandTwitter />} />
                      <SegmentedButton.Icon value="brandX" icon={<Icons.IconBrandX />} />
                    </SegmentedButton>

                    <SegmentedButton
                      size={size}
                      variant={variant}
                      defaultValue="1"
                      onChange={console.log}
                      {...(state === 'Disabled' && { isDisabled: true })}
                    >
                      <SegmentedButton.Button value="1" leadingIcon={<Icons.IconExternalLink />}>
                        Text
                      </SegmentedButton.Button>
                      <SegmentedButton.Button value="2">Text</SegmentedButton.Button>
                      <SegmentedButton.Button
                        value="3"
                        leadingIcon={<Icons.IconAlertTriangle />}
                        trailingIcon={<Icons.IconAlertTriangle />}
                      >
                        Text
                      </SegmentedButton.Button>
                      <SegmentedButton.Button value="4" trailingIcon={<Icons.IconFilter />}>
                        Text
                      </SegmentedButton.Button>
                    </SegmentedButton>
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

const Template = (props) => (
  <SegmentedButton {...props} key={props.defaultValue}>
    <SegmentedButton.Button value="1" leadingIcon={<Icons.IconExternalLink />}>
      Text
    </SegmentedButton.Button>
    <SegmentedButton.Button value="2">Text</SegmentedButton.Button>
    <SegmentedButton.Button
      value="3"
      leadingIcon={<Icons.IconAlertTriangle />}
      trailingIcon={<Icons.IconAlertTriangle />}
    >
      Text
    </SegmentedButton.Button>
    <SegmentedButton.Button value="4" trailingIcon={<Icons.IconFilter />}>
      Text
    </SegmentedButton.Button>
  </SegmentedButton>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 's',
  isDisabled: false,
  defaultValue: '1',
  onChange: (value) => console.log(value),
};
