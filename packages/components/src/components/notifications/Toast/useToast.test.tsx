import React from 'react';
import { screen, act } from '@tests/renderWithProviders';
import { renderHookWithProviders } from '@tests/renderHookWithProviders';
import { useToast } from './useToast';

describe('useToast', () => {
  test('should render custom component when provided', () => {
    const { result } = renderHookWithProviders(() => useToast());
    act(() => {
      result.current({ title: 'foo', render: () => <div>foo</div> });
    });
    screen.getByText(/foo/i);
  });

  test('should render Alert by default when render is not provided', () => {
    const { result } = renderHookWithProviders(() => useToast());
    act(() => {
      result.current({ title: 'title' });
    });
    screen.getByTestId('cmpsr.alert.toast');
  });
});
