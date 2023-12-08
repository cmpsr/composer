import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { MaskInput } from './MaskInput';
import { inputSizes, inputVariants } from '../Input/types';
import { IconCircleCheckFilled } from '../../media/Icons';

export default {
  component: MaskInput,
  title: 'Components/Form/MaskInput',
  argTypes: {
    variant: {
      options: inputVariants,
      control: { type: 'select' },
    },
    size: {
      options: inputSizes,
      control: { type: 'select' },
    },
    leftLabel: {
      type: { name: 'string', required: false },
    },
    rightLabel: {
      type: { name: 'string', required: false },
    },
  },
} as Meta;

const AllTemplate = () => {
  const states = {
    outline: [
      'default',
      'leadingIcon',
      'bothAddons',
      'leftAddon',
      'rightAddon',
      'filled',
      'disabled',
      'disabled-and-filled',
      'disabled-bothAddons',
      'disabled-leftAddon',
      'disabled-rightAddon',
      'error',
      'error-bothAddons',
      'error-leftAddon',
      'error-rightAddon',
    ],
    flushed: ['default', 'leadingIcon', 'error', 'disabled', 'filled'],
  };
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Variant</Th>
          <Th>State</Th>
          <Th>S</Th>
          <Th>M</Th>
          <Th>L</Th>
        </Tr>
      </Thead>
      <Tbody>
        {inputVariants.map((variant, i) => (
          <Fragment key={i}>
            <Tr>
              <Td rowSpan={16}>{variant}</Td>
            </Tr>
            {states[variant].map((state, i) => (
              <Tr key={`${state}-${i}`}>
                <Td>{state}</Td>
                {inputSizes.map((size, i) => (
                  <Td key={`${variant}-${size}-${i}-${state}`}>
                    <MaskInput
                      variant={variant}
                      size={size}
                      placeholder={state}
                      maskOptions={{
                        mask: /^\$?\d*\.?\d*$/,
                        prefix: '$',
                        postfix: ' USD',
                      }}
                      {...{
                        ...(state === 'disabled' && {
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'disabled-and-filled' && {
                          isDisabled: true,
                          defaultValue: '50',
                        }),
                      }}
                      {...{
                        ...(state === 'error' && {
                          isInvalid: true,
                        }),
                      }}
                      {...{
                        ...(state === 'leadingIcon' && {
                          leadingIcon: <IconCircleCheckFilled />,
                        }),
                      }}
                      {...{
                        ...(state === 'bothAddons' && {
                          leftLabel: 'Label',
                          rightLabel: 'Label',
                        }),
                      }}
                      {...{
                        ...(state === 'leftAddon' && {
                          leftLabel: 'Label',
                        }),
                      }}
                      {...{
                        ...(state === 'rightAddon' && {
                          rightLabel: 'Label',
                        }),
                      }}
                      {...{
                        ...(state === 'filled' && {
                          defaultValue: '50',
                        }),
                      }}
                      {...{
                        ...(state === 'disabled-bothAddons' && {
                          leftLabel: 'Label',
                          rightLabel: 'Label',
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'disabled-leftAddon' && {
                          leftLabel: 'Label',
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'disabled-rightAddon' && {
                          rightLabel: 'Label',
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'error-bothAddons' && {
                          leftLabel: 'Label',
                          rightLabel: 'Label',
                          isInvalid: true,
                        }),
                      }}
                      {...{
                        ...(state === 'error-leftAddon' && {
                          leftLabel: 'Label',
                          isInvalid: true,
                        }),
                      }}
                      {...{
                        ...(state === 'error-rightAddon' && {
                          rightLabel: 'Label',
                          isInvalid: true,
                        }),
                      }}
                    />
                  </Td>
                ))}
              </Tr>
            ))}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export const All = AllTemplate.bind({});

const Template = ({ showLeadingIcon, mask, prefix, postfix, ...args }) => (
  <MaskInput
    maskOptions={{
      mask,
      prefix,
      postfix,
    }}
    {...{
      ...(showLeadingIcon && {
        leadingIcon: <IconCircleCheckFilled />,
      }),
    }}
    {...args}
  />
);

export const Playground = Template.bind({});

Playground.args = {
  variant: 'outline',
  size: 'l',
  leftLabel: '',
  rightLabel: '',
  mask: /^\$?\d*\.?\d*$/,
  postfix: '(%)',
  prefix: '$',
  isInvalid: false,
  isDisabled: false,
  showLeadingIcon: true,
};
