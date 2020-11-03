import React from 'react';
import { TextFieldButton } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { ErrorField } from 'components/primitives';

export default {
  title: 'Primitives/Form/TextFieldButton',
  component: TextFieldButton,
};

export const Required = () => (
  <>
    <h1>TextFieldButton required</h1>
    <TextFieldButton required placeholder="required" name="required" />
  </>
);

export const Error = () => (
  <>
    <h1>TextFieldButton error</h1>
    <div>
      <TextFieldButton placeholder="error" name="error" />
      <ErrorField error="Error" />
    </div>
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextFieldButton
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      required={boolean('Required', false)}
      onChange={action('On change')}
      customCss={text('Custom css', 'padding: 10px; border: 1px dashed blue;')}
    />
  </>
);
