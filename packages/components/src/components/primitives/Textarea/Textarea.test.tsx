import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '@tests/renderWithProviders';
import { screen } from '@testing-library/react';
import { Textarea } from './Textarea';

const testId = 'cmpsr.textarea';

describe('Textarea', () => {
  test('should render default textarea', () => {
    renderWithProviders(<Textarea />);
    screen.getByTestId(testId);
  });

  test('should render with value', () => {
    const value = 'Filled text input area...';
    renderWithProviders(<Textarea defaultValue={value} />);
    const textarea = screen.getByTestId(testId);
    expect(textarea).toHaveValue(value);
  });

  test('should render an invalid textarea', () => {
    renderWithProviders(<Textarea isInvalid />);
    const textarea = screen.getByTestId(testId);
    expect(textarea).toBeInvalid();
  });

  test('should render a disabled textarea', () => {
    renderWithProviders(<Textarea isDisabled />);
    const textarea = screen.getByTestId(testId);
    expect(textarea).toBeDisabled();
  });
});
