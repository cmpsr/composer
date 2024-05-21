import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { QuestionTitle } from './QuestionTitle';

describe('QuestionTitle', () => {
  test('should render the element', () => {
    renderWithProviders(<QuestionTitle question="mockQuestion" whyWeAskExplanation="whyWeAskExplanation why we ask" />);
    expect(screen.getAllByText('mockQuestion')).toHaveLength(1);
  });
});
