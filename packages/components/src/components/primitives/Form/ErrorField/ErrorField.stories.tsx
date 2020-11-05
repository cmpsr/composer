import React from 'react';
import { ErrorField } from '.';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/ErrorField',
  component: ErrorField,
};

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <ErrorField error={text('Error', 'Error')} />
  </>
);
