import React from 'react';
import { ExpandableTextField } from '.';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/ExpandableTextField',
  component: ExpandableTextField,
};

export const Shapes = () => (
  <>
    <h1>ExpandableTextField shapes</h1>
    {Object.keys(ExpandableTextField.Shapes).map((shape: any, i) => (
      <div key={i}>
        <ExpandableTextField
          shape={ExpandableTextField.Shapes[shape]}
          placeholder={shape}
        />
        <br />
      </div>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <ExpandableTextField
      placeholder={text('Placeholder', 'placeholder')}
      shape={select(
        'Shape',
        ExpandableTextField.Shapes,
        ExpandableTextField.Shapes.Rounded
      )}
      customCss={text(
        'Custom css',
        'background: #c5c5ff; border: 1px dashed #004fff; padding: 10px;'
      )}
      onChange={action('On change')}
    />
  </>
);
