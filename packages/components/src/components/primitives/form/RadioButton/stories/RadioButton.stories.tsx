import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { RadioButton } from '../RadioButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Form/RadioButton',
  component: RadioButton,
};

export const basic = () => (
  <>
    <RadioButton
      name={text('name', 'name')}
      value={text('value', 'default')}
      label={text('label', 'Option')}
      onChange={action('Radio clicked')}
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
    />
  </>
);

basic.story = {
  name: 'Default',
};
