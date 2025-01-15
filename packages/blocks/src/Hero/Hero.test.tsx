import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { Hero } from './Hero';

describe('Hero', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <Hero>
        <Hero.Content>
          <Hero.ContentContainer>
            <Hero.Tag>Tag</Hero.Tag>
            <Hero.Overline>Legend</Hero.Overline>
            <Hero.Title variant="textpairing-header-4XL">
              <Hero.Title.Label>There is life elsewhere in the universe</Hero.Title.Label>
              <Hero.Title.SubLabel color="text-secondary">
                We are right now on the verge of finding out whether there is life elsewhere in the universe, and there
                are three ways we could find it.
              </Hero.Title.SubLabel>
            </Hero.Title>
          </Hero.ContentContainer>
          <Hero.ContentContainer gap="1.5rem">
            <Hero.MediaBlock>
              <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
              <Hero.MediaBlock.Title>
                <Hero.MediaBlock.Title.Label>MediaBlock</Hero.MediaBlock.Title.Label>
                <Hero.MediaBlock.Title.SubLabel>SubLabel</Hero.MediaBlock.Title.SubLabel>
              </Hero.MediaBlock.Title>
            </Hero.MediaBlock>
          </Hero.ContentContainer>
          <Hero.ContentContainer>
            <Hero.Actions alignItems={{ base: 'center', md: 'start' }}>
              <Hero.Action children="Link 1" variant="primary" />
              <Hero.Action children="Link 2" variant="primary-alt" />
            </Hero.Actions>
            <Hero.Disclaimer>Disclaimer</Hero.Disclaimer>
            <Hero.Action size="s" children="I need help >" />
          </Hero.ContentContainer>
        </Hero.Content>
        <Hero.Image
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
          maxWidth="20rem"
          data-testid="cmpsr.block.hero-image"
        />
      </Hero>,
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
