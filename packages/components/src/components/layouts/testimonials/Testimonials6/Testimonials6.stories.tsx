import React from 'react';
import { Testimonials6 } from '.';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials6',
  component: Testimonials6,
};

export const basic = () => (
  <Testimonials6
    testimonial="I realized up there that our planet is not infinite. It’s fragile."
    author="Neil Armstrong,"
    profession="Lead Astronaut, NASA."
  />
);

basic.story = {
  name: 'Basic',
};
