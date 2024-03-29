import React from 'react';
import { Meta } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';
import { EditorMode } from './types';

export default {
  component: MarkdownEditor,
  title: 'Components/Editors/MarkdownEditor',
} as Meta;

export const Default = () => <MarkdownEditor onChange={console.log} width="100%" />;

export const Disabled = () => {
  const value = `# Hello World

This an _example_ of the [composer](https://cmpsr.io) **markdown editor** in *disabled mode*.

\`\`\`react
// Example of usage of the MarkdownEditor component
const [value, setValue] = useState("");

const handleChange = (v: string) => {
  setValue(v);
};

<MarkdownEditor value={value} onChange={handleChanges} />
\`\`\`
`;

  return (
    <MarkdownEditor
      initialValue={value}
      onChange={console.log}
      height="30rem"
      backgroundColor="background-container-disabled"
      isReadonly
      width="100%"
    />
  );
};

const Template = (args) => <MarkdownEditor {...args} />;

export const PlainEditorMode = Template.bind({});
PlainEditorMode.args = {
  initialValue: `# Hello World
This is a **paragraph**
This is a [link to cmpsr.io](https://cmpsr.io/)

This is an unordered list:
- Item 1
- Item 2

This is an ordered list:
1. Item 1
2. Item 2

This is a table:
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`,
  editorMode: EditorMode.PlainText,
  width: '100%',
};

export const Playground = Template.bind({});
Playground.args = {
  isReadonly: false,
  width: '100%',
};
