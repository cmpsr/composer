import React from 'react';
import { TextFieldWithLabel } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/TextFieldWithLabel',
  component: TextFieldWithLabel,
};

export const Shapes = () => (
  <>
    <h1>TextField shapes</h1>
    {Object.keys(TextFieldWithLabel.Shapes).map((shape: any, i) => (
      <div key={i}>
        <TextFieldWithLabel
          label="LABEL"
          shape={TextFieldWithLabel.Shapes[shape]}
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
    <h1>TextFieldWithLabel Modes</h1>
    {Object.keys(TextFieldWithLabel.Modes).map((mode: any, i) => (
      <div key={i}>
        <TextFieldWithLabel
          label="LABEL"
          inputMode={TextFieldWithLabel.Modes[mode]}
          placeholder={mode}
          name={mode}
        />
        <br />
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextFieldWithLabel disabled</h1>
    <TextFieldWithLabel
      label="LABEL"
      disabled
      placeholder="disabled"
      name="disabled"
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextFieldWithLabel invalid</h1>
    <TextFieldWithLabel
      label="LABEL"
      invalid
      placeholder="invalid"
      name="invalid"
    />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextFieldWithLabel
      name="name"
      label={text('Label', 'Label')}
      labelCustomCss={text('labelCustomCss', 'color: red')}
      textFieldCustomCss={text('textFieldCustomCss', 'color: blue')}
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      maxLength={number('Max length', 12)}
      shape={select(
        'Shape',
        TextFieldWithLabel.Shapes,
        TextFieldWithLabel.Shapes.Rectangle
      )}
      inputMode={select(
        'Mode',
        TextFieldWithLabel.Modes,
        TextFieldWithLabel.Modes.Text
      )}
      onChange={action('On change')}
    />
  </>
);
