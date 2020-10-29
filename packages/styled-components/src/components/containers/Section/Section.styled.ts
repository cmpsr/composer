import styled from 'styled-components';
import { withCustomCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

export const StyledSection = withCustomCss(styled.section<StyledCssProps>`
  margin-bottom: 1rem;
`);
