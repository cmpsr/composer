import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ComposerProvider } from '..';

export const renderHookWithProviders = (hook) =>
  renderHook(() => hook(), { wrapper: ({ children }) => <ComposerProvider>{children}</ComposerProvider> });
