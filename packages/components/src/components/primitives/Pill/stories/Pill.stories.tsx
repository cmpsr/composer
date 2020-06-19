import React from 'react';
import { Pill } from '..';

export default {
  title: 'Composer/Primitive/Pill',
  component: Pill,
};

export const basic = () => <Pill label="TODAY" />;

basic.story = {
  name: 'Basic',
};
