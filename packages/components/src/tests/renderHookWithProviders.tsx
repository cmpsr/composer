import React from 'react';
import { renderHook } from '@testing-library/react';
import { ComposerProvider } from '..';

export function renderHookWithProviders<TProps, TResult>(callback: (props: TProps) => TResult) {
  const wrapper = ({ children }: React.PropsWithChildren) => <ComposerProvider>{children}</ComposerProvider>;
  return renderHook(callback, { wrapper });
}
