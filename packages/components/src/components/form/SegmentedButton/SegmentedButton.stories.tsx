import { SegmentedButton, segmentedButtonSizes, segmentedButtonVariants } from '@components';
import { Meta } from '@storybook/react';
import React from 'react';
import * as Icons from '../../media/Icons';

export default {
  component: SegmentedButton,
  title: 'Components/Form/SegmentedButton',
  argTypes: {
    variant: {
      options: segmentedButtonVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (props) => <SegmentedButton {...props} />;
export const Playground = Template.bind({});
Playground.args = {
  options: [
    {
      value: 'light',
      segment: (
        <SegmentedButton.Button leadingIcon={<Icons.IconExternalLink />}>light component</SegmentedButton.Button>
      ),
    },
    { value: 'dark', segment: <SegmentedButton.Button>dark component</SegmentedButton.Button> },
    { value: 'gray', segment: <SegmentedButton.Button>gray component</SegmentedButton.Button> },
    { value: 'bla', segment: <SegmentedButton.Button>bla component</SegmentedButton.Button> },
  ],
  onChange: (value) => console.log(value),
  variant: 'primary-alt',
  size: 's',
  isDisabled: true,
  defaultOption: 'dark',
};
Playground.argTypes = {
  size: {
    options: segmentedButtonSizes,
    control: { type: 'select' },
  },
};
