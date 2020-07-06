import React from 'react';
import { render, screen } from '@testing-library/react';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  it('should render data test id', () => {
    const testId = 'testId';
    render(<Snackbar testId={testId} />);
    screen.getByTestId(testId);
  });
});
