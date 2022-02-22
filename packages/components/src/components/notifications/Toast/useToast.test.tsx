import React from 'react';
import { screen } from '@tests/renderWithProviders';
import { renderHook, act } from '@testing-library/react-hooks';
import { ComposerProvider } from '@theme';
import { useToast } from './useToast';

const wrapper = ({ children }) => <ComposerProvider>{children}</ComposerProvider>;

describe('useToast', () => {
  test('should render custom component when provided', () => {
    const { result } = renderHook(() => useToast(), { wrapper });
    act(() => {
      result.current({ title: 'foo', render: () => <div>foo</div> });
    });
    screen.getByText(/foo/i);
  });

  test('should render Alert by default when render is not provided', () => {
    const { result } = renderHook(() => useToast(), { wrapper });
    act(() => {
      result.current({ title: 'title' });
    });
    screen.getByTestId('cmpsr.alert');
  });
});
