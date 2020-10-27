import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

interface Props {
  theme: any;
}

export const StyledBox = styled.div<Props>`
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
`;
