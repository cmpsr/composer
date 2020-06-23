import React from 'react';
import { TextField, InputShapes, InputMode } from '.';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Form/TextField',
  component: TextField,
};

export const base = () => (
  <TextField
    name="default"
    placeholder={text('Placeholder', 'placeholder')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    required={boolean('Required', false)}
    shape={select('Shape', InputShapes, InputShapes.SemiRounded)}
    onChange={action('on change')}
    maxLength={number('Max length', 33)}
    inputMode={select('Input mode', InputMode, InputMode.Numeric)}
  />
);

base.story = {
  name: 'Default',
};
