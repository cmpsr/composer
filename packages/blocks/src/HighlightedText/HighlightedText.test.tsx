import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { HighlightedText } from './HighlightedText';

describe('HighlightedText', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <HighlightedText>
        <HighlightedText.Content>
          <HighlightedText.ContentGroup>
            <HighlightedText.Tag>Tag</HighlightedText.Tag>
            <HighlightedText.Legend>Legend</HighlightedText.Legend>
            <HighlightedText.TextPairing variant="textpairing-header-4XL">
              <HighlightedText.TextPairing.Label>
                There is life elsewhere in the universe
              </HighlightedText.TextPairing.Label>
              <HighlightedText.TextPairing.SubLabel color="text-secondary">
                We are right now on the verge of finding out whether there is life elsewhere in the universe, and there
                are three ways we could find it.
              </HighlightedText.TextPairing.SubLabel>
            </HighlightedText.TextPairing>
          </HighlightedText.ContentGroup>
          <HighlightedText.ContentGroup gap="1.5rem">
            <HighlightedText.MediaBlock>
              <HighlightedText.MediaBlock.Image
                src="https://avatars0.githubusercontent.com/u/67131017?s=200"
                maxWidth="2rem"
              />
              <HighlightedText.MediaBlock.TextPairing>
                <HighlightedText.MediaBlock.TextPairing.Label>MediaBlock</HighlightedText.MediaBlock.TextPairing.Label>
                <HighlightedText.MediaBlock.TextPairing.SubLabel>
                  SubLabel
                </HighlightedText.MediaBlock.TextPairing.SubLabel>
              </HighlightedText.MediaBlock.TextPairing>
            </HighlightedText.MediaBlock>
          </HighlightedText.ContentGroup>
          <HighlightedText.ContentGroup>
            <HighlightedText.LinkGroup alignItems={{ base: 'center', md: 'start' }}>
              <HighlightedText.Link children="Link 1" variant="primary" />
              <HighlightedText.Link children="Link 2" variant="primary-alt" />
            </HighlightedText.LinkGroup>
            <HighlightedText.Disclaimer>Disclaimer</HighlightedText.Disclaimer>
            <HighlightedText.Link size="s" children="I need help >" />
          </HighlightedText.ContentGroup>
        </HighlightedText.Content>
        <HighlightedText.Image
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
          maxWidth="20rem"
          data-testid="cmpsr.block.HighlightedText-image"
        />
      </HighlightedText>
    );
    screen.getByText('Tag');
    screen.getByText('Legend');
    screen.getByText('MediaBlock');
    screen.getByText('Link 1');
    screen.getByText('Link 2');
    screen.getByText('Disclaimer');
    screen.getByTestId('cmpsr.block.HighlightedText-image');
    screen.getByText('There is life elsewhere in the universe');
  });
});
