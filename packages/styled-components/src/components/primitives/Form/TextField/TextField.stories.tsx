import React from 'react';
import { TextField } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/TextField',
  component: TextField
};

export const Shapes = () => (
  <>
    <h1>TextField shapes</h1>
    {/*  @ts-ignore */}
    {Object.keys(TextField.Shapes).map((shape: any, i) => (
      <>
        {/*  @ts-ignore */}
        <TextField shape={TextField.Shapes[shape]} placeholder={shape} />
        <br />
      </>
    ))}
  </>
);

export const Modes = () => (
  <>
    <h1>TextField Modes</h1>
    {/*  @ts-ignore */}
    {Object.keys(TextField.Modes).map((mode: any) => (
      <>
        {/*  @ts-ignore */}
        <TextField inputMode={TextField.Modes[mode]} placeholder={mode} />
        <br />
      </>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextField disabled</h1>
    <TextField disabled placeholder="disabled" />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextField invalid</h1>
    <TextField invalid placeholder="invalid" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextField
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      maxLength={number('Max length', 12)}
      // @ts-ignore
      shape={select('Shape', TextField.Shapes, TextField.Shapes.Rectangle)}
      // @ts-ignore
      inputModes={select('Mode', TextField.Modes, TextField.Modes.Text)}
      onChange={action('On change')}
    />
  </>
);
