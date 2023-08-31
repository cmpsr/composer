import React from 'react';
import { act, renderWithProviders, screen, waitFor } from '../tests/renderWithProviders';
import { MarkdownEditor } from './MarkdownEditor';

jest.mock('./styles', () => ({}));

describe('MarkdownEditor', () => {
  test('should render initialValue', async () => {
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue="**Text**" onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      expect(screen.getByText('Text')).toBeInTheDocument();
    });
  });
  test('should render placeholder', async () => {
    act(() => {
      renderWithProviders(<MarkdownEditor placeholder="Custom placeholder" onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      expect(screen.getByText('Custom placeholder')).toBeInTheDocument();
    });
  });
});
