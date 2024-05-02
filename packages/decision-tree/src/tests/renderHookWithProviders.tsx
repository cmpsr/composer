import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ComposerProvider } from '@cmpsr/components';

export function renderHookWithProviders<TProps, TResult>(callback: (fnProps: TProps) => TResult, props: TProps) {
  const wrapper = ({ children }: React.PropsWithChildren) => <ComposerProvider>{children}</ComposerProvider>;
  return renderHook(callback, { wrapper, initialProps: props });
}

export * from '@testing-library/react';
