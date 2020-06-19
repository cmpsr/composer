import React from 'react';
import { ExpandableTextField } from '..';
import { InputShapes } from '../../TextField';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Form/ExpandableTextField',
  component: ExpandableTextField,
};

export const basic = () => (
  <ExpandableTextField
    onChange={action('On change')}
    placeholder={text('placeholder', 'Placeholder')}
    shape={select('shape', InputShapes, InputShapes.Rounded)}
  />
);

basic.story = {
  name: 'Default',
};
