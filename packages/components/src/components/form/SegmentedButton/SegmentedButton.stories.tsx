import { SegmentedButton } from '@components';
import { Meta } from '@storybook/react';
import React from 'react';

export default {
  component: SegmentedButton,
  title: 'Components/Form/SegmentedButton',
} as Meta;

const Template = (props) => <SegmentedButton {...props} />;
export const Playground = Template.bind({});
Playground.args = {
  options: [
    { value: 'light', segment: <SegmentedButton.Button> light component</SegmentedButton.Button> },
    { value: 'dark', segment: <SegmentedButton.Button>dark component</SegmentedButton.Button> },
    { value: 'muggle', segment: <SegmentedButton.Button>muggle component</SegmentedButton.Button> },
  ],
  onChange: (value) => console.log(value),
  variant: 'secondary',
  size: 's',
};
