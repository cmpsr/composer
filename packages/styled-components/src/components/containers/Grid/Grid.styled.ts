import styled from 'styled-components';
import { customCss } from 'utils/customCss';

interface Props {
  css?: string;
}

export const StyledGrid = styled.div<Props>`
  display: grid;

  ${(props) => customCss(props)}
`;
