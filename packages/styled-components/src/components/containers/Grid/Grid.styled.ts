import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';

type Props = StyledCssProps;

export const StyledGrid = styled.div<Props>`
  display: grid;

  ${(props) => customCss(props)}
`;
