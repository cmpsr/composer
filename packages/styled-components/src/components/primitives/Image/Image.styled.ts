import styled from 'styled-components';
import { StyledCssProps } from 'components/Components.styled.types';
import { customCss } from 'utils/customCss';

type Props = StyledCssProps & {
  as?: string;
  type?: string;
};

export const StyledImage = styled.img<Props>`
  user-select: none;
  ${(props) => customCss(props)}
`;
