import React from 'react';
import { SectionChild } from '.';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Containers/SectionChild',
  component: SectionChild,
};

const styles = `
  border: 1px solid black;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <SectionChild customCss={text('Section 1 styles', styles)}>
      {text('Section 1 content', 'Section Child 1')}
    </SectionChild>
    <SectionChild customCss={text('Section 2 styles', styles)}>
      {text('Section 2', 'Section Child 2')}
    </SectionChild>
  </>
);
