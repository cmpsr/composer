import React from 'react';
import { Tooltip } from '.';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Primitives/Tooltip',
  component: Tooltip,
};

const Container = styled.div`
  padding: 40px;
`;

export const Places = () => (
  <Container>
    <h1>Tooltip places</h1>
    {Object.keys(Tooltip.Places).map((place: any) => (
      <>
        <Tooltip
          place={Tooltip.Places[place]}
          element={<span>Tooltip {place}</span>}
          tooltip={<span>{place}</span>}
        />
        <br />
      </>
    ))}
  </Container>
);

export const Colors = () => (
  <Container>
    <h1>Tooltip colors</h1>
    {Object.keys(Tooltip.BackgroundColors).map((backgroundColor: any) => (
      <>
        <Tooltip
          backgroundColor={Tooltip.BackgroundColors[backgroundColor]}
          element={<span>Tooltip {backgroundColor}</span>}
          tooltip={<span>{backgroundColor}</span>}
        />
        <br />
      </>
    ))}
  </Container>
);

export const Playground = () => (
  <Container>
    <Tooltip
      place={select('Place', Tooltip.Places, Tooltip.Places.Top)}
      backgroundColor={select(
        'Background Color',
        Tooltip.BackgroundColors,
        Tooltip.BackgroundColors.Primary900
      )}
      element={<span>Element</span>}
      tooltip={<span>tooltip</span>}
    />
  </Container>
);
