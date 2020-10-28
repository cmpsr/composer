import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

type Props = StyledCssProps;

export const StyledSectionChild = styled.div<Props>`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${(props) => customCss(props)}
`;
