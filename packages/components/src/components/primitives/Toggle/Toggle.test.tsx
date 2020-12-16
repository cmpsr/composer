import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  const testId = 'toggle';
  it('should render class', () => {
    render(<Toggle className="foo" />);
    const toggle = screen.getByTestId(testId).lastChild;
    expect(toggle).toHaveClass('foo');
  });
  it('should render enabled', () => {
    render(<Toggle enabled />);
    const toggle = screen.getByTestId(testId).lastChild;
    expect(toggle).toHaveClass('enabled');
  });
  it('should render disabled', () => {
    render(<Toggle disabled />);
    const toggle = screen.getByTestId(testId).lastChild;
    expect(toggle).toHaveClass('disabled');
  });
  it('should not call on state changed when is disabled', () => {
    const mockOnStateChanged = jest.fn();
    render(<Toggle disabled onStateChanged={mockOnStateChanged} />);
    const toggle = screen.getByTestId(testId);
    fireEvent.click(toggle);
    expect(mockOnStateChanged).toHaveBeenCalledTimes(0);
  });
  it('should call on state changed on click', () => {
    const mockOnStateChanged = jest.fn();
    render(<Toggle onStateChanged={mockOnStateChanged} />);
    const toggle = screen.getByTestId(testId);
    fireEvent.click(toggle);
    expect(mockOnStateChanged).toHaveBeenCalledTimes(1);
  });
});
