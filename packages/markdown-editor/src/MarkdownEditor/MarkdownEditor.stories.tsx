import React from 'react';
import { Meta } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';

export default {
  component: MarkdownEditor,
  title: 'Components/Editors/MarkdownEditor',
} as Meta;

export const Default = () => {
  const handleChanges = (v: string) => {
    console.log(v);
  };

  return <MarkdownEditor onChange={handleChanges} />;
};

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

  const handleChanges = () => {
    // noop
  };

  return (
    <MarkdownEditor
      initialValue={value}
      onChange={handleChanges}
      height="30rem"
      backgroundColor="background-container-disabled"
      isReadonly
      width="800px"
    />
  );
};

const Template = (args) => <MarkdownEditor {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  isReadonly: false,
};
