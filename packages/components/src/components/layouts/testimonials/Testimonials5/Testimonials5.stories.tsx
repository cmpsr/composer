import React from 'react';
import { Testimonials5 } from '.';
import { Grid } from 'components/layouts';

export default {
  title: 'Composer/Layout/Testimonials/Testimonials5',
  component: Testimonials5,
};

export const basic = () => (
  <Testimonials5
    asset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
    }}
    testimonial="I realized up there that our planet is not infinite. It’s fragile. That may not be obvious to a lot of folks, and it’s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.”"
    author="Neil Armstrong"
    profession="Lead Astronaut, NASA."
    className="mt-12"
  />
);

basic.story = {
  name: 'Basic',
};

export const withGrid = () => (
  <Grid
    gridClassName="w-full px-5 py-8 mt-16"
    style={{
      grid: {
        md: {
          'grid-cols': 3,
          gap: 4,
        },
        default: {
          gap: 20,
          'grid-cols': 1,
        },
      },
    }}
  >
    <Testimonials5
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I realized up there that our planet is not infinite. It’s fragile. That may not be obvious to a lot of folks, and it’s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.”"
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
    <Testimonials5
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I realized up there that our planet is not infinite. It’s fragile. That may not be obvious to a lot of folks, and it’s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.”"
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
    <Testimonials5
      asset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/2FZCwaZBv7UiCPPdxjIERO/18be5b3945a0acd7de3cf0a148da3cc4/Neil_Armstrong.jpg',
      }}
      testimonial="I realized up there that our planet is not infinite. It’s fragile. That may not be obvious to a lot of folks, and it’s tough that people are fighting each other here on earth instead of trying to get together and live on this planet.”"
      author="Neil Armstrong"
      profession="Lead Astronaut, NASA."
    />
  </Grid>
);

withGrid.story = {
  name: 'With grid',
};
