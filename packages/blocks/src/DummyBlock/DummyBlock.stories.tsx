import React from 'react';
import { Meta } from '@storybook/react';

import { DummyBlock } from './DummyBlock';

export default {
  component: DummyBlock,
  title: 'Blocks/DummyBlock',
} as Meta;

const Template = () => <DummyBlock />;

export const Playground = Template.bind({});
