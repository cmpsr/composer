import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { QuestionOption } from './QuestionOption';

describe('QuestionOption', () => {
  test('should render the label element', () => {
    renderWithProviders(<QuestionOption componentType="radio" label="componentLabel" />);
    expect(screen.getAllByLabelText('componentLabel')).toHaveLength(1);
  });

  test('should render the description element', () => {
    renderWithProviders(
      <QuestionOption componentType="radio" label="componentLabel" description="componentSubLabel" />
    );
    expect(screen.getAllByText('componentSubLabel')).toHaveLength(1);
  });
});
