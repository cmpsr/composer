import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

interface Props {
  theme: any;
}

export const StyledUnorderedList = styled.ul<Props>`
  list-style-type: none;
`;

export const StyledDivider = styled.div<Props>`
  margin-left: 2rem;
  border-bottom: 1px solid
    ${(props) => getTheme(props).colors.outlineBackground400};
`;
