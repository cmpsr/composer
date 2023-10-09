import React from 'react';
import { renderWithProviders } from '../../../tests/renderWithProviders';
import { EditorMode } from '../../types';
import { SetInitialValuePlugin } from './SetInitialValuePlugin';

const mockConvertFromMarkdownString = jest.fn();
jest.mock('@lexical/markdown', () => {
  const actual = jest.requireActual('@lexical/markdown');
  return {
    ...actual,
    $convertFromMarkdownString: (value: string) => mockConvertFromMarkdownString(value),
  };
});

jest.mock('lexical', () => {
  return {
    ...jest.requireActual('lexical'),
    $getRoot: () => ({
      clear: jest.fn().mockReturnValue({
        append: jest.fn(),
      }),
    }),
    $createParagraphNode: (...args: any[]) => mockCreateParagraphNode(...args),
    $createTextNode: (...args: any[]) => mockCreateTextNode(...args),
  };
});

const mockCreateTextNode = jest.fn().mockImplementation((value: string) => <span id="initial-value">{value}</span>);
const mockCreateParagraphNode = jest.fn().mockReturnValue({
  append: (...args: any[]) => mockAppendParagraphNode(...args),
});
const mockAppendParagraphNode = jest.fn();
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
    expect(mockConvertFromMarkdownString).toHaveBeenNthCalledWith(1, 'Text');
    expect(mockConvertFromMarkdownString).toHaveBeenNthCalledWith(2, 'Another text');
  });

  test('should allow setting plain text as initial value', () => {
    renderWithProviders(<SetInitialValuePlugin value="Text" editorMode={EditorMode.PlainText} />);
    expect(mockEditor.update).toHaveBeenCalledTimes(1);
    expect(mockConvertFromMarkdownString).toHaveBeenCalledTimes(0);
    expect(mockCreateTextNode).toHaveBeenNthCalledWith(1, 'Text');
    expect(mockCreateParagraphNode).toHaveBeenNthCalledWith(1);
    expect(mockAppendParagraphNode).toHaveBeenNthCalledWith(1, <span id="initial-value">Text</span>);
  });
});
