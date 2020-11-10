import React from 'react';
import { Spinner } from '.';
import { select, number } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Primitives/Spinner',
  component: Spinner,
};

const Container = styled.div`
  background: grey;
`;

export const Sizes = () => (
  <Container>
    <h1>Spinner sizes</h1>
    {Object.keys(Spinner.Sizes).map((size: any) => (
      <>
        <Spinner size={Spinner.Sizes[size]} color={Spinner.Colors.Primary} />
        <br />
      </>
    ))}
  </Container>
);

export const Colors = () => (
  <Container>
    <h1>Spinner colors</h1>
    {Object.keys(Spinner.Colors).map((color: any) => (
      <>
        <Spinner color={Spinner.Colors[color]} size={Spinner.Sizes.Small} />
        <br />
      </>
    ))}
  </Container>
);

export const Playground = () => (
  <Container>
    <h1>Playground</h1>
    <Spinner
      size={select('Size', Spinner.Sizes, Spinner.Sizes.Large)}
      color={select('Color', Spinner.Colors, Spinner.Colors.Primary)}
      strokeWidth={number('Stroke width', 2)}
    />
  </Container>
);
