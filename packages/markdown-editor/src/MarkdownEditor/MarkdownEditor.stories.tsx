import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';

export default {
  component: MarkdownEditor,
  title: 'Components/Editors/MarkdownEditor',
} as Meta;

export const Default = () => {
  const [value, setValue] = useState('');

  const handleChanges = (v: string) => {
    console.log(v);
    setValue(v);
  };

  return <MarkdownEditor value={value} onChange={handleChanges} placeholder="Enter some markdown text..." />;
};
