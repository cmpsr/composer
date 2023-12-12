import React from 'react';
import { Meta } from '@storybook/react';
import { DateInput } from './DateInput';
import { IconCloud } from '../../media/Icons';

export default {
  component: DateInput,
  title: 'Components/Form/DateInput',
} as Meta;

const Template = ({ showLeadingIcon, maskPlaceholder, separator, mode, ...args }) => (
  <DateInput
    {...{
      ...(showLeadingIcon && {
        leadingIcon: <IconCloud />,
      }),
    }}
    maskOptions={{
      placeholder: maskPlaceholder,
      separator,
      mode,
    }}
    {...args}
  />
);

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {
  variant: 'outline',
  size: 'l',
  maskPlaceholder: 'MM/DD/YYYY',
  separator: '/',
  mode: 'mm/dd/yyyy',
  leftLabel: '',
  rightLabel: '',
  isInvalid: false,
  isDisabled: false,
  showLeadingIcon: true,
};
