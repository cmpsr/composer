import React, { useState } from 'react';
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
  const [value] = useState(`# Hello World

This an _example_ of the [composer](https://cmpsr.io) markdown editor in disabled mode.

\`\`\`react
// Example of usage of the MardownEditor component
const [value, setValue] = useState("");

const handleChange = (v: string) => {
  setValue(v);
};

<MarkdownEditor value={value} onChange={handleChanges} />
\`\`\`
`);

  const handleChanges = () => {
    // noop
  };

  return (
    <MarkdownEditor value={value} onChange={handleChanges} backgroundColor="background-action-disabled" isReadonly />
  );
};

const Template = (args) => <MarkdownEditor {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  isReadonly: false,
};
