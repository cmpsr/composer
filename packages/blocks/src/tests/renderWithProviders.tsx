import React, { ReactNode } from 'react';
import { Queries, RenderResult, render } from '@testing-library/react';
import { ComposerProvider } from '@cmpsr/components';

export const renderWithProviders = <
  Q extends Queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  children: ReactNode,
) => render(<ComposerProvider>{children}</ComposerProvider>, undefined) as RenderResult<Q, Container, BaseElement>;
export * from '@testing-library/react';
