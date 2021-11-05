import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ComposerProvider, useComposerProvider } from '.';
import { defaultTheme } from 'theme';

const fakeTheme = defaultTheme;

describe('useComposerProvider', () => {
  const givenComponentRenderedWithoutProvider = () =>
    renderHook(useComposerProvider);
  const givenComponentRendered = () =>
    renderHook(useComposerProvider, {
      wrapper: ({ children }) => (
        <ComposerProvider theme={fakeTheme}>{children}</ComposerProvider>
      ),
    });

  test('should throw an error if not provided defined', () => {
    const { result } = givenComponentRenderedWithoutProvider();
    expect(result.error).toStrictEqual(
      new Error('useComposerProvider must be used within a ComposerProvider')
    );
  });

  test('should render and provide theme', () => {
    const { result } = givenComponentRendered();
    expect(result.current.theme).toStrictEqual(fakeTheme);
    expect(result.error).not.toBeDefined();
  });
});
