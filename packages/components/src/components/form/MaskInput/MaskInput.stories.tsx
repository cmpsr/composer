import React from 'react';
import { Meta } from '@storybook/react';
import { MaskInput } from './MaskInput';
import { IconCircleCheckFilled } from '../../media/Icons';
import { inputSizes, inputVariants } from '../Input';

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
  },
} as Meta;

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

export const Default = Template.bind({});
Default.args = {
  mask: [/\d/, /\d/, '-', /\d/, /\d/, '$', /\d/, /\d/, '*', /\d/, /\d/],
};

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
