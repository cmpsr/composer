import React from 'react';
import { Meta } from '@storybook/react';
import { Switch } from '.';
import { switchLabelPositions, switchSizes } from './types';
import { Grid, Text } from '@components';

export default {
  component: Switch,
  title: 'Components/Primitives/Switch',
  argTypes: {
    size: {
      options: switchSizes,
      control: { type: 'select' },
    },
    labelPosition: {
      option: switchLabelPositions,
      control: { type: 'select' },
    },
  },
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

const AllTemplate = () => {
  return (
    <Grid columns={5} spacing="spacer-4" width="100%">
      <Text variant="text-body-bold">Size</Text>
      <Text variant="text-body-bold">Left label</Text>
      <Text variant="text-body-bold">Right label</Text>
      <Text variant="text-body-bold">No label</Text>
      <Text variant="text-body-bold">Disabled</Text>
      {switchSizes.map((size) => (
        <>
          <Text>{sizeLabels[size]}</Text>
          {switchLabelPositions.map((labelPosition) => (
            <Switch key={labelPosition} size={size} labelPosition={labelPosition} label="Test" />
          ))}
          <Switch size={size} isDisabled label="Test" labelPosition="right" />
        </>
      ))}
    </Grid>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => <Switch {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  size: 's',
  labelPosition: 'left',
  isDisabled: false,
  label: 'Label',
};
