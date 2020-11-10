import React from 'react';
import { SearchField } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/SearchField',
  component: SearchField,
};

export const Shapes = () => (
  <>
    <h1>SearchField shapes</h1>
    {Object.keys(SearchField.Shapes).map((shape: any, i) => (
      <div key={i}>
        <SearchField
          shape={SearchField.Shapes[shape]}
          placeholder={shape}
          name={shape}
        />
        <br />
      </div>
    ))}
  </>
);

export const IconPositions = () => (
  <>
    <h1>SearchField IconPositions</h1>
    {Object.keys(SearchField.IconPositions).map((iconPosition: any, i) => (
      <div key={i}>
        <SearchField
          iconPosition={SearchField.IconPositions[iconPosition]}
          placeholder={iconPosition}
          name={iconPosition}
          shape={SearchField.Shapes.SemiRounded}
        />
        <br />
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>SearchField disabled</h1>
    <SearchField disabled placeholder="disabled" name="disabled" />
  </>
);

export const Invalid = () => (
  <>
    <h1>SearchField invalid</h1>
    <SearchField invalid placeholder="invalid" name="invalid" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <SearchField
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      shape={select('Shape', SearchField.Shapes, SearchField.Shapes.Rectangle)}
      iconPosition={select(
        'Mode',
        SearchField.IconPositions,
        SearchField.IconPositions.Left
      )}
      onChange={action('On change')}
      customCss={text('Custom css', 'border: 1px dashed blue;')}
    />
  </>
);
