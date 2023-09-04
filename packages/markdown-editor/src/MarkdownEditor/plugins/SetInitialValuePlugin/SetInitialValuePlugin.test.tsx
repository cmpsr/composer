import React from 'react';
import { renderWithProviders } from '../../../tests/renderWithProviders';
import { SetInitialValuePlugin } from './SetInitialValuePlugin';

const mockConvertFromMarkdownString = jest.fn();
jest.mock('@lexical/markdown', () => {
  const actual = jest.requireActual('@lexical/markdown');
  return {
    ...actual,
    $convertFromMarkdownString: (value: string) => mockConvertFromMarkdownString(value),
  };
});

const mockEditor = {
  update: jest.fn().mockImplementation((callback: () => void) => callback()),
};
jest.mock('@lexical/react/LexicalComposerContext', () => ({
  useLexicalComposerContext: () => [mockEditor],
}));

describe('SetInitialValuePlugin', () => {
  beforeEach(jest.clearAllMocks);

  test('should update editor', () => {
    renderWithProviders(<SetInitialValuePlugin value="Text" />);
    expect(mockEditor.update).toHaveBeenCalledTimes(1);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledTimes(1);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledWith('Text');
  });

  // TODO: rerender restore the initial state of the component, so we need to find a way to test this
  test.skip('should update editor only once if version does not change', () => {
    const version = '1';
    const { rerender } = renderWithProviders(<SetInitialValuePlugin value="Text" version={version} />);
    expect(mockEditor.update).toHaveBeenCalledTimes(1);
    rerender(<SetInitialValuePlugin value="Text" version={version} />);
    expect(mockEditor.update).toHaveBeenCalledTimes(1);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledTimes(1);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledWith('Text');
  });

  test('should update editor if version change', () => {
    const { rerender } = renderWithProviders(<SetInitialValuePlugin value="Text" version="1" />);
    rerender(<SetInitialValuePlugin value="Another text" version="2" />);
    expect(mockEditor.update).toHaveBeenCalledTimes(2);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledTimes(2);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledWith('Text');
  });
});
