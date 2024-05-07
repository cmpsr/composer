import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { QuestionTitle } from './QuestionTitle';

describe('QuestionTitle', () => {
  test('should print the element', () => {
    renderWithProviders(
      <QuestionTitle question="mockQuestion" tooltip="mockTooltip" explanation="explanation why we ask" />
    );
    expect(screen.getAllByText('mockQuestion')).toHaveLength(1);
  });
});
