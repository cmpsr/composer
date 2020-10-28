import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

export const StyledBox = styled.div<StyledCssProps>`
  &.screen {
    width: 100vw;
    height: 100vh;
  }
  &.full {
    width: 100%;
    height: 100%;
  }
  &.content {
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: ${(props) => getTheme(props).breakpoints.xl};
  }

  ${(props) => customCss(props)}
`;
