import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Hero } from './Hero';

describe('Hero', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <Hero>
        <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
        <Hero.Content>
          <Hero.TextPairing
            labelProps={{ children: 'The next generation of care for women and families' }}
            subLabelProps={{
              children:
                'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
            }}
            variant="textpairing-header-4XL"
          />
          <Hero.LinkGroup>
            <Hero.Link children="Link 1" variant="primary" />
            <Hero.Link children="Link 2" variant="primary-alt" />
          </Hero.LinkGroup>
        </Hero.Content>
      </Hero>
    );
    screen.getByText('Link 1');
    screen.getByText('Link 2');
    screen.getByRole('img');
    screen.getByText('The next generation of care for women and families');
  });
});
