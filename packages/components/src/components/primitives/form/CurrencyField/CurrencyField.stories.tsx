import React from 'react';

import { CurrencyField } from '.';
import { InputMode } from 'components/primitives/form/TextField';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Form/CurrencyField',
  component: CurrencyField,
};

export const basic = () => (
  <CurrencyField
    name="default"
    placeholder={text('Placeholder', 'placeholder')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    inputMode={select('Input mode', InputMode, InputMode.Numeric)}
  />
);

basic.story = {
  name: 'Default',
};
