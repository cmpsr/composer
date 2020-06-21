import React from 'react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import { InputShapes } from '../TextField';
import { SearchField, IconPosition } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Form/SearchField',
  component: SearchField,
};

export const basic = () => (
  <SearchField
    type={text('type', 'search')}
    name={text('name', 'default')}
    placeholder={text('placeholder', 'Placeholder')}
    iconPosition={select('iconPosition', IconPosition, IconPosition.Left)}
    shape={select('shape', InputShapes, InputShapes.SemiRounded)}
    disabled={boolean('disabled', false)}
    onChange={action('Input changed')}
  />
);

basic.story = {
  name: 'Default',
};
