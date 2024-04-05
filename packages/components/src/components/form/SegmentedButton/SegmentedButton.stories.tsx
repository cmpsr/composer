import { SegmentedButton, segmentedButtonSizes } from '@components';
import { Meta } from '@storybook/react';
import React from 'react';
import * as Icons from '../../media/Icons';

export default {
  component: SegmentedButton,
  title: 'Components/Form/SegmentedButton',
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
    { value: 'muggle', segment: <SegmentedButton.Button>muggle component</SegmentedButton.Button> },
  ],
  onChange: (value) => console.log(value),
  variant: 'secondary',
  size: 's',
};
Playground.argTypes = {
  size: {
    options: segmentedButtonSizes,
    control: { type: 'select' },
  },
};
