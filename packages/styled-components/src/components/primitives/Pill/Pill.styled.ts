import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

interface Props {
  theme: any;
}

export const StyledPill = styled.div<Props>`
  text-align: center;
  vertical-align: middle;
  border-radius: 9999px;
  border: 1px solid ${(props) => getTheme(props).colors.fillPrimary700};
  width: auto;
  display: inline-block;
  padding: 0.357rem 1.25rem;
`;
