import React from 'react';
import { Box } from '.';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Containers/Box',
  component: Box,
};

const styles = `
  background: #cdd7ff;
  border: 2px solid black;
  padding: 10px;
`;

export const Sizes = () => (
  <>
    <h1>Box sizes</h1>
    {Object.keys(Box.Sizes).map((size: any) => (
      <>
        <Box customCss={styles} size={Box.Sizes[size]}>
          {size}
        </Box>
        <br />
      </>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Box
      customCss={text('Box 1 styles', styles)}
      size={select('Box size', Box.Sizes, Box.Sizes.Content)}
    >
      {text('Children', 'Children')}
    </Box>
  </>
);
