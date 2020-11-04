import React from 'react';
import { DropdownNativeSelect } from '.';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/DropdownField/DropdownNativeSelect',
  component: DropdownNativeSelect,
};

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <DropdownNativeSelect
      placeholder={text('Placeholder', 'placeholder')}
      name={text('Name', 'name')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      onItemChange={action('On click icon')}
      options={options}
      customCss={text('Custom css', 'border: 1px dashed blue')}
    />
  </>
);
