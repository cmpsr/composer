import React from 'react';
import { screen, fireEvent, renderWithProviders } from '@tests/renderWithProviders';
import { useToast } from './useToast';
import { UseToastOptions } from './types';

const TestComponent = (props: UseToastOptions) => {
  const toast = useToast();
  return <button onClick={() => toast(props)}>Toast</button>;
};

describe('useToast', () => {
  test('should render custom component when provided', () => {
    renderWithProviders(<TestComponent render={() => <div>foo</div>} />);

    const button = screen.getByRole('button', { name: /Toast/i });
    fireEvent.click(button);
    expect(screen.getByText('foo')).toBeInTheDocument();
  });

  test('should render Alert by default when render is not provided', () => {
    renderWithProviders(<TestComponent />);

    const button = screen.getByRole('button', { name: /Toast/i });
    fireEvent.click(button);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
