import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

export const StyledGrid = styled.div<StyledCssProps>`
  display: grid;
  ${(props) => customCss(props)}
`;
