import React from 'react';
import { Meta } from '@storybook/react';
import { MaskInput } from './MaskInput';
import { IconCircleCheckFilled } from '../../media/Icons';

export default {
  component: MaskInput,
  title: 'Components/Form/MaskInput',
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
