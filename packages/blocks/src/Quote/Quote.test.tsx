import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';
import { Quote } from '.';

describe('Quote', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Quote>
        <Quote.Title>Quote</Quote.Title>
        <Quote.Author>
          <Quote.Author.Avatar name="Author" />
          <Quote.Author.Name>
            <Quote.Author.Name.Label>Name</Quote.Author.Name.Label>
            <Quote.Author.Name.SubLabel>Association</Quote.Author.Name.SubLabel>
          </Quote.Author.Name>
        </Quote.Author>
      </Quote>,
    );

  test('should render content', () => {
    givenComponentRendered();
    screen.getByText('Quote');
    screen.getByRole('img', { name: 'Author' });
    screen.getByText('Name');
    screen.getByText('Association');
  });
});
