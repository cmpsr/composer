import React from 'react';
import { Section } from '.';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Containers/Section',
  component: Section,
};

const styles = `
  background: #cdd7ff;
  border: 2px solid black;
  padding: 10px;
`;

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Section customCss={text('Section 1 styles', styles)}>
      {text('Section 1', '1')}
    </Section>
    <Section customCss={text('Section 2 styles', styles)}>
      {text('Section 2', '2')}
    </Section>
    <Section customCss={text('Section 3 styles', styles)}>
      {text('Section 3', '3')}
    </Section>
  </>
);
