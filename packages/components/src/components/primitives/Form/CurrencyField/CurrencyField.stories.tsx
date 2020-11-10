import React from 'react';
import { CurrencyField } from '.';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Icon, person as Person } from 'components/primitives/Icon';

export default {
  title: 'Primitives/Form/CurrencyField',
  component: CurrencyField,
};

export const Shapes = () => (
  <>
    <h1>CurrencyField shapes</h1>
    {Object.keys(CurrencyField.Shapes).map((shape: any, i) => (
      <div key={i}>
        <CurrencyField
          name="default"
          shape={CurrencyField.Shapes[shape]}
          placeholder={shape}
        />
        <br />
      </div>
    ))}
  </>
);

export const Modes = () => (
  <>
    <h1>CurrencyField Modes</h1>
    {Object.keys(CurrencyField.Modes).map((mode: any, i) => (
      <div key={i}>
        <CurrencyField
          name="default"
          inputMode={CurrencyField.Modes[mode]}
          shape={CurrencyField.Shapes.SemiRounded}
          placeholder={mode}
        />
        <br />
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>CurrencyField disabled</h1>
    <CurrencyField
      name="default"
      disabled
      placeholder="disabled"
      shape={CurrencyField.Shapes.SemiRounded}
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>CurrencyField invalid</h1>
    <CurrencyField
      name="default"
      invalid
      placeholder="invalid"
      shape={CurrencyField.Shapes.SemiRounded}
    />
  </>
);

const personIcon = (
  <Icon>
    <Person type={Icon.Types.Filled} />
  </Icon>
);
export const Children = () => (
  <>
    <h1>CurrencyField with children</h1>
    <CurrencyField
      name="default"
      placeholder="children"
      children={personIcon}
      shape={CurrencyField.Shapes.SemiRounded}
    />
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
