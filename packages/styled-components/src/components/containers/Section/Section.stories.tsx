import React from 'react';
import { Section } from '.';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Containers/Section',
  component: Section
};

const StyledSection = styled(Section)`
  background: #cdd7ff;
  border: 2px solid black;
  padding: 10px;
`;

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <StyledSection>{text('Section 1', '1')}</StyledSection>
    <StyledSection>{text('Section 2', '2')}</StyledSection>
    <StyledSection>{text('Section 3', '3')}</StyledSection>
  </>
);
