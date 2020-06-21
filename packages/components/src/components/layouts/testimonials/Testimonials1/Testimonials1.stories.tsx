import React from 'react';
import { Testimonials1 } from '.';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials1',
  component: Testimonials1,
};

export const basic = () => (
  <Testimonials1
    asset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
    }}
    testimonial="We spend so much time focused on our own lives down here on earth that we often fail to notice the beautiful and wondrous things not on this planet.Our seemingly limitless universe is filled with truly astonishing things"
    author="Neil Armstrong,"
    profession="Lead Astronaut, NASA."
  />
);

basic.story = {
  name: 'Basic',
};
