import React from 'react';
import { Testimonials2 } from '.';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials2',
  component: Testimonials2,
};

export const basic = () => (
  <Testimonials2
    asset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
    }}
    testimonial="“We spend so much time focused on our own lives down here on earth that we often fail to notice the beautiful and wondrous things not on this planet. Our seemingly limitless universe is filled with truly astonishing things, and he on this site you can learn all about them!”"
    author="Neil Armstrong"
    profession="Lead Astronaut, NASA."
  />
);

basic.story = {
  name: 'Basic',
};
