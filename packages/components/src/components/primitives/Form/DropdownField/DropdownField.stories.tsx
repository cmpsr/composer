import React from 'react';
import { DropdownField } from '.';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/DropdownField',
  component: DropdownField,
};

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

export const Placeholder = () => (
  <>
    <h1>DropdownField placeholder</h1>
    <DropdownField
      placeholder={'Select an item'}
      onItemChange={action('On click icon')}
      options={options}
    />
  </>
);

export const InitialOption = () => (
  <>
    <h1>DropdownField initial option</h1>
    <DropdownField
      placeholder={'Select an item'}
      onItemChange={action('On click icon')}
      options={options}
      initialSelectedOption={options[1]}
    />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <DropdownField
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
