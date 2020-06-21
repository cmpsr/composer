import React from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownMultiSelect } from '.';

export default {
  title: 'Composer/Primitive/Form/Dropdown/Multi-Select',
  component: DropdownMultiSelect,
};

const options = [
  { value: 1, label: 'Label' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' },
  { value: 6, label: 'Option 6' },
];

export const basic = () => {
  return (
    <DropdownMultiSelect
      options={options}
      onItemChange={action('Item changed')}
    />
  );
};

basic.story = {
  name: 'Default',
};

export const disabled = () => {
  return (
    <DropdownMultiSelect
      options={options}
      onItemChange={action('Item changed')}
      disabled
    />
  );
};

disabled.story = {
  name: 'Disabled',
};
