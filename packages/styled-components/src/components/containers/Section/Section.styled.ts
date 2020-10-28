import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

export const StyledSection = styled.section<StyledCssProps>`
  margin-bottom: 1rem;

  ${(props) => customCss(props)}
`;
