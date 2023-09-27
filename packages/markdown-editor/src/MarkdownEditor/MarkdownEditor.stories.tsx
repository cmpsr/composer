import React from 'react';
import { Meta } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';

export default {
  component: MarkdownEditor,
  title: 'Components/Editors/MarkdownEditor',
} as Meta;

export const Default = () => <MarkdownEditor onChange={console.log} />;

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
      width="800px"
    />
  );
};

export const StartingWithMarkdownEnabled = () => {
  const markdown = '```markdown ### Hello! This is markdown content set as initial value.';
  return <MarkdownEditor initialValue={markdown} onChange={console.log} height="30rem" width="800px" />;
};

const Template = (args) => <MarkdownEditor {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  isReadonly: false,
};
