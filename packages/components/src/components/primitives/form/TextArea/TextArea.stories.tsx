import React from 'react';
import { TextArea } from '.';
import { ErrorField } from '../ErrorField';
import { InputShapes } from '../TextField';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Form/TextArea',
  component: TextArea,
};

export const basic = () => (
  <TextArea
    name="default"
    placeholder={text('placeholder', 'Placeholder')}
    value={text('value', 'Type in here!')}
    disabled={boolean('disabled', false)}
    shape={select('shape', InputShapes, InputShapes.SemiRounded)}
  />
);

basic.story = {
  name: 'Default',
};

export const withError = () => (
  <div className="flex flex-col">
    <TextArea name="default" placeholder="Placeholder" isInvalid />
    <ErrorField error="Error" />
  </div>
);

withError.story = {
  name: 'With error',
};
