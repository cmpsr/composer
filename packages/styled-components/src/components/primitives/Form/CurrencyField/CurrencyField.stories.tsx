import React from 'react';
import { CurrencyField } from '.';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/CurrencyField',
  component: CurrencyField,
};

export const Shapes = () => (
  <>
    <h1>CurrencyField shapes</h1>
    {Object.keys(CurrencyField.Shapes).map((shape: any) => (
      <>
        <CurrencyField
          name="default"
          shape={CurrencyField.Shapes[shape]}
          placeholder={shape}
        />
        <br />
      </>
    ))}
  </>
);

export const Modes = () => (
  <>
    <h1>CurrencyField Modes</h1>
    {Object.keys(CurrencyField.Modes).map((mode: any) => (
      <>
        <CurrencyField
          name="default"
          inputMode={CurrencyField.Modes[mode]}
          placeholder={mode}
        />
        <br />
      </>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>CurrencyField disabled</h1>
    <CurrencyField name="default" disabled placeholder="disabled" />
  </>
);

export const Invalid = () => (
  <>
    <h1>CurrencyField invalid</h1>
    <CurrencyField name="default" invalid placeholder="invalid" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <CurrencyField
      placeholder={text('Placeholder', 'Placeholder')}
      name={text('Name', 'default')}
      shape={select(
        'Shape',
        CurrencyField.Shapes,
        CurrencyField.Shapes.Rectangle
      )}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
    />
  </>
);
