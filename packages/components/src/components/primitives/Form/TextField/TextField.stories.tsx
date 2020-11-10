import React from 'react';
import { TextField } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/TextField',
  component: TextField,
};

export const Shapes = () => (
  <>
    <h1>TextField shapes</h1>
    {Object.keys(TextField.Shapes).map((shape: any, i) => (
      <div key={i}>
        <TextField
          shape={TextField.Shapes[shape]}
          placeholder={shape}
          name={shape}
        />
        <br />
      </div>
    ))}
  </>
);

export const Modes = () => (
  <>
    <h1>TextField Modes</h1>
    {Object.keys(TextField.Modes).map((mode: any, i) => (
      <div key={i}>
        <TextField
          inputMode={TextField.Modes[mode]}
          placeholder={mode}
          name={mode}
          shape={TextField.Shapes.SemiRounded}
        />
        <br />
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextField disabled</h1>
    <TextField
      disabled
      placeholder="disabled"
      name="disabled"
      shape={TextField.Shapes.SemiRounded}
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextField invalid</h1>
    <TextField
      invalid
      placeholder="invalid"
      name="invalid"
      shape={TextField.Shapes.SemiRounded}
    />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextField
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      maxLength={number('Max length', 12)}
      shape={select('Shape', TextField.Shapes, TextField.Shapes.Rectangle)}
      inputMode={select('Mode', TextField.Modes, TextField.Modes.Text)}
      onChange={action('On change')}
      customCss={text('Custom css', 'padding: 10px; border: 1px dashed blue;')}
    />
  </>
);
