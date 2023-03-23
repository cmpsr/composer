import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { AiTextGenerator } from './AiTextGenerator';

describe('AiTextGenerator', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <AiTextGenerator>
        <AiTextGenerator.Result aiTextGeneratorResult="result" />
      </AiTextGenerator>
    );

  test('should render content', () => {
    givenComponentRendered();
    screen.getByText('result');
  });

  test('should render content with variant', () => {
    renderWithProviders(
      <AiTextGenerator>
        <AiTextGenerator.Result aiTextGeneratorResult="result" variant="text-header-XL" />
      </AiTextGenerator>
    );
    screen.getByText('result');
  });

  test('should not render content if aiTextGeneratorResult is empty', () => {
    renderWithProviders(<AiTextGenerator />);
    expect(screen.queryByText('result')).not.toBeInTheDocument();
  });
});
