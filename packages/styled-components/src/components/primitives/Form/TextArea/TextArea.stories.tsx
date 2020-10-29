import React from 'react';
import { TextArea } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/TextArea',
  component: TextArea
};

export const Shapes = () => (
  <>
    <h1>TextArea shapes</h1>
    {Object.keys(TextArea.Shapes).map((shape: any) => (
      <>
        <TextArea shape={TextArea.Shapes[shape]} value={shape} />
        <br />
      </>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextArea disabled</h1>
    <TextArea disabled value="disabled" />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextArea invalid</h1>
    <TextArea invalid value="invalid" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextArea
      value={text('Value', 'value')}
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      shape={select('Shape', TextArea.Shapes, TextArea.Shapes.Rectangle)}
    />
  </>
);
