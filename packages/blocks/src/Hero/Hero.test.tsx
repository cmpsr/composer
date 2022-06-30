import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Hero } from './Hero';

describe('Hero', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <Hero>
        <Hero.Content>
          <Hero.ContentGroup>
            <Hero.Tag>Tag</Hero.Tag>
            <Hero.Legend>Legend</Hero.Legend>
            <Hero.TextPairing variant="textpairing-header-4XL">
              <Hero.TextPairing.Label>There is life elsewhere in the universe</Hero.TextPairing.Label>
              <Hero.TextPairing.SubLabel color="text-secondary">
                We are right now on the verge of finding out whether there is life elsewhere in the universe, and there
                are three ways we could find it.
              </Hero.TextPairing.SubLabel>
            </Hero.TextPairing>
          </Hero.ContentGroup>
          <Hero.ContentGroup gap="1.5rem">
            <Hero.MediaBlock>
              <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
              <Hero.MediaBlock.TextPairing>
                <Hero.MediaBlock.TextPairing.Label>MediaBlock</Hero.MediaBlock.TextPairing.Label>
                <Hero.MediaBlock.TextPairing.SubLabel>SubLabel</Hero.MediaBlock.TextPairing.SubLabel>
              </Hero.MediaBlock.TextPairing>
            </Hero.MediaBlock>
          </Hero.ContentGroup>
          <Hero.ContentGroup>
            <Hero.LinkGroup alignItems={{ base: 'center', md: 'start' }}>
              <Hero.Link children="Link 1" variant="primary" />
              <Hero.Link children="Link 2" variant="primary-alt" />
            </Hero.LinkGroup>
            <Hero.Disclaimer>Disclaimer</Hero.Disclaimer>
            <Hero.Link size="s" children="I need help >" />
          </Hero.ContentGroup>
        </Hero.Content>
        <Hero.Image
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
          maxWidth="20rem"
          data-testid="cmpsr.block.hero-image"
        />
      </Hero>
    );
    screen.getByText('Tag');
    screen.getByText('Legend');
    screen.getByText('MediaBlock');
    screen.getByText('Link 1');
    screen.getByText('Link 2');
    screen.getByText('Disclaimer');
    screen.getByTestId('cmpsr.block.hero-image');
    screen.getByText('There is life elsewhere in the universe');
  });
});
