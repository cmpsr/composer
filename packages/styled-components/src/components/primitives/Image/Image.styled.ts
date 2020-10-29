import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';

export const StyledImage = styled.img<StyledCssProps>`
  user-select: none;

  ${(props) => customCss(props)}
`;
