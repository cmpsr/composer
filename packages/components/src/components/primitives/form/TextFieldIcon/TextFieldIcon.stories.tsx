import React from 'react';
import { TextFieldIcon } from '.';
import { ErrorField } from '../ErrorField';

export default {
  title: 'Composer/Primitive/Form/TextFieldIcon',
  component: TextFieldIcon,
};

export const leftIcon = () => (
  <TextFieldIcon name="default" placeholder="placeholder" iconPosition="left" />
);

leftIcon.story = {
  name: 'Left icon',
};

export const rightIcon = () => (
  <TextFieldIcon
    name="default"
    placeholder="placeholder"
    iconPosition="right"
  />
);

rightIcon.story = {
  name: 'Right icon',
};

export const withError = () => (
  <div>
    <TextFieldIcon
      name="default"
      placeholder="placeholder"
      iconPosition="right"
    />
    <ErrorField error="Error" />
  </div>
);

withError.story = {
  name: 'with error',
};

export const disabled = () => (
  <div>
    <TextFieldIcon
      name="default"
      placeholder="placeholder"
      iconPosition="right"
      disabled
    />
  </div>
);

disabled.story = {
  name: 'Disabled',
};
