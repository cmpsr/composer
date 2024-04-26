import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { QuestionOption } from './QuestionOption';

describe('QuestionOption', () => {
  test('should print the label element', () => {
    renderWithProviders(<QuestionOption componentType="radio" label="componentLabel" />);
    expect(screen.getAllByLabelText('componentLabel')).toHaveLength(1);
  });

  test('should print the sublabel element', () => {
    renderWithProviders(<QuestionOption componentType="radio" label="componentLabel" subLabel="componentSubLabel" />);
    expect(screen.getAllByText('componentSubLabel')).toHaveLength(1);
  });
});
