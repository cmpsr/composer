import React from 'react';
import { Meta } from '@storybook/react';
import { PhoneInput } from './PhoneInput';
import { IconPhone } from '../../media/Icons';

export default {
  component: PhoneInput,
  title: 'Components/Form/PhoneInput',
} as Meta;

const Template = ({ showLeadingIcon, countryIsoCode, ...args }) => (
  <PhoneInput
    maskOptions={{
      countryIsoCode: countryIsoCode || 'US',
    }}
    {...{
      ...(showLeadingIcon && {
        leadingIcon: <IconPhone />,
      }),
    }}
    {...args}
  />
);

export const Default = Template.bind({});

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
