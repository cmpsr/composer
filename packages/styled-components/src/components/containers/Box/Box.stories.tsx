import React from 'react';
import { Box } from '.';
import { text, select } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Containers/Box',
  component: Box,
};

const StyledBox = styled(Box)`
  background: #cdd7ff;
  border: 2px solid black;
  padding: 10px;
`;

export const Sizes = () => (
  <>
    <h1>Box sizes</h1>
    {Object.keys(Box.Sizes).map((size: any) => (
      <>
        <StyledBox size={Box.Sizes[size]}>{size}</StyledBox>
        <br />
      </>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <StyledBox size={select('Box size', Box.Sizes, Box.Sizes.Content)}>
      {text('Children', 'Children')}
    </StyledBox>
  </>
);
