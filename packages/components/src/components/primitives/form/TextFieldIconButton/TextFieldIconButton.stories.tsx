import React from 'react';
import { action } from '@storybook/addon-actions';

import { TextFieldIconButton } from '.';
import { ErrorField } from '../ErrorField';

export default {
  title: 'Composer/Primitive/Form/TextFieldIconButton',
  component: TextFieldIconButton,
};

export const basic = () => (
  <TextFieldIconButton
    name="default"
    placeholder="placeholder"
    onClick={action('button action click')}
    iconPosition="left"
  />
);

basic.story = {
  name: 'Default',
};

export const withError = () => (
  <div>
    <TextFieldIconButton
      name="default"
      placeholder="placeholder"
      className="border-outline-system-error"
      onClick={action('button action click')}
      iconPosition="left"
    />
    <ErrorField error="Error" />
  </div>
);

withError.story = {
  name: 'With error',
};
