import React from 'react';
import { action } from '@storybook/addon-actions';

import { TextFieldButton } from '.';
import { ErrorField } from '../ErrorField';

export default {
  title: 'Composer/Primitive/Form/TextFieldButton',
  component: TextFieldButton,
};

export const basic = () => (
  <TextFieldButton
    name="default"
    placeholder="placeholder"
    onClick={action('button action click')}
  />
);

basic.story = {
  name: 'Default',
};

export const withError = () => (
  <div>
    <TextFieldButton
      name="default"
      placeholder="placeholder"
      className="border-outline-system-error"
      onClick={action('button action click')}
    />
    <ErrorField error="Error" />
  </div>
);

withError.story = {
  name: 'With error',
};
