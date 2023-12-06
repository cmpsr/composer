import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { PhoneInput } from './PhoneInput';
import { inputSizes, inputVariants } from '../Input/types';
import { IconPhone } from '../../media/Icons';

export default {
  component: PhoneInput,
  title: 'Components/Form/PhoneInput',
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
                    <PhoneInput
                      variant={variant}
                      size={size}
                      placeholder={state}
                      {...{
                        ...(state === 'disabled' && {
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'disabled-and-filled' && {
                          isDisabled: true,
                          defaultValue: '999999999',
                        }),
                      }}
                      {...{
                        ...(state === 'error' && {
                          isInvalid: true,
                        }),
                      }}
                      {...{
                        ...(state === 'leadingIcon' && {
                          leadingIcon: <IconPhone />,
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
                          defaultValue: '999999999',
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

const Template = ({ showLeadingIcon, countryIsoCode, ...args }) => (
  <PhoneInput
    maskOptions={{
      countryIsoCode,
    }}
    {...{
      ...(showLeadingIcon && {
        leadingIcon: <IconPhone />,
      }),
    }}
    {...args}
  />
);
export const Playground = Template.bind({});
Playground.args = {
  variant: 'outline',
  size: 'l',
  countryIsoCode: 'US',
  leftLabel: '',
  rightLabel: '',
  isInvalid: false,
  isDisabled: false,
  showLeadingIcon: true,
};
