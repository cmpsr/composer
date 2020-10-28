import styled from 'styled-components';
import { customCss } from 'utils/customCss';

interface Props {
  css?: string;
}

export const StyledSectionChild = styled.div<Props>`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${(props) => customCss(props)}
`;
