import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ComposerProvider } from '@cmpsr/components';

export function renderHookWithProviders<TProps, TResult>(callback: (props: TProps) => TResult) {
  return renderHook(callback, { wrapper: ({ children }) => <ComposerProvider>{children}</ComposerProvider> });
}
