import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';

type Props = StyledCssProps;

export const StyledSource = styled.source<StyledCssProps>`
  user-select: none;

  ${(props) => customCss(props)}
`;

export const StyledImage = styled.img<StyledCssProps>`
  user-select: none;

  ${(props) => customCss(props)}
`;
