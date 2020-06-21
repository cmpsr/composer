import React from 'react';
import { Testimonials4 } from '.';
import { Grid } from 'components/layouts';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials4',
  component: Testimonials4,
};

export const basic = () => (
  <Testimonials4
    asset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
    }}
    testimonial="I don’t know why people who have not been on rockets continue to ask, ‘you’re not scared?’ no we were not scared.. until something happens, then it’s time to get scared."
    author="Neil Armstrong"
    profession="Lead Astronaut, NASA."
  />
);

basic.story = {
  name: 'Basic',
};

export const withGrid = () => (
  <Grid
    gridClassName="w-full px-5 py-8"
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
    <Testimonials4
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I don’t know why people who have not been on rockets continue to ask, ‘you’re not scared?’ no we were not scared.. until something happens, then it’s time to get scared."
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
    <Testimonials4
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I don’t know why people who have not been on rockets continue to ask, ‘you’re not scared?’ no we were not scared.. until something happens, then it’s time to get scared."
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
    <Testimonials4
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I don’t know why people who have not been on rockets continue to ask, ‘you’re not scared?’ no we were not scared.. until something happens, then it’s time to get scared."
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
  </Grid>
);

withGrid.story = {
  name: 'With grid',
};
