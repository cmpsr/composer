import React from 'react';
import { TextFieldWithLabel } from '.';
import { InputShapes } from '../TextField';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Form/TextFieldWithLabel',
  component: TextFieldWithLabel,
};

export const base = () => (
  <TextFieldWithLabel
    label={text('Label', 'LABEL')}
    name="default"
    placeholder={text('Placeholder', 'placeholder')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    required={boolean('Required', false)}
    shape={select('Shape', InputShapes, InputShapes.SemiRounded)}
    onChange={action('on change')}
    maxLength={number('Max length', 33)}
  />
);

base.story = {
  name: 'Default',
};
