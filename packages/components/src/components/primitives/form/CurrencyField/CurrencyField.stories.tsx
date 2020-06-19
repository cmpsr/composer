import React from 'react';

import { CurrencyField } from '.';
import { boolean, text } from '@storybook/addon-knobs';

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
  />
);

basic.story = {
  name: 'Default',
};
