import React from 'react';
import { Meta } from '@storybook/react';
import { DateInput } from './DateInput';
import { IconCloud } from '../../media/Icons';
import { inputSizes, inputVariants } from '../Input';

export default {
  component: DateInput,
  title: 'Components/Form/DateInput',
  argTypes: {
    mode: {
      options: ['dd/mm/yyyy', 'mm/dd/yyyy', 'mm/yy', 'mm/yyyy', 'yyyy', 'yyyy/mm', 'yyyy/mm/dd'],
      control: { type: 'select' },
    },
    variant: {
      options: inputVariants,
      control: { type: 'select' },
    },
    size: {
      options: inputSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = ({ showLeadingIcon, separator, mode, ...args }) => (
  <DateInput
    {...{
      ...(showLeadingIcon && {
        leadingIcon: <IconCloud />,
      }),
    }}
    maskOptions={{
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
  separator: '/',
  mode: 'mm/dd/yyyy',
  leftLabel: '',
  rightLabel: '',
  isInvalid: false,
  isDisabled: false,
  showLeadingIcon: true,
};
