import React, { ReactNode } from 'react';
import { Queries, RenderResult, render } from '@testing-library/react';
import { ComposerProvider } from '..';

export const renderWithProviders = <
  Q extends Queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  children: ReactNode
) => render(<ComposerProvider>{children}</ComposerProvider>, undefined) as RenderResult;
export * from '@testing-library/react';
