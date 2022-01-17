import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ComposerProvider } from '..';

export const renderWithProviders = (children: Element | ReactNode) =>
  render(<ComposerProvider>{children}</ComposerProvider>);
export * from '@testing-library/react';
