import React from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownDownshiftSelect } from './';
import { boolean } from '@storybook/addon-knobs';

export default {
  title:
    'Composer/Primitive/Form/Dropdown/Single-Select/DropdownDownshiftSelect',
  component: DropdownDownshiftSelect,
};

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' },
  { value: 6, label: 'Option 6' },
];

export const basic = () => {
  return (
    <DropdownDownshiftSelect
      options={options}
      onItemChange={action('Item changed')}
      invalid={boolean('Invalid', false)}
      disabled={boolean('Disabled', false)}
    />
  );
};

basic.story = {
  name: 'Default',
};

export const withInitialSelectedItem = () => {
  return (
    <DropdownDownshiftSelect
      initialSelectedOption={options[3]}
      options={options}
      onItemChange={action('Item changed')}
      invalid={boolean('Invalid', false)}
      disabled={boolean('Disabled', false)}
    />
  );
};

basic.story = {
  name: 'Default',
};
