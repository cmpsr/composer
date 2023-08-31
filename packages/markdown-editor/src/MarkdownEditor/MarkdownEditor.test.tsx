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
  test('should render numbered list as ol', async () => {
    const value = `1. Item 1
2. Item 2
3. Item 3`;
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={value} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
      expect(list).toBeInstanceOf(HTMLOListElement);
      expect(list.childElementCount).toBe(3);
    });
  });
  test('should render bullet list as ul', async () => {
    const value = `- Item 1
- Item 2
- Item 3`;
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={value} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
      expect(list).toBeInstanceOf(HTMLUListElement);
      expect(list.childElementCount).toBe(3);
    });
  });
  test('should render code block', async () => {
    const value = `
\`\`\`javascript
const a = 1;
const b = 2;
console.log(a + b);
\`\`\``;
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={value} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const parent = screen.getByRole('textbox');
      const codeBlock = parent.children[0];
      expect(codeBlock.tagName).toMatch(/code/i);
      expect(codeBlock).toHaveAttribute('data-highlight-language', 'javascript');
    });
  });
  test('should render code block for other languages', async () => {
    const value = `
\`\`\`swift
let a = 1;
let b = 2;
print(a + b);
\`\`\``;
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={value} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const parent = screen.getByRole('textbox');
      const codeBlock = parent.children[0];
      expect(codeBlock.tagName).toMatch(/code/i);
      expect(codeBlock).toHaveAttribute('data-highlight-language', 'swift');
    });
  });
  test.each`
    code                  | tag
    ${'# heading 1'}      | ${'H1'}
    ${'## heading 2'}     | ${'H2'}
    ${'### heading 3'}    | ${'H3'}
    ${'#### heading 4'}   | ${'H4'}
    ${'##### heading 5'}  | ${'H5'}
    ${'###### heading 6'} | ${'H6'}
  `('should render heading $tag with the appropriate tag', async ({ code, tag }) => {
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={code} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
      expect(heading).toBeInstanceOf(HTMLHeadingElement);
      expect(heading.tagName).toBe(tag);
    });
  });
});
