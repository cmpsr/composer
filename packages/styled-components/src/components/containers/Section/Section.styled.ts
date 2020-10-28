import styled from 'styled-components';
import { customCss } from 'utils/customCss';

interface Props {
  css?: string;
}

export const StyledSection = styled.section<Props>`
  margin-bottom: 1rem;

  ${(props) => customCss(props)}
`;
