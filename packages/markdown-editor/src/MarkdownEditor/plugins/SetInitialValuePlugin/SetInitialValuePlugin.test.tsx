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

  test.each`
    value        | description
    ${undefined} | ${'undefined'}
    ${null}      | ${'null'}
    ${''}        | ${'empty string'}
  `('should not update editor if value is $description', ({ value }) => {
    renderWithProviders(<SetInitialValuePlugin value={value} />);
    expect(mockEditor.update).not.toHaveBeenCalled();
    expect(mockConvertFromMarkdownString).not.toHaveBeenCalled();
  });
});
