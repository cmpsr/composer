import React from 'react';
import { Testimonials3 } from '.';
import { Grid } from 'components/layouts';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials3',
  component: Testimonials3,
};

export const basic = () => (
  <Testimonials3
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

export const withGrid = () => (
  <Grid
    gridClassName="w-full px-4 md:px-5 py-8"
    style={{
      grid: {
        md: {
          'grid-cols': 3,
        },
        default: {
          gap: 4,
          'grid-cols': 1,
        },
      },
    }}
  >
    <Testimonials3
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
    <Testimonials3
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
    <Testimonials3
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
  </Grid>
);

withGrid.story = {
  name: 'With grid',
};
