import React from 'react';
import { EmbeddedFeature1 } from '.';

export default {
  title: 'Composer/Layout/Feature/EmbeddedFeature1',
  component: EmbeddedFeature1,
};

export const withText = () => (
  <EmbeddedFeature1
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  />
);

withText.story = {
  name: 'With text',
};
