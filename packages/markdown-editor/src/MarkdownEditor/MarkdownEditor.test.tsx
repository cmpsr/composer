import React from 'react';
import { $getRoot, $createParagraphNode, $createTextNode, LexicalEditor } from 'lexical';
import { act, renderWithProviders, screen, waitFor } from '../tests/renderWithProviders';
import { EditorMode } from './types';
import { MarkdownEditor } from './MarkdownEditor';

jest.mock('./styles', () => ({}));

let editor: LexicalEditor | null = null;
// mock EditorRefPlugin to extract the editor instance
jest.mock('@lexical/react/LexicalEditorRefPlugin', () => ({
  EditorRefPlugin: (ref: unknown) => {
    const plugin = jest.requireActual('@lexical/react/LexicalEditorRefPlugin').EditorRefPlugin(ref);

    editor = (ref as { editorRef: { current: LexicalEditor } })?.editorRef?.current;

    return plugin;
  },
}));

/**
 * helper function to clear the editor
 * @returns void
 * */
const clear = () => {
  editor.update(() => {
    $getRoot().clear();
  });
};

/**
 * helper function to type content into the editor
 * @param content - the content to append to the editor
 * @returns void
 */
const type = (content: string) => {
  editor.update(() => {
    const root = $getRoot();
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode(content));
    root.append(paragraph);
  });
};

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
  test.each`
    code                          | tag
    ${'[link](https://cmpsr.io)'} | ${'A'}
    ${'https://cmpsr.io'}         | ${'A'}
  `('should render links', async ({ code, tag }) => {
    act(() => {
      renderWithProviders(<MarkdownEditor initialValue={code} onChange={jest.fn()} />);
    });
    await waitFor(async () => {
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toBeInstanceOf(HTMLAnchorElement);
      expect(link.tagName).toBe(tag);
      expect(link).toHaveAttribute('href', 'https://cmpsr.io');
    });
  });

  test('should render external actions in toolbar when provided', async () => {
    renderWithProviders(
      <MarkdownEditor
        initialValue="**Text**"
        onChange={jest.fn()}
        externalToolbarActions={<span>external action</span>}
      />,
    );
    await waitFor(async () => {
      expect(screen.getByText('external action')).toBeInTheDocument();
    });
  });

  test('should render container with provided props', async () => {
    const { container } = renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} containerProps={{ background: 'red' }} />,
    );
    await waitFor(async () => {
      const markdownEditorContainerElement = container.firstChild;
      expect(markdownEditorContainerElement).toHaveStyle('background: red');
    });
  });

  test('should render content with provided props', async () => {
    const { container } = renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} contentProps={{ background: 'red' }} />,
    );
    await waitFor(async () => {
      const markdownEditorContentElement = container.firstChild.lastChild;
      expect(markdownEditorContentElement).toHaveStyle('background: red');
    });
  });

  test('should render contentEditable with provided styles', async () => {
    renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} contentEditableStyles={{ background: 'red' }} />,
    );
    await waitFor(async () => {
      expect(screen.getByRole('textbox')).toHaveStyle('background: red');
    });
  });

  test('should render toolbar plugin with provided props', async () => {
    const { container } = renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} toolbarPluginProps={{ backgroundColor: 'red' }} />,
    );
    await waitFor(async () => {
      const markdownEditorToolbarPlugins = container.firstChild.firstChild;
      expect(markdownEditorToolbarPlugins).toHaveStyle('background: red');
    });
  });

  test('should initialize either on rich or plain text mode', async () => {
    const { container, rerender } = renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} />,
    );

    await waitFor(async () => {
      expect(container).toHaveTextContent('Text');
    });

    rerender(<MarkdownEditor initialValue="**Text**" onChange={jest.fn()} editorMode={EditorMode.PlainText} />);

    await waitFor(async () => {
      expect(container).toHaveTextContent('**Text**');
    });
  });

  test('should allow toggling between rich and plain text modes', async () => {
    const { container } = renderWithProviders(<MarkdownEditor initialValue="**Text**" onChange={jest.fn()} />);

    await waitFor(async () => {
      expect(container).toHaveTextContent('Text');
    });

    const toggleButton = screen.getByRole('button', { name: 'Toggle Markdown on and off' });

    act(() => {
      toggleButton.click();
    });

    await waitFor(async () => {
      expect(container).toHaveTextContent('**Text**');
    });

    act(() => {
      toggleButton.click();
    });

    await waitFor(async () => {
      expect(container).toHaveTextContent('Text');
    });

    // should not be able to undo/redo after toggling markdown on and off
    expect(screen.getByRole('button', { name: 'Undo' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Redo' })).toBeDisabled();
  });

  test('should not automatically toggle to rich text mode', async () => {
    const { container } = renderWithProviders(
      <MarkdownEditor initialValue="**Text**" onChange={jest.fn()} editorMode={EditorMode.PlainText} />,
    );

    // start in plain text mode
    await waitFor(async () => {
      expect(container).toHaveTextContent('**Text**');
    });

    // clear then type some markdown
    act(() => {
      clear();
      type('# title sample');
    });

    // it should display markdown
    await waitFor(async () => {
      expect(container).toHaveTextContent('# title sample');
    });

    // manually toggle to rich text mode
    const toggleButton = screen.getByRole('button', { name: 'Toggle Markdown on and off' });
    act(() => {
      toggleButton.click();
    });

    // it should display rich text
    await waitFor(async () => {
      expect(container).toHaveTextContent('title sample');
    });

    // toggle back to markdown mode
    act(() => {
      toggleButton.click();
    });

    // it should display markdown
    await waitFor(async () => {
      expect(container).toHaveTextContent('# title sample');
    });
  });
});
