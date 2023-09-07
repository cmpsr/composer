import React from 'react';
import { Meta } from '@storybook/react';
import { Highlight } from '.';

export default {
  component: Highlight,
  title: 'Components/Typography/Highlight',
} as Meta;

const Template = ({ text, ...rest }: { text: string; query: string }) => <Highlight {...rest}>{text}</Highlight>;

export const Playground = Template.bind({});
Playground.args = {
  text: 'Composer rocks!',
  query: 'Composer',
  styles: { fontWeight: 'bold' },
};
