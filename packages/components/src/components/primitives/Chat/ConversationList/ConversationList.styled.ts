import { StyledBaseProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

type Props = StyledBaseProps;

export const StyledUnorderedList = styled.ul<Props>`
  list-style-type: none;
`;

export const StyledDivider = styled.div<Props>`
  margin-left: 2rem;
  border-bottom: 1px solid
    ${(props) => getTheme(props).colors.outlineBackground400};
`;
